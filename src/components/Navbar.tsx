"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "소개", href: "#about" },
  { name: "트랙", href: "#tracks" },
  { name: "혜택", href: "#benefits" },
  { name: "일정", href: "#schedule" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [prevScroll, setPrevScroll] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = prevScroll;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    
    setPrevScroll(latest);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/70 backdrop-blur-md border-b border-white/20 shadow-sm" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6"> 
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Image
              src="/likelion.svg"
              alt="Likelion Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-lg font-bold tracking-tight text-gray-900">
              충남대학교 <span className="text-primary">멋쟁이사자처럼</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 transition-all hover:text-primary hover:bg-orange-50 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all px-6">
              <Link href="/apply">
                지원하기 <Rocket className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 py-4"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-gray-600 hover:text-primary hover:bg-orange-50 px-4 py-3 rounded-xl transition-colors"
                  onClick={(e) => {
                   e.preventDefault();
                   setIsOpen(false);
                   document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 px-1">
                <Button asChild className="w-full rounded-xl bg-primary hover:bg-primary/90 h-11 text-base shadow-sm">
                  <Link href="/apply">
                    지원하기 <Rocket className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
