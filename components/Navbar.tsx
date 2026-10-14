"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) setMenuOpen(false);
    };
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex flex-col items-center px-4 pointer-events-none">
      <div ref={navRef} className="w-full flex flex-col items-center">
        {/* Floating Pill Container */}
        <div className="pointer-events-auto w-full max-w-4xl lg:max-w-4xl bg-white/95 backdrop-blur-md border border-border-subtle rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-4 sm:px-4 py-3 flex items-center justify-between transition-all">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/Bryng_logo.svg"
              alt="Bryng"
              width={105}
              height={39}
              className="h-7 sm:h-7 w-auto"
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
          <div className="hidden md:flex items-center gap-2">
            <Button href="/login" variant="ghost" size="md">
              Log in
            </Button>
            <Button href="/signup" variant="primary" size="md">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Pill Button (Grovia-Style pill with inner circle) */}
          <Button
            variant="dark"
            size="sm"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden pl-3.5 pr-1.5 py-1 text-xs shadow-xs"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <div className="w-6 h-6 rounded-full bg-white text-[#12131A] flex items-center justify-center shrink-0">
              {menuOpen ? <X size={13} strokeWidth={2.5} /> : <Menu size={13} strokeWidth={2.5} />}
            </div>
          </Button>
        </div>

        {/* Mobile Dropdown Menu Card */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto md:hidden w-full max-w-md mt-2.5 bg-white/95 backdrop-blur-xl border border-border-subtle rounded-3xl p-5 shadow-xl space-y-4"
            >
              <div className="space-y-1">
                <Link
                  href="#how-it-works"
                  className="block text-sm text-text-secondary hover:text-text-primary font-medium px-3 py-2.5 rounded-xl hover:bg-bg-subtle transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  How it works
                </Link>
                <Link
                  href="#for-students"
                  className="block text-sm text-text-secondary hover:text-text-primary font-medium px-3 py-2.5 rounded-xl hover:bg-bg-subtle transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  For Students
                </Link>
                <Link
                  href="#for-professionals"
                  className="block text-sm text-text-secondary hover:text-text-primary font-medium px-3 py-2.5 rounded-xl hover:bg-bg-subtle transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  For Professionals
                </Link>
              </div>

              <div className="flex flex-col gap-2 pt-3 border-t border-border-subtle">
                <Button
                  href="/login"
                  variant="ghost"
                  size="md"
                  className="w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Log in
                </Button>
                <Button
                  href="/signup"
                  variant="primary"
                  size="md"
                  className="w-full text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Sign Up
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
