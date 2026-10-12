"use client";

import Link from "next/link";

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.857L2.25 2.25h6.944l4.258 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FBFBF9] border-t border-[#EAEAEA]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-flex items-center gap-1.5 mb-5">
              <span className="text-[#12131A] font-bold text-xl tracking-tight">
                Bryng
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#6C5CE7]" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mb-6">
              The trusted academic marketplace connecting Nigerian students with
              verified professionals — safely, transparently, and reliably.
            </p>
            <a
              href="mailto:hello@bryng.app"
              className="text-[#12131A] font-medium text-sm hover:text-[#6C5CE7] transition-colors"
            >
              hello@bryng.app
            </a>
          </div>

          {/* Product Links */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Product
            </p>
            <ul className="space-y-3">
              {["How it Works", "For Students", "For Professionals", "Pricing", "Reviews"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 hover:text-[#12131A] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Contact", "Trust & Safety"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 hover:text-[#12131A] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Support
            </p>
            <ul className="space-y-3">
              {["Help Center", "Dispute Resolution", "Escrow Guide", "Status Page"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-500 hover:text-[#12131A] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Social Icons + Email */}
            <div className="flex items-center gap-4">
              {/* Social icon buttons */}
              {[
                { Icon: TwitterIcon, label: "Twitter", href: "#" },
                { Icon: InstagramIcon, label: "Instagram", href: "#" },
                { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-[#12131A] text-white flex items-center justify-center hover:bg-[#6C5CE7] transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
              <span className="hidden sm:block text-[#12131A] font-medium text-sm ml-2">
                hello@bryng.app
              </span>
            </div>

            {/* Right: Legal Links */}
            <div className="flex items-center gap-5">
              <p className="text-xs text-gray-400">
                © {currentYear} Bryng. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/terms"
                  className="text-xs text-gray-400 hover:text-[#12131A] transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/privacy"
                  className="text-xs text-gray-400 hover:text-[#12131A] transition-colors"
                >
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
