import { Instagram, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-100 bg-white px-6 py-24">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-40">
        <div className="h-[600px] w-[600px] rounded-full bg-orange-100/50 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-screen-xl text-center">
        <h2 className="mb-12 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl">
          세상을 바꾸는 작은 시작,<br />
          <span className="bg-gradient-to-br from-[#FF9E0B] to-[#FF5F0B] bg-clip-text text-transparent">당신의 아이디어가 그 첫걸음입니다.</span>
        </h2>
        
        <Link 
          href="/apply" 
          className="group mb-16 inline-flex transform items-center rounded-full bg-gradient-to-r from-[#FF9E0B] to-[#FF7E0B] px-12 py-6 text-xl font-bold text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/40"
        >
          지금 바로 지원하기 
          <ArrowRight size={24} className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
        
        <div className="mt-16 flex flex-col items-center justify-center space-y-6 border-t border-gray-100 pt-8">
          <a 
            href="https://instagram.com/likelion._.cnu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 rounded-full bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-600 transition-all hover:bg-orange-50 hover:text-orange-600"
          >
            <Instagram size={18} className="transition-transform group-hover:scale-110" />
            <span>likelion._.cnu</span>
          </a>
          
          <p className="text-xs text-gray-400 font-medium">
            © 2026 LikeLion CNU 14th. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
