export type BadgeGrade = "GOLD" | "SILVER" | "NONE";

export interface Completion {
  title: string;
  area: string;
  date: string;
  points: number;
}

export interface StudentCompetency {
  id: number;
  schoolLevel: string;
  school: string;
  grade: number;
  name: string;
  email: string;
  totalScore: number;
  creativity: number;
  empathy: number;
  global: number;
  topArea: string;
  tie: boolean;
  badgeGrade: BadgeGrade;
  active: boolean;
  completions?: Completion[];
}

/** A.6 역량 인증제 관리 목업 데이터. */
export const students: StudentCompetency[] = [
  {
    id: 1,
    schoolLevel: "초등학교",
    school: "순천향초",
    grade: 5,
    name: "김서준",
    email: "sjkim01@sch.ac.kr",
    totalScore: 25,
    creativity: 12,
    empathy: 8,
    global: 5,
    topArea: "창의",
    tie: false,
    badgeGrade: "SILVER",
    active: true,
    completions: [
      { title: "AI 인공지능 기초 코딩 워크숍", area: "창의", date: "2026-06-14", points: 7 },
      { title: "과학 탐구 동아리", area: "창의", date: "2026-07-30", points: 5 },
      { title: "인성교육 워크숍", area: "공감", date: "2026-07-18", points: 8 },
      { title: "나의 진로 설계: 꿈을 찾는 시간", area: "글로벌", date: "2026-06-10", points: 5 },
    ],
  },
  {
    id: 2,
    schoolLevel: "중학교",
    school: "순천향중",
    grade: 2,
    name: "이하은",
    email: "haeun.lee02@sch.ac.kr",
    totalScore: 32,
    creativity: 10,
    empathy: 10,
    global: 12,
    topArea: "글로벌",
    tie: false,
    badgeGrade: "GOLD",
    active: true,
  },
  {
    id: 3,
    schoolLevel: "고등학교",
    school: "순천향고",
    grade: 1,
    name: "박도윤",
    email: "dypark03@sch.ac.kr",
    totalScore: 12,
    creativity: 5,
    empathy: 3,
    global: 4,
    topArea: "－",
    tie: false,
    badgeGrade: "NONE",
    active: false,
  },
  {
    id: 4,
    schoolLevel: "고등학교",
    school: "순천향고",
    grade: 2,
    name: "최유진",
    email: "yjchoi04@sch.ac.kr",
    totalScore: 33,
    creativity: 15,
    empathy: 10,
    global: 8,
    topArea: "창의",
    tie: false,
    badgeGrade: "GOLD",
    active: true,
  },
  {
    id: 5,
    schoolLevel: "중학교",
    school: "순천향중",
    grade: 1,
    name: "이도현",
    email: "dhlee05@sch.ac.kr",
    totalScore: 16,
    creativity: 6,
    empathy: 6,
    global: 4,
    topArea: "공감",
    tie: true,
    badgeGrade: "SILVER",
    active: true,
  },
];
