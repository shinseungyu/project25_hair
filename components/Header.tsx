"use client";

import { useState } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: '홈' },
  { href: '/funding', label: '국비지원' },
  { href: '/employment', label: '취업·창업' },
  { href: '/qna', label: 'FAQ' },
  { href: '/board', label: '정보게시판' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      background: 'var(--glass)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderBottom: '1px solid rgba(216,226,245,0.5)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '0 1.5rem',
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        height: '4rem',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: 15, color: 'var(--primary)', textDecoration: 'none', letterSpacing: '-0.02em' }}>
          헤어(이용사)학원 <span style={{ color: 'var(--accent)' }}>수강료비교</span>
        </Link>

        <nav aria-label="주요 메뉴" className="desktop-nav">
          <ul style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0 }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="hamburger-btn"
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            flexDirection: 'column',
            gap: 5,
          }}
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span style={{
            display: 'block', width: 22, height: 2,
            background: open ? 'transparent' : 'var(--text-primary)',
            transition: 'all 0.2s',
            transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: 'var(--text-primary)',
            opacity: open ? 0 : 1,
            transition: 'opacity 0.2s',
          }} />
          <span style={{
            display: 'block', width: 22, height: 2,
            background: 'var(--text-primary)',
            transition: 'all 0.2s',
            transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }} />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="모바일 메뉴"
          className="mobile-menu"
          style={{
            position: 'fixed',
            top: '4rem',
            left: 0,
            right: 0,
            background: 'white',
            borderBottom: '1px solid var(--border-color)',
            padding: '1rem 1.5rem 1.5rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: 'block',
                    fontSize: 16,
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: '1px solid var(--border-color)',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
