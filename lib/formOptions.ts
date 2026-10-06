// 본문 폼(components/FormSection.tsx)과 하단 고정 바(components/BottomForm.tsx)가
// 공유하는 선택 목록·기본값 단일 소스. 목록을 다른 곳에 중복으로 적지 말 것.

export const MOBILE_PREFIXES = ['010', '011', '016', '017', '019']

export const REGIONS = [
  '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종',
  '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주',
]

export const SEX_OPTIONS = [
  { label: '남', value: '1' },
  { label: '여', value: '2' },
]

export const LICENSE_OPTIONS = [
  { label: '없음', value: 'N' },
  { label: '보유', value: 'Y' },
]

/** 수집 서버로 보내는 카테고리 값 */
export const CATEGORY = 'hair'

/** 두 폼이 공유하는 초기값 */
export const FORM_DEFAULTS: {
  customer_name: string
  customer_birth: string
  mobile1: string
  mobile2: string
  customer_sex: string
  region: string
  has_license: string
} = {
  customer_name: '',
  customer_birth: '',
  mobile1: '010',
  mobile2: '',
  customer_sex: '1',
  region: '',
  has_license: 'N',
}
