"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { comingSoonAlert } from "@/lib/ui";

export default function SignupPage() {
  const router = useRouter();
  const [memberType, setMemberType] = useState("초등학생");
  const [agreed, setAgreed] = useState(false);
  const [captcha, setCaptcha] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("가입 신청이 접수되었습니다. (프로토타입)");
    router.push("/mypage");
  }

  return (
    <>
      <div className="crumb">
        회원관리 <b>›</b> 회원가입 <b>›</b> 초·중·고 회원가입
      </div>
      <div className="page-title-row">
        <span className="page-title">초·중·고 회원가입</span>
      </div>

      <form className="card-box" style={{ maxWidth: 720, margin: "0 auto" }} onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="sec-title">계정 정보</div>
          <div className="form-row">
            <div className="form-label">아이디<span className="req">*</span></div>
            <div className="form-ctrl">
              <input type="text" className="mf-input" style={{ width: "30%" }} placeholder="아이디" />
              <span className="note-inline" style={{ fontSize: 13 }}>@</span>
              <input type="text" className="mf-input" style={{ width: "30%" }} placeholder="주소 (예: naver.com)" />
              <button type="button" className="btn btn-navy btn-mini" onClick={comingSoonAlert}>중복확인</button>
              <span className="help">* 아이디는 이메일 주소로 사용합니다.</span>
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">비밀번호<span className="req">*</span></div>
            <div className="form-ctrl">
              <input type="password" className="mf-input" style={{ width: "55%" }} />
              <span className="help">* 영대문자·소문자·숫자·특수문자 중 2종 이상 조합, 10자 이상</span>
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">비밀번호 확인<span className="req">*</span></div>
            <div className="form-ctrl"><input type="password" className="mf-input" style={{ width: "55%" }} /></div>
          </div>
          <div style={{ padding: "0 13px 12px" }}>
            <div className="callout">
              <b>안내</b> &nbsp;부모님 이메일로 가입하는 경우, 인증메일 및 디지털 배지 확인이 어려울 수 있습니다.
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="sec-title">개인 정보</div>
          <div className="form-row">
            <div className="form-label">이름<span className="req">*</span></div>
            <div className="form-ctrl"><input type="text" className="mf-input" style={{ width: "45%" }} /></div>
          </div>
          <div className="form-row">
            <div className="form-label">회원구분<span className="req">*</span></div>
            <div className="form-ctrl">
              <div className="seg-toggle">
                {["초등학생", "중학생", "고등학생"].map((t) => (
                  <span
                    key={t}
                    className={`seg${memberType === t ? " active" : ""}`}
                    onClick={() => setMemberType(t)}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="sec-title">학교 정보</div>
          <div className="form-row">
            <div className="form-label">학교<span className="req">*</span></div>
            <div className="form-ctrl">
              <input type="text" className="mf-input" style={{ width: "50%" }} placeholder="학교명 검색" />
              <button type="button" className="btn btn-grey btn-mini" onClick={comingSoonAlert}>학교 검색</button>
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">학년<span className="req">*</span></div>
            <div className="form-ctrl">
              <select style={{ width: 130 }}><option>학년 선택</option></select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">반 / 번호<span className="req">*</span></div>
            <div className="form-ctrl">
              <input type="number" className="mf-input" style={{ width: 80 }} /> <span className="help">반</span>
              <input type="number" className="mf-input" style={{ width: 80, marginLeft: 8 }} /> <span className="help">번호</span>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="sec-title">약관 동의 · 스팸방지</div>
          <div className="form-row">
            <div className="form-label">개인정보 동의<span className="req">*</span></div>
            <div className="form-ctrl">
              <button type="button" className="check-item" onClick={() => setAgreed((v) => !v)}>
                <span className={`check-box${agreed ? " on" : ""}`} /> 개인정보 수집·이용에 동의합니다.
              </button>
            </div>
          </div>
          <div className="form-row">
            <div className="form-label">스팸방지<span className="req">*</span></div>
            <div className="form-ctrl">
              <div className={`recaptcha${captcha ? " on" : ""}`} onClick={() => setCaptcha((v) => !v)}>
                <span className="chk" /> 로봇이 아닙니다 &nbsp;<span className="help">reCAPTCHA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-actions">
          <Link className="btn btn-grey" href="/mypage">취소</Link>
          <button type="submit" className="btn btn-navy">가입하기</button>
          <span className="note-inline">유효성 검증 통과 시 계정 생성</span>
        </div>
      </form>
    </>
  );
}
