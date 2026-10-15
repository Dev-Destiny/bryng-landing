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
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-sm">
      <div ref={navRef} className="w-full">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-[76px] sm:px-6 lg:px-8">
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
              href="/#how-it-works"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              How it works
            </Link>
            <a
              href="/#for-students"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
              onClick={() => window.dispatchEvent(new CustomEvent("bryng:set-audience", { detail: "students" }))}
            >
              For students
            </a>
            <a
              href="/#for-professionals"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
              onClick={() => window.dispatchEvent(new CustomEvent("bryng:set-audience", { detail: "professionals" }))}
            >
              For experts
            </a>
            <Link
              href="/blog"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
            >
              Blog
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

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-md text-text-primary"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
          </Button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-auto md:hidden w-full border-b border-border-subtle bg-white shadow-lg"
            >
              <div className="mx-auto max-w-7xl space-y-4 px-4 py-4 sm:px-6 lg:px-8">
                <div className="space-y-1">
                  <Link
                    href="/#how-it-works"
                    className="block text-sm text-text-secondary hover:text-text-primary font-medium px-3 py-2.5 rounded-md hover:bg-bg-subtle transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    How it works
                  </Link>
                  <a
                    href="/#for-students"
                    className="block text-sm text-text-secondary hover:text-text-primary font-medium px-3 py-2.5 rounded-md hover:bg-bg-subtle transition-colors"
                    onClick={() => {
                      setMenuOpen(false);
                      window.dispatchEvent(new CustomEvent("bryng:set-audience", { detail: "students" }));
                    }}
                  >
                    For students
                  </a>
                  <a
                    href="/#for-professionals"
                    className="block text-sm text-text-secondary hover:text-text-primary font-medium px-3 py-2.5 rounded-md hover:bg-bg-subtle transition-colors"
                    onClick={() => {
                      setMenuOpen(false);
                      window.dispatchEvent(new CustomEvent("bryng:set-audience", { detail: "professionals" }));
                    }}
                  >
                    For experts
                  </a>
                  <Link
                    href="/blog"
                    className="block text-sm text-text-secondary hover:text-text-primary font-medium px-3 py-2.5 rounded-md hover:bg-bg-subtle transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </div>

                <div className="flex flex-col gap-2 border-t border-border-subtle pt-3">
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
