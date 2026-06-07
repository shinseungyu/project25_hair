import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import FormSection from '@/components/FormSection';

export const metadata: Metadata = {
  title: '이용사학원 선택 가이드 | 후회 없는 학원 등록 전 체크리스트 2026',
  description: '이용사학원 등록 전 반드시 확인해야 할 5가지 기준(강사 경력, 소수정예, 재료비, 취업 연계, 국비지원)을 상세히 안내합니다. 수강료 낭비 없이 올바른 이용사학원을 선택하는 완벽 가이드입니다.',
  alternates: { canonical: '/guide' },
};

export default function GuidePage() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '60px 1.5rem 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700, marginBottom: 40 }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>

      <div style={{ marginBottom: 40 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>나에게 맞는 이용사학원, 전문가에게 바로 물어보세요</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20, textAlign: 'center' }}>
          아래 체크리스트 확인 후 무료 상담을 신청하면 조건에 맞는 학원을 바로 안내해 드립니다.
        </p>
        <FormSection />
      </div>

      <section className="animate-fadeInUp" style={{ marginBottom: 80 }}>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 950, lineHeight: 1.1, letterSpacing: '-0.04em', marginBottom: 24 }}>
          현명한 이용사의<br />
          <span style={{ color: 'var(--primary)' }}>학원 선택 기준.</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 18, lineHeight: 1.7, maxWidth: 640, fontWeight: 500 }}>
          수강료만 보고 결정하는 것은 가장 위험한 선택입니다. 교육의 질과 미래 가치를 결정하는 5가지 핵심 지표를 확인하세요.
        </p>
      </section>

      <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 80px', display: 'flex', flexDirection: 'column', gap: 40 }}>
        {[
          {
            title: '01. 현직 이용사 강사의 실무 포트폴리오',
            desc: '단순 강의 경력이 아닌, 실제 이용원·바버샵에서 활발히 활동 중인 강사인지 확인하세요. 현직 이용사만이 최신 트렌드 커트 기술과 실전 팁을 전수할 수 있습니다.',
            accent: 'var(--primary-light)'
          },
          {
            title: '02. 실질적인 수강 인원',
            desc: '15명 이상의 대형 반은 개별 피드백이 불가능합니다. 8명 이하의 소수정예 수업인지, 실기 보강 시스템이 갖춰져 있는지 체크하세요. 이용 기술은 손으로 익히는 실기 비중이 높아 소수정예가 특히 중요합니다.',
            accent: 'var(--bg-card)'
          },
          {
            title: '03. 소도구·재료비 투명성',
            desc: '가위, 빗, 클리퍼, 면도기 등 이용 소도구 포함 여부를 확인하세요. 전문가용 도구 비용은 포함 여부에 따라 총비용이 크게 달라집니다.',
            accent: 'var(--bg-card)'
          },
          {
            title: '04. 취업·창업 연계 시스템',
            desc: '학원이 보유한 협력 이용원·바버샵 리스트와 실제 수료생들의 취업처를 데이터로 확인하세요. 창업을 목표로 한다면 바버샵 창업 컨설팅 지원 여부도 중요한 선택 기준입니다.',
            accent: 'var(--accent)',
            color: 'white'
          },
          {
            title: '05. 국비지원 승인 여부',
            desc: 'HRD-Net 정식 등록 학원은 국가가 최소한의 품질을 보증한다는 의미입니다. 이용사학원 수강료를 크게 절감할 수 있어 경제적 부담을 줄일 수 있습니다.',
            accent: 'var(--bg-card)'
          },
        ].map((item, i) => (
          <li key={i} style={{
            background: item.accent,
            color: item.color || 'inherit',
            borderRadius: 32,
            padding: '40px',
            border: item.accent === 'var(--bg-card)' ? '1px solid var(--border-color)' : 'none',
            display: 'flex',
            gap: 24,
            alignItems: 'flex-start'
          }}>
            <CheckCircle2 size={24} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 4 }} aria-hidden="true" />
            <div>
              <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>{item.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 1.8, opacity: 0.8 }}>{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* 관련 정보 */}
      <section style={{ marginBottom: 32, background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '28px 32px' }}>
        <p style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 16 }}>함께 보면 좋은 정보</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { href: '/funding', label: '국비지원으로 수강료 절감' },
            { href: '/employment', label: '이용사 취업·창업 가이드' },
            { href: '/qna', label: '등록 전 자주 묻는 질문' },
            { href: '/board', label: '수강 후기·정보 게시판' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 50, textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--primary-light)', borderRadius: 32, padding: '50px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>전문가의 조언이 필요하신가요?</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginBottom: 32 }}>
          현재 상황(나이, 경력, 목표)에 맞는 최적의 이용사학원 커리큘럼을 무료로 분석해 드립니다.
        </p>
        <Link href="/#consulting" style={{
          display: 'inline-block',
          background: 'var(--accent)',
          color: 'white',
          fontWeight: 800,
          fontSize: 16,
          padding: '16px 40px',
          borderRadius: 16,
          textDecoration: 'none'
        }}>
          1:1 맞춤 가이드 신청하기
        </Link>
      </section>
    </main>
  );
}
