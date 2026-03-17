
export enum MenuType {
  HOME = '메인',
  DASHBOARD = '마이페이지',
  COMPETENCY = '역량진단',
  ACADEMIC = '학사정보',
  COUNSELING = '통합상담',
  JOB = '취업정보',
  HS_EMPLOYMENT = '고교생 맞춤형 고용서비스',
}

export const MENU_STRUCTURE: Record<MenuType, string[]> = {
  [MenuType.HOME]: [],
  [MenuType.DASHBOARD]: [],
  [MenuType.COMPETENCY]: ['나의 진로 및 비전', '핵심역량진단', '전공능력진단', '대학생활적응진단', '진로적성진단'],
  [MenuType.ACADEMIC]: ['전공별 졸업요건', '나의 시간표', '나의 수강 기록', '과목 탐색', '졸업 시뮬레이션'],
  [MenuType.COUNSELING]: ['통합상담 소개', '교수상담', '진로취업상담', '심리상담', '내 상담현황'],
  [MenuType.JOB]: ['목표직업탐색', '목표기업탐색', '교내채용정보', '이력서 작성', '취업 빅데이터'],
  [MenuType.HS_EMPLOYMENT]: ['고맞고 한눈에 알아보기'],
};

export interface UserProfile {
  name: string;
  studentId: string;
  department: string;
  grade: number;
  semester: number;
  creditsEarned: number;
  gpa: number;
  status?: {
    probation: boolean;
    undeclared: boolean;
    returningLowGPA: boolean;
    transfer: boolean;
    earlyAdmission: boolean;
  }
}

export interface CompetencyScore {
  subject: string;
  A: number; // Student
  B: number; // Dept Avg
  fullMark: number;
}

export interface TimeTableItem {
  id: string;
  day: string;
  time: string;
  subject: string;
  room: string;
  color: string;
}

// Chat interface for GenAI
export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

// Non-curricular Program Interfaces
export interface ProgramSession {
  id: string;
  name: string; // 차수명
  eduPeriod: string; // 교육기간
  applyPeriod: string; // 신청기간
  location: string;
  instructor: string;
  capacity: number;
  currentApplied: number;
  status: '접수중' | '마감' | '준비중';
}

export interface Program {
  id: string;
  title: string;
  thumbnail: string; // URL
  department: string; // 운영부서
  mainCompetency: string; // 주핵심역량
  subCompetency: string; // 부핵심역량
  eduPeriod: string;
  applyPeriod: string;
  description: string;
  sessions: ProgramSession[];
}
