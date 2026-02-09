import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import ApplicationForm from "@/components/ApplicationForm";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 selection:bg-primary selection:text-white font-sans">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-500 hover:text-primary transition-colors mb-6"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            홈으로 돌아가기
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
            멋쟁이사자처럼 14기 지원하기
          </h1>
          <p className="text-gray-600">
            당신의 아이디어를 현실로 만들 시간입니다.
          </p>
        </div>

        <ApplicationForm />
      </div>
    </main>
  );
}
