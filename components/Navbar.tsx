"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-bg-base/95 backdrop-blur-md shadow-xs border-b border-border-subtle"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/Bryng_logo.svg"
              alt="Bryng"
              width={105}
              height={39}
              className="h-8 sm:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#how-it-works"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              How it works
            </Link>
            <Link
              href="#for-students"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              For Students
            </Link>
            <Link
              href="#for-professionals"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              For Professionals
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium px-4 py-2"
            >
              Log in
            </Link>
            <Link
              href="/signup"
              className="bg-brand text-white text-sm font-medium px-5 py-2.5 rounded-pill hover:bg-brand-hover transition-colors shadow-xs"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-bg-subtle text-text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border-subtle bg-bg-base py-4 space-y-2">
            <Link
              href="#how-it-works"
              className="block text-sm text-text-secondary hover:text-text-primary font-medium px-3 py-2 rounded-md hover:bg-bg-subtle"
              onClick={() => setMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="#for-students"
              className="block text-sm text-text-secondary hover:text-text-primary font-medium px-3 py-2 rounded-md hover:bg-bg-subtle"
              onClick={() => setMenuOpen(false)}
            >
              For Students
            </Link>
            <Link
              href="#for-professionals"
              className="block text-sm text-text-secondary hover:text-text-primary font-medium px-3 py-2 rounded-md hover:bg-bg-subtle"
              onClick={() => setMenuOpen(false)}
            >
              For Professionals
            </Link>
            <div className="flex flex-col gap-2 pt-3 border-t border-border-subtle mt-2">
              <Link
                href="/login"
                className="text-sm text-text-secondary font-medium px-3 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="bg-brand text-white text-sm font-medium px-5 py-2.5 rounded-pill text-center hover:bg-brand-hover transition-colors"
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
