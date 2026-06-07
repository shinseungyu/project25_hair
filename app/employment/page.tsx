import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import FormSection from '@/components/FormSection';

export const metadata: Metadata = {
  title: '이용사 취업·바버샵 창업 가이드 | 이용원 월급·창업비용 2026',
  description: '이용사 자격증 취득 후 취업·창업 준비 방법을 총정리했습니다. 이용원·바버샵 취업 월급, 두피관리 전문가 진로, 바버샵 창업 비용·수익 현실까지 2026년 최신 기준으로 안내합니다.',
  alternates: { canonical: '/employment' },
};

export default function EmploymentPage() {
  return (
    <main style={{ maxWidth: 900, margin: '0 auto', padding: '60px 1.5rem 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700, marginBottom: 40 }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>

      <div style={{ marginBottom: 40 }}>
        <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>취업·창업 준비, 어디서부터 시작할지 모르겠다면?</h3>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20, textAlign: 'center' }}>
          목표 직종과 창업 계획에 맞는 학원을 1:1 무료 상담으로 안내받으세요.
        </p>
        <FormSection />
      </div>

      {/* 히어로 */}
      <div style={{ background: 'var(--accent)', borderRadius: 32, padding: '60px 40px', marginBottom: 60, color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: 'var(--primary)', fontWeight: 900, fontSize: 12, letterSpacing: '0.05em', marginBottom: 20 }}>2026년 이용사 취업·창업 최신 정보</p>
          <h1 style={{ fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 950, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 20 }}>
            이용사 자격증으로<br />
            <span style={{ color: 'var(--primary)' }}>안정적인 커리어를.</span><br />
            취업·창업 완벽 가이드
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.7, maxWidth: 560 }}>
            이용원 취업부터 바버샵 창업·두피관리 전문가까지 — 이용사 자격증 취득 후 진로의 모든 것을 한 페이지에 정리했습니다.
          </p>
        </div>
        <div style={{ position: 'absolute', right: -50, top: -50, width: 200, height: 200, background: 'var(--primary)', opacity: 0.05, borderRadius: '50%' }}></div>
      </div>

      {/* 진로별 가이드 */}
      <section style={{ marginBottom: 80 }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 32, letterSpacing: '-0.02em' }}>이용사 자격증 취득 후 진로별 완전 가이드</h2>

        {[
          {
            path: '🏪 이용원 취업',
            badge: '가장 안정적인 첫 취업',
            intro: '이용사 국가자격증 취득 후 가장 많이 선택하는 진로입니다. 이용원은 전국적으로 운영되고 있어 지역 불문 취업이 가능하며, 경력을 쌓은 후 실장·원장으로 성장하거나 독립 창업으로 이어지는 루트가 탄탄합니다.',
            items: [
              { label: '취업 조건', value: '이용사 국가자격증 필수, 경력 무관 신입 채용 가능' },
              { label: '초봉 수준', value: '수도권 기준 지방 대비 높음, 지역·학원 네트워크 영향' },
              { label: '성장 경로', value: '어시스턴트 → 주임 이용사 → 실장 (수당·인센티브 포함)' },
              { label: '주요 업무', value: '헤어커트, 면도, 퍼머, 두피관리, 고객 상담' },
            ],
            tip: '이용원 취업 시 수도권 vs 지방의 월급 차이가 있습니다. 수도권은 높은 월급 대신 경쟁이 치열하고, 지방은 상대적으로 낮지만 조기 실장 승진이 빠른 경우가 많습니다. 첫 직장에서 다양한 고객층을 경험하는 것이 중요합니다.',
          },
          {
            path: '💈 바버샵 취업·창업',
            badge: '트렌디한 성장 분야',
            intro: 'K-바버 트렌드로 바버샵 수요가 급증하고 있습니다. 클리퍼 기반 전문 커트, 스킨 페이드, 수염 정리 등 특화 기술을 보유한 이용사에 대한 수요가 높습니다. 창업 시에는 소자본으로 시작 가능하며 수익성이 높은 편입니다.',
            items: [
              { label: '취업 조건', value: '이용사 자격증 + 클리퍼 전문 기술(스킨 페이드 등)' },
              { label: '처우', value: '기술직 우대, 이용원 대비 높은 급여 수준' },
              { label: '창업 진입', value: '소규모 소자본 창업 가능, 1인 운영 구조' },
              { label: '창업 후 수익', value: '상권·기술력에 따라 편차 큼, SNS 마케팅이 핵심' },
            ],
            tip: '바버샵 창업은 SNS 마케팅(인스타그램, 유튜브)이 핵심입니다. 스타일리시한 커트 영상과 비포-애프터 콘텐츠를 지속 업로드하면 단골 고객 확보가 빠릅니다. 창업 전 최소 2~3년의 현장 경험을 쌓는 것을 권장합니다.',
          },
          {
            path: '🔬 두피관리 전문가',
            badge: '프리미엄 헤어케어 시장',
            intro: '탈모 인구 증가와 두피 관리 수요 확대로 두피관리 전문가의 시장성이 높아지고 있습니다. 이용사 자격증에 두피관리 전문가 민간자격증을 추가하면 프리미엄 서비스를 제공하여 수입을 높일 수 있습니다.',
            items: [
              { label: '필요 자격', value: '이용사 자격증 + 두피관리전문가 민간자격증' },
              { label: '처우', value: '두피 케어 클리닉·탈모 센터 기준 일반 이용원 대비 높음' },
              { label: '성장 경로', value: '경력 쌓은 후 프리랜서 전환 또는 1인 두피관리실 창업' },
              { label: '주요 직장', value: '두피관리센터, 탈모 클리닉, 헤어샵 두피 전문 코너' },
            ],
            tip: '두피관리 전문가는 의사와 협업하는 탈모 클리닉에 취업하면 높은 수입을 기대할 수 있습니다. 두피 진단 장비 활용 능력과 고객 상담 스킬이 중요하며, 제품 판매 커미션도 수입의 중요한 부분을 차지합니다.',
          },
          {
            path: '🏨 특수 분야 이용사',
            badge: '안정적 고임금 포지션',
            intro: '군부대 이용실, 호텔·리조트 이용 서비스, 노인 요양원 이용 서비스 등 특수 분야의 이용사는 안정적인 고용과 상대적으로 높은 처우를 제공합니다. 이용사 국가자격증 보유 시 공채 지원이 가능합니다.',
            items: [
              { label: '군부대 이용사', value: '이용사 자격증 필수, 4대보험 완비, 정기 공채' },
              { label: '호텔·리조트', value: '안정적 근무환경, 서비스 팁 수입 별도' },
              { label: '요양원·복지관', value: '정규직 고용 가능, 꾸준한 수요' },
              { label: '공무원 이용사', value: '지방자치단체 이용사 공채, 안정적 신분 보장' },
            ],
            tip: '군부대 이용실이나 호텔 이용 서비스는 연봉 대비 안정성이 높고 야간·주말 근무가 없는 경우가 많아 워라밸을 중시하는 분들에게 적합합니다. 이용사 자격증 취득 후 곧바로 지원할 수 있으며, 경쟁률이 낮아 취업 성공률이 높습니다.',
          },
        ].map((item, i) => (
          <article key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '36px', marginBottom: 24 }}>
            <header style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20, flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>{item.path}</h3>
                <span style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 12, fontWeight: 800, padding: '4px 12px', borderRadius: 50 }}>{item.badge}</span>
              </div>
            </header>
            <p style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 24 }}>{item.intro}</p>
            <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 20 }}>
              {item.items.map((d, j) => (
                <div key={j} style={{ background: 'var(--bg-main)', borderRadius: 14, padding: '16px' }}>
                  <dt style={{ fontSize: 11, fontWeight: 800, color: 'var(--text-muted)', marginBottom: 6 }}>{d.label}</dt>
                  <dd style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.5, margin: 0 }}>{d.value}</dd>
                </div>
              ))}
            </dl>
            <aside style={{ background: 'var(--primary-light)', borderRadius: 12, padding: '16px 20px', borderLeft: '3px solid var(--primary)' }}>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: 'var(--primary-dark)' }}>Tip.</strong> {item.tip}
              </p>
            </aside>
          </article>
        ))}
      </section>

      {/* 준비 로드맵 */}
      <section style={{ marginBottom: 80, background: 'var(--primary-light)', borderRadius: 32, padding: '50px 40px' }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 12, letterSpacing: '-0.02em' }}>이용사 자격증 취득부터 취업·창업까지 로드맵</h2>
        <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.7 }}>
          이용사학원 수강료 투자 → 국가자격증 취득 → 현장 경험 축적 → 취업·창업까지, 준비 순서가 중요합니다.
        </p>
        <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {[
            { step: '01', title: '이용사학원 등록 및 국가자격증 취득', period: '3~4개월', desc: '이용사학원에 등록해 이용사 국가자격증을 취득합니다. 내일배움카드(국비지원)를 활용하면 수강료 부담을 크게 줄일 수 있습니다. 필기시험과 실기시험(헤어커트·분원머리·면도 등) 모두 합격해야 자격증이 발급됩니다.' },
            { step: '02', title: '현장 경험 축적 — 이용원·바버샵 취업', period: '1~3년', desc: '자격증 취득 후 이용원이나 바버샵에 취업해 다양한 고객층을 경험합니다. 헤어커트 속도와 정확성, 고객 서비스 스킬을 집중적으로 향상시키는 기간입니다. 이 시기에 SNS 포트폴리오를 구축하면 창업 시 경쟁력이 됩니다.' },
            { step: '03', title: '특화 기술 추가 습득', period: '6개월~1년', desc: '클리퍼 전문 커트(스킨 페이드), 두피관리 기술, 헤어컬러링 심화 등 특화 기술을 추가로 습득합니다. 두피관리전문가 자격증이나 바버샵 실무 과정 수료 시 경쟁력을 높일 수 있습니다.' },
            { step: '04', title: '독립 창업 또는 전문 직종 전환', period: '목표 달성 후', desc: '충분한 현장 경험과 고객 네트워크를 바탕으로 바버샵 창업 또는 두피관리 전문가로 전환합니다. 창업 전 상권 분석과 SNS 마케팅 전략을 철저히 준비하세요.' },
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: 20, paddingBottom: i < 3 ? 32 : 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 40, height: 40, background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 13, fontWeight: 900, flexShrink: 0 }}>{item.step}</div>
                {i < 3 && <div style={{ width: 2, flex: 1, background: 'var(--border-color)', marginTop: 8 }}></div>}
              </div>
              <div style={{ paddingTop: 8, paddingBottom: i < 3 ? 16 : 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: 17, fontWeight: 800, margin: 0 }}>{item.title}</h3>
                  <span style={{ background: 'white', border: '1px solid var(--border-color)', fontSize: 11, fontWeight: 700, color: 'var(--text-muted)', padding: '2px 10px', borderRadius: 50 }}>{item.period}</span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* 취업·창업 FAQ */}
      <section style={{ marginBottom: 80 }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 32, letterSpacing: '-0.02em' }}>이용사 취업·창업 자주 묻는 질문</h2>
        <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { q: '이용사 자격증이 없으면 이용원을 열 수 없나요?', a: '이용사업(이용원)을 개업하려면 이용사 국가자격증이 반드시 필요합니다. 공중위생관리법에 따라 이용사 자격증 없이 이용원을 운영하면 300만원 이하의 벌금이 부과될 수 있습니다. 단, 바버샵은 미용사(일반) 자격증으로도 운영 가능한 경우가 있어 확인이 필요합니다.' },
            { q: '여성도 이용사 자격증을 취득할 수 있나요?', a: '네, 이용사 자격증은 남녀 구분 없이 누구나 취득할 수 있습니다. 다만 이용원 영업 대상은 남성 고객으로 제한되어 있습니다. 여성 이용사는 바버샵, 두피관리센터, 헤어케어 분야로 진출하는 경우가 많습니다.' },
            { q: '바버샵 창업 전에 꼭 준비해야 할 것이 있나요?', a: '최소 1~2년의 현장 취업 경험이 가장 중요합니다. 그 외 상권 분석(유동 인구, 경쟁 업체 파악), 인테리어·장비 견적 비교, SNS 사전 포트폴리오 구축 등이 창업 성패에 직결됩니다. 창업 전 전문가 상담을 꼭 받으시길 권장합니다.' },
            { q: '이용사 자격증 취득 후 바로 창업이 가능한가요?', a: '법적으로는 가능하지만 현장 경험 없이 바로 창업하면 실패 확률이 높습니다. 최소 1~2년의 이용원·바버샵 취업 경험을 통해 고객 응대 능력, 커트 스피드, 단골 고객 확보 전략을 익힌 후 창업하는 것을 강력히 권장합니다.' },
          ].map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: 20, padding: '28px 30px' }}>
              <dt style={{ fontWeight: 900, fontSize: 16, marginBottom: 12, color: 'var(--text-primary)' }}>Q. {faq.q}</dt>
              <dd style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>{faq.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 관련 정보 */}
      <section style={{ marginBottom: 48, background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '28px 32px' }}>
        <p style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 16 }}>함께 보면 좋은 정보</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { href: '/funding', label: '국비지원으로 수강료 절감' },
            { href: '/guide', label: '학원 선택 체크리스트' },
            { href: '/qna', label: '자주 묻는 질문' },
            { href: '/board', label: '후기·정보 게시판' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 50, textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>
      </section>

      <div style={{ background: 'linear-gradient(to bottom right, #dbeafe, #ede9fe)', borderRadius: 24, padding: '40px', textAlign: 'center' }}>
        <h4 style={{ fontSize: 20, fontWeight: 900, marginBottom: 10 }}>취업·창업 준비, 어디서부터 시작할지 모르겠다면?</h4>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.7 }}>
          목표 직종과 창업 계획에 맞는 이용사학원을 1:1 무료 상담으로 추천받으세요.
        </p>
        <Link href="/#consulting" style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', fontWeight: 700, fontSize: 15, padding: '14px 36px', borderRadius: 50, textDecoration: 'none' }}>
          무료 상담 신청하기
        </Link>
      </div>
    </main>
  );
}
