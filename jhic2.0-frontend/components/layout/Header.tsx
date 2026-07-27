"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu: string) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  const navItems = [
    { name: "Beranda", href: "/" },
    {
      name: "Tentang Kami",
      dropdown: [
        { name: "Profil & Sejarah", href: "/tentang-kami/profil-sejarah" },
        { name: "Visi Misi", href: "/tentang-kami/visi-misi" },
        { name: "Struktur Organisasi", href: "/tentang-kami/struktur-organisasi" },
        { name: "Akreditasi", href: "/tentang-kami/akreditasi" },
        { name: "Hubungan Industri", href: "/tentang-kami/hubungan-industri" },
        { name: "Program TS", href: "/tentang-kami/program-ts" },
        { name: "Fasilitas", href: "/tentang-kami/fasilitas" },
        { name: "Prestasi", href: "/tentang-kami/prestasi" },
      ],
    },
    {
      name: "Program",
      dropdown: [
        { name: "Profil Jurusan", href: "/program/jurusan" },
        { name: "Ekstrakurikuler", href: "/program/ekstrakurikuler" },
      ],
    },
    {
      name: "Alumni",
      dropdown: [
        { name: "Profil Sebaran", href: "/alumni/profil-sebaran" },
        { name: "Testimoni", href: "/alumni/testimoni" },
      ],
    },
    {
      name: "Informasi",
      dropdown: [
        { name: "Berita", href: "/informasi/berita" },
        { name: "Pengumuman Kelulusan", href: "/informasi/pengumuman-kelulusan" },
        { name: "Penerapan K3", href: "/informasi/penerapan-k3" },
      ],
    },
    {
      name: "Hubungi Kami",
      dropdown: [
        { name: "FAQ", href: "/hubungi-kami/faq" },
        { name: "Kotak Pertanyaan", href: "/hubungi-kami/kotak-pertanyaan" },
        { name: "Service Desk", href: "/hubungi-kami/service-desk" },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-60 w-full transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white shadow-sm xl:bg-transparent xl:shadow-none" : ""
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-4 md:px-8 xl:py-4">
        {/* Left: Logo */}
        <Link
          href="/"
          className={`flex shrink-0 items-center overflow-hidden transition-all duration-400 ease-in-out ${
            isScrolled ? "xl:w-0 xl:opacity-0 xl:pointer-events-none" : "w-[140px] md:w-[160px] lg:w-[180px] opacity-100"
          }`}
        >
          <Image
            src="/logo_hitam.png"
            alt="Logo SMK Telkom Malang"
            width={180}
            height={50}
            className="h-auto w-full min-w-[140px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary"
          className={`hidden xl:flex items-center rounded-full border border-border-light bg-white px-4 py-1.5 shadow-sm transition-all duration-400 ease-in-out ${
            isScrolled ? "py-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)]" : ""
          }`}
        >
          <Link
            href="/"
            className={`flex items-center overflow-hidden transition-all duration-400 ease-in-out ${
              isScrolled ? "mr-4 w-[120px] opacity-100" : "w-0 opacity-0"
            }`}
          >
            <Image src="/logo_hitam.png" alt="Logo" width={120} height={34} className="h-auto w-[120px]" />
          </Link>

          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13.5px] font-semibold text-gray-700 hover:bg-gray-100 hover:text-text-main focus-visible:outline-accent/30 focus-visible:outline-2"
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="invisible absolute left-0 top-full mt-2 flex min-w-[200px] flex-col rounded-xl border border-border-light bg-white p-2 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.name}
                          href={drop.href}
                          className="rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-accent font-medium"
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[13.5px] font-semibold text-gray-700 hover:bg-gray-100 hover:text-text-main focus-visible:outline-accent/30 focus-visible:outline-2"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: Actions */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/ppdb/landing"
            className={`hidden md:inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-accent px-4 py-0 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(215,25,32,0.26)] transition-all duration-400 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-accent group ${
              isScrolled ? "xl:w-0 xl:px-0 xl:opacity-0 xl:pointer-events-none h-0" : "h-[42px]"
            }`}
          >
            Daftar PPDB
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div
            role="group"
            aria-label="Ganti bahasa"
            className={`hidden md:inline-flex rounded-full border border-border-light bg-gray-100 p-1 shadow-sm transition-all duration-400 overflow-hidden ${
              isScrolled ? "xl:w-0 xl:px-0 xl:opacity-0 xl:pointer-events-none" : ""
            }`}
          >
            <button className="rounded-full bg-white px-3 py-1.5 text-[13px] font-bold text-accent shadow-sm" aria-pressed="true">
              ID
            </button>
            <button className="rounded-full px-3 py-1.5 text-[13px] font-bold text-gray-500 hover:text-gray-700" aria-pressed="false">
              EN
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="relative z-[110] flex h-11 w-11 items-center justify-center rounded-xl border border-border-color bg-white text-text-main xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Buka menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Backdrop for Mobile Menu */}
        <div 
          className={`fixed inset-0 z-[90] bg-black/20 backdrop-blur-sm transition-all duration-300 xl:hidden ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Floating Mobile Sidebar */}
        <nav
          id="mobile-menu"
          aria-label="Mobile Navigation"
          className={`fixed top-[85px] right-4 z-[100] flex w-[320px] max-h-[calc(100vh-100px)] max-w-[calc(100vw-32px)] flex-col overflow-y-auto rounded-[24px] border border-border-color bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out xl:hidden ${
            mobileMenuOpen ? "translate-y-0 opacity-100 visible" : "translate-y-[-10px] opacity-0 invisible pointer-events-none"
          }`}
        >
          <ul className="flex w-full flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.name} className="flex flex-col">
                {item.dropdown ? (
                  <>
                    <button
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-semibold text-text-main hover:bg-gray-50"
                      onClick={() => toggleDropdown(item.name)}
                      aria-expanded={openDropdown === item.name}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {/* Dropdown Content */}
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                        openDropdown === item.name ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="flex flex-col overflow-hidden pl-4 pr-2">
                        <div className="py-2">
                          {item.dropdown.map((drop) => (
                            <li key={drop.name}>
                              <Link
                                href={drop.href}
                                className="block rounded-lg px-3 py-2 text-[14.5px] font-medium text-gray-500 hover:text-accent hover:bg-gray-50"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {drop.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block w-full rounded-xl px-3 py-3 font-semibold text-text-main hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          <div className="mt-6 flex flex-col gap-4 border-t border-border-light pt-6">
            <Link
              href="/ppdb/landing"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3 font-bold text-white hover:bg-accent-hover"
              onClick={() => setMobileMenuOpen(false)}
            >
              Daftar PPDB
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <div className="flex w-full justify-center gap-2 rounded-full bg-gray-100 p-1">
              <button className="flex-1 rounded-full bg-white py-2 text-[13px] font-bold text-accent shadow-sm">ID</button>
              <button className="flex-1 rounded-full py-2 text-[13px] font-bold text-gray-500 hover:text-gray-700">EN</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
