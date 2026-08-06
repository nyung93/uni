export interface ProgramStats {
  total: number;
  applied: number;
  waiting: number;
  participating: number;
  completed: number;
  canceled: number;
  absent: number;
}

export interface AdminProgram {
  id: number;
  title: string;
  category: string;
  dept: string;
  manager: string;
  period: string;
  open: boolean;
  stats: ProgramStats;
}

/** A.5 프로그램 리스트 목업 데이터. A.2 지원자 관리의 상태 집계 카드도 동일 데이터를 사용한다. */
export const adminPrograms: AdminProgram[] = [
  {
    id: 1,
    title: "AI 인공지능 기초 코딩 워크숍",
    category: "진로체험",
    dept: "글로벌",
    manager: "홍길동",
    period: "05-14 ~ 06-14",
    open: true,
    stats: { total: 28, applied: 27, waiting: 0, participating: 0, completed: 0, canceled: 1, absent: 0 },
  },
  {
    id: 2,
    title: "나의 진로 설계: 꿈을 찾는 시간",
    category: "진로설계",
    dept: "취업지원팀",
    manager: "김민지",
    period: "05-20 ~ 06-10",
    open: true,
    stats: { total: 15, applied: 10, waiting: 2, participating: 1, completed: 1, canceled: 1, absent: 0 },
  },
  {
    id: 3,
    title: "과학 탐구 동아리",
    category: "과학탐구",
    dept: "학술지원팀",
    manager: "박서연",
    period: "06-30 ~ 07-30",
    open: true,
    stats: { total: 18, applied: 5, waiting: 0, participating: 2, completed: 10, canceled: 1, absent: 0 },
  },
  {
    id: 4,
    title: "창의 로봇 경진대회 예선",
    category: "창의융합",
    dept: "산학협력팀",
    manager: "이도현",
    period: "06-10 ~ 06-10",
    open: true,
    stats: { total: 24, applied: 24, waiting: 0, participating: 0, completed: 0, canceled: 0, absent: 0 },
  },
  {
    id: 5,
    title: "인성교육 워크숍",
    category: "인성교육",
    dept: "대학일자리플러스센터",
    manager: "최유진",
    period: "07-18 ~ 07-18",
    open: false,
    stats: { total: 12, applied: 0, waiting: 0, participating: 0, completed: 12, canceled: 0, absent: 0 },
  },
];

export function findAdminProgramById(id: number): AdminProgram | undefined {
  return adminPrograms.find((p) => p.id === id);
}
