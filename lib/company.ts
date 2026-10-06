// 운영사(법인) 표기 단일 소스.
// 개인정보 "수집 주체(수집·이용하는 자)" 와 사업자 정보에 모두 이 값을 쓴다.
// 다른 곳에 법인명을 문자열로 직접 적지 말 것.
//
// 주의: 개인정보 "제3자 제공받는 자"는 이 값과 다른 항목이다.
//       (제3자 제공받는 자 = 올댓뷰티 상담사 / components/PrivacyModal.tsx 참고)

/** 법인 정식 표기 */
export const COMPANY_NAME = '주식회사 와야미디어'

/** 개인정보 수집·이용하는 자(수집 주체) */
export const PRIVACY_COLLECTOR = COMPANY_NAME
