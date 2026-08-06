"use client";

import Link from "next/link";
import { adminPrograms } from "@/lib/admin/programs";
import { comingSoonAlert } from "@/lib/ui";

export default function AdminProgramListPage() {
  return (
    <>
      <div className="crumb">
        비교과 프로그램 <b>›</b> 프로그램 지원자 관리 <b>›</b> 프로그램 리스트
      </div>
      <div className="page-title-row">
        <span className="page-title">프로그램 리스트</span>
      </div>

      <div className="filter-special">
        <table className="ftable">
          <tbody>
            <tr>
              <td className="lb">프로그램</td>
              <td className="ct"><input type="text" className="mf-input w-full" placeholder="프로그램명 검색" /></td>
              <td className="lb">차수</td>
              <td className="ct"><select className="filter-select w-full"><option>전체 차수</option></select></td>
              <td className="lb">상태</td>
              <td className="ct">
                <select className="filter-select w-full">
                  <option>전체</option><option>모집중</option><option>마감</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="lb">신청일</td>
              <td className="ct"><input type="date" className="mf-input w-half" /> ~ <input type="date" className="mf-input w-half" /></td>
              <td className="lb">운영부서</td>
              <td className="ct"><select className="filter-select w-full"><option>전체</option></select></td>
              <td className="lb"></td><td className="ct"></td>
            </tr>
          </tbody>
        </table>
        <div className="search-act">
          <button type="button" className="btn btn-grey" onClick={comingSoonAlert}>↻ 새로고침</button>
          <button type="button" className="btn btn-navy" onClick={comingSoonAlert}>🔍 조회</button>
        </div>
      </div>

      <div className="grid-wrap" style={{ marginTop: 14 }}>
        <table className="grid">
          <thead>
            <tr>
              <th rowSpan={2} className="sortable" style={{ textAlign: "left" }}>프로그램명</th>
              <th rowSpan={2}>구분</th>
              <th rowSpan={2}>운영부서</th>
              <th rowSpan={2}>담당자</th>
              <th rowSpan={2}>모집 · 교육기간</th>
              <th colSpan={7}>지원 현황</th>
              <th rowSpan={2} style={{ width: 110 }}>관리</th>
            </tr>
            <tr>
              <th>전체</th><th>신청</th><th>대기</th><th>참여</th><th>수료</th><th>취소</th><th>불참</th>
            </tr>
          </thead>
          <tbody>
            {adminPrograms.map((p) => (
              <tr className={p.open ? "" : "off"} key={p.id}>
                <td className="mn">{p.title}</td>
                <td>{p.category}</td>
                <td>{p.dept}</td>
                <td>{p.manager}</td>
                <td>{p.period}</td>
                <td style={{ fontWeight: "bold" }}>{p.stats.total}</td>
                <td style={{ color: "var(--navy)" }}>{p.stats.applied}</td>
                <td>{p.stats.waiting}</td>
                <td>{p.stats.participating}</td>
                <td style={{ color: "#2e7d32" }}>{p.stats.completed}</td>
                <td style={{ color: "#c62828" }}>{p.stats.canceled}</td>
                <td style={{ color: "#7c8896" }}>{p.stats.absent}</td>
                <td>
                  <Link className="btn btn-navy btn-mini" href={`/admin/programs/${p.id}/applicants`}>
                    지원자 관리
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="admin-bottom">
          <button type="button" className="btn btn-green" onClick={comingSoonAlert}>Excel 다운로드</button>
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
