"use client";

import Link from "next/link";
import CompetencySidebar from "@/components/site/CompetencySidebar";
import { programs } from "@/lib/programs";
import { comingSoonAlert } from "@/lib/ui";

export default function ApplyList() {
  const openCount = programs.filter((p) => p.open).length;
  const closedCount = programs.filter((p) => !p.open).length;
  const favoriteCount = programs.filter((p) => p.favorite).length;

  return (
    <>
      <div className="crumb">
        역량개발 <b>›</b> 프로그램 신청 <b>›</b> 프로그램 리스트
      </div>
      <div className="page-title-row">
        <span className="page-title">프로그램 신청</span>
      </div>

      <div className="app-shell">
        <CompetencySidebar />

        <div className="app-content">
          <div className="search-wrap">
            <div className="search-inline">
              <span className="search-ic">🔍</span>
              <input type="text" placeholder="프로그램명을 입력해주세요." />
              <button type="button" className="btn-detail" onClick={comingSoonAlert}>
                상세검색 ▾
              </button>
              <button type="button" className="btn-search" onClick={comingSoonAlert}>
                검색
              </button>
            </div>
          </div>

          <div className="filter-tabs">
            <div className="ftab active">전체 <b>{programs.length}</b></div>
            <div className="ftab">신청 가능한 프로그램 <b>{openCount}</b></div>
            <div className="ftab">마감 프로그램 <b>{closedCount}</b></div>
            <div className="ftab">관심 프로그램 <b>{favoriteCount}</b></div>
          </div>

          <div className="grid-head">
            <span className="ic">▦</span> 전체 {programs.length}건
          </div>
          <div className="prog-grid">
            {programs.map((p) => (
              <div className={`prog-card${p.open ? "" : " closed"}`} key={p.id}>
                <div className="prog-thumb" style={{ background: p.gradientCss }}>
                  <div className="tags">
                    <span className={`ptag ${p.open ? "open" : "closed"}`}>{p.open ? "접수중" : "마감"}</span>
                  </div>
                  <div className={`fav-btn${p.favorite ? " on" : ""}`}>{p.favorite ? "♥" : "♡"}</div>
                  <span>{p.icon}</span>
                </div>
                <div className="prog-body">
                  <div className="prog-cat">{p.category} | {p.type}</div>
                  <div className="prog-title">{p.title}</div>
                  <div className="prog-meta"><span className="mlabel">장소명</span><span>{p.place}</span></div>
                  <div className="prog-meta"><span className="mlabel">이용대상</span><span>{p.target}</span></div>
                  <div className="prog-meta"><span className="mlabel">신청기간</span><span>{p.applyPeriodShort}</span></div>
                  <div className="prog-foot">
                    {p.open ? (
                      <Link className="btn btn-navy btn-mini" href={`/competency/apply/${p.id}`}>
                        신청하기 +
                      </Link>
                    ) : (
                      <button className="btn btn-grey btn-mini" disabled>
                        마감
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bottom">
            <ul className="pagination">
              <li><a href="#">&lt;</a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
