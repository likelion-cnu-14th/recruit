import Link from "next/link";
import ApplicationForm from "@/components/ApplicationForm";
import ApplyNavbar from "@/components/ApplyNavbar";

export default function ApplyPage() {
  return (
    <main className="min-h-screen relative font-sans">
      {/* Fixed Minimal Header */}
      <ApplyNavbar />

      <div className="container mx-auto max-w-4xl relative z-10 pt-24 pb-20 px-4">
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
