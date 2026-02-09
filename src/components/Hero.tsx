import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16 text-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-70" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-100 rounded-full blur-[80px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="mb-6 inline-flex animate-fadeUp items-center rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">
        <Sparkles size={16} className="mr-2 text-primary" />
        충남대학교 멋쟁이사자처럼 14기
      </div>
      
      <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl text-gray-900">
        아이디어는 가볍게,<br />
        구현은 <span className="bg-gradient-to-r from-[#FF9E0B] to-[#FF5F0B] bg-clip-text text-transparent transform hover:scale-105 transition-transform inline-block">AI와 함께</span><br />
        <span className="relative inline-block">
          <span className="relative z-10 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent italic pr-2">Vibe</span>
          <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/20 -z-0 rotate-1 rounded-full"></span>
        </span> 있게!
      </h1>
      
      <p className="mb-12 max-w-2xl text-lg font-medium text-gray-500 md:text-xl leading-relaxed">
        코딩 문법만 배우다 지치는 시간은 이제 끝났습니다.<br className="hidden md:block" />
        최신 AI 도구로 완성하는 압도적인 생산성을 경험하세요.
      </p>
      
      <Link href="/apply" className="inline-flex transform items-center rounded-full bg-gradient-to-r from-[#FF9E0B] to-[#FF7F0B] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 ring-1 ring-white/20">
        14기 아기사자 지원하기 <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  );
}
