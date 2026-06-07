import type { Metadata } from 'next';
import Script from 'next/script';
import QnaClient from './QnaClient';

export const metadata: Metadata = {
  title: '이용사학원 수강료·국비지원 FAQ | 자주 묻는 질문 총정리 2026',
  description: '이용사학원 수강료, 국비지원, 이용사 자격증 시험, 바버샵 창업, 두피관리 전문가 등 — 등록 전 꼭 알아야 할 질문과 전문가 답변을 한눈에 정리했습니다.',
  alternates: { canonical: '/qna' },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '이용사학원 수강료는 얼마인가요?',
      acceptedAnswer: { '@type': 'Answer', text: '이용사 국가자격증반 기준 80~160만원, 두피관리 전문반은 120~200만원 선입니다. 국비지원(내일배움카드) 활용 시 수강료의 45~100%를 지원받아 실부담을 크게 줄일 수 있습니다.' },
    },
    {
      '@type': 'Question',
      name: '이용사학원 국비지원 받는 방법은?',
      acceptedAnswer: { '@type': 'Answer', text: '국민내일배움카드를 발급받아 HRD-Net에서 이용사 훈련과정을 신청하면 됩니다. 실업자는 수강료 100% 지원, 재직자는 45~85% 지원됩니다.' },
    },
    {
      '@type': 'Question',
      name: '이용사 자격증 없이 이용원을 운영할 수 있나요?',
      acceptedAnswer: { '@type': 'Answer', text: '아닙니다. 공중위생관리법에 따라 이용업(이용원) 영업을 하려면 이용사 국가자격증이 반드시 필요합니다. 자격증 없이 영업 시 300만원 이하 벌금이 부과됩니다.' },
    },
    {
      '@type': 'Question',
      name: '이용사학원 수강료 환불이 되나요?',
      acceptedAnswer: { '@type': 'Answer', text: '수강 시작 후 1/3 미만 수강 시 2/3 환불, 1/3~1/2 수강 시 1/2 환불, 1/2 초과 수강 시 환불 불가가 원칙입니다. 국비지원 과정은 환불 시 카드 잔액이 복원됩니다.' },
    },
    {
      '@type': 'Question',
      name: '바버샵 창업 비용은 얼마나 드나요?',
      acceptedAnswer: { '@type': 'Answer', text: '소형 바버샵(15~25평) 기준 총 2,000~4,000만원이 필요합니다. 보증금+인테리어 1,500~2,500만원, 바버 체어·장비 300~600만원, 초도 소모품 및 기타 300~500만원이 포함됩니다.' },
    },
  ],
};

export default function QnaPage() {
  return (
    <>
      <Script
        id="qna-faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        strategy="beforeInteractive"
      />
      <QnaClient />
    </>
  );
}
