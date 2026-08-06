"use client";

import { useState } from "react";
import type { AdminProgram } from "@/lib/admin/programs";
import { applicants, statusLabel, statusClass } from "@/lib/admin/applicants";
import { comingSoonAlert } from "@/lib/ui";

export default function ApplicantsClient({ program }: { program: AdminProgram }) {
  const [selected, setSelected] = useState<number[]>([]);

  function toggle(id: number) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  }

  function toggleAll() {
    setSelected((prev) => (prev.length === applicants.length ? [] : applicants.map((a) => a.id)));
  }

  return (
    <>
      <div className="crumb">
        비교과 프로그램 <b>›</b> 프로그램 지원자 관리 <b>›</b> {program.title}
      </div>
      <div className="page-title-row">
        <span className="page-title">{program.title}</span>
        <span className="page-title pid" style={{ background: "var(--bg)", padding: "2px 8px", borderRadius: 3, fontWeight: "normal", fontSize: 11, color: "var(--sub)" }}>지원자 관리</span>
      </div>

      <div className="filter-special">
        <table className="ftable">
          <tbody>
            <tr>
              <td className="lb">학교급</td>
              <td className="ct"><select className="filter-select w-full"><option>초등학교</option><option>중학교</option><option>고등학교</option></select></td>
              <td className="lb">학교</td>
              <td className="ct"><input type="text" className="mf-input w-full" placeholder="학교명" /></td>
              <td className="lb">학년</td>
              <td className="ct"><select className="filter-select w-full"><option>학년</option></select></td>
            </tr>
            <tr>
              <td className="lb">반 / 번호</td>
              <td className="ct"><input type="number" className="mf-input w-half" /> <input type="number" className="mf-input w-half" /></td>
              <td className="lb">이름 / 아이디</td>
              <td className="ct"><input type="text" className="mf-input w-full" placeholder="검색어 입력" /></td>
              <td className="lb">이메일 등록</td>
              <td className="ct"><select className="filter-select w-full"><option>전체</option><option>등록</option><option>미등록</option></select></td>
            </tr>
          </tbody>
        </table>
        <table className="ftable" style={{ marginTop: 6, paddingTop: 6, borderTop: "1px solid var(--bd2)" }}>
          <tbody>
            <tr>
              <td className="lb">프로그램</td>
              <td className="ct"><input type="text" className="mf-input ro w-full" value={program.title} readOnly /></td>
              <td className="lb">차수</td>
              <td className="ct"><select className="filter-select w-full"><option>전체 차수</option></select></td>
              <td className="lb">상태</td>
              <td className="ct">
                <select className="filter-select w-full">
                  <option>전체</option><option>신청</option><option>수료</option><option>취소</option><option>불참</option>
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

      <div className="stat-cards">
        <div className="stat-card"><div className="l">전체</div><div className="v">{program.stats.total}</div></div>
        <div className="stat-card"><div className="l">신청</div><div className="v" style={{ color: "var(--navy)" }}>{program.stats.applied}</div></div>
        <div className="stat-card"><div className="l">대기</div><div className="v">{program.stats.waiting}</div></div>
        <div className="stat-card"><div className="l">참여</div><div className="v">{program.stats.participating}</div></div>
        <div className="stat-card"><div className="l">수료</div><div className="v" style={{ color: "#2e7d32" }}>{program.stats.completed}</div></div>
        <div className="stat-card"><div className="l">취소</div><div className="v" style={{ color: "#c62828" }}>{program.stats.canceled}</div></div>
        <div className="stat-card"><div className="l">불참</div><div className="v" style={{ color: "#7c8896" }}>{program.stats.absent}</div></div>
      </div>

      <div className="batch">
        <span className="pfx">✓ 선택된 {selected.length}명에 대해서</span>
        <button type="button" className="btn btn-navy btn-mini" onClick={comingSoonAlert}>수료 처리</button>
        <button type="button" className="btn btn-navy btn-mini" onClick={comingSoonAlert}>상태 변경</button>
        <button type="button" className="btn btn-navy btn-mini" onClick={comingSoonAlert}>그룹 설정</button>
        <span className="sp"></span>
        <button type="button" className="btn btn-grey btn-mini" onClick={comingSoonAlert}>＋ 지원자 추가</button>
        <button type="button" className="btn btn-green btn-mini" onClick={comingSoonAlert}>엑셀 일괄등록</button>
      </div>

      <div className="grid-wrap">
        <table className="grid">
          <thead>
            <tr>
              <th style={{ width: 34 }}>
                <input type="checkbox" checked={selected.length === applicants.length} onChange={toggleAll} />
              </th>
              <th className="sortable">이름</th>
              <th>아이디(이메일)</th>
              <th>학교</th>
              <th className="sortable">학년</th>
              <th>반/번호</th>
              <th>차수</th>
              <th className="sortable">신청일</th>
              <th>상태</th>
              <th style={{ width: 120 }}>관리</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((a) => (
              <tr className={a.status === "CANCELED" ? "off" : ""} key={a.id}>
                <td><input type="checkbox" checked={selected.includes(a.id)} onChange={() => toggle(a.id)} /></td>
                <td>{a.name}</td>
                <td className={a.email ? "" : "no-mail"}>{a.email ?? "미등록"}</td>
                <td>{a.school}</td>
                <td>{a.grade}</td>
                <td>{a.classNumber}</td>
                <td>{a.round}</td>
                <td>{a.appliedAt}</td>
                <td><span className={`tag ${statusClass[a.status]}`}>{statusLabel[a.status]}</span></td>
                <td>
                  <div className="row-act">
                    {a.status === "CANCELED" ? (
                      <button type="button" className="btn btn-grey btn-mini" onClick={comingSoonAlert}>복원</button>
                    ) : (
                      <button type="button" className="btn btn-grey btn-mini" onClick={comingSoonAlert}>취소</button>
                    )}
                    <button type="button" className="btn btn-navy btn-mini" onClick={comingSoonAlert}>상세</button>
                  </div>
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
            <li><a href="#">3</a></li>
            <li><a href="#">&gt;</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}
