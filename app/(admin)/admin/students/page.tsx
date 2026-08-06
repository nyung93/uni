"use client";

import { useState } from "react";
import { studentDirectory, type StudentDirectoryEntry } from "@/lib/admin/studentDirectory";
import { comingSoonAlert } from "@/lib/ui";

const joinTypeLabel: Record<string, string> = { SYSTEM: "시스템가입", AUTO: "임의생성" };
const joinTypeClass: Record<string, string> = { SYSTEM: "t-join", AUTO: "t-auto" };
const badgeIcon: Record<string, string> = { GOLD: "◆", SILVER: "◇", NONE: "－" };
const badgeClass: Record<string, string> = { GOLD: "bm-gold", SILVER: "bm-silver", NONE: "bm-none" };
const badgeText: Record<string, string> = { GOLD: "골드", SILVER: "실버", NONE: "미획득" };

export default function AdminStudentsPage() {
  const [detail, setDetail] = useState<StudentDirectoryEntry | null>(null);

  return (
    <>
      <div className="crumb">
        회원관리 <b>›</b> 학생 조회
      </div>
      <div className="page-title-row">
        <span className="page-title">학생 조회</span>
      </div>

      <div className="filter-special">
        <table className="ftable">
          <tbody>
            <tr>
              <td className="lb">학생유형</td>
              <td className="ct">
                <select className="filter-select w-full">
                  <option>전체</option><option>시스템가입</option><option>임의생성</option>
                </select>
              </td>
              <td className="lb">학교급</td>
              <td className="ct">
                <select className="filter-select w-full">
                  <option>전체</option><option>초등학교</option><option>중학교</option><option>고등학교</option>
                </select>
              </td>
              <td className="lb">학교</td>
              <td className="ct"><input type="text" className="mf-input w-full" placeholder="학교명" /></td>
            </tr>
            <tr>
              <td className="lb">학년</td>
              <td className="ct"><select className="filter-select w-full"><option>전체</option></select></td>
              <td className="lb">이름 / 아이디</td>
              <td className="ct"><input type="text" className="mf-input w-full" placeholder="검색어 입력" /></td>
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
              <th style={{ width: 70 }}>구분</th>
              <th className="sortable">이름</th>
              <th>아이디(이메일)</th>
              <th>학교급</th>
              <th>학교</th>
              <th className="sortable">학년</th>
              <th>반</th>
              <th className="sortable">등록일</th>
              <th className="sortable">최근 접속일</th>
              <th style={{ width: 70 }}>관리</th>
            </tr>
          </thead>
          <tbody>
            {studentDirectory.map((s) => (
              <tr key={s.id}>
                <td><span className={`tag ${joinTypeClass[s.joinType]}`}>{joinTypeLabel[s.joinType]}</span></td>
                <td className="mn">{s.name}</td>
                <td className="mn">{s.email}</td>
                <td>{s.schoolLevel}</td>
                <td>{s.school}</td>
                <td>{s.grade}학년</td>
                <td>{s.classNo ?? <span className="dash">－</span>}</td>
                <td>{s.registeredAt}</td>
                <td>{s.lastLoginAt ?? <span className="dash">－</span>}</td>
                <td><button type="button" className="btn btn-navy btn-mini" onClick={() => setDetail(s)}>프로필</button></td>
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

      {detail && (
        <div className="modal-overlay" onClick={() => setDetail(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <span className="tt">학생 상세 정보 — {detail.name}</span>
              <button type="button" className="modal-close" onClick={() => setDetail(null)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="pp-sec">① 학생 기본정보</div>
              <table className="mini-tb">
                <tbody>
                  <tr>
                    <th style={{ width: 64 }}>이름</th><td className="al">{detail.name}</td>
                    <th style={{ width: 90 }}>학교급 / 학교</th><td className="al">{detail.schoolLevel} / {detail.school}</td>
                    <th style={{ width: 56 }}>학년</th><td className="al">{detail.grade}학년</td>
                  </tr>
                  <tr>
                    <th>아이디</th><td className="al">{detail.email}</td>
                    <th>구분</th><td className="al" colSpan={3}><span className={`tag ${joinTypeClass[detail.joinType]}`}>{joinTypeLabel[detail.joinType]}</span></td>
                  </tr>
                </tbody>
              </table>

              <div className="pp-sec">② 총점수 · 역량별 점수 · 배지 이미지</div>
              {detail.profile ? (
                <div className="pp-score">
                  <div className="pp-medal-wrap">
                    <span className={`badge-med ${badgeClass[detail.profile.badgeGrade]} pp-medal`}>{badgeIcon[detail.profile.badgeGrade]}</span>
                    <div className="pp-medal-lb">{detail.profile.topArea} {badgeText[detail.profile.badgeGrade]}</div>
                  </div>
                  <table className="mini-tb" style={{ flex: 1 }}>
                    <tbody>
                      <tr><th>총점수</th><th><span className="area-dot dot-cr" />창의</th><th><span className="area-dot dot-em" />공감</th><th><span className="area-dot dot-gl" />글로벌</th></tr>
                      <tr>
                        <td style={{ fontWeight: "bold" }}>{detail.profile.totalScore}</td>
                        <td className="pt-cr">{detail.profile.creativity}</td>
                        <td className="pt-em">{detail.profile.empathy}</td>
                        <td className="pt-gl">{detail.profile.global}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="help">역량점수 정보가 없습니다.</div>
              )}

              <div className="pp-sec">③ 비교과 프로그램 이수정보</div>
              {detail.profile?.completions.length ? (
                <table className="mini-tb">
                  <tbody>
                    <tr><th style={{ textAlign: "left" }}>프로그램명</th><th style={{ width: 70 }}>영역</th><th style={{ width: 100 }}>이수일</th><th style={{ width: 90 }}>취득 역량점수</th></tr>
                    {detail.profile.completions.map((c) => (
                      <tr key={c.title}>
                        <td className="al">{c.title}</td><td>{c.area}</td><td>{c.date}</td><td>{c.points}점</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="help">이수한 프로그램 정보가 없습니다.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
