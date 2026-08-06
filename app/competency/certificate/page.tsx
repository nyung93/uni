"use client";

import { useState } from "react";
import Link from "next/link";
import CompetencySidebar from "@/components/CompetencySidebar";

export default function CertificatePage() {
  const [tieChoice, setTieChoice] = useState<"creativity" | "empathy">("creativity");

  return (
    <>
      <div className="crumb">
        역량개발 <b>›</b> 역량 인증제 <b>›</b> 디지털 배지 · 역량점수 현황
      </div>
      <div className="page-title-row">
        <span className="page-title">디지털 배지 · 역량점수 현황</span>
      </div>

      <div className="app-shell">
        <CompetencySidebar />

        <div className="app-content">
          <div className="profile-mini" style={{ marginBottom: 14 }}>
            <div className="pm-item"><div className="l">이름</div><div className="v">이도현</div></div>
            <div className="pm-item"><div className="l">학교</div><div className="v">순천향중학교</div></div>
            <div className="pm-item"><div className="l">학년</div><div className="v">1학년</div></div>
            <div className="pm-item"><div className="l">아이디</div><div className="v">dhlee05@sch.ac.kr</div></div>
          </div>

          <div className="two-col">
            <div className="col-half">
              <div className="sec-cap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>디지털 배지</span>
                <Link className="btn btn-navy btn-mini" href="/competency/certificate/print">
                  🖨 인증서 출력
                </Link>
              </div>

              <div className="medal-tier">
                <div className="tier-tag">SILVER</div>
                <div className="tier-medals">
                  <div className="medal-item pick">
                    <div className="medal-circle"><span className="sch">SCH</span><span className="ic">💡</span></div>
                    <div className="medal-name">창의 실버</div>
                    <div className="medal-tag mt-pick">선택가능</div>
                  </div>
                  <div className="medal-item pick">
                    <div className="medal-circle"><span className="sch">SCH</span><span className="ic">🤝</span></div>
                    <div className="medal-name">공감 실버</div>
                    <div className="medal-tag mt-pick">선택가능</div>
                  </div>
                  <div className="medal-item lock">
                    <div className="medal-circle"><span className="sch">SCH</span><span className="ic">🌐</span></div>
                    <div className="medal-name">글로벌 실버</div>
                    <div className="medal-tag mt-none">미해당</div>
                  </div>
                </div>
              </div>

              <div className="medal-tier" style={{ marginBottom: 0 }}>
                <div className="tier-tag gold">GOLD</div>
                <div className="tier-medals">
                  <div className="medal-item lock">
                    <div className="medal-circle gold"><span className="sch">SCH</span><span className="ic">💡</span></div>
                    <div className="medal-name">창의 골드</div>
                    <div className="medal-tag mt-none">30점↑</div>
                  </div>
                  <div className="medal-item lock">
                    <div className="medal-circle gold"><span className="sch">SCH</span><span className="ic">🤝</span></div>
                    <div className="medal-name">공감 골드</div>
                    <div className="medal-tag mt-none">30점↑</div>
                  </div>
                  <div className="medal-item lock">
                    <div className="medal-circle gold"><span className="sch">SCH</span><span className="ic">🌐</span></div>
                    <div className="medal-name">글로벌 골드</div>
                    <div className="medal-tag mt-none">30점↑</div>
                  </div>
                </div>
              </div>

              <div className="tie-box">
                <div className="tt">🏅 최고 점수 영역이 2개 이상입니다 (창의 6점 = 공감 6점) — 받고 싶은 배지 영역을 선택해주세요</div>
                <div className="tie-opts">
                  <div
                    className={`tie-opt${tieChoice === "creativity" ? " sel" : ""}`}
                    onClick={() => setTieChoice("creativity")}
                  >
                    창의 실버 선택
                  </div>
                  <div
                    className={`tie-opt${tieChoice === "empathy" ? " sel" : ""}`}
                    onClick={() => setTieChoice("empathy")}
                  >
                    공감 실버 선택
                  </div>
                </div>
                <div className="tie-act">
                  <button
                    type="button"
                    className="btn btn-navy btn-mini"
                    onClick={() => alert("선택하신 배지로 저장되었습니다.")}
                  >
                    선택 완료
                  </button>
                </div>
              </div>
            </div>

            <div className="col-half">
              <div className="sec-cap">이수 현황 요약</div>
              <div className="cred-summary">
                <div className="cs-total"><div className="v">16</div><div className="l">내 역량점수 (총점)</div></div>
                <div className="cs-areas">
                  <div className="it"><div className="l">창의</div><div className="v pt-cr">6</div></div>
                  <div className="it"><div className="l">공감</div><div className="v pt-em">6</div></div>
                  <div className="it"><div className="l">글로벌</div><div className="v pt-gl">4</div></div>
                </div>
                <div className="cs-done"><div className="v">3건</div><div className="l">이수 프로그램</div></div>
              </div>
            </div>
          </div>

          <div className="sec-cap" style={{ marginTop: 16 }}>년도별 프로그램 이수내역</div>
          <table className="yr-grid">
            <thead>
              <tr>
                <th style={{ width: 70 }}>이수년도</th>
                <th>프로그램명</th>
                <th style={{ width: 90 }}>영역</th>
                <th style={{ width: 100 }}>이수일자</th>
                <th style={{ width: 90 }}>역량점수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="yr-tag">2026</span></td>
                <td className="mn">인성교육 워크숍</td>
                <td><span className="area-dot dot-em" />공감</td>
                <td>2026-07-18</td>
                <td className="pt">+6점</td>
              </tr>
              <tr>
                <td><span className="yr-tag">2026</span></td>
                <td className="mn">창의 로봇 경진대회</td>
                <td><span className="area-dot dot-cr" />창의</td>
                <td>2026-06-05</td>
                <td className="pt">+6점</td>
              </tr>
              <tr>
                <td><span className="yr-tag">2025</span></td>
                <td className="mn">나의 진로 설계: 꿈을 찾는 시간</td>
                <td><span className="area-dot dot-gl" />글로벌</td>
                <td>2025-11-12</td>
                <td className="pt">+4점</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
