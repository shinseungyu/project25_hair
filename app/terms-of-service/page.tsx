import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '이용약관 | 헤어이용사학원수강료비교',
  description: '헤어이용사학원수강료비교 이용약관 안내입니다.',
  alternates: { canonical: '/terms-of-service' },
  robots: { index: false },
};

export default function TermsOfServicePage() {
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '60px 1.5rem 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700, marginBottom: 40 }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.03em' }}>이용약관</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 48 }}>시행일자: 2026년 06월 01일</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>제1조 (목적)</h2>
          <p>이 약관은 주식회사 와야미디어(이하 "회사")가 운영하는 헤어이용사학원수강료비교사이트(이하 "서비스")의 이용 조건 및 절차, 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>제2조 (서비스의 내용)</h2>
          <p>회사는 다음의 서비스를 제공합니다.</p>
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            <li>이용사학원 수강료 비교 정보 제공</li>
            <li>이용사 국가자격증 및 국비지원 정보 제공</li>
            <li>이용사학원 상담 연결 서비스</li>
            <li>바버샵 창업 및 취업 정보 제공</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>제3조 (서비스 이용)</h2>
          <p>서비스의 상담 신청 및 정보 제공은 무료입니다. 단, 통신요금 등은 이용자가 부담합니다. 이용자는 서비스를 이용함으로써 본 약관에 동의한 것으로 간주됩니다.</p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>제4조 (정보의 정확성)</h2>
          <p>회사는 제공하는 이용사학원 수강료, 국비지원 정보 등의 정확성을 위해 노력합니다. 그러나 실제 수강료, 국비지원 금액은 학원·시기에 따라 변동될 수 있으므로, 최종 확인은 해당 학원 또는 관련 기관(고용노동부, HRD-Net)을 통해 하시기 바랍니다.</p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>제5조 (면책)</h2>
          <p>회사는 이용자가 서비스에서 얻은 정보를 바탕으로 한 학원 선택 결과에 대해 책임을 지지 않습니다. 서비스 내 정보는 참고 용도로만 활용하시기 바랍니다.</p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>제6조 (약관의 변경)</h2>
          <p>회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지를 통해 고지합니다. 변경 후 서비스를 계속 이용하면 변경된 약관에 동의한 것으로 간주됩니다.</p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>제7조 (문의)</h2>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '20px 24px' }}>
            <p><strong>회사명:</strong> 주식회사 와야미디어</p>
            <p><strong>이메일:</strong> skfmtlf21133@gmail.com</p>
          </div>
        </section>
      </div>
    </main>
  );
}
