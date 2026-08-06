"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navGroups } from "@/lib/nav";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="util-bar">
        <div className="util-inner">
          <span>이하은 님</span>
          <Link href="/mypage">마이페이지</Link>
          <Link href="/account/signup">회원가입</Link>
          <Link href="/admin/programs">관리자</Link>
        </div>
      </div>
      <div className="header-inner">
        <Link href="/mypage" className="brand">
          <span className="b-sub">SOONCHUNHYANG UNIVERSITY</span>
          <span className="b-main">초·중·고 체험 프로그램</span>
        </Link>
        <nav className="gnb">
          {navGroups.map((group) => {
            const groupActive = group.items.some((item) => pathname?.startsWith(item.url));
            return (
              <div key={group.id} className={`gnb-group${groupActive ? " active" : ""}`}>
                <Link href={group.url}>{group.title}</Link>
                {group.items.length > 1 && (
                  <div className="gnb-drop">
                    {group.items.map((item) => (
                      <Link
                        key={item.key}
                        href={item.url}
                        className={pathname?.startsWith(item.url) ? "active" : ""}
                      >
                        <span>{item.title}</span>
                        {!item.available && <span className="soon">준비중</span>}
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
