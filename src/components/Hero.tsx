import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 md:py-32 text-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-70" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-100 rounded-full blur-[80px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="mb-2 md:mb-4 inline-flex animate-fadeUp items-center rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm">
        <Image src="/chacha_14th.png" alt="Likelion Logo" width={20} height={20} className="mr-2" />
        충남대학교 멋쟁이사자처럼 14기
      </div>
      
      <h1 className="mb-6 md:mb-8 text-4xl font-black leading-relaxed tracking-tight md:text-6xl lg:text-7xl text-gray-900">
        당신의 상상<br />
        <span className="bg-gradient-to-r from-[#FF9E0B] to-[#FF5F0B] bg-clip-text text-transparent text-6xl md:text-8xl lg:text-8xl">세상 밖으로</span>
      </h1>
      
      <p className="mb-12 md:mb-16 max-w-2xl text-lg font-medium text-gray-500 md:text-xl leading-relaxed">
        아이디어만 발표하고 끝나는 프로젝트?!<br className="hidden md:block" />
        기획을 넘어 실제 서비스 배포까지, 끝까지 완성하는 경험을 시작하세요!
      </p>
      
      <Link href="/apply" className="inline-flex transform items-center rounded-full bg-gradient-to-r from-[#FF9E0B] to-[#FF7F0B] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 ring-1 ring-white/20">
        14기 아기사자 지원하기 <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  );
}
