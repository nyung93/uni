export interface Program {
  id: number;
  icon: string;
  gradientCss: string;
  open: boolean;
  category: string;
  type: string;
  place: string;
  target: string;
  applyPeriodShort: string;
  title: string;
  favorite: boolean;

  // 상세 화면 전용 필드 - open=false 인 항목은 상세 페이지가 없으므로 비워둔다.
  dday?: string;
  competencyArea?: string;
  competencyPoints?: number;
  deptName?: string;
  deptContact?: string;
  targetSchoolLevel?: string;
  targetGrade?: string;
  roundLabel?: string;
  appliedCount?: number;
  capacity?: number;
  applyPeriodFull?: string;
  eduPeriodFull?: string;
  description?: string;
}

export const programs: Program[] = [
  {
    id: 1,
    icon: "🤖",
    gradientCss: "linear-gradient(135deg,var(--navy),var(--blue))",
    open: true,
    category: "고등 창의융합",
    type: "심화실습형",
    place: "미래융합센터",
    target: "고등학생",
    applyPeriodShort: "05-01~05-13",
    title: "AI 인공지능 기초 코딩 워크숍",
    favorite: false,
    dday: "D-7",
    competencyArea: "창의",
    competencyPoints: 7,
    deptName: "미래융합센터운영팀",
    deptContact: "041-530-1234 · future@sch.ac.kr",
    targetSchoolLevel: "고등학교",
    targetGrade: "고1 ~ 고2",
    roundLabel: "1 / 2차수",
    appliedCount: 27,
    capacity: 20,
    applyPeriodFull: "2026.05.01(금) 09:00 ~ 2026.05.13(수) 18:00",
    eduPeriodFull: "2026.05.14(목) 09:00 ~ 2026.06.14(일) 18:00",
    description:
      "[체험학습] AI 인공지능 기초 코딩 워크숍<br/><br/>블록코딩 기반 AI 원리 이해 및 실습 중심 진로체험 프로그램입니다. 코딩 경험이 없는 학생도 참여 가능하며, 팀 프로젝트 형태로 간단한 AI 챗봇을 직접 만들어보는 활동으로 마무리됩니다.",
  },
  {
    id: 2,
    icon: "🎯",
    gradientCss: "linear-gradient(135deg,var(--sky),var(--blue))",
    open: true,
    category: "중등 진로설계",
    type: "일반참여형",
    place: "청소년지원센터",
    target: "중학생",
    applyPeriodShort: "05-05~05-19",
    title: "나의 진로 설계: 꿈을 찾는 시간",
    favorite: false,
    dday: "D-13",
    competencyArea: "글로벌",
    competencyPoints: 4,
    deptName: "청소년지원센터운영팀",
    deptContact: "041-530-5678 · career@sch.ac.kr",
    targetSchoolLevel: "중학교",
    targetGrade: "중1 ~ 중3",
    roundLabel: "1 / 1차수",
    appliedCount: 15,
    capacity: 30,
    applyPeriodFull: "2026.05.05(화) 09:00 ~ 2026.05.19(화) 18:00",
    eduPeriodFull: "2026.05.20(수) 13:00 ~ 2026.05.20(수) 17:00",
    description:
      "[진로체험] 나의 진로 설계: 꿈을 찾는 시간<br/><br/>자기이해 검사와 직업인 인터뷰를 통해 자신의 진로를 탐색하는 프로그램입니다. 진로 멘토와의 1:1 상담을 통해 구체적인 목표 직업을 설정해봅니다.",
  },
  {
    id: 3,
    icon: "🔬",
    gradientCss: "linear-gradient(135deg,var(--green),#5cb88a)",
    open: true,
    category: "중등 과학탐구",
    type: "심화실습형",
    place: "융합과학실",
    target: "중학생",
    applyPeriodShort: "05-10~05-24",
    title: "과학 탐구 동아리",
    favorite: true,
    dday: "D-18",
    competencyArea: "창의",
    competencyPoints: 6,
    deptName: "융합과학교육센터",
    deptContact: "041-530-2222 · science@sch.ac.kr",
    targetSchoolLevel: "중학교",
    targetGrade: "중2 ~ 중3",
    roundLabel: "1 / 1차수",
    appliedCount: 18,
    capacity: 24,
    applyPeriodFull: "2026.05.10(일) 09:00 ~ 2026.05.24(일) 18:00",
    eduPeriodFull: "2026.06.20(토) 10:00 ~ 2026.07.20(월) 17:00",
    description:
      "[동아리형] 과학 탐구 동아리<br/><br/>매주 실험 주제를 정해 직접 가설을 세우고 검증하는 탐구 활동입니다. 학기말에는 탐구 결과를 발표하는 소규모 과학전시회로 마무리됩니다.",
  },
  {
    id: 4,
    icon: "🏆",
    gradientCss: "linear-gradient(135deg,#8b93a0,#a9b1ba)",
    open: false,
    category: "중등 창의융합",
    type: "일반참여형",
    place: "미래융합센터",
    target: "중학생",
    applyPeriodShort: "04-10~04-24",
    title: "창의 로봇 경진대회",
    favorite: false,
  },
  {
    id: 5,
    icon: "🤝",
    gradientCss: "linear-gradient(135deg,#8b93a0,#a9b1ba)",
    open: false,
    category: "중등 인성교육",
    type: "일반참여형",
    place: "학생회관",
    target: "중학생",
    applyPeriodShort: "04-15~04-29",
    title: "인성교육 워크숍",
    favorite: false,
  },
];

export function findProgramById(id: number): Program | undefined {
  return programs.find((p) => p.id === id);
}
