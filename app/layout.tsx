import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

const SITE_NAME = '헤어이용사학원수강료비교';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://haircost.kr';
const TITLE = '헤어(이용사)학원 수강료 비교 | 이용사자격증·학원비용·국비지원 총정리 (2026)';
const DESC = '헤어(이용사)학원 수강료 비교 사이트. 이용사 국가자격증, 이용사학원 비용·가격·국비지원 정보를 2026년 최신 기준으로 총정리했습니다. 헤어커트·두피관리·바버샵 취업까지 무료 상담으로 확인하세요.';
const OG_IMAGE = `${SITE_URL}/thumb.webp`;

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESC,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  keywords: [
    '이용사학원',
    '헤어학원',
    '이용사학원 수강료',
    '헤어학원 수강료',
    '이용사학원 학원비',
    '학원비',
    '이용사자격증',
    '이용사학원비용',
    '이용사학원 국비지원',
    '이용사 국비지원',
    '내일배움카드 이용사',
    '바버샵',
    '이용사수강료비교',
    '헤어학원수강료비교',
    '이용사학원가격',
    '이용사학원비',
  ],
  openGraph: {
    title: TITLE,
    description: DESC,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: '헤어(이용사)학원 수강료 비교사이트',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE_NAME,
    title: TITLE,
    description: DESC,
    images: [OG_IMAGE],
  },
  authors: [{ name: SITE_NAME }],
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, date: false, address: false, email: false },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  other: {
    'google-adsense-account': 'ca-pub-5378247298190063',
    'NaverBot': 'all',
    'Yeti': 'all',
    'googlebot': 'all',
    'subject': '헤어이용사학원수강료비교사이트',
    'title': TITLE,
    'publisher': SITE_NAME,
    'author': SITE_NAME,
    'Other Agent': SITE_NAME,
    'location': 'South Korea',
    'distribution': 'global',
    'rating': 'general',
    'format-detection': 'telephone=no, date=no, address=no, email=no',
    'itemprop:name': TITLE,
    'itemprop:description': DESC,
    'itemprop:image': OG_IMAGE,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://haircost.kr';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: SITE_NAME,
        inLanguage: 'ko-KR',
        potentialAction: {
          '@type': 'SearchAction',
          target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/qna?q={search_term_string}` },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: SITE_NAME,
        url: `${siteUrl}/`,
        description: '이용사 헤어학원 수강료·국비지원·자격증·취업 정보를 비교 제공하는 헤어 전문 정보 사이트입니다.',
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#service`,
        name: SITE_NAME,
        serviceType: '헤어(이용사)학원 수강료 비교 및 상담 서비스',
        areaServed: { '@type': 'Country', name: 'KR' },
        provider: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: TITLE,
        inLanguage: 'ko-KR',
        description: DESC,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: ['이용사학원수강료', '이용사학원비용', '국비지원 이용사학원', '내일배움카드 이용사', '이용사 취업', '두피관리전문가', '바버샵 창업'],
        mainEntity: { '@id': `${siteUrl}/#service` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: '국비지원', item: `${siteUrl}/funding` },
          { '@type': 'ListItem', position: 3, name: '취업·창업', item: `${siteUrl}/employment` },
          { '@type': 'ListItem', position: 4, name: 'FAQ', item: `${siteUrl}/qna` },
        ],
      },
    ],
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />

        <meta itemProp="name" content={TITLE} />
        <meta itemProp="description" content={DESC} />
        <meta itemProp="image" content={OG_IMAGE} />

        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="NaverBot" content="all" />
        <meta name="Yeti" content="all" />
        <meta name="naver-site-verification" content="7c0f8bb26c4aac52c9ebb6a8bef51d549991d851" />
        <meta name="google-site-verification" content="_JcXQb-Xc1Ky2RQFXppn84Frlxs-fZJAt5l5bA4pZ30" />

        <meta httpEquiv="content-language" content="ko-KR" />
        <meta name="geo.region" content="KR" />
        <meta name="geo.country" content="KR" />
        <meta name="geo.placename" content="South Korea" />

        <meta name="classification" content="교육, 미용, 이용" />
        <meta name="category" content="헤어이용사학원 교육" />
        <meta name="copyright" content={SITE_NAME} />
        <meta name="revisit-after" content="7 days" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-HQ7J0K4PKJ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HQ7J0K4PKJ');
          `}
        </Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={geist.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
