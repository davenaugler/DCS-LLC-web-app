"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 text-xl font-bold text-foreground">
              Dalrymple Construction Services
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground hover:bg-accent/50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999]">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="fixed inset-y-0 right-0 flex w-full flex-col bg-background shadow-lg sm:max-w-sm">
            {/* Reuse the header height to ensure alignment */}
            <div className="flex h-[72px] items-center justify-between px-6">
              <Link 
                href="/" 
                className="text-xl font-bold text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dalrymple Construction Services
              </Link>
              <button
                type="button"
                className="rounded-md p-2.5 text-foreground hover:bg-accent/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            <nav className="flex-1 overflow-y-auto px-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-foreground hover:bg-accent/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}