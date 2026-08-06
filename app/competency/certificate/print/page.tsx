"use client";

import Link from "next/link";
import { comingSoonAlert } from "@/lib/ui";

export default function CertificatePrintPage() {
  return (
    <>
      <div className="crumb">
        역량개발 <b>›</b> 역량 인증제 <b>›</b> 인증서 출력
      </div>
      <div className="page-title-row">
        <span className="page-title">인증서 출력</span>
      </div>

      <div className="cert-wrap">
        <div className="cert-card">
          <div className="cert-org">순천향대학교 초·중·고 체험프로그램 다면적 역량 인증제</div>
          <div className="cert-title">디지털 배지 인증서</div>
          <div className="cert-medal"><span className="sch">SCH</span><span className="ic">💡</span></div>

          <table className="cert-info">
            <tbody>
              <tr><td className="k">성명</td><td>이도현</td><td className="k">학교</td><td>순천향중학교</td></tr>
              <tr><td className="k">학년</td><td>1학년</td><td className="k">아이디</td><td>dhlee05@sch.ac.kr</td></tr>
              <tr><td className="k">다면적 역량</td><td>창의 (Creativity)</td><td className="k">배지 등급</td><td>실버 (SILVER)</td></tr>
              <tr><td className="k">인증번호</td><td>SCH-2026-000142</td><td className="k">발급일자</td><td>2026-08-06</td></tr>
            </tbody>
          </table>

          <div className="cert-body-txt">
            위 학생은 순천향대학교 다면적 역량 인증제 운영 기준(제7조)에 따라
            <br />
            <b>창의(Creativity)</b> 영역에서 우수한 역량 점수를 취득하여 이 인증서를 수여합니다.
          </div>
          <div className="cert-foot">
            <div>발급기관 &nbsp;순천향대학교<br />발급자 &nbsp;역량개발센터장</div>
            <div className="cert-seal">순천향대<br />총장직인</div>
          </div>
        </div>
      </div>

      <div className="cert-actions">
        <Link className="btn btn-grey btn-mini" href="/competency/certificate">
          닫기
        </Link>
        <button type="button" className="btn btn-navy btn-mini" onClick={() => window.print()}>
          🖨 인쇄
        </button>
        <button type="button" className="btn btn-green btn-mini" onClick={comingSoonAlert}>
          PDF 다운로드
        </button>
      </div>
    </>
  );
}
