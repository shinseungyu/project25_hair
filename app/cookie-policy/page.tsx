import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '쿠키 정책 | 헤어이용사학원수강료비교',
  description: '헤어이용사학원수강료비교 쿠키 정책 안내입니다.',
  alternates: { canonical: '/cookie-policy' },
  robots: { index: false },
};

export default function CookiePolicyPage() {
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '60px 1.5rem 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700, marginBottom: 40 }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.03em' }}>쿠키 정책</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 48 }}>시행일자: 2026년 06월 01일</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>쿠키란?</h2>
          <p>쿠키는 웹사이트가 이용자의 브라우저에 저장하는 작은 텍스트 파일입니다. 이용자가 서비스를 다시 방문할 때 보다 개선된 경험을 제공하기 위해 사용됩니다.</p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>사용하는 쿠키의 종류</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { name: '필수 쿠키', desc: '서비스 운영에 반드시 필요한 쿠키입니다. 거부 시 서비스 이용이 제한될 수 있습니다.' },
              { name: '분석 쿠키 (Google Analytics)', desc: '이용자가 서비스를 어떻게 이용하는지 이해하기 위해 Google Analytics를 사용합니다. 수집된 데이터는 익명으로 처리됩니다.' },
              { name: '광고 쿠키 (Google AdSense)', desc: '이용자에게 적합한 광고를 표시하기 위해 Google AdSense를 사용합니다. 광고 거부는 브라우저 설정 또는 Google 광고 설정에서 가능합니다.' },
            ].map(item => (
              <div key={item.name} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '20px 24px' }}>
                <p style={{ fontWeight: 800, color: 'var(--text-primary)', marginBottom: 8 }}>{item.name}</p>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>쿠키 관리 방법</h2>
          <p>대부분의 브라우저는 쿠키를 허용하도록 기본 설정되어 있습니다. 브라우저 설정을 통해 쿠키를 거부하거나 삭제할 수 있으나, 일부 서비스 기능이 제한될 수 있습니다.</p>
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            <li>Chrome: 설정 → 개인정보 및 보안 → 쿠키 및 기타 사이트 데이터</li>
            <li>Safari: 환경설정 → 개인 정보 보호 → 쿠키 및 웹사이트 데이터</li>
            <li>Firefox: 설정 → 개인 정보 및 보안 → 쿠키 및 사이트 데이터</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>문의</h2>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '20px 24px' }}>
            <p><strong>회사명:</strong> 주식회사 와야미디어</p>
            <p><strong>이메일:</strong> skfmtlf21133@gmail.com</p>
          </div>
        </section>
      </div>
    </main>
  );
}
