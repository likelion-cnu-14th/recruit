"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ApplyNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-sm" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto h-full px-4 max-w-4xl flex items-center justify-between">
        <Link 
          href="/" 
          className="group flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors py-2"
        >
          <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-semibold group-hover:text-primary transition-colors">메인으로</span>
        </Link>
        
        <div className="flex items-center gap-2 opacity-80">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest hidden sm:block">CNU LikeLion 14th</span>
        </div>
      </div>
    </nav>
  );
}
