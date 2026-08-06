"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { comingSoonAlert } from "@/lib/ui";

export default function MyPageEdit() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("저장되었습니다.");
    router.push("/mypage");
  }

  return (
    <>
      <div className="crumb">
        학생서비스 <b>›</b> 마이페이지 <b>›</b> 내정보 수정
      </div>
      <div className="page-title-row">
        <span className="page-title">
          내정보 수정<span className="pid">학생</span>
        </span>
      </div>

      <form className="edit-wrap" onSubmit={handleSubmit}>
        <div className="edit-sec">
          <div className="edit-sec-h">기본정보</div>
          <div className="edit-row">
            <div className="edit-label">이름</div>
            <div className="edit-ctrl">
              <input type="text" defaultValue="이하은" readOnly />
            </div>
          </div>
          <div className="edit-row">
            <div className="edit-label">아이디</div>
            <div className="edit-ctrl">
              <input type="text" defaultValue="haeun.lee02@sch.ac.kr" readOnly style={{ width: 220 }} />
              <span className="edit-help">* 아이디(이메일)는 수정할 수 없습니다.</span>
            </div>
          </div>
        </div>

        <div className="edit-sec">
          <div className="edit-sec-h">학적정보 수정</div>
          <div className="edit-row">
            <div className="edit-label">학교</div>
            <div className="edit-ctrl">
              <input type="text" defaultValue="순천향중학교" style={{ width: 180 }} />
              <button type="button" className="btn btn-grey btn-mini" onClick={comingSoonAlert}>
                학교 검색
              </button>
            </div>
          </div>
          <div className="edit-row">
            <div className="edit-label">학년 / 반</div>
            <div className="edit-ctrl">
              <select style={{ width: 100 }} defaultValue="2학년">
                <option>2학년</option>
              </select>
              <select style={{ width: 100 }} defaultValue="3반">
                <option>3반</option>
              </select>
              <span className="edit-help">* 매년 3/1 이후 최초 로그인 시 직접 수정</span>
            </div>
          </div>
        </div>

        <div className="edit-sec">
          <div className="edit-sec-h">비밀번호 설정</div>
          <div className="edit-row">
            <div className="edit-label">새 비밀번호</div>
            <div className="edit-ctrl">
              <input type="password" style={{ width: 220 }} />
              <span className="edit-help">* 영대문자·소문자·숫자·특수문자 중 2종 이상 조합, 10자 이상</span>
            </div>
          </div>
          <div className="edit-row">
            <div className="edit-label">비밀번호 확인</div>
            <div className="edit-ctrl">
              <input type="password" style={{ width: 220 }} />
            </div>
          </div>
        </div>

        <div className="edit-actions">
          <Link className="btn btn-grey" href="/mypage">
            취소
          </Link>
          <button type="submit" className="btn btn-navy">
            저장
          </button>
          <span className="edit-help" style={{ marginLeft: 6 }}>
            * 비밀번호 설정 완료 시 마이페이지 얼럿이 사라지고 전체 기능 이용 가능
          </span>
        </div>
      </form>
    </>
  );
}
