"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import FormSection from '@/components/FormSection';

export default function QnaClient() {
  const [openId, setOpenId] = useState<number | null>(1);

  const faqs = [
    {
      id: 1,
      q: '이용사학원 국가자격증반과 바버샵 실무반, 수강료·커리큘럼 차이는?',
      a: '국가자격증반 수강료는 80~160만원 선이고, 바버샵 창업 실무반은 150~250만원으로 더 높습니다. 취업이 목표라면 이용사 국가자격증 취득을 먼저 권장합니다. 이용사 자격증은 이용원 취업과 독립 창업에 법적으로 필수이며, 이후 바버샵 실무반을 추가로 수강하면 전문성이 더욱 높아집니다.'
    },
    {
      id: 2,
      q: '재직자와 실업자의 이용사학원 국비지원 차이가 있나요?',
      a: '있습니다. 실업자는 이용사학원 수강료 100% 지원 과정이 많고 훈련장려금(월 최대 11.6만원)을 추가로 받을 수 있습니다. 재직자는 수강료의 45~85%만 지원되고 훈련장려금은 없습니다. 야간·주말반 수강 시 재직 상태를 유지하면서도 국비지원을 받을 수 있습니다.'
    },
    {
      id: 3,
      q: '이용사 자격증 없이도 이용원을 운영할 수 있나요?',
      a: '아닙니다. 공중위생관리법에 따라 이용업(이용원) 영업을 하려면 반드시 이용사 국가자격증이 있어야 합니다. 자격증 없이 영업하면 300만원 이하의 벌금을 받을 수 있습니다. 단, 바버샵의 경우 미용사(일반) 자격증으로도 운영 가능한 경우가 있으니 관할 지자체에 확인이 필요합니다.'
    },
    {
      id: 4,
      q: '이용사 시험 필기·실기 합격률은 얼마나 되나요?',
      a: '2025년 기준 이용사 필기시험 합격률은 약 55~65%, 실기시험 합격률은 약 60~70% 수준입니다. 필기는 이용이론, 위생관리, 공중위생관리법 등에서 출제되며, 실기는 헤어커트, 면도, 분원머리(두발의 형태와 변형), 세발 등으로 구성됩니다. 학원 등록 후 집중 준비하면 3~4개월 내 합격이 가능합니다.'
    },
    {
      id: 5,
      q: '이용사 실기 시험에서 분원머리가 무엇인가요?',
      a: '분원머리는 이용사 실기 시험에서 출제되는 한국 전통 두발 관리 기술 과목입니다. 두발을 일정한 형태로 정리하는 기술로, 이용사 실기 시험 과목 중 하나입니다. 이용사학원에서 실기 집중 연습 시 필수 과목이므로 학원 등록 전 실기 과목 구성을 꼭 확인하세요.'
    },
    {
      id: 6,
      q: '이용사학원 수강료 환불 규정은 어떻게 되나요?',
      a: '이용사학원 수강료 환불은 「학원의 설립·운영 및 과외교습에 관한 법률 시행령」에 따릅니다. 수강 시작 후 1/3 미만 수강 시 2/3 환불, 1/3~1/2 수강 시 1/2 환불, 1/2 초과 수강 시 환불 불가가 원칙입니다. 국비지원 과정은 환불 시 카드 잔액도 복원되지만 훈련장려금은 반납해야 합니다.'
    },
    {
      id: 7,
      q: '직장인도 이용사학원에 다닐 수 있나요?',
      a: '대부분의 이용사학원에서 직장인을 위한 야간반(저녁 7~10시)과 주말반을 운영합니다. 국비지원 과정도 야간반 개설 학원이 있어 수강료 부담을 줄이면서 다닐 수 있습니다. 주 2회 야간 수업 기준으로 이용사 자격증 과정은 5~6개월 정도 소요됩니다.'
    },
    {
      id: 8,
      q: '두피관리전문가 자격증은 이용사 자격증과 별도로 취득해야 하나요?',
      a: '네, 두피관리전문가 자격증은 민간자격증으로 이용사 국가자격증과 별도로 취득합니다. 이용사학원에서 두피관리 전문 과정을 추가 수강해 민간자격증을 취득하거나, 전문 두피관리 학원에서 별도로 수강할 수 있습니다. 두 자격증을 모두 보유하면 두피관리센터 취업이나 창업 시 경쟁력이 크게 높아집니다.'
    },
    {
      id: 9,
      q: '바버샵 창업 비용은 얼마나 필요한가요?',
      a: '소형 바버샵(15~25평) 기준으로 보증금+인테리어 1,500~2,500만원, 바버 체어·미러·장비 300~600만원, 초도 소모품 100~200만원, 기타 200~300만원으로 총 2,000~4,000만원 수준입니다. 안정화 후 월 순수익 400~800만원이 가능합니다. 상권 분석이 창업 성패의 핵심이므로 전문가 상담을 꼭 받으세요.'
    },
    {
      id: 10,
      q: '이용사학원 수강료 총비용 계산 시 소도구비도 포함해야 하나요?',
      a: '반드시 포함해야 합니다. 이용사학원은 가위(3~15만원), 클리퍼(3~8만원), 빗 세트, 면도기 등 전문 소도구가 필수입니다. 학원에서 소도구를 지급하는 경우와 별도 구매가 필요한 경우로 나뉘므로, 등록 전 반드시 소도구 포함 여부를 확인하고 총비용 기준으로 비교하세요.'
    },
    {
      id: 11,
      q: '이용사학원 수강료 투자 대비 취업 후 수입은 얼마나 되나요?',
      a: '이용사학원 수강료는 80~200만원 선이지만, 취업 후 수입으로 충분히 회수 가능합니다. 이용원 신입 기준 월 180~230만원, 경력 3년차 실장급은 300~400만원, 바버샵 창업 성공 시 월 500만원 이상도 현실적입니다. 수강료 대비 투자 회수율이 높은 직종 중 하나입니다.'
    },
  ];

  return (
    <main style={{ maxWidth: 780, margin: '0 auto', padding: '40px 1rem 80px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--text-secondary)', textDecoration: 'none', fontSize: 14, fontWeight: 500, marginBottom: 28 }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>

      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, background: 'var(--primary-light)', borderRadius: 16, marginBottom: 16 }}>
          <HelpCircle size={28} color="var(--primary)" />
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 900, marginBottom: 10 }}>이용사학원 수강료·국비지원 자주 묻는 질문 (FAQ)</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>
          이용사학원 수강료, 국비지원, 자격증 시험, 취업·창업 등 등록 전 가장 많이 묻는 질문을 정리했습니다.
        </p>
      </div>

      <div style={{ marginBottom: 36 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>답변을 찾지 못하셨나요? 1:1 무료 상담을 신청하세요</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20, textAlign: 'center' }}>
          전문 상담사가 상황에 맞게 직접 안내해 드립니다.
        </p>
        <FormSection />
      </div>

      <Link href="/guide" style={{ textDecoration: 'none', display: 'block', marginBottom: 12 }}>
        <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #2563C8 100%)', borderRadius: 20, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>
            <p style={{ color: '#93c5fd', fontWeight: 800, fontSize: 11, marginBottom: 4 }}>학원 선택 가이드</p>
            <p style={{ color: 'white', fontWeight: 800, fontSize: 16, lineHeight: 1.3 }}>
              후회 없는 이용사학원 선택 — 5가지 체크리스트<br />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 600 }}>강사·소수정예·재료비·취업·국비 한눈에 확인 →</span>
            </p>
          </div>
        </div>
      </Link>

      <Link href="/funding" style={{ textDecoration: 'none', display: 'block', marginBottom: 32 }}>
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4c1d95 100%)', borderRadius: 20, padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>
            <p style={{ color: '#a78bfa', fontWeight: 800, fontSize: 11, marginBottom: 4 }}>국비지원 안내</p>
            <p style={{ color: 'white', fontWeight: 800, fontSize: 16, lineHeight: 1.3 }}>
              이용사학원 수강료 최대 100% 국비지원 받기<br />
              <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 600 }}>지원 금액·훈련장려금 계산법 한눈에 보기 →</span>
            </p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexShrink: 0, flexWrap: 'wrap' }}>
            {['지원율 계산', '훈련장려금', '무료 상담'].map((t, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 8, padding: '8px 12px', fontSize: 11, color: 'white', fontWeight: 700, whiteSpace: 'nowrap' }}>{t}</div>
            ))}
          </div>
        </div>
      </Link>

      <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
        {faqs.map(faq => (
          <div key={faq.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 16, overflow: 'hidden' }}>
            <dt
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              style={{ padding: '20px 24px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: openId === faq.id ? 'var(--primary-light)' : 'transparent', listStyle: 'none' }}
            >
              <span style={{ margin: 0, fontSize: 15, fontWeight: 700, color: openId === faq.id ? 'var(--primary)' : 'var(--text-primary)' }}>
                Q. {faq.q}
              </span>
              <span style={{ color: openId === faq.id ? 'var(--primary)' : 'var(--text-muted)', flexShrink: 0, marginLeft: 12 }}>
                {openId === faq.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </span>
            </dt>
            {openId === faq.id && (
              <dd style={{ padding: '20px 24px', borderTop: '1px solid var(--border-color)', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
                <strong style={{ color: 'var(--primary)', marginRight: 8, fontSize: 16 }}>A.</strong>
                {faq.a}
              </dd>
            )}
          </div>
        ))}
      </dl>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '24px 28px', marginTop: 32 }}>
        <p style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 14 }}>더 알아보기</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { href: '/employment', label: '취업·창업 가이드' },
            { href: '/guide', label: '학원 선택 체크리스트' },
            { href: '/board', label: '수강 후기·정보 게시판' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 50, textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
