import Link from 'next/link';
import Image from 'next/image';
import postsData from '@/data/posts.json';
import FormSection from '@/components/FormSection';

export default function HomePage() {
  const recentPosts = postsData.slice(0, 3);

  return (
    <main style={{ background: 'var(--bg-main)', minHeight: '100vh', paddingBottom: '100px' }}>

      {/* ── 히어로 ── */}
      <section aria-label="헤어이용사학원 수강료 비교 소개" style={{ position: 'relative', overflow: 'hidden', minHeight: 580, display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Image src="/background.webp" alt="헤어(이용사)학원 수강료 비교 — 이용사자격증·국비지원·두피관리 정보" fill style={{ objectFit: 'cover' }} priority />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(10,10,10,0.85))' }} />
        <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 780, margin: '0 auto', padding: '100px 1.5rem 80px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(184,144,91,0.15)',
            color: 'var(--primary)',
            fontSize: 11,
            fontWeight: 900,
            padding: '6px 20px',
            borderRadius: 50,
            letterSpacing: '0.2em',
            marginBottom: 24,
            textTransform: 'uppercase' as const,
            border: '1px solid rgba(184,144,91,0.35)',
          }}>
            2026년 최신 기준
          </span>
          <h1 style={{
            color: 'white',
            fontSize: 'clamp(26px, 5vw, 50px)',
            fontWeight: 950,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: 14,
          }}>
            헤어(이용사)학원 수강료 비교
          </h1>
          <p style={{
            color: 'var(--primary)',
            fontSize: 'clamp(13px, 2vw, 18px)',
            fontWeight: 700,
            marginBottom: 18,
            letterSpacing: '-0.01em',
          }}>
            이용사자격증·학원비용·국비지원 총정리 2026
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: 15,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: '0 auto 36px',
            fontWeight: 500,
          }}>
            이용사학원 수강료 비교부터 국비지원·국가자격증 취득·바버샵 창업까지<br />
            2026년 최신 기준으로 헤어 교육의 모든 정보를 한눈에 확인하세요.
          </p>
          <FormSection />
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── 이용사학원이란? ── */}
        <section aria-labelledby="about-heading" style={{ marginBottom: 80 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>기초 정보</p>
          <h2 id="about-heading" style={{ fontSize: 24, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.02em' }}>헤어(이용사)학원이란?</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>이용사 자격증 취득 과정과 헤어 기술 커리큘럼, 수강료 구조를 한눈에 파악하세요.</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 20 }}>
            <strong>헤어(이용사)학원</strong>은 헤어커트, 헤어컬러링, 퍼머넌트 웨이브, 면도, 두피 관리, 위생 관리 등
            이용 전반의 이론과 실기를 전문적으로 교육하는 기관입니다.
            이용사 국가자격증 취득부터 바버샵 실무 운영 기술까지 체계적으로 배울 수 있습니다.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 20 }}>
            교육 과정은 크게 <strong>이용사 국가자격증반</strong>, <strong>헤어커트·스타일링 심화반</strong>, <strong>두피관리 전문반</strong>, <strong>바버샵 창업 실무반</strong>으로 나뉩니다.
            처음 이용 기술을 접하는 초보자부터 이미 현장 경험이 있는 분들을 위한 심화 과정까지 수준별 커리큘럼이 운영됩니다.
            수료 후에는 이용원, 바버샵, 헤어샵, 두피 관리센터, 군부대 이발소, 호텔 이용 서비스 등 다양한 분야로 진출할 수 있습니다.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 20 }}>
            이용사 국가자격증은 한국산업인력공단에서 주관하며, 필기 및 실기 시험을 통해 취득할 수 있습니다.
            분원머리(전통 분 기반 두발 관리 기술) 등 국가시험 실기 과목은 전문 강사의 밀착 지도로 단기간에 습득이 가능합니다.
          </p>

          <aside style={{ background: 'var(--primary-light)', borderRadius: 16, padding: '20px 24px', borderLeft: '4px solid var(--primary)' }}>
            <p style={{ fontWeight: 800, fontSize: 15, marginBottom: 8, color: 'var(--primary-dark)' }}>내일배움카드(국비카드) 소지자 할인 안내</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.8 }}>
              저희 학원은 국비카드로 수업을 직접 결제하는 HRD-Net 등록 훈련기관은 아닙니다.
              다만 <strong>내일배움카드 소지자에게는 별도 할인 혜택을 즉시 제공</strong>해 드리고 있습니다.
              카드를 사용하지 않아도 소지만 하셔도 혜택을 받으실 수 있으니, 상담 시 꼭 말씀해 주세요.
            </p>
          </aside>
        </section>

        {/* ── 수강료 벤토 그리드 ── */}
        <section aria-labelledby="cost-heading" style={{ marginBottom: 100 }}>
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>수강료 현황</p>
            <h2 id="cost-heading" style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 8 }}>과정별 수강료 데이터</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>
              실제 수강생 데이터와 학원별 공시 비용을 바탕으로 분석한 과정별 평균 비용입니다. <span style={{ background: 'var(--primary-light)', padding: '2px 12px', borderRadius: 50, fontSize: 13, fontWeight: 700, color: 'var(--primary-dark)' }}>2026. 05 업데이트</span>
            </p>
          </div>

          <ul className="bento-grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li className="bento-item" style={{ gridColumn: 'span 2', background: 'var(--primary-light)', borderColor: 'transparent' }}>
              <article style={{ position: 'relative', zIndex: 1 }}>
                <span style={{ color: 'var(--primary-dark)', fontWeight: 900, fontSize: 12 }}>추천 과정</span>
                <h3 style={{ fontSize: 24, fontWeight: 900, marginTop: 12, marginBottom: 8 }}>이용사 국가자격증반</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 24 }}>이용사 국가자격증 취득의 정석.<br />탄탄한 기초와 합격 보장 커리큘럼.</p>
                <div style={{ fontSize: 32, fontWeight: 950, color: 'var(--primary-dark)' }}>80~130<span style={{ fontSize: 18, fontWeight: 700 }}>만원</span></div>
              </article>
              <div style={{ position: 'absolute', right: -20, bottom: -20, width: 140, height: 140, background: 'var(--primary)', opacity: 0.1, borderRadius: '50%' }}></div>
            </li>

            <li className="bento-item" style={{ gridColumn: 'span 2', background: 'var(--accent)', color: 'white' }}>
              <article>
                <span style={{ color: 'var(--primary)', fontWeight: 900, fontSize: 12 }}>국비지원 활용</span>
                <h3 style={{ fontSize: 24, fontWeight: 900, marginTop: 12, marginBottom: 8 }}>국비지원 활용 과정</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, marginBottom: 24 }}>내일배움카드 활용 시 자부담 최소화.<br />최대 100% 지원 혜택을 누리세요.</p>
                <div style={{ fontSize: 32, fontWeight: 950, color: 'var(--primary)' }}>0~40<span style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>만원</span></div>
              </article>
            </li>

            <li className="bento-item">
              <article>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>두피관리 전문반</h3>
                <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--primary)', marginBottom: 12 }}>120~180만</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>두피진단·탈모관리·두피 스케일링 전문 기술 습득 과정.</p>
              </article>
            </li>

            <li className="bento-item">
              <article>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>바버샵 창업 실무반</h3>
                <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--primary)', marginBottom: 12 }}>150~220만</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>바버샵 창업·운영 실무 전반 교육. 클리퍼 활용 전문 커트.</p>
              </article>
            </li>

            <li className="bento-item" style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
              <article style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: 20 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>단기 특강</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 13 }}>헤어컬러링, 퍼머넌트, 면도 기술 단기 집중반</p>
                </div>
                <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>20~60<span style={{ fontSize: 14 }}>만원</span></div>
              </article>
            </li>
          </ul>
        </section>

        {/* ── 학원 선택 체크리스트 ── */}
        <section aria-labelledby="checklist-heading" style={{ marginBottom: 100 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10, textAlign: 'center' }}>학원 선택 가이드</p>
          <h2 id="checklist-heading" style={{ fontSize: 28, fontWeight: 900, textAlign: 'center', marginBottom: 12 }}>실패 없는 이용사학원 선택 가이드</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}>
            이용사학원 등록 전 반드시 확인해야 할 4가지 핵심 체크포인트입니다.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {[
              { title: '현직 이용사 강사진', desc: '자격증 합격을 넘어 이용원·바버샵 현장에서 바로 통하는 노하우를 가진 현직 이용사 강사인지 확인하세요.' },
              { title: '1:1 밀착 피드백 시스템', desc: '학원당 수강생 수를 확인하세요. 소수정예(8인 이하) 수업이 이용 기술 향상에 가장 효율적입니다.' },
              { title: '추가 비용 투명성', desc: '수강료 외 재료비, 소도구비, 시험 응시료 등 숨은 비용이 없는지 꼼꼼히 따져봐야 합니다.' },
              { title: '취업·창업 지원', desc: '단순 교육 종료가 아닌, 이용원·바버샵 취업 연계부터 창업 컨설팅까지 책임지는 시스템을 갖췄는지 확인하세요.' },
            ].map((item, i) => (
              <li key={i} style={{ borderLeft: '4px solid var(--primary)', paddingLeft: 24 }}>
                <p style={{ color: 'var(--primary)', fontSize: 14, fontWeight: 900, marginBottom: 8 }}>체크포인트 0{i + 1}</p>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7 }}>{item.desc}</p>
              </li>
            ))}
          </ul>
          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/guide" style={{ color: 'var(--primary)', fontWeight: 800, fontSize: 15, textDecoration: 'none', borderBottom: '2px solid var(--primary)', paddingBottom: 2 }}>
              5가지 체크리스트 전체 보기 →
            </Link>
          </div>
        </section>

        {/* ── 커리큘럼 ── */}
        <section aria-labelledby="curriculum-heading" style={{ marginBottom: 100 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>커리큘럼</p>
            <h2 id="curriculum-heading" style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em', marginBottom: 12 }}>개설 과정 안내</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, maxWidth: 560, margin: '0 auto' }}>
              목표에 맞는 과정을 선택하세요. 이용사 국가자격증 취득부터 바버샵 창업·두피관리 전문가까지 단계별로 준비할 수 있습니다.
            </p>
          </div>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              {
                badge: '국가자격증',
                title: '이용사 국가자격증 과정',
                desc: '한국산업인력공단에서 시행하는 이용사 국가기술자격증 취득을 준비하는 과정입니다. 자격 검정 기준에 맞는 필기 이론과 실기 과제를 집중 교육합니다. 분원머리(한국 전통 이용 기술)를 포함한 실기 전 과목을 체계적으로 준비할 수 있습니다.',
                contents: ['이용이론 및 위생관리', '헤어커트 기초·응용', '퍼머넌트 웨이브', '헤어컬러링', '면도·분원머리 실기'],
                cert: '이용사 국가자격증',
                jobs: ['이용원', '바버샵', '헤어샵', '군부대 이용실', '호텔 이용 서비스', '이용 교육강사', '두피관리센터', '프리랜서 이용사'],
                color: 'var(--primary-light)',
                accentColor: 'var(--primary-dark)',
              },
              {
                badge: '두피관리 전문',
                title: '두피관리 전문가 과정',
                desc: '두피 진단, 탈모 관리, 두피 스케일링, 두피 마사지 등 두피 관련 전문 기술을 집중 교육합니다. 두피관리 전문가 자격증 취득과 두피 관리센터 창업까지 체계적으로 준비할 수 있습니다.',
                contents: ['두피 구조 및 진단 이론', '탈모 유형별 관리법', '두피 스케일링 실습', '두피 마사지 기법', '홈케어 제품 상담'],
                cert: '두피관리전문가 민간자격증',
                jobs: ['두피관리센터', '탈모 클리닉', '헤어샵 두피 전문 코너', '두피관리 프리랜서', '교육강사', '홈케어 컨설턴트'],
                color: '#F4F2EE',
                accentColor: '#8A6A45',
              },
              {
                badge: '바버샵 실무',
                title: '바버샵 창업 실무반',
                desc: '클리퍼(바리깡) 활용 전문 커트, 직선 면도, 스킨 페이드 등 바버샵 특화 기술과 창업·운영 실무 전반을 교육합니다. 국내외 바버샵 트렌드를 반영한 커리큘럼으로 바버샵 창업의 꿈을 현실로 만들어 드립니다.',
                contents: ['클리퍼 커트 기초·심화', '스킨 페이드·언더컷', '직선 면도·헤어라인 정리', '수염 정리·디자인', '바버샵 운영 실무'],
                cert: '바버샵 창업 수료증',
                jobs: ['바버샵 창업', '남성 전문 헤어샵', '호텔·리조트 바버', '프리랜서 바버', '남성 그루밍 전문가', '교육강사'],
                color: 'var(--accent)',
                accentColor: 'var(--primary)',
                isDark: true,
              },
              {
                badge: '헤어컬러링',
                title: '헤어컬러링 전문 과정',
                desc: '염색 이론, 색채학, 탈색·염색 기법, 그라데이션 컬러 등 헤어 컬러링 전문 기술을 집중 교육합니다. 트렌드 컬러 기술을 익혀 헤어샵 경쟁력을 높일 수 있습니다.',
                contents: ['헤어컬러링 이론·색채학', '탈색·염색 기법 실습', '그라데이션·발레아쥬', '매직 스트레이트·펌 컬러', '손상모 케어 및 트리트먼트'],
                cert: '헤어컬러리스트 수료증',
                jobs: ['헤어샵', '헤어컬러 전문실', '뷰티 살롱', '헤어 컬러리스트', '교육강사', '프리랜서'],
                color: '#FFFFFF',
                accentColor: '#1A1A1A',
              },
            ].map((course, i) => (
              <li key={i}>
                <article style={{
                  background: course.color,
                  borderRadius: 28,
                  padding: '40px',
                  color: course.isDark ? 'white' : 'inherit',
                }}>
                  <header style={{ marginBottom: 20 }}>
                    <span style={{
                      display: 'inline-block',
                      background: course.isDark ? 'rgba(255,255,255,0.15)' : 'white',
                      color: course.isDark ? 'var(--primary)' : course.accentColor,
                      fontSize: 11, fontWeight: 900, padding: '4px 14px', borderRadius: 50,
                      textTransform: 'uppercase' as const, letterSpacing: '0.08em',
                      marginBottom: 12,
                    }}>{course.badge}</span>
                    <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: '-0.02em' }}>{course.title}</h3>
                  </header>
                  <p style={{ fontSize: 15, lineHeight: 1.7, marginBottom: 28, color: course.isDark ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)', maxWidth: 700 }}>{course.desc}</p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 900, color: course.isDark ? 'var(--primary)' : course.accentColor, marginBottom: 12 }}>주요 내용</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
                        {course.contents.map((c, j) => (
                          <li key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: course.isDark ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)' }}>
                            <span style={{ color: course.isDark ? 'var(--primary)' : course.accentColor, fontWeight: 700, fontSize: 16 }}>·</span>{c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 900, color: course.isDark ? 'var(--primary)' : course.accentColor, marginBottom: 12 }}>취득 자격증 / 수료</p>
                      <p style={{ fontSize: 14, fontWeight: 700, marginBottom: 20, color: course.isDark ? 'white' : 'var(--text-primary)' }}>{course.cert}</p>
                      <p style={{ fontSize: 12, fontWeight: 900, color: course.isDark ? 'var(--primary)' : course.accentColor, marginBottom: 10 }}>진출 분야</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap' as const, gap: 6 }}>
                        {course.jobs.map((job, j) => (
                          <li key={j}>
                            <span style={{
                              display: 'inline-block',
                              background: course.isDark ? 'rgba(255,255,255,0.1)' : 'white',
                              border: `1px solid ${course.isDark ? 'rgba(255,255,255,0.2)' : 'var(--border-color)'}`,
                              fontSize: 12, fontWeight: 600, padding: '3px 10px', borderRadius: 50,
                              color: course.isDark ? 'rgba(255,255,255,0.85)' : 'var(--text-secondary)'
                            }}>{job}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 상담 폼 ── */}
        <section id="consulting" aria-labelledby="consulting-heading" style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 32,
          padding: '60px 40px',
          marginBottom: 100
        }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>무료 상담</p>
            <h2 id="consulting-heading" style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>1:1 맞춤 상담 신청</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>
              목표와 예산을 알려주시면 가장 적합한 이용사학원과 국비지원 방법을 전문가가 직접 안내해 드립니다.
            </p>
          </div>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <FormSection />
            <p style={{ marginTop: 16, fontSize: 13, color: 'var(--text-muted)', textAlign: 'center' }}>
              * 상담 신청 시 2026 이용사 취업·창업 가이드북을 무료로 증정합니다.
            </p>
          </div>
        </section>

        {/* ── 수강료 비교표 ── */}
        <section aria-labelledby="table-heading" style={{ marginBottom: 100 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>수강료 비교</p>
          <h2 id="table-heading" style={{ fontSize: 24, fontWeight: 900, marginBottom: 8, letterSpacing: '-0.02em' }}>이용사학원 수강료 지역별 비교표 (2026)</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            이용사학원 수강료는 지역·과정·강사 수준에 따라 큰 차이가 납니다. 아래 비교표를 참고하여 예산에 맞는 학원을 선택하세요.
            국비지원 적용 시 <strong>이용사학원비</strong>를 최대 100%까지 절감할 수 있습니다.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, background: 'var(--bg-card)', borderRadius: 20, overflow: 'hidden', border: '1px solid var(--border-color)' }}>
              <thead>
                <tr style={{ background: 'var(--primary-light)' }}>
                  <th scope="col" style={{ padding: '14px 18px', textAlign: 'left', fontWeight: 800, color: 'var(--primary-dark)' }}>과정</th>
                  <th scope="col" style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: 'var(--primary-dark)' }}>수도권</th>
                  <th scope="col" style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: 'var(--primary-dark)' }}>지방</th>
                  <th scope="col" style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: '#C2410C' }}>국비지원 시</th>
                  <th scope="col" style={{ padding: '14px 18px', textAlign: 'center', fontWeight: 800, color: 'var(--primary-dark)' }}>기간</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { course: '이용사 국가자격증반', seoul: '100~160만원', local: '80~130만원', funded: '0~40만원', period: '3~4개월' },
                  { course: '두피관리 전문반', seoul: '140~200만원', local: '120~170만원', funded: '20~60만원', period: '3~5개월' },
                  { course: '바버샵 창업 실무반', seoul: '160~250만원', local: '140~200만원', funded: '미적용 多', period: '4~6개월' },
                  { course: '헤어컬러링 전문반', seoul: '80~140만원', local: '60~110만원', funded: '0~40만원', period: '2~3개월' },
                  { course: '단기 기술 특강', seoul: '20~60만원', local: '20~50만원', funded: '일부 적용', period: '2~6주' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border-color)', background: i % 2 === 0 ? 'white' : 'var(--bg-main)' }}>
                    <th scope="row" style={{ padding: '14px 18px', fontWeight: 700, textAlign: 'left' }}>{row.course}</th>
                    <td style={{ padding: '14px 18px', textAlign: 'center', color: 'var(--text-secondary)' }}>{row.seoul}</td>
                    <td style={{ padding: '14px 18px', textAlign: 'center', color: 'var(--text-secondary)' }}>{row.local}</td>
                    <td style={{ padding: '14px 18px', textAlign: 'center', color: '#C2410C', fontWeight: 700 }}>{row.funded}</td>
                    <td style={{ padding: '14px 18px', textAlign: 'center', color: 'var(--text-muted)' }}>{row.period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 10 }}>※ 위 이용사학원 수강료는 참고용이며, 실제 학원비는 학원 정책에 따라 다를 수 있습니다. 국비지원은 내일배움카드 적용 기준입니다.</p>
        </section>

        {/* ── SEO 본문 ── */}
        <section aria-labelledby="guide-heading" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 28, padding: '48px 40px', marginBottom: 100 }}>
          <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 10 }}>심층 가이드</p>
          <h2 id="guide-heading" style={{ fontSize: 24, fontWeight: 900, marginBottom: 20, letterSpacing: '-0.02em' }}>
            이용사학원 수강료 완벽 가이드 — 비용·국비지원·자격증 취득 2026 총정리
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 32 }}>
            이용사 자격증 취득을 목표로 하는 분들이 가장 먼저 마주하는 고민은 <strong>이용사학원 수강료</strong>입니다.
            같은 "국가자격증반"이라도 강사 경력, 수업 인원, 재료 제공 여부에 따라 품질 차이가 크기 때문에
            단순 학원비 비교만으로는 올바른 선택을 하기 어렵습니다. 이 가이드에서는 2026년 기준 이용사학원 수강료 평균부터
            국비지원 활용법, 이용사 자격증 취득 후 진로까지 핵심 정보만 정리합니다.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>이용사학원 수강료 평균 — 과정별 비교</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 28 }}>
            2026년 기준 <strong>이용사학원 수강료</strong>는 과정과 지역에 따라 크게 다릅니다.
            국가자격증 기초반은 수도권 기준 100~160만원, 지방은 80~130만원 선이 평균입니다.
            <strong>국비지원(내일배움카드)</strong>을 활용하면 동일 과정을 크게 절감할 수 있어,
            학원 등록 전 반드시 HRD-Net에서 국비 적용 가능 여부를 확인하는 것이 중요합니다.{' '}
            <Link href="/board" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>과정별 수강료 상세 정보 →</Link>
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>국비지원 이용사학원 — 내일배움카드 활용법</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9, marginBottom: 28 }}>
            <strong>국비지원 이용사학원</strong>은 고용노동부 HRD-Net에 등록된 훈련기관으로, 국민내일배움카드를 통해
            수강료의 45~100%를 지원받을 수 있습니다. 재직자, 실업자, 특수고용직·프리랜서 모두 신청 가능합니다.{' '}
            <Link href="/funding" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>국비지원 신청 방법 전체 가이드 →</Link>
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>이용사 국가자격증 취득 후 진로</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.9 }}>
            이용사 국가자격증을 취득하면 이용원, 바버샵, 헤어샵, 군부대 이용실, 호텔 이용 서비스, 두피관리센터 등
            다양한 분야로 진출할 수 있습니다.{' '}
            <Link href="/employment" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'underline' }}>취업·창업 가이드 보기 →</Link>
          </p>
        </section>

        {/* ── FAQ & 게시판 ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 40 }}>
          <section aria-labelledby="board-heading">
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 8 }}>최신 정보</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <h2 id="board-heading" style={{ fontSize: 22, fontWeight: 900 }}>최신 정보 게시판</h2>
              <Link href="/board" style={{ fontSize: 14, color: 'var(--primary)', fontWeight: 700 }}>전체보기</Link>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              이용사학원 수강료·국비지원·자격증·취업·창업 관련 최신 정보를 확인하세요.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <article>
                    <Link href={`/board?id=${post.id}`} style={{
                      padding: '20px',
                      background: 'white',
                      border: '1px solid var(--border-color)',
                      borderRadius: 20,
                      display: 'block',
                      textDecoration: 'none',
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>{post.category}</span>
                      <p style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>{post.title}</p>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="faq-heading">
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.12em', textTransform: 'uppercase' as const, marginBottom: 8 }}>FAQ</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <h2 id="faq-heading" style={{ fontSize: 22, fontWeight: 900 }}>자주 묻는 질문</h2>
              <Link href="/qna" style={{ fontSize: 14, color: 'var(--primary)', fontWeight: 700 }}>더보기</Link>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              이용사학원 수강료, 국비지원, 자격증 취득 등 등록 전 가장 많이 묻는 질문과 답변을 정리했습니다.
            </p>
            <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { q: '이용사 자격증 없이도 취업이 가능한가요?', a: '이용사 국가자격증이 없으면 이용원 개업이 불가능합니다. 취업 시에도 자격증 우대 조건이 많아 학원 등록 후 자격증 취득을 먼저 권장합니다.' },
                { q: '재료비는 별도인가요?', a: '학원마다 정책이 다릅니다. 실습 소도구(가위, 빗, 클리퍼 등) 포함 여부를 반드시 상담 시 확인이 필요합니다.' },
              ].map((faq, i) => (
                <div key={i} style={{ padding: '20px', background: 'var(--accent-light)', borderRadius: 20 }}>
                  <dt style={{ fontWeight: 800, fontSize: 15, marginBottom: 8 }}>Q. {faq.q}</dt>
                  <dd style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{faq.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

      </div>
    </main>
  );
}
