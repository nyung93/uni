"use client";

import { comingSoonAlert } from "@/lib/ui";

const programStats = [
  { dept: "창의", title: "AI 인공지능 기초 코딩 워크숍", area: "창의", round: 2, applied: 40, completed: 36, canceled: 2, rate: "90%", satisfaction: 4.6 },
  { dept: "글로벌", title: "나의 진로 설계: 꿈을 찾는 시간", area: "글로벌", round: 1, applied: 26, completed: 22, canceled: 1, rate: "85%", satisfaction: 4.4 },
  { dept: "공감", title: "인성교육 워크숍", area: "공감", round: 1, applied: 30, completed: 28, canceled: 0, rate: "93%", satisfaction: 4.7 },
  { dept: "창의", title: "창의 로봇 경진대회 예선", area: "창의", round: 3, applied: 48, completed: 41, canceled: 3, rate: "85%", satisfaction: 4.5 },
];

export default function AdminProgramStatsPage() {
  return (
    <>
      <div className="crumb">
        비교과 프로그램 <b>›</b> 통계
      </div>
      <div className="page-title-row">
        <span className="page-title">비교과 프로그램 통계</span>
      </div>

      <div className="filter-special">
        <table className="ftable">
          <tbody>
            <tr>
              <td className="lb">연도 / 학기</td>
              <td className="ct"><select className="filter-select w-half"><option>2026</option></select> <select className="filter-select w-half"><option>전체</option><option>1학기</option><option>2학기</option></select></td>
              <td className="lb">운영부서</td>
              <td className="ct"><select className="filter-select w-full"><option>전체</option></select></td>
              <td className="lb">운영형태</td>
              <td className="ct"><select className="filter-select w-full"><option>전체</option><option>일반참여형</option><option>심화 실습형</option></select></td>
            </tr>
            <tr>
              <td className="lb">학교급</td>
              <td className="ct"><select className="filter-select w-full"><option>전체</option><option>초</option><option>중</option><option>고</option></select></td>
              <td className="lb">실시기간</td>
              <td className="ct"><input type="date" className="mf-input w-half" /> ~ <input type="date" className="mf-input w-half" /></td>
              <td className="lb">프로그램명</td>
              <td className="ct"><input type="text" className="mf-input w-full" placeholder="검색어" /></td>
            </tr>
            <tr>
              <td className="lb">다면적역량</td>
              <td className="ct"><select className="filter-select w-full"><option>전체</option><option>창의</option><option>공감</option><option>글로벌</option></select></td>
              <td className="lb"></td><td className="ct"></td><td className="lb"></td><td className="ct"></td>
            </tr>
          </tbody>
        </table>
        <div className="search-act">
          <button type="button" className="btn btn-grey" onClick={comingSoonAlert}>↻ 새로고침</button>
          <button type="button" className="btn btn-navy" onClick={comingSoonAlert}>🔍 조회</button>
        </div>
      </div>

      <div className="grp" style={{ marginTop: 14 }}>
        <div className="grp-cap"><span className="num">1</span> 연간 실시 현황 요약 <span className="tail">영역별 운영현황</span></div>
        <div className="grp-body">
          <div className="stat-cards">
            <div className="stat-card"><div className="l">운영 프로그램</div><div className="v" style={{ color: "var(--navy)" }}>42건</div></div>
            <div className="stat-card"><div className="l">총 신청 인원</div><div className="v">1,280명</div></div>
            <div className="stat-card"><div className="l">수료 인원</div><div className="v" style={{ color: "#2e7d32" }}>1,046명</div></div>
            <div className="stat-card"><div className="l">취소 인원</div><div className="v" style={{ color: "#c62828" }}>58명</div></div>
          </div>
          <div style={{ fontSize: 11.5, fontWeight: "bold", color: "var(--sub)", margin: "10px 0 4px" }}>영역별 운영현황</div>
          <div className="area-row a-cr"><span className="an">창의</span><span className="bar"><i style={{ width: "72%" }} /></span><span className="cnt">18건</span></div>
          <div className="area-row a-em"><span className="an">공감</span><span className="bar"><i style={{ width: "56%" }} /></span><span className="cnt">14건</span></div>
          <div className="area-row a-gl"><span className="an">글로벌</span><span className="bar"><i style={{ width: "40%" }} /></span><span className="cnt">10건</span></div>
        </div>
      </div>

      <div className="grid-wrap">
        <table className="grid">
          <thead>
            <tr>
              <th>운영부서</th><th style={{ textAlign: "left" }}>프로그램명</th><th>영역</th><th>차수</th>
              <th>신청</th><th>수료</th><th>취소</th><th>수료율</th><th>만족도</th>
            </tr>
          </thead>
          <tbody>
            {programStats.map((row) => (
              <tr key={row.title}>
                <td>{row.dept}</td>
                <td className="mn">{row.title}</td>
                <td>{row.area}</td>
                <td>{row.round}</td>
                <td>{row.applied}</td>
                <td>{row.completed}</td>
                <td>{row.canceled}</td>
                <td>{row.rate}</td>
                <td>{row.satisfaction}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="admin-bottom">
          <button type="button" className="btn btn-green" onClick={comingSoonAlert}>⤓ Excel 다운로드</button>
          <ul className="admin-pagination">
            <li><a href="#">&lt;</a></li>
            <li className="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">&gt;</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
