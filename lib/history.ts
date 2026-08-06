export type HistoryStatus = "DONE" | "WAIT" | "CANCELED";

export interface HistoryItem {
  id: number;
  icon: string;
  gradientCss: string;
  title: string;
  roundLabel: string;
  eduPeriod: string;
  area: string;
  status: HistoryStatus;
  points: number | null;
}

export const historyItems: HistoryItem[] = [
  {
    id: 1,
    icon: "🎯",
    gradientCss: "linear-gradient(135deg,var(--sky),var(--blue))",
    title: "나의 진로 설계: 꿈을 찾는 시간",
    roundLabel: "1차",
    eduPeriod: "05-20~05-20",
    area: "글로벌",
    status: "DONE",
    points: 12,
  },
  {
    id: 2,
    icon: "🔬",
    gradientCss: "linear-gradient(135deg,var(--green),#5cb88a)",
    title: "과학 탐구 동아리",
    roundLabel: "2차",
    eduPeriod: "06-20~07-20",
    area: "창의",
    status: "DONE",
    points: 6,
  },
  {
    id: 3,
    icon: "🤖",
    gradientCss: "linear-gradient(135deg,var(--navy),var(--blue))",
    title: "AI 인공지능 기초 코딩 워크숍",
    roundLabel: "1차",
    eduPeriod: "05-14~06-14",
    area: "창의",
    status: "DONE",
    points: 4,
  },
  {
    id: 4,
    icon: "🤝",
    gradientCss: "linear-gradient(135deg,#8b93a0,#a9b1ba)",
    title: "인성교육 워크숍",
    roundLabel: "1차",
    eduPeriod: "07-18~07-18",
    area: "공감",
    status: "DONE",
    points: 10,
  },
  {
    id: 5,
    icon: "🏆",
    gradientCss: "linear-gradient(135deg,#8b93a0,#a9b1ba)",
    title: "창의 로봇 경진대회",
    roundLabel: "1차",
    eduPeriod: "08-20~08-20",
    area: "창의",
    status: "WAIT",
    points: null,
  },
  {
    id: 6,
    icon: "📚",
    gradientCss: "linear-gradient(135deg,#c7ccd2,#dde1e4)",
    title: "독서토론 동아리",
    roundLabel: "1차",
    eduPeriod: "11-04~11-04",
    area: "공감",
    status: "CANCELED",
    points: null,
  },
];
