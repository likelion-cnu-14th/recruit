import { Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black px-6 py-24 text-center">
      <h2 className="mb-12 text-3xl font-extrabold leading-snug md:text-5xl">
        "완벽을 기다리지 마세요.<br />
        일단 배포하고 시작하는 게<br />
        <span className="bg-gradient-to-br from-[#FF9E0B] to-[#FF5F0B] bg-clip-text text-transparent">우리의 Vibe입니다.</span>"
      </h2>
      
      <a href="https://forms.google.com/placeholder" target="_blank" rel="noopener noreferrer" className="mb-16 inline-flex transform items-center rounded-full bg-primary px-10 py-5 text-xl font-bold text-black shadow-[0_4px_20px_rgba(255,158,11,0.3)] transition-all hover:-translate-y-1 hover:bg-[#ffaa2b] hover:shadow-[0_8px_30px_rgba(255,158,11,0.5)]">
        지금 바로 지원하기 <ArrowRight size={24} className="ml-3" />
      </a>
      
      <div className="mb-8 flex justify-center gap-8 text-sm text-gray-400">
        <a href="https://instagram.com/likelion._.cnu" target="_blank" rel="noopener noreferrer" className="flex items-center transition-colors hover:text-primary hover:underline">
          <Instagram size={20} className="mr-2" />
          @likelion._.cnu
        </a>
      </div>
      
      <div className="mt-8 text-xs text-[#555]">
        © 2026 LikeLion CNU 14th. All rights reserved.
      </div>
    </footer>
  );
}
