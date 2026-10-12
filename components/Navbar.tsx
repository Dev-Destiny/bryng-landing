"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBFBF9]/90 backdrop-blur-md shadow-sm border-b border-[#EAEAEA]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1.5 group">
            <span className="text-[#12131A] font-bold text-xl tracking-tight">
              Bryng
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7] group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#how-it-works"
              className="text-sm text-gray-500 hover:text-[#12131A] transition-colors font-medium"
            >
              How it works
            </Link>
            <Link
              href="#for-students"
              className="text-sm text-gray-500 hover:text-[#12131A] transition-colors font-medium"
            >
              For Students
            </Link>
            <Link
              href="#for-professionals"
              className="text-sm text-gray-500 hover:text-[#12131A] transition-colors font-medium"
            >
              For Professionals
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-gray-600 hover:text-[#12131A] transition-colors font-medium px-4 py-2"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[#6C5CE7] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#5a4bd1] transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#EAEAEA] bg-[#FBFBF9] py-4 space-y-3">
            <Link
              href="#how-it-works"
              className="block text-sm text-gray-600 hover:text-[#12131A] font-medium px-2 py-2"
              onClick={() => setMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="#for-students"
              className="block text-sm text-gray-600 hover:text-[#12131A] font-medium px-2 py-2"
              onClick={() => setMenuOpen(false)}
            >
              For Students
            </Link>
            <Link
              href="#for-professionals"
              className="block text-sm text-gray-600 hover:text-[#12131A] font-medium px-2 py-2"
              onClick={() => setMenuOpen(false)}
            >
              For Professionals
            </Link>
            <div className="flex flex-col gap-2 pt-2 border-t border-[#EAEAEA]">
              <Link
                href="/login"
                className="text-sm text-gray-600 font-medium px-2 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-[#6C5CE7] text-white text-sm font-medium px-5 py-2.5 rounded-full text-center"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
