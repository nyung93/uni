export type ApplicantStatus = "WAIT" | "PENDING" | "PARTICIPATING" | "DONE" | "CANCELED" | "ABSENT";

export interface Applicant {
  id: number;
  name: string;
  email: string | null;
  school: string;
  grade: number;
  classNumber: string;
  round: string;
  appliedAt: string;
  status: ApplicantStatus;
}

/** A.2 프로그램 지원자 관리 목업 데이터. 프로토타입 단계로 모든 프로그램에 동일 목록을 재사용한다. */
export const applicants: Applicant[] = [
  { id: 1, name: "김서준", email: "seojun@abc.kr", school: "순천향초", grade: 5, classNumber: "3-12", round: "1차", appliedAt: "2026-07-09", status: "WAIT" },
  { id: 2, name: "이하은", email: null, school: "순천향중", grade: 2, classNumber: "1-07", round: "1차", appliedAt: "2026-07-08", status: "WAIT" },
  { id: 3, name: "박도윤", email: "doyun@abc.kr", school: "순천향고", grade: 1, classNumber: "4-21", round: "2차", appliedAt: "2026-07-05", status: "CANCELED" },
];

export const statusLabel: Record<ApplicantStatus, string> = {
  WAIT: "신청",
  PENDING: "대기",
  PARTICIPATING: "참여",
  DONE: "수료",
  CANCELED: "취소",
  ABSENT: "불참",
};

export const statusClass: Record<ApplicantStatus, string> = {
  WAIT: "t-wait",
  PENDING: "t-wait",
  PARTICIPATING: "t-wait",
  DONE: "t-done",
  CANCELED: "t-canc",
  ABSENT: "t-canc",
};
