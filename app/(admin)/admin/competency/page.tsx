"use client";

import { useState } from "react";
import { students, type StudentCompetency } from "@/lib/admin/students";
import { comingSoonAlert } from "@/lib/ui";

const badgeIcon: Record<string, string> = { GOLD: "◆", SILVER: "◇", NONE: "－" };
const badgeClass: Record<string, string> = { GOLD: "bm-gold", SILVER: "bm-silver", NONE: "bm-none" };
const badgeText: Record<string, string> = { GOLD: "골드", SILVER: "실버", NONE: "미획득" };

export default function AdminCompetencyPage() {
  const [detail, setDetail] = useState<StudentCompetency | null>(null);

  return (
    <>
      <div className="crumb">
        역량개발 <b>›</b> 역량 인증제 관리 <b>›</b> 학생별 현황조회
      </div>
      <div className="page-title-row">
        <span className="page-title">역량 인증제 관리</span>
      </div>

      <div className="filter-special">
        <table className="ftable">
          <tbody>
            <tr>
              <td className="lb">학교급</td>
              <td className="ct">
                <select className="filter-select w-full">
                  <option>전체</option><option>초등학교</option><option>중학교</option><option>고등학교</option>
                </select>
              </td>
              <td className="lb">학년</td>
              <td className="ct"><select className="filter-select w-full"><option>전체</option></select></td>
              <td className="lb">이름 / 아이디</td>
              <td className="ct"><input type="text" className="mf-input w-full" placeholder="검색어 입력" /></td>
            </tr>
            <tr>
              <td className="lb">배지등급</td>
              <td className="ct">
                <select className="filter-select w-full">
                  <option>전체</option><option>골드</option><option>실버</option><option>미획득</option>
                </select>
              </td>
              <td className="lb">다면적역량</td>
              <td className="ct">
                <select className="filter-select w-full">
                  <option>전체</option><option>창의</option><option>공감</option><option>글로벌</option>
                </select>
              </td>
              <td className="lb"></td><td className="ct"></td>
            </tr>
          </tbody>
        </table>
        <div className="search-act">
          <button type="button" className="btn btn-grey" onClick={comingSoonAlert}>↻ 새로고침</button>
          <button type="button" className="btn btn-navy" onClick={comingSoonAlert}>🔍 조회</button>
        </div>
      </div>

      <div style={{ fontSize: 13, fontWeight: "bold", margin: "16px 0 10px" }}>역량 인증제 운영 기준</div>
      <div className="policy-grp">
        <div className="policy-cap">영역별 역량 분류 및 배지 명칭</div>
        <div className="policy-body">
          <table className="mini-tb">
            <tbody>
              <tr><th style={{ width: 80 }}>구분</th><th><span className="area-dot dot-cr" />창의</th><th><span className="area-dot dot-em" />공감</th><th><span className="area-dot dot-gl" />글로벌</th></tr>
              <tr><td>배지 명칭</td><td>창의 배지</td><td>공감 배지</td><td>글로벌 배지</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="policy-grp">
        <div className="policy-cap">디지털 배지 등급 및 발급 기준</div>
        <div className="policy-body">
          <table className="mini-tb">
            <tbody>
              <tr><th style={{ width: 80 }}>구분</th><th>누적 역량 점수 기준</th><th>입학 후 제공 혜택</th></tr>
              <tr><td>실버</td><td>15점 이상</td><td className="al">'다면적 졸업인증제' 비교과 점수 인정</td></tr>
              <tr><td>골드</td><td>30점 이상</td><td className="al">'다면적 졸업인증제' 비교과 점수 인정</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="policy-grp">
        <div className="policy-cap">제7조(디지털 배지 발급 기준)</div>
        <div className="policy-body">
          <div className="law-box">
            <div className="lt">제7조(디지털 배지 발급 기준)</div>
            ① 통합관리시스템 내 창의·공감·글로벌 영역의 누적 역량 점수를 합산한 점수가 다음 각 호의 기준에 도달한 학생에게는 [별표 2]에 따라 디지털 배지를 발급한다.
            <div className="ind">1. 실버 배지 : 15점 이상<br />2. 골드 배지 : 30점 이상</div>
            ② 디지털 배지는 학생이 취득한 역량 점수 중 가장 높은 점수를 획득한 영역(최고 점수 영역)의 배지 1종을 발급하는 것을 원칙으로 한다.<br />
            ③ 제2항에도 불구하고 최고 점수를 획득한 영역이 2개 이상인 경우에는 학생이 희망하는 영역의 배지 1종을 선택하여 발급할 수 있다.<br />
            ④ 디지털 배지는 학생 1인당 최종 1종만 발급한다. 다만, 실버 배지를 취득한 학생이 이후 골드 배지 발급 기준을 충족하거나 최고 점수 영역이 변경된 경우에는 해당 기준에 따라 디지털 배지를 변경 발급할 수 있다.
          </div>
        </div>
      </div>

      <div className="grid-wrap" style={{ marginTop: 14 }}>
        <table className="grid">
          <thead>
            <tr>
              <th>학교급</th><th>학교</th><th className="sortable">학년</th><th className="sortable">이름</th>
              <th>아이디</th><th className="sortable">총점수</th>
              <th><span className="area-dot dot-cr" />창의</th><th><span className="area-dot dot-em" />공감</th><th><span className="area-dot dot-gl" />글로벌</th>
              <th style={{ width: 60 }}>역량</th><th style={{ width: 78 }}>등급</th><th style={{ width: 80 }}>관리</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr className={s.active ? "" : "off"} key={s.id}>
                <td>{s.schoolLevel}</td>
                <td>{s.school}</td>
                <td>{s.grade}</td>
                <td className="mn">{s.name}</td>
                <td className="mn">{s.email}</td>
                <td style={{ fontWeight: "bold" }}>{s.totalScore}</td>
                <td className="pt-cr">{s.creativity}</td>
                <td className="pt-em">{s.empathy}</td>
                <td className="pt-gl">{s.global}</td>
                <td>{s.topArea} {s.tie && <span className="tag t-tie">동점선택</span>}</td>
                <td><span className={`badge-med ${badgeClass[s.badgeGrade]}`}>{badgeIcon[s.badgeGrade]}</span>{badgeText[s.badgeGrade]}</td>
                <td><button type="button" className="btn btn-navy btn-mini" onClick={() => setDetail(s)}>상세</button></td>
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
                  <tr><th>아이디</th><td className="al" colSpan={5}>{detail.email}</td></tr>
                </tbody>
              </table>

              <div className="pp-sec">② 총점수 · 역량별 점수 · 배지 이미지</div>
              <div className="pp-score">
                <div className="pp-medal-wrap">
                  <span className={`badge-med ${badgeClass[detail.badgeGrade]} pp-medal`}>{badgeIcon[detail.badgeGrade]}</span>
                  <div className="pp-medal-lb">{detail.topArea !== "－" ? `${detail.topArea} ${badgeText[detail.badgeGrade]}` : badgeText[detail.badgeGrade]}</div>
                </div>
                <table className="mini-tb" style={{ flex: 1 }}>
                  <tbody>
                    <tr><th>총점수</th><th><span className="area-dot dot-cr" />창의</th><th><span className="area-dot dot-em" />공감</th><th><span className="area-dot dot-gl" />글로벌</th></tr>
                    <tr><td style={{ fontWeight: "bold" }}>{detail.totalScore}</td><td className="pt-cr">{detail.creativity}</td><td className="pt-em">{detail.empathy}</td><td className="pt-gl">{detail.global}</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="pp-sec" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>③ 프로그램 이수정보</span>
                <button type="button" className="btn btn-green btn-mini" onClick={comingSoonAlert}>Excel 저장</button>
              </div>
              {detail.completions ? (
                <table className="mini-tb">
                  <tbody>
                    <tr><th style={{ textAlign: "left" }}>프로그램명</th><th style={{ width: 70 }}>영역</th><th style={{ width: 100 }}>이수일</th><th style={{ width: 90 }}>취득 역량점수</th></tr>
                    {detail.completions.map((c) => (
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
