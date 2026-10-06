'use client'

import { useState } from 'react'
import PrivacyModal from './PrivacyModal'
import { parsePhone, type ParsedPhone } from '@/lib/validate'

type Status = { type: 'idle' | 'sending' | 'done' | 'error'; message: string }

const IDLE: Status = { type: 'idle', message: '' }

export default function BottomForm() {
  const [phone, setPhone] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState<Status>(IDLE)

  const sending = status.type === 'sending'

  const resolvePhone = (): ParsedPhone | string => {
    const digits = phone.replace(/\D/g, '')
    if (!digits) return '휴대폰 번호를 입력해 주세요.'
    return parsePhone('010', digits)
  }

  const send = async (parsed: ParsedPhone) => {
    const payload = {
      customer_name: '',
      customer_birth: '',
      mobile1: parsed.mobile1,
      mobile2: parsed.mobile2,
      mobile3: '',
      customer_sex: '',
      region: '',
      has_license: '',
      category: 'hair',
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
      setPhone('')
      setAgreed(false)
      setStatus({ type: 'done', message: '상담 신청이 완료되었습니다. 담당자가 곧 연락드리겠습니다.' })
    } catch {
      setStatus({ type: 'error', message: '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' })
    }
  }

  const handleSubmitClick = () => {
    const parsed = resolvePhone()
    if (typeof parsed === 'string') {
      setStatus({ type: 'error', message: parsed })
      return
    }
    if (!agreed) {
      setStatus({ type: 'error', message: '필수 동의 항목에 동의해 주세요.' })
      setShowModal(true)
      return
    }
    void send(parsed)
  }

  // 모달에서 동의하면 체크박스를 켜고 그대로 전송한다(본문 폼과 동일한 흐름)
  const handleModalConfirm = async () => {
    setAgreed(true)
    const parsed = resolvePhone()
    if (typeof parsed === 'string') {
      setStatus({ type: 'error', message: parsed })
      return
    }
    await send(parsed)
  }

  const statusColor =
    status.type === 'error' ? '#F5A3A3' : status.type === 'done' ? 'var(--primary)' : 'rgba(255,255,255,0.75)'

  return (
    <>
      {showModal && (
        <PrivacyModal onConfirm={handleModalConfirm} onClose={() => setShowModal(false)} />
      )}

      <div className="bf-bar">
        <div className="bf-inner">
          <div className="bf-head">
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.08em' }}>
              무료 상담 신청
            </p>
            <p style={{ fontSize: 14, fontWeight: 800, color: '#fff', whiteSpace: 'nowrap' }}>
              수강료·국비지원 확인
            </p>
          </div>

          <div className="bf-consent">
            <label className="bf-check">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                style={{ width: 16, height: 16, accentColor: 'var(--primary)', flexShrink: 0, cursor: 'pointer' }}
              />
              <span>
                <b style={{ color: 'var(--primary)', fontWeight: 800 }}>[필수]</b> 개인정보 수집·이용 및 제3자 제공 동의
              </span>
            </label>
            <button type="button" className="bf-detail" onClick={() => setShowModal(true)}>
              상세보기
            </button>
          </div>

          <div className="bf-fields">
            <input
              type="tel"
              inputMode="numeric"
              aria-label="휴대폰 번호"
              placeholder="휴대폰 번호 ('-' 없이 입력)"
              maxLength={11}
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
              className="bf-phone"
            />
            <button type="button" className="bf-submit" onClick={handleSubmitClick} disabled={sending}>
              {sending ? '전송 중...' : '상담 신청'}
            </button>
          </div>

          <p className="bf-status" aria-live="polite" style={{ color: statusColor }}>
            {status.message}
          </p>
        </div>
      </div>
    </>
  )
}
