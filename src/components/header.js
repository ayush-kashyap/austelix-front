"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { key: "home", href: "/", label: "Home" },
  { key: "services", href: "/services", label: "Services" },
  { key: "about", href: "/about-us", label: "About Us" },
  { key: "work", href: "/work", label: "Work" },
  { key: "blog", href: "/blogs", label: "Blog" },
  { key: "contact", href: "/contact-us", label: "Contact Us" },
];

function NavLink({ item, active, onNavigate, mobile = false }) {
  const isActive = active === item.key;

  return (
    <div
      className={
        mobile
          ? cn(
              "border-b border-white/10 last:border-0",
              isActive && "border-l-2 border-l-(--secondary-color) pl-3"
            )
          : cn(isActive && "border-b-2 border-(--secondary-color)", "p-1")
      }
    >
      <Link
        href={item.href}
        className={cn(
          "block font-dm-sans font-bold",
          mobile
            ? cn(
                "py-4 text-lg text-white/90 hover:text-white transition-colors",
                isActive && "text-(--secondary-color)"
              )
            : "text-shadow-lg text-shadow-white/10"
        )}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    </div>
  );
}

function Header({ active }) {
  const pathname = usePathname();
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(64);
  const [menuState, setMenuState] = useState({ open: false, path: pathname });
  const menuOpen = menuState.open && menuState.path === pathname;

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    function updateHeight() {
      setHeaderHeight(header.offsetHeight);
    }

    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function toggleMenu() {
    setMenuState((prev) =>
      prev.open && prev.path === pathname
        ? { open: false, path: pathname }
        : { open: true, path: pathname }
    );
  }

  function closeMenu() {
    setMenuState({ open: false, path: pathname });
  }

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 bg-glass-gradient"
      >
        <div className="flex justify-between items-center md:px-8 px-4 py-2">
          <Link href="/" aria-label="Austelix home" onClick={closeMenu}>
            <Image
              src="/austelix-transparent.png"
              width={80}
              height={80}
              alt="austelix"
              className="h-16 w-16 md:h-25 md:w-25"
              priority
            />
          </Link>

          <nav
            className="font-bold font-dm-sans text-center gap-4 lg:flex hidden"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.key} item={item} active={active} />
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden relative z-50 p-2 rounded-md text-white hover:bg-white/10 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        style={{ top: headerHeight }}
        className={cn(
          "lg:hidden fixed inset-x-0 bottom-0 z-40 bg-black overflow-y-auto overscroll-contain px-6 py-2 font-bold font-dm-sans transition-[opacity,visibility] duration-200 ease-out",
          menuOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        )}
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.key}
            item={item}
            active={active}
            onNavigate={closeMenu}
            mobile
          />
        ))}
      </nav>
    </>
  );
}

export default Header;
