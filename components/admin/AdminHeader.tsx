"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNavGroups } from "@/lib/admin/nav";

export default function AdminHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="util-bar">
        <div className="util-inner">
          <span>관리자 모드</span>
          <span>홍길동 님</span>
          <Link href="/mypage">학생 사이트로 이동</Link>
        </div>
      </div>
      <div className="header-inner">
        <Link href="/admin/programs" className="brand">
          <span className="b-sub">SOONCHUNHYANG UNIVERSITY</span>
          <span className="b-main">
            체험 프로그램 관리자<span className="page-title pid" style={{ marginLeft: 8 }}>ADMIN</span>
          </span>
        </Link>
        <nav className="gnb">
          {adminNavGroups.map((group) => {
            const groupActive = group.items.some((item) => pathname?.startsWith(item.url));
            return (
              <div key={group.id} className={`gnb-group${groupActive ? " active" : ""}`}>
                <Link href={group.items[0].url}>{group.title}</Link>
                {group.items.length > 1 && (
                  <div className="gnb-drop">
                    {group.items.map((item) => (
                      <Link
                        key={item.key}
                        href={item.url}
                        className={pathname?.startsWith(item.url) ? "active" : ""}
                      >
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
