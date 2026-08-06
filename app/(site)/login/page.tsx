"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"student" | "admin">("student");
  const [firstLogin, setFirstLogin] = useState(false);
  const [finderOpen, setFinderOpen] = useState(false);
  const [idResult, setIdResult] = useState(false);
  const [pwResult, setPwResult] = useState(false);

  function handleStudentLogin(e: React.FormEvent) {
    e.preventDefault();
    router.push("/mypage");
  }

  function handleFirstLogin(e: React.FormEvent) {
    e.preventDefault();
    alert("본인확인이 완료되었습니다. 비밀번호를 설정해주세요.");
    router.push("/mypage/edit");
  }

  function handleAdminLogin(e: React.FormEvent) {
    e.preventDefault();
    router.push("/admin/programs");
  }

  return (
    <>
      <div className="crumb">
        회원관리 <b>›</b> 로그인 <b>›</b> 통합 로그인
      </div>
      <div className="page-title-row">
        <span className="page-title">로그인</span>
      </div>

      <div className="login-wrap">
        <div className="tab-row">
          <div className={`tab-btn${tab === "student" ? " active" : ""}`} onClick={() => { setTab("student"); setFirstLogin(false); }}>학생</div>
          <div className={`tab-btn${tab === "admin" ? " active" : ""}`} onClick={() => { setTab("admin"); setFirstLogin(false); }}>관리자</div>
        </div>

        {tab === "student" ? (
          <div className="login-card">
            <div className="card-h">
              <span className="t">학생 로그인</span>
              <span className="mode-toggle">
                일반 로그인 / <button type="button" onClick={() => setFirstLogin((v) => !v)}>{firstLogin ? "일반 로그인으로 돌아가기" : "최초 로그인이신가요?"}</button>
              </span>
            </div>

            {!firstLogin ? (
              <form onSubmit={handleStudentLogin}>
                <div className="f-row"><label>아이디</label><input type="text" placeholder="아이디 (이메일)" /></div>
                <div className="f-row"><label>비밀번호</label><input type="password" placeholder="비밀번호" /></div>
                <div className="login-actions"><button type="submit" className="btn btn-navy">로그인</button></div>
                <div className="find-links">
                  <button type="button" onClick={() => setFinderOpen(true)}>아이디 찾기</button>
                  <span className="sep">|</span>
                  <button type="button" onClick={() => setFinderOpen(true)}>비밀번호 찾기</button>
                </div>
              </form>
            ) : (
              <form className="first-login-box" onSubmit={handleFirstLogin}>
                <div className="fl-tt">🔑 최초 로그인 — 학년/반/학교/이름/이메일로 본인확인 후 로그인</div>
                <div className="fl-grid">
                  <select><option>학교 선택</option></select>
                  <select><option>학년 선택</option></select>
                  <select><option>반 선택</option></select>
                </div>
                <div className="fl-row2">
                  <input type="text" placeholder="학생 이름" />
                  <input type="email" placeholder="이메일" />
                </div>
                <div className="fl-act"><button type="submit" className="btn btn-green">본인확인 후 로그인</button></div>
                <div className="fl-note">※ 최초 로그인 성공 시 마이페이지로 이동하며, <b>비밀번호를 설정하기 전까지는 시스템의 다른 기능을 이용할 수 없습니다.</b></div>
              </form>
            )}
          </div>
        ) : (
          <form className="login-card" onSubmit={handleAdminLogin}>
            <div className="card-h"><span className="t">관리자 로그인</span></div>
            <div className="f-row"><label>아이디</label><input type="text" placeholder="관리자 아이디" /></div>
            <div className="f-row"><label>비밀번호</label><input type="password" placeholder="비밀번호" /></div>
            <div className="login-actions"><button type="submit" className="btn btn-navy">로그인</button></div>
          </form>
        )}
      </div>

      {finderOpen && (
        <div className="modal-overlay" onClick={() => setFinderOpen(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 560 }}>
            <div className="modal-head">
              <span className="tt">아이디 / 비밀번호 찾기</span>
              <button type="button" className="modal-close" onClick={() => setFinderOpen(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="pp-cols">
                <div className="pp-col">
                  <div className="pc-t">아이디 찾기</div>
                  <div className="pc-row"><input type="text" placeholder="이름" /><input type="text" placeholder="학교" /></div>
                  <div className="pc-row"><input type="email" placeholder="가입 시 등록한 이메일" /></div>
                  <button type="button" className="btn btn-navy btn-mini" style={{ width: "100%" }} onClick={() => setIdResult(true)}>인증 후 아이디 확인</button>
                  {idResult && <div className="pc-result">확인된 아이디 : ha***05@sch.ac.kr</div>}
                </div>
                <div className="pp-col">
                  <div className="pc-t">비밀번호 찾기</div>
                  <div className="pc-row"><input type="text" placeholder="아이디" /></div>
                  <div className="pc-row"><input type="email" placeholder="가입 시 등록한 이메일" /></div>
                  <button type="button" className="btn btn-navy btn-mini" style={{ width: "100%" }} onClick={() => setPwResult(true)}>인증 후 임시비밀번호 발송</button>
                  {pwResult && <div className="pc-result">등록 이메일로 임시 비밀번호를 발송했습니다.</div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
