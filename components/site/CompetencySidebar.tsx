"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { key: "competency-apply", title: "프로그램 신청", url: "/competency/apply" },
  { key: "competency-history", title: "프로그램 신청내역", url: "/competency/history" },
  { key: "competency-certificate", title: "역량 인증제", url: "/competency/certificate" },
];

export default function CompetencySidebar() {
  const pathname = usePathname();

  return (
    <div className="app-menu">
      <div className="menu-cap">역량개발</div>
      <div className="menu-progress">
        <i />
      </div>
      {items.map((item) => {
        const active = pathname?.startsWith(item.url);
        return (
          <Link key={item.key} href={item.url} className={`menu-item${active ? " active" : ""}`}>
            {active && <span className="arrow">▶</span>}
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}
