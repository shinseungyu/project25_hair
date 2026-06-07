import type { Metadata } from 'next';
import Link from 'next/link';
import postsData from '@/data/posts.json';
import { ChevronLeft } from 'lucide-react';
import FormSection from '@/components/FormSection';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ id?: string }> }): Promise<Metadata> {
  const { id } = await searchParams;
  const postId = id ? parseInt(id) : null;
  const post = postId ? postsData.find(p => p.id === postId) : null;

  if (post) {
    return {
      title: post.title,
      description: post.summary,
      alternates: { canonical: `/board?id=${post.id}` },
    };
  }

  return {
    title: '이용사학원 정보게시판 | 수강료·국비지원·자격증·바버샵 정보',
    description: '이용사학원 수강료, 국비지원 신청 방법, 이용사 자격증 취득, 바버샵 창업 정보를 모은 정보게시판입니다. 내일배움카드 실사용 후기 등 실전 정보를 확인하세요.',
    alternates: { canonical: '/board' },
  };
}

export default async function BoardPage({ searchParams }: { searchParams: Promise<{ id?: string }> }) {
  const { id } = await searchParams;
  const postId = id ? parseInt(id) : null;
  const post = postId ? postsData.find(p => p.id === postId) : null;

  if (post) {
    const otherPosts = postsData.filter(p => p.id !== post.id).slice(0, 3);
    return (
      <main style={{ maxWidth: 860, margin: '0 auto', padding: '60px 1.5rem 120px' }}>
        <Link href="/board" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700, marginBottom: 40 }}>
          <ChevronLeft size={16} /> 정보게시판으로 돌아가기
        </Link>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>이용사학원 수강료·국비지원 무료 상담</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 20, textAlign: 'center' }}>
            1:1 전문 상담으로 내 상황에 맞는 학원과 과정을 바로 안내받으세요.
          </p>
          <FormSection />
        </div>

        <article>
          <header>
            <span style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 11, fontWeight: 900, padding: '4px 14px', borderRadius: 50, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{post.category}</span>
            <h1 style={{ fontSize: 'clamp(24px, 5vw, 36px)', fontWeight: 950, marginTop: 16, marginBottom: 12, lineHeight: 1.2, letterSpacing: '-0.03em' }}>{post.title}</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 40 }}>
              <time dateTime={post.date}>{post.date}</time>
            </p>
          </header>

          <div style={{ background: 'white', border: '1px solid var(--border-color)', borderRadius: 32, padding: '48px 40px', fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.9, whiteSpace: 'pre-line', boxShadow: 'var(--shadow-sm)' }}>
            {post.content}
          </div>

          <footer>
            <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {post.tags.map(tag => (
                <li key={tag}>
                  <span style={{ display: 'inline-block', background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 12, fontWeight: 700, padding: '6px 16px', borderRadius: 50 }}>#{tag}</span>
                </li>
              ))}
            </ul>
          </footer>
        </article>

        <section style={{ marginTop: 80 }}>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 24 }}>관련 글 더 보기</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            {otherPosts.map(p => (
              <li key={p.id}>
                <article>
                  <Link href={`/board?id=${p.id}`} style={{ textDecoration: 'none', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 20, padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20 }}>
                    <div>
                      <span style={{ color: 'var(--primary)', fontSize: 11, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 4 }}>{p.category}</span>
                      <span style={{ fontWeight: 800, fontSize: 16, color: 'var(--text-primary)' }}>{p.title}</span>
                    </div>
                    <time dateTime={p.date} style={{ color: 'var(--text-muted)', fontSize: 13, flexShrink: 0 }}>{p.date}</time>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginTop: 48, background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '28px 32px' }}>
          <p style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 16 }}>도움이 되는 가이드</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { href: '/funding', label: '국비지원 신청 가이드' },
              { href: '/employment', label: '취업·창업 가이드' },
              { href: '/guide', label: '학원 선택 체크리스트' },
              { href: '/qna', label: '자주 묻는 질문' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 50, textDecoration: 'none' }}>
                {label} →
              </Link>
            ))}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 1.5rem 120px' }}>
      <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 13, fontWeight: 700, marginBottom: 40 }}>
        <ChevronLeft size={16} /> 홈으로
      </Link>
      <h1 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16, letterSpacing: '-0.03em' }}>이용사학원 정보게시판</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 17, marginBottom: 48, lineHeight: 1.7, maxWidth: 620 }}>
        이용사학원 수강료 비교, 국비지원 신청 방법, 이용사 자격증 취득 후기, 바버샵 창업 실전 정보까지 — 이용사 준비에 필요한 모든 정보를 모았습니다.
      </p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
        {postsData.map(post => (
          <li key={post.id}>
            <article className="bento-item" style={{ height: '100%' }}>
              <Link href={`/board?id=${post.id}`} style={{ textDecoration: 'none', display: 'block' }}>
                <header style={{ display: 'flex', gap: 12, marginBottom: 16, alignItems: 'center' }}>
                  <span style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 10, fontWeight: 900, padding: '4px 12px', borderRadius: 50, textTransform: 'uppercase' }}>{post.category}</span>
                  <time dateTime={post.date} style={{ color: 'var(--text-muted)', fontSize: 12 }}>{post.date}</time>
                </header>
                <h2 style={{ fontWeight: 800, fontSize: 18, marginBottom: 12, color: 'var(--text-primary)', lineHeight: 1.3 }}>{post.title}</h2>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const }}>{post.summary}</p>
              </Link>
            </article>
          </li>
        ))}
      </ul>

      <section style={{ marginTop: 64, background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 24, padding: '28px 32px' }}>
        <p style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)', letterSpacing: '0.1em', marginBottom: 16 }}>도움이 되는 가이드</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {[
            { href: '/funding', label: '국비지원 신청 가이드' },
            { href: '/employment', label: '취업·창업 가이드' },
            { href: '/guide', label: '학원 선택 체크리스트' },
            { href: '/qna', label: '자주 묻는 질문' },
          ].map(({ href, label }) => (
            <Link key={href} href={href} style={{ background: 'var(--primary-light)', color: 'var(--primary-dark)', fontSize: 13, fontWeight: 700, padding: '8px 18px', borderRadius: 50, textDecoration: 'none' }}>
              {label} →
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
