import Link from 'next/link';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import LegalNoticeModal from './LegalNoticeModal';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--accent)', color: 'white', padding: '80px 1.5rem 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* 상단 — 브랜드 + 네비 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 40, marginBottom: 32 }}>

          {/* 브랜드 + 사업자 */}
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <div>
              <p style={{ fontWeight: 900, fontSize: 16, color: 'var(--primary)', marginBottom: 6 }}>
                헤어이용사학원수강료비교사이트
              </p>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginBottom: 20, lineHeight: 1.6 }}>
                이용사학원 수강료 · 국비지원 · 자격증 · 취업 · 창업 정보 전문
              </p>
              <address style={{ fontStyle: 'normal', fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.9 }}>
                <span style={{ display: 'block' }}>상호: 주식회사 와야미디어</span>
                <span style={{ display: 'block' }}>사업자등록번호: 105-87-55780</span>
                <span style={{ display: 'block' }}>업종: 광고대행, 광고물작성, 기타광고</span>
                <span style={{ display: 'block' }}>주소: 서울특별시 마포구 구룡길 19, A429호</span>
              </address>
            </div>

            {/* 사이트 링크 */}
            <nav aria-label="푸터 내비게이션">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '2rem 3rem' }}>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>학원 정보</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <li><Link href="/funding" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>국비지원 안내</Link></li>
                    <li><Link href="/guide" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>학원 선택 가이드</Link></li>
                    <li><Link href="/employment" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>취업·창업 가이드</Link></li>
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>커뮤니티</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <li><Link href="/qna" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>자주 묻는 질문</Link></li>
                    <li><Link href="/board" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>정보 게시판</Link></li>
                  </ul>
                </div>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 800, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}>법적 고지</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                    <li style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}><PrivacyPolicyModal /></li>
                    <li style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}><LegalNoticeModal /></li>
                    <li><Link href="/terms-of-service" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>이용약관</Link></li>
                    <li><Link href="/cookie-policy" style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>쿠키 정책</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* 하단 — 저작권 + 면책 */}
        <small style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,0.25)', lineHeight: 1.8, maxWidth: 700 }}>
          본 사이트는 정보 제공을 목적으로 운영되며, 학원비 및 수강료는 개별 학원의 운영 방침에 따라 실제와 다를 수 있습니다.
          정확한 비용은 반드시 해당 학원 상담을 통해 확인하시기 바랍니다.<br />
          © 2026 헤어이용사학원수강료비교사이트. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
