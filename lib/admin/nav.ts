export interface AdminNavItem {
  key: string;
  title: string;
  url: string;
}

export interface AdminNavGroup {
  id: number;
  title: string;
  items: AdminNavItem[];
}

/**
 * 관리자 GNB 구조. 학생 사이트의 lib/nav.ts 와 동일한 방식의 단일 소스.
 * A.2/A.5/B.1/B.2 는 "비교과 프로그램" 그룹, A.6 은 "역량개발" 그룹, A.7 은 "회원관리" 그룹으로 묶는다.
 * A.4 통합 로그인은 로그인 전 화면이라 GNB 밖(헤더 유틸 영역)에서 연결한다.
 * (추후 화면이 추가되면 이 목록만 확장하면 된다.)
 */
export const adminNavGroups: AdminNavGroup[] = [
  {
    id: 1,
    title: "비교과 프로그램",
    items: [
      { key: "admin-program-new", title: "프로그램 등록", url: "/admin/programs/new" },
      { key: "admin-program-list", title: "프로그램 리스트", url: "/admin/programs" },
      { key: "admin-program-stats", title: "프로그램 통계", url: "/admin/programs/stats" },
    ],
  },
  {
    id: 2,
    title: "역량개발",
    items: [
      { key: "admin-competency", title: "역량 인증제 관리", url: "/admin/competency" },
    ],
  },
  {
    id: 3,
    title: "회원관리",
    items: [
      { key: "admin-student-lookup", title: "학생 조회", url: "/admin/students" },
    ],
  },
];
