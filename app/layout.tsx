import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "순천향대학교 초·중·고 체험 프로그램",
  description: "순천향대학교 초·중·고 체험 프로그램 홈페이지 (학생 페이지 프로토타입)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="site-wrap">
          <Header />
          <main className="page-main">
            <div className="content-wrap">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
