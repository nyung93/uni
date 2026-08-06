export type JoinType = "SYSTEM" | "AUTO";

export interface DirectoryCompletion {
  title: string;
  area: string;
  date: string;
  points: number;
}

export interface DirectoryProfile {
  totalScore: number;
  creativity: number;
  empathy: number;
  global: number;
  topArea: string;
  badgeGrade: "GOLD" | "SILVER" | "NONE";
  completions: DirectoryCompletion[];
}

export interface StudentDirectoryEntry {
  id: number;
  joinType: JoinType;
  name: string;
  email: string;
  schoolLevel: string;
  school: string;
  grade: number;
  classNo: string | null;
  registeredAt: string;
  lastLoginAt: string | null;
  profile?: DirectoryProfile;
}

/** A.7 학생 조회 목업 데이터. */
export const studentDirectory: StudentDirectoryEntry[] = [
  {
    id: 1,
    joinType: "SYSTEM",
    name: "김서준",
    email: "sjkim01@sch.ac.kr",
    schoolLevel: "초등학교",
    school: "순천향초",
    grade: 5,
    classNo: "2반",
    registeredAt: "2026-03-02",
    lastLoginAt: "2026-08-05",
    profile: {
      totalScore: 25,
      creativity: 12,
      empathy: 8,
      global: 5,
      topArea: "창의",
      badgeGrade: "SILVER",
      completions: [
        { title: "AI 인공지능 기초 코딩 워크숍", area: "창의", date: "2026-06-14", points: 7 },
        { title: "과학 탐구 동아리", area: "창의", date: "2026-07-30", points: 5 },
      ],
    },
  },
  {
    id: 2,
    joinType: "SYSTEM",
    name: "이하은",
    email: "haeun.lee02@sch.ac.kr",
    schoolLevel: "중학교",
    school: "순천향중",
    grade: 2,
    classNo: "3반",
    registeredAt: "2026-03-05",
    lastLoginAt: "2026-08-04",
  },
  {
    id: 3,
    joinType: "SYSTEM",
    name: "이도현",
    email: "dhlee05@sch.ac.kr",
    schoolLevel: "중학교",
    school: "순천향중",
    grade: 1,
    classNo: "2반",
    registeredAt: "2026-03-12",
    lastLoginAt: "2026-07-30",
  },
  {
    id: 4,
    joinType: "AUTO",
    name: "정민준",
    email: "minjun.jeong@naver.com",
    schoolLevel: "초등학교",
    school: "온양초",
    grade: 4,
    classNo: null,
    registeredAt: "2026-07-20",
    lastLoginAt: null,
  },
  {
    id: 5,
    joinType: "AUTO",
    name: "한소율",
    email: "soyul.han@gmail.com",
    schoolLevel: "중학교",
    school: "아산중",
    grade: 3,
    classNo: null,
    registeredAt: "2026-07-22",
    lastLoginAt: null,
  },
];
