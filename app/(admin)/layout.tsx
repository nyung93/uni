import type { Metadata } from "next";
import AdminHeader from "@/components/admin/AdminHeader";
import Footer from "@/components/Footer";
import "../globals.css";

export const metadata: Metadata = {
  title: "체험 프로그램 관리자",
  description: "순천향대학교 초·중·고 체험 프로그램 관리자 페이지 (프로토타입)",
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="site-wrap">
          <AdminHeader />
          <main className="page-main">
            <div className="content-wrap">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
