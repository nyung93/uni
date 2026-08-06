export interface NavItem {
  key: string;
  title: string;
  url: string;
  available: boolean;
  /** true면 외부 사이트 링크 — 새 탭으로 열리고 GNB active 판정에서 제외된다. */
  external?: boolean;
}

export interface NavGroup {
  id: number;
  title: string;
  url: string;
  items: NavItem[];
}

/**
 * 사이트 전체 GNB 구조(5개 메뉴 그룹)를 담고 있는 단일 소스.
 * 아직 화면이 없는 항목은 available=false 로 표시되어 ComingSoon 화면으로 대체된다.
 */
export const navGroups: NavGroup[] = [
  {
    id: 1,
    title: "마이페이지",
    url: "/mypage",
    items: [{ key: "mypage", title: "마이페이지", url: "/mypage", available: true }],
  },
  {
    id: 2,
    title: "인재 파이프라인 소개",
    url: "/intro/program",
    items: [
      {
        key: "intro-department",
        title: "순천향대학교 소개",
        url: "https://home.sch.ac.kr/sch/01/010300.jsp",
        available: true,
        external: true,
      },
      { key: "intro-program", title: "초·중·고 인재 파이프라인 소개", url: "/intro/program", available: false },
    ],
  },
  {
    id: 3,
    title: "진로설계",
    url: "/career/aptitude-test",
    items: [
      { key: "career-aptitude-test", title: "진로적성검사", url: "/career/aptitude-test", available: false },
      { key: "career-job-search", title: "목표직업탐색", url: "/career/job-search", available: false },
      { key: "career-basic-competency", title: "직업기초역량진단", url: "/career/basic-competency", available: false },
      { key: "career-ai-advisor", title: "AI 어드바이저", url: "/career/ai-advisor", available: false },
    ],
  },
  {
    id: 4,
    title: "역량개발",
    url: "/competency/apply",
    items: [
      { key: "competency-apply", title: "프로그램 신청", url: "/competency/apply", available: true },
      { key: "competency-history", title: "프로그램 신청내역", url: "/competency/history", available: true },
      { key: "competency-certificate", title: "역량 인증제", url: "/competency/certificate", available: true },
    ],
  },
  {
    id: 5,
    title: "커뮤니티",
    url: "/community/notice",
    items: [
      { key: "community-notice", title: "공지사항", url: "/community/notice", available: false },
      { key: "community-review", title: "프로그램 후기", url: "/community/review", available: false },
      { key: "community-qna", title: "문의게시판", url: "/community/qna", available: false },
    ],
  },
];

export function findNavItemByUrl(url: string): NavItem | undefined {
  for (const group of navGroups) {
    const item = group.items.find((i) => i.url === url);
    if (item) return item;
  }
  return undefined;
}

export function findGroupOfItem(item: NavItem): NavGroup | undefined {
  return navGroups.find((g) => g.items.includes(item));
}
