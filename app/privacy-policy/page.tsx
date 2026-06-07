import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: '개인정보 처리방침 | 헤어이용사학원수강료비교',
  description: '헤어이용사학원수강료비교 개인정보 처리방침 안내입니다.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '60px 1.5rem 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700, marginBottom: 40 }}>
        <ChevronLeft size={16} /> 홈으로 돌아가기
      </Link>
      <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.03em' }}>개인정보 처리방침</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 48 }}>공고일자: 2026년 06월 01일 | 시행일자: 2026년 06월 01일</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.8 }}>
        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>1. 개인정보의 처리 목적</h2>
          <p>주식회사 와야미디어(이하 "회사")는 이용사 헤어학원 상담 안내 서비스 제공을 위해 최소한의 개인정보를 수집합니다.</p>
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            <li>이용사학원 수강료 상담 및 학원 연결 서비스 제공</li>
            <li>상담 신청자 식별 및 연락</li>
            <li>서비스 개선 및 맞춤형 정보 제공</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>2. 수집하는 개인정보 항목</h2>
          <p>회사는 상담 신청 시 다음의 개인정보를 수집합니다.</p>
          <ul style={{ paddingLeft: 20, marginTop: 12 }}>
            <li><strong>필수항목:</strong> 이름, 생년월일, 성별, 휴대폰 번호, 거주 지역</li>
            <li><strong>선택항목:</strong> 이용사 국가자격증 보유 여부</li>
            <li><strong>자동수집:</strong> IP 주소, 쿠키, 서비스 이용 기록</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>3. 개인정보의 처리 및 보유 기간</h2>
          <p>수집된 개인정보는 상담 완료 후 <strong>1년간</strong> 보유 후 파기합니다. 단, 관련 법령에 의해 보존이 필요한 경우 해당 법령에서 정한 기간 동안 보관합니다.</p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>4. 개인정보의 제3자 제공</h2>
          <p>회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 단, 이용자가 사전에 동의한 이용사학원 상담 연결 서비스의 경우, 해당 학원에 상담 목적으로 최소한의 정보를 제공할 수 있습니다.</p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>5. 개인정보의 파기</h2>
          <p>회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등으로 개인정보가 불필요하게 되었을 때 지체 없이 파기합니다.</p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>6. 이용자의 권리</h2>
          <p>이용자는 언제든지 개인정보 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 요청은 아래 개인정보 보호책임자에게 연락하시기 바랍니다.</p>
        </section>

        <section>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: 'var(--text-primary)', marginBottom: 16 }}>7. 개인정보 보호책임자</h2>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 16, padding: '20px 24px' }}>
            <p><strong>회사명:</strong> 주식회사 와야미디어</p>
            <p><strong>이메일:</strong> skfmtlf21133@gmail.com</p>
          </div>
        </section>
      </div>
    </main>
  );
}
