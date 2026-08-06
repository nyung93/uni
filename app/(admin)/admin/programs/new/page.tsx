"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { comingSoonAlert } from "@/lib/ui";

const gradesByLevel: Record<string, string[]> = {
  초: ["1", "2", "3", "4", "5", "6", "전체 학년"],
  중: ["1", "2", "3", "전체 학년"],
  고: ["1", "2", "3", "전체 학년"],
};
const levelColor: Record<string, string> = { 초: "#1a73e8", 중: "#e65100", 고: "#6a1b9a" };

const scoreTable = [
  { type: "일반참여형", desc: "특강·견학·전공체험 등", scores: ["4점", "5점", "7점", "10점", "13점"] },
  { type: "심화 실습형", desc: "실험·실습/프로젝트·과제형", scores: ["5점", "6점", "8점", "12점", "15점"] },
];

export default function AdminProgramNewPage() {
  const router = useRouter();
  const [indoor, setIndoor] = useState(true);
  const [visible, setVisible] = useState(true);
  const [selectedGrades, setSelectedGrades] = useState<Set<string>>(new Set(["고-전체 학년"]));
  const [duplicateApply, setDuplicateApply] = useState(false);
  const [opType, setOpType] = useState<"일반참여형" | "심화 실습형">("일반참여형");
  const [area, setArea] = useState<"창의" | "공감" | "글로벌">("창의");
  const [score, setScore] = useState(4);
  const [showScoreGuide, setShowScoreGuide] = useState(false);
  const [onlineApply, setOnlineApply] = useState(true);
  const [printForms, setPrintForms] = useState<Set<string>>(new Set(["신청서", "참여확인서", "수료증"]));

  function toggleGrade(level: string, grade: string) {
    const key = `${level}-${grade}`;
    setSelectedGrades((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function togglePrintForm(name: string) {
    setPrintForms((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("등록되었습니다.");
    router.push("/admin/programs");
  }

  return (
    <>
      <div className="crumb">
        비교과 프로그램 <b>›</b> 프로그램 관리 <b>›</b> 등록
      </div>
      <div className="page-title-row">
        <span className="page-title">비교과 프로그램 등록</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grp">
          <div className="grp-cap"><span className="num">1</span> 기본정보 <span className="tail">필수 항목</span></div>
          <div className="grp-body">
            <div className="form-row">
              <div className="form-label">우선순위</div>
              <div className="form-ctrl">
                <button type="button" className="check-item" onClick={(e) => e.currentTarget.querySelector(".check-box")?.classList.toggle("on")}>
                  <span className="check-box" /> 최상단 고정
                </button>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">년도 / 학기<span className="req">*</span></div>
              <div className="form-ctrl">
                <select className="filter-select"><option>2026</option></select>
                <select className="filter-select"><option>1학기</option><option>2학기</option></select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">프로그램명<span className="req">*</span></div>
              <div className="form-ctrl"><input type="text" className="mf-input" style={{ width: "70%" }} /></div>
            </div>
            <div className="form-row">
              <div className="form-label">교내 / 외<span className="req">*</span></div>
              <div className="form-ctrl">
                <div className="seg-toggle">
                  <span className={`seg${indoor ? " active" : ""}`} onClick={() => setIndoor(true)}>교내</span>
                  <span className={`seg${!indoor ? " active" : ""}`} onClick={() => setIndoor(false)}>교외</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grp">
          <div className="grp-cap"><span className="num">2</span> 서비스 및 노출 설정</div>
          <div className="grp-body">
            <div className="form-row">
              <div className="form-label">노출여부</div>
              <div className="form-ctrl">
                <div className="seg-toggle">
                  <span className={`seg${visible ? " active" : ""}`} onClick={() => setVisible(true)}>보임</span>
                  <span className={`seg${!visible ? " active" : ""}`} onClick={() => setVisible(false)}>숨김</span>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">대표이미지</div>
              <div className="form-ctrl">
                <div className="upload">
                  <button type="button" className="btn btn-grey" onClick={comingSoonAlert}>선택</button>
                  <span className="help">선택된 파일 없음</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grp">
          <div className="grp-cap"><span className="num">3</span> 신청대상 설정 <span className="new">전체 학년 전 학교급 확대</span></div>
          <div className="grp-body">
            <div className="form-row">
              <div className="form-label">학교 선택</div>
              <div className="form-ctrl">
                {["전체", "초등학교", "중학교", "고등학교"].map((s) => (
                  <button type="button" key={s} className="check-item" onClick={(e) => e.currentTarget.querySelector(".check-box")?.classList.toggle("on")}>
                    <span className="check-box" /> {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-row" style={{ alignItems: "flex-start" }}>
              <div className="form-label">학년</div>
              <div className="form-ctrl" style={{ display: "block" }}>
                {(["초", "중", "고"] as const).map((level) => (
                  <div className="sub" key={level}>
                    <div className="sub-cap">
                      <span className="icon" style={{ background: levelColor[level] }} /> {level}
                      <span className="tail">{level === "초" ? "1~6학년" : "1~3학년"}</span>
                    </div>
                    <div className="form-ctrl">
                      {gradesByLevel[level].map((g) => {
                        const key = `${level}-${g}`;
                        const on = selectedGrades.has(key);
                        return (
                          <button type="button" key={key} className="check-item" onClick={() => toggleGrade(level, g)}>
                            <span className={`check-box${on ? " on" : ""}`} /> {g}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grp">
          <div className="grp-cap"><span className="num">4</span> 운영정보 <span className="new">운영기간·차수 항목 확장</span></div>
          <div className="grp-body">
            <div className="form-row">
              <div className="form-label">운영부서<span className="req">*</span></div>
              <div className="form-ctrl"><select className="filter-select" style={{ width: 200 }}><option>선택</option></select></div>
            </div>
            <div className="form-row">
              <div className="form-label">담당자<span className="req">*</span></div>
              <div className="form-ctrl">
                <input type="text" className="mf-input" placeholder="이름" style={{ width: 120 }} />
                <input type="text" className="mf-input" placeholder="연락처" style={{ width: 150 }} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">운영기간<span className="req">*</span></div>
              <div className="form-ctrl">
                <input type="date" className="mf-input" /> <span>~</span> <input type="date" className="mf-input" />
                <span className="help">* 신규 : 운영일자 항목</span>
              </div>
            </div>
            <div className="form-row" style={{ alignItems: "flex-start" }}>
              <div className="form-label">교육정보(차수)</div>
              <div className="form-ctrl" style={{ display: "block" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  총 <input type="number" className="mf-input" style={{ width: 60 }} defaultValue={2} /> 차수
                  <button type="button" className="btn btn-navy btn-mini" onClick={comingSoonAlert}>＋ 차수 추가</button>
                </div>
                <table className="mini-grid">
                  <thead>
                    <tr><th>차수 또는 분반명</th><th>신청기간(일시)</th><th>교육기간(일시)</th><th>모집인원(최대/대기)</th><th>교/강사</th><th>교육장소</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>1차</td><td>05-01 09:00~05-13 18:00</td><td>05-14 09:00~06-14 18:00</td><td>20 / 5</td><td>홍길동 교수</td><td>미래융합센터 401호</td></tr>
                    <tr><td>2차</td><td>06-01 09:00~06-13 18:00</td><td>06-20 09:00~07-20 18:00</td><td>20 / 5</td><td>홍길동 교수</td><td>미래융합센터 401호</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">중복신청여부</div>
              <div className="form-ctrl">
                <div className="sw" onClick={() => setDuplicateApply((v) => !v)}>
                  <span className={duplicateApply ? "off" : "on"}>사용</span>
                  <span className={duplicateApply ? "on" : "off"}>미사용</span>
                </div>
                <span className="help">* 차수별 중복 신청 가능 여부 설정</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grp">
          <div className="grp-cap"><span className="num">5</span> 역량점수 <span className="new">신규</span></div>
          <div className="grp-body">
            <div className="form-row">
              <div className="form-label">운영 형태<span className="req">*</span></div>
              <div className="form-ctrl">
                <div className="seg-toggle">
                  <span className={`seg${opType === "일반참여형" ? " active" : ""}`} onClick={() => setOpType("일반참여형")}>일반참여형</span>
                  <span className={`seg${opType === "심화 실습형" ? " active" : ""}`} onClick={() => setOpType("심화 실습형")}>심화 실습형</span>
                </div>
                <span className="help">* 일반참여형 : 특강/견학/전공체험 등 · 심화 실습형 : 실험·실습/프로젝트·과제형</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">다면적역량<span className="req">*</span></div>
              <div className="form-ctrl">
                <div className="seg-toggle">
                  {(["창의", "공감", "글로벌"] as const).map((a) => (
                    <span key={a} className={`seg${area === a ? " active" : ""}`} onClick={() => setArea(a)}>{a}</span>
                  ))}
                </div>
                <span className="help">* 3개 영역 중 1개만 선택 · 디지털 배지 영역과 연동</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">총 교육시간<span className="req">*</span></div>
              <div className="form-ctrl">
                <input type="number" className="mf-input" style={{ width: 80 }} /> 시간
                <span className="help">* 운영정보 항목에서 이동</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">역량점수<span className="req">*</span></div>
              <div className="form-ctrl">
                <input type="number" className="mf-input" style={{ width: 80 }} value={score} onChange={(e) => setScore(Number(e.target.value))} />
                <span className="help">* 운영 형태·총 교육시간 기준 자동 산정, 필요 시 수정 가능</span>
                <button type="button" className="btn btn-grey btn-mini" onClick={() => setShowScoreGuide((v) => !v)}>📋 부여 기준 보기</button>
              </div>
            </div>

            {showScoreGuide && (
              <div style={{ marginTop: 10, padding: "10px 12px", border: "1px dashed var(--navy)", borderRadius: 8, background: "#f8fbff" }}>
                <div style={{ fontSize: 11, fontWeight: "bold", color: "var(--navy)", marginBottom: 6 }}>🔍 [팝업 미리보기] '부여 기준 보기' 클릭 시 표시되는 역량점수 부여 기준표</div>
                <table className="mini-grid">
                  <thead>
                    <tr><th>운영 형태</th><th>1시간 이상~3시간 미만</th><th>3시간 이상~6시간 미만</th><th>6시간 이상 · 1일 과정</th><th>2일 이상(다일/숙박)</th><th>1주 이상</th></tr>
                  </thead>
                  <tbody>
                    {scoreTable.map((row) => (
                      <tr key={row.type}>
                        <td style={{ textAlign: "left" }}>{row.type}<br /><span className="help">{row.desc}</span></td>
                        {row.scores.map((s, i) => <td key={i}>{s}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="help" style={{ marginTop: 8 }}>* 상기 기준을 원칙으로 하되 역량점수는 일부 가감 가능 (자동 입력 후 사용자 수정 허용)</div>
              </div>
            )}
          </div>
        </div>

        <div className="grp">
          <div className="grp-cap"><span className="num">6</span> 접수 및 만족도</div>
          <div className="grp-body">
            <div className="form-row">
              <div className="form-label">온라인접수<span className="req">*</span></div>
              <div className="form-ctrl">
                <div className="sw" onClick={() => setOnlineApply((v) => !v)}>
                  <span className={onlineApply ? "on" : "off"}>사용</span>
                  <span className={onlineApply ? "off" : "on"}>미사용</span>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">만족도 문항<span className="req">*</span></div>
              <div className="form-ctrl">
                <span style={{ fontSize: 11 }}>공통 :</span>
                <select className="filter-select" style={{ width: 200 }}><option>선택</option></select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">만족도조사 기간<span className="req">*</span></div>
              <div className="form-ctrl">
                <input type="date" className="mf-input" /> <select className="filter-select"><option>정시</option></select>
                <span>~</span>
                <input type="date" className="mf-input" /> <select className="filter-select"><option>정시</option></select>
              </div>
            </div>
          </div>
        </div>

        <div className="grp">
          <div className="grp-cap"><span className="num">7</span> 인쇄양식</div>
          <div className="grp-body">
            <div className="form-row">
              <div className="form-label">인쇄양식사용</div>
              <div className="form-ctrl">
                {["전체", "신청서", "참여확인서", "수료증", "사용안함"].map((name) => (
                  <button type="button" key={name} className="check-item" onClick={() => togglePrintForm(name)}>
                    <span className={`check-box${printForms.has(name) ? " on" : ""}`} /> {name}
                  </button>
                ))}
              </div>
            </div>
            <div className="form-row">
              <div className="form-label">발급기관장</div>
              <div className="form-ctrl">
                <input type="text" className="mf-input" defaultValue="○○교육지원청 교육장" style={{ width: "60%" }} />
                <button type="button" className="btn btn-grey btn-mini" onClick={comingSoonAlert}>파일 선택</button>
              </div>
            </div>
          </div>
        </div>

        <div className="grp">
          <div className="grp-cap"><span className="num">8</span> 내용 <span className="new">에디터 분리</span></div>
          <div className="grp-body">
            <div className="form-row" style={{ alignItems: "flex-start" }}>
              <div className="form-label">내용<span className="req">*</span></div>
              <div className="form-ctrl" style={{ display: "block" }}>
                <div style={{ border: "1px solid var(--bd)", borderRadius: 6, overflow: "hidden" }}>
                  <div style={{ display: "flex", gap: 4, padding: "6px 8px", background: "var(--bg)", borderBottom: "1px solid var(--bd2)", flexWrap: "wrap" }}>
                    {["B", "I", "U", "≡", "🔗", "🖼", "표"].map((t) => (
                      <button type="button" key={t} className="btn btn-grey btn-mini" onClick={comingSoonAlert}>{t}</button>
                    ))}
                  </div>
                  <div style={{ minHeight: 120, padding: 12, fontSize: 11, color: "#aaa", background: "#fff" }}>
                    (에디터 입력 영역 — 별도 리치텍스트 에디터 컴포넌트로 구현)
                  </div>
                </div>
                <span className="help">* 리치텍스트 에디터(별도 컴포넌트)로 구현 · 서식·이미지·표 삽입 지원</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <button type="button" className="btn btn-grey" onClick={() => alert("임시저장되었습니다.")}>임시저장</button>
          <button type="submit" className="btn btn-navy">저장</button>
        </div>
      </form>
    </>
  );
}
