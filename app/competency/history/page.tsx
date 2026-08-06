"use client";

import { useState } from "react";
import CompetencySidebar from "@/components/CompetencySidebar";
import { historyItems, type HistoryStatus } from "@/lib/history";
import { comingSoonAlert } from "@/lib/ui";

const statusLabel: Record<HistoryStatus, string> = { DONE: "수료", WAIT: "신청", CANCELED: "취소" };
const statusClass: Record<HistoryStatus, string> = { DONE: "st-done", WAIT: "st-wait", CANCELED: "st-canc" };
const areaClass: Record<string, string> = { 창의: "dot-cr", 공감: "dot-em", 글로벌: "dot-gl" };
const pointClass: Record<string, string> = { 창의: "pt-cr", 공감: "pt-em", 글로벌: "pt-gl" };

export default function HistoryPage() {
  const [filter, setFilter] = useState("전체");
  const visible = historyItems.filter((h) => filter === "전체" || statusLabel[h.status] === filter);

  return (
    <>
      <div className="crumb">
        역량개발 <b>›</b> 프로그램 신청내역
      </div>
      <div className="page-title-row">
        <span className="page-title">프로그램 신청내역</span>
      </div>

      <div className="app-shell">
        <CompetencySidebar />

        <div className="app-content">
          <div className="hist-head">
            <div className="cnt"><span className="ic">▦</span>내 신청내역 {historyItems.length}건</div>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option>전체</option>
              <option>신청</option>
              <option>수료</option>
              <option>취소</option>
            </select>
          </div>

          <div className="hist-list">
            {visible.map((h) => (
              <div className={`hist-row${h.status === "CANCELED" ? " off" : ""}`} key={h.id}>
                <div className="hist-thumb" style={{ background: h.gradientCss }}>{h.icon}</div>
                <div className="hist-info">
                  <div className="hist-title">{h.title}</div>
                  <div className="hist-meta">{h.roundLabel} | 교육기간 {h.eduPeriod}</div>
                  <div className="hist-area">
                    <span className={`area-dot ${areaClass[h.area]}`} />{h.area}
                  </div>
                </div>
                <div className="hist-col">
                  <div className="lb">상태</div>
                  <div className={`vv ${statusClass[h.status]}`}>{statusLabel[h.status]}</div>
                </div>
                <div className="hist-col">
                  <div className="lb">역량점수</div>
                  <div className={`vv ${pointClass[h.area]}`}>
                    {h.points != null ? `${h.points}점` : <span className="dl">－</span>}
                  </div>
                </div>
                <div className="hist-mng">
                  {h.status === "DONE" && (
                    <>
                      <button type="button" className="btn btn-navy btn-mini" onClick={comingSoonAlert}>수료증</button>
                      <button type="button" className="btn btn-grey btn-mini" onClick={comingSoonAlert}>만족도</button>
                    </>
                  )}
                  {h.status === "WAIT" && (
                    <>
                      <button type="button" className="btn btn-grey btn-mini" onClick={comingSoonAlert}>수정</button>
                      <button type="button" className="btn btn-grey btn-mini" onClick={comingSoonAlert}>취소</button>
                    </>
                  )}
                  {h.status === "CANCELED" && (
                    <button type="button" className="btn btn-grey btn-mini" onClick={comingSoonAlert}>재신청</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bottom">
            <ul className="pagination">
              <li><a href="#">&lt;</a></li>
              <li className="active"><a href="#">1</a></li>
              <li><a href="#">&gt;</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
