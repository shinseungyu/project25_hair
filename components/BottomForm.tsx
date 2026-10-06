'use client'

import { useEffect, useRef, useState } from 'react'
import PrivacyModal from './PrivacyModal'
import { parsePhone, validateForm, SPECIAL_CHAR_REG, type ParsedPhone } from '@/lib/validate'
import {
  CATEGORY,
  FORM_DEFAULTS,
  LICENSE_OPTIONS,
  MOBILE_PREFIXES,
  REGIONS,
  SEX_OPTIONS,
} from '@/lib/formOptions'

type Status = { type: 'idle' | 'sending' | 'done' | 'error'; message: string }

const IDLE: Status = { type: 'idle', message: '' }

export default function BottomForm() {
  // 본문 폼(FormSection)과 동일한 항목·초기값
  const [form, setForm] = useState({ ...FORM_DEFAULTS })
  const [agreed, setAgreed] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState<Status>(IDLE)
  const barRef = useRef<HTMLDivElement | null>(null)

  const sending = status.type === 'sending'

  // 바의 실측 높이를 body 하단 여백에 반영해 푸터가 가려지지 않게 한다.
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    const apply = () => {
      const h = Math.ceil(bar.getBoundingClientRect().height)
      document.body.style.paddingBottom = `${h + 16}px`
    }

    apply()
    const ro = new ResizeObserver(apply)
    ro.observe(bar)
    window.addEventListener('resize', apply)
    window.addEventListener('orientationchange', apply)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', apply)
      window.removeEventListener('orientationchange', apply)
      document.body.style.paddingBottom = ''
    }
  }, [])

  const set = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }))

  // 본문 폼과 같은 규칙(lib/validate.ts 의 SPECIAL_CHAR_REG)
  const handleNameChange = (value: string) => {
    if (SPECIAL_CHAR_REG.test(value)) {
      set('customer_name', value.slice(0, -1))
      setStatus({ type: 'error', message: '특수문자는 입력하실 수 없습니다.' })
      return
    }
    set('customer_name', value)
  }

  // 본문 폼과 동일한 검증(필수: 성함·생년월일·성별·연락처 / 선택: 희망 지역·자격증)
  const resolve = (): ParsedPhone | string => {
    const error = validateForm({ ...form, privacy: true })
    if (error) return error
    return parsePhone(form.mobile1, form.mobile2)
  }

  const send = async (phone: ParsedPhone) => {
    // 전송 경로·필드명·순서 모두 본문 폼과 동일
    const payload = {
      customer_name: form.customer_name,
      customer_birth: form.customer_birth,
      mobile1: phone.mobile1,
      mobile2: phone.mobile2,
      mobile3: '',
      customer_sex: form.customer_sex,
      region: form.region,
      has_license: form.has_license,
      category: CATEGORY,
    }

    setStatus({ type: 'sending', message: '전송 중입니다...' })
    try {
      const url = process.env.NEXT_PUBLIC_DB_SUBMIT_URL!
      const key = process.env.NEXT_PUBLIC_DB_API_KEY!
      const res = await fetch(`${url}?api_key=${key}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        setStatus({ type: 'error', message: `전송 실패: ${err.error ?? res.status}` })
        return
      }
      setForm({ ...FORM_DEFAULTS })
      setAgreed(false)
      setStatus({ type: 'done', message: '상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.' })
    } catch {
      setStatus({ type: 'error', message: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' })
    }
  }

  const handleSubmitClick = () => {
    const phone = resolve()
    if (typeof phone === 'string') {
      setStatus({ type: 'error', message: phone })
      return
    }
    if (!agreed) {
      setStatus({ type: 'error', message: '필수 동의 항목에 동의해 주세요.' })
      setShowModal(true)
      return
    }
    void send(phone)
  }

  // 모달에서 동의하면 동의 상태로 바꾸고 그대로 전송한다(기존 흐름 유지)
  const handleModalConfirm = async () => {
    setAgreed(true)
    const phone = resolve()
    if (typeof phone === 'string') {
      setStatus({ type: 'error', message: phone })
      return
    }
    await send(phone)
  }

  const statusColor =
    status.type === 'error' ? '#F5A3A3' : status.type === 'done' ? 'var(--primary)' : 'rgba(255,255,255,0.75)'

  return (
    <>
      {showModal && (
        <PrivacyModal onConfirm={handleModalConfirm} onClose={() => setShowModal(false)} />
      )}

      <div className="bf-bar" ref={barRef}>
        <div className="bf-inner">
          <div className="bf-head">
            <p className="bf-head-kicker">무료 상담 신청</p>
            <p className="bf-head-title">수강료·국비지원 확인</p>
          </div>

          {/* 성함 */}
          <div className="bf-group bf-g-name">
            <label className="bf-label" htmlFor="bf-name">성함</label>
            <input
              id="bf-name"
              className="bf-input"
              type="text"
              maxLength={8}
              placeholder="성함 입력"
              value={form.customer_name}
              onChange={(e) => handleNameChange(e.target.value)}
            />
          </div>

          {/* 성별 */}
          <div className="bf-group bf-g-sex">
            <span className="bf-label" id="bf-sex-label">성별</span>
            <div className="bf-seg" role="group" aria-labelledby="bf-sex-label">
              {SEX_OPTIONS.map(({ label, value }) => (
                <button
                  key={value}
                  type="button"
                  className="bf-seg-btn"
                  aria-pressed={form.customer_sex === value}
                  onClick={() => set('customer_sex', value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* 생년월일 */}
          <div className="bf-group bf-g-birth">
            <label className="bf-label" htmlFor="bf-birth">생년월일</label>
            <input
              id="bf-birth"
              className="bf-input"
              type="text"
              inputMode="numeric"
              maxLength={6}
              placeholder="예) 950815"
              value={form.customer_birth}
              onChange={(e) => set('customer_birth', e.target.value.replace(/\D/g, ''))}
            />
          </div>

          {/* 희망 지역 */}
          <div className="bf-group bf-g-region">
            <label className="bf-label" htmlFor="bf-region">희망 지역</label>
            <select
              id="bf-region"
              className="bf-select"
              value={form.region}
              onChange={(e) => set('region', e.target.value)}
            >
              <option value="" disabled hidden>지역 선택</option>
              {REGIONS.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>

          {/* 연락처 */}
          <div className="bf-group bf-g-phone">
            <label className="bf-label" htmlFor="bf-mobile2">연락처</label>
            <div className="bf-row">
              <select
                className="bf-select bf-prefix"
                aria-label="휴대폰 앞 3자리"
                value={form.mobile1}
                onChange={(e) => set('mobile1', e.target.value)}
              >
                {MOBILE_PREFIXES.map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
              <input
                id="bf-mobile2"
                className="bf-input"
                type="tel"
                inputMode="numeric"
                maxLength={11}
                placeholder="'-' 없이 입력"
                value={form.mobile2}
                onChange={(e) => set('mobile2', e.target.value.replace(/\D/g, ''))}
              />
            </div>
          </div>

          {/* 자격증 보유 여부 */}
          <div className="bf-group bf-g-license">
            <span className="bf-label" id="bf-license-label">이용사 국가자격증</span>
            <div className="bf-seg" role="group" aria-labelledby="bf-license-label">
              {LICENSE_OPTIONS.map(({ label, value }) => (
                <button
                  key={value}
                  type="button"
                  className="bf-seg-btn"
                  aria-pressed={form.has_license === value}
                  onClick={() => set('has_license', value)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="bf-actions bf-span2">
            <button type="button" className="bf-submit" onClick={handleSubmitClick} disabled={sending}>
              {sending ? '전송 중...' : '상담 신청'}
            </button>
          </div>

          <p className="bf-status bf-span2" aria-live="polite" style={{ color: statusColor }}>
            {status.message}
          </p>
        </div>
      </div>
    </>
  )
}
