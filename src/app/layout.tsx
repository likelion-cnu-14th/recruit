import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Likelion 14th | Vibe Coding",
  description: "아이디어는 가볍게, 구현은 AI와 함께 Vibe 있게! 충남대학교 멋쟁이사자처럼 14기 아기사자 모집",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} relative`}>
        {/* Global Background Blobs */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-orange-200/30 rounded-full blur-[100px] opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute top-[40%] right-[-5%] w-[30vw] h-[30vw] bg-blue-100/40 rounded-full blur-[80px] opacity-50" />
          <div className="absolute bottom-[-10%] left-[20%] w-[35vw] h-[35vw] bg-yellow-100/30 rounded-full blur-[90px] opacity-40 animate-pulse" style={{ animationDuration: '10s' }} />
        </div>
        {children}
      </body>
    </html>
  );
}
