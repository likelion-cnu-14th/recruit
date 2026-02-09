import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,rgba(255,158,11,0.1)_0%,rgba(10,10,10,0)_50%)] px-6 py-16 text-center">
      <div className="mb-6 inline-flex animate-fadeUp items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
        <Sparkles size={16} className="mr-2" />
        충남대학교 멋쟁이사자처럼 14기
      </div>
      
      <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
        아이디어는 가볍게,<br />
        구현은 <span className="bg-gradient-to-br from-[#FF9E0B] to-[#FF5F0B] bg-clip-text text-transparent">AI와 함께</span><br />
        <span className="text-accent">Vibe</span> 있게!
      </h1>
      
      <p className="mb-12 max-w-2xl text-lg font-normal text-gray-400 md:text-xl">
        코딩 문법만 배우다 지치는 시간은 이제 끝났습니다.<br className="hidden md:block" />
        최신 AI 도구로 완성하는 압도적인 생산성을 경험하세요.
      </p>
      
      <Link href="/apply" className="inline-flex transform items-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-black shadow-[0_4px_20px_rgba(255,158,11,0.3)] transition-all hover:-translate-y-1 hover:bg-[#ffaa2b] hover:shadow-[0_8px_30px_rgba(255,158,11,0.5)]">
        14기 아기사자 지원하기 <ArrowRight size={20} className="ml-2" />
      </Link>
    </section>
  );
}
