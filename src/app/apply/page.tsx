import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyPage() {
  return (
    <main className="min-h-screen relative font-sans py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Navigation - Top Left */}
        <div className="mb-8 flex justify-start">
          <Link
            href="/"
            className="group inline-flex items-center text-gray-500 hover:text-primary transition-colors text-sm font-medium"
          >
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition-all group-hover:scale-110 group-hover:ring-primary/20">
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            </div>
            메인으로 돌아가기
          </Link>
        </div>

        {/* Header Content - Centered */}
        <div className="mb-16 text-center space-y-6">
          <div className="inline-block animate-fadeUp">
             <span className="px-4 py-1.5 rounded-full bg-orange-50 ring-1 ring-orange-100 text-orange-600 text-xs font-bold tracking-widest uppercase shadow-sm">Recruiting Now</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight">
            14기 아기사자 <span className="text-gradient-primary relative inline-block">
              지원하기
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
              </svg>
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            당신의 열정을 보여주세요. <br className="hidden md:block" />
            성장은 여기서부터 시작됩니다.
          </p>
        </div>

        <ApplicationForm />
      </div>
    </main>
  );
}
