import Link from "next/link";
import Image from "next/image";

function TwitterIcon({ size = 16 }: { size?: number }) {
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

function InstagramIcon({ size = 16 }: { size?: number }) {
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

function LinkedInIcon({ size = 16 }: { size?: number }) {
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
  const currentYear = 2026;

  return (
    <footer className="bg-bg-base border-t border-border-subtle">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/Bryng_logo.svg"
                alt="Bryng"
                width={110}
                height={41}
                className="h-8 sm:h-9 w-auto"
              />
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs mb-6">
              Bring your brief. Find an expert in your subject. Keep the plan and payment clear from the start.
            </p>
            <a
              href="mailto:hello@bryng.app"
              className="text-text-primary font-thin text-4xl hover:text-brand transition-colors"
            >
              hello@bryng.app
            </a>
          </div>

          {/* Product Links */}
          <div>
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
              Get started
            </p>
            <ul className="space-y-3">
              {["How it works", "For students", "For experts", "Pricing", "Escrow protection"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "How it works" ? "/#how-it-works" :
                        item === "For students" ? "/#for-students" :
                        item === "For experts" ? "/#for-professionals" :
                        item === "Pricing" ? "/#faq" : "/#core-features"
                      }
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
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
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
              Company
            </p>
            <ul className="space-y-3">
              {[
                { label: "About Bryng", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: "Academic integrity", href: "/#core-features" },
                { label: "Careers", href: "mailto:hello@bryng.app?subject=Careers%20at%20Bryng" },
                { label: "Contact support", href: "mailto:hello@bryng.app" },
                { label: "Trust & safety", href: "/#faq" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-4">
              Help & trust
            </p>
            <ul className="space-y-3">
              {["Dispute resolution", "Escrow rules", "Citation guidelines", "Security questions"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Dispute resolution" ? "/#extra-features" :
                        item === "Security questions" ? "/#faq" : "/#core-features"
                      }
                      className="text-sm text-text-secondary hover:text-text-primary transition-colors font-medium"
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
      <div className="border-t border-border-subtle bg-bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left: Social Icons + Email */}
            <div className="flex items-center gap-3">
              {[
                { Icon: TwitterIcon, label: "Twitter", href: "#" },
                { Icon: InstagramIcon, label: "Instagram", href: "#" },
                { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-pill bg-bg-subtle text-text-secondary hover:text-text-primary hover:bg-border-subtle flex items-center justify-center transition-colors border border-border-subtle"
                >
                  <Icon size={14} />
                </a>
              ))}
              <span className="hidden sm:block text-text-secondary font-medium text-xs ml-2">
                hello@bryng.app
              </span>
            </div>

            {/* Right: Legal Links */}
            <div className="flex items-center gap-5">
              <p className="text-xs text-text-muted">
                © {currentYear} Bryng Inc. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/terms"
                  className="text-xs text-text-muted hover:text-text-primary transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy"
                  className="text-xs text-text-muted hover:text-text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
