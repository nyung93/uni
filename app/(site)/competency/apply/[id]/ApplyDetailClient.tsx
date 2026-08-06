"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Program } from "@/lib/programs";

export default function ApplyDetailClient({ program }: { program: Program }) {
  const router = useRouter();
  const [revealed, setRevealed] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [favorite, setFavorite] = useState(false);

  function handleApply() {
    alert("신청이 완료되었습니다.");
    router.push("/competency/history");
  }

  return (
    <>
      <div className="crumb">
        역량개발 <b>›</b> 프로그램 신청 <b>›</b> 신청 상세
      </div>
      <div className="page-title-row">
        <span className="page-title">프로그램 신청 상세</span>
      </div>

      <div className="card-box">
        <div className="dp2-top">
          <div className="dp2-thumb" style={{ background: program.gradientCss }}>
            {program.icon}
          </div>
          <div className="dp2-head">
            <div className="dp2-status">
              <span className="dot" /><span className="live">진행중</span>
              <span className="dday">{program.dday}</span>
              <button type="button" className="fav" onClick={() => setFavorite((v) => !v)}>
                {favorite ? "★ 관심프로그램" : "☆ 관심프로그램"}
              </button>
            </div>
            <div className="dp2-title">{program.title}</div>

            <div className="dp2-info">
              <div className="k">다면적 역량</div>
              <div><span className="dp2-cred">🏅 {program.competencyArea} {program.competencyPoints}점</span></div>
            </div>
            <div className="dp2-info">
              <div className="k">운영부서</div>
              <div>{program.deptName} · {program.deptContact}</div>
            </div>
          </div>
        </div>

        <div className="sec-h"><span className="ic">🗒</span> 신청 정보</div>
        <div className="target-rows">
          <div className="target-row"><span className="tk">학교구분</span>{program.targetSchoolLevel}</div>
          <div className="target-row"><span className="tk">학년</span>{program.targetGrade}</div>
        </div>

        <div className="sec-h"><span className="ic">🗓</span> 프로그램 정보</div>
        <div className="prog-info-box">
          <div className="prog-info-top">
            <div className="left">
              <span className="pi-tag">신청가능</span>
              <span className="pi-cha">{program.roundLabel}</span>
            </div>
            <div className="right">
              신청 <b>{program.appliedCount}</b> · 정원 <b>{program.capacity}</b>
              <button type="button" className="btn btn-navy btn-mini" onClick={() => setRevealed(true)}>
                신청
              </button>
            </div>
          </div>
          <div className="prog-info-dates">
            <div><span className="k">📅 신청기간</span>{program.applyPeriodFull}</div>
            <div><span className="k">📅 교육기간</span>{program.eduPeriodFull}</div>
          </div>
        </div>

        <div className={`reveal-box${revealed ? " show" : ""}`}>
          <div className="pt">신청자 정보</div>
          <div className="form-row">
            <div className="form-label">이름</div>
            <div className="form-ctrl">
              <input type="text" className="mf-input ro" defaultValue="이하은" readOnly style={{ width: 120 }} />
              <span className="help">로그인 정보 자동</span>
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">아이디</div>
            <div className="form-ctrl">
              <input type="text" className="mf-input ro" defaultValue="haeun.lee02@sch.ac.kr" readOnly style={{ width: 200 }} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">개인정보 동의<span className="req">*</span></div>
            <div className="form-ctrl">
              <button type="button" className="check-item" onClick={() => setAgreed((v) => !v)}>
                <span className={`check-box${agreed ? " on" : ""}`} />개인정보 수집·이용에 동의합니다.
              </button>
            </div>
          </div>
          <div className="form-row" style={{ justifyContent: "center", paddingTop: 8 }}>
            <button type="button" className="btn btn-grey btn-mini" onClick={() => setRevealed(false)}>
              취소
            </button>
            <button type="button" className="btn btn-navy btn-mini" disabled={!agreed} onClick={handleApply}>
              신청하기
            </button>
          </div>
        </div>

        <div className="sec-h"><span className="ic">💡</span> 프로그램 상세내용</div>
        <div className="detail-content" dangerouslySetInnerHTML={{ __html: program.description ?? "" }} />
      </div>
    </>
  );
}
