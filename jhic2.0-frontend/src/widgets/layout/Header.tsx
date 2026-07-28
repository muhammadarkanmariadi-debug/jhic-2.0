"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, ArrowRight, Home, Info, Book, GraduationCap, Bell, Mail, Download } from "lucide-react";

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
    { name: "Beranda", href: "/", icon: Home },
    {
      name: "Tentang Kami",
      icon: Info,
      dropdownGroups: [
        {
          title: "Profil & Informasi",
          items: [
            { name: "Profil & Sejarah", href: "/tentang-kami/profil-sejarah" },
            { name: "Visi Misi", href: "/tentang-kami/visi-misi" },
            { name: "Struktur Organisasi", href: "/tentang-kami/struktur-organisasi" },
            { name: "Akreditasi", href: "/tentang-kami/akreditasi" },
          ]
        },
        {
          title: "Kemitraan & Capaian",
          items: [
            { name: "Hubungan Industri", href: "/tentang-kami/hubungan-industri" },
            { name: "Prestasi", href: "/tentang-kami/prestasi" },
            { name: "Fasilitas", href: "/tentang-kami/fasilitas" },
            { name: "Learning Culture", href: "/tentang-kami/learning-culture" }
          ]
        }
      ],
    },
    {
      name: "Program",
      icon: Book,
      dropdownGroups: [
        {
          title: "Akademik",
          items: [
            { name: "Profil Jurusan", href: "/program/jurusan" },
            { name: "Program TS 2.1", href: "/program/program-ts" },
            { name: "ICP International Class Program", href: "/program/icp" },
            { name: "Program Pendidikan CCP", href: "/program/ccp" },
            { name: "Trial Class", href: "/program/trial-class" }
          ]
        },
        {
          title: "Pengembangan Diri",
          items: [
            { name: "Ekstrakurikuler", href: "/program/ekstrakurikuler" },
          ]
        }
      ],
    },
    {
      name: "Alumni",
      icon: GraduationCap,
      dropdown: [
        { name: "Profil Sebaran", href: "/alumni/profil-sebaran" },
        { name: "Testimoni", href: "/alumni/testimoni" },
      ],
    },
    {
      name: "Informasi",
      icon: Bell,
      dropdownGroups: [
        {
          title: "Publikasi",
          items: [
            { name: "Berita", href: "/informasi/berita" },
            { name: "Pengumuman Kelulusan", href: "/informasi/pengumuman-kelulusan" },
            { name: "Produk Telkom", href: "/informasi/produk" },
          ]
        },
        {
          title: "Layanan Siswa",
          items: [
            { name: "Penerapan K3", href: "/informasi/penerapan-k3" },
            { name: "Akomodasi", href: "/informasi/akomodasi" },
          ]
        }
      ],
    },
    {
      name: "Hubungi Kami",
      icon: Mail,
      dropdown: [
        { name: "FAQ", href: "/hubungi-kami/faq" },
        { name: "Kotak Pertanyaan", href: "/hubungi-kami/kotak-pertanyaan" },
        { name: "Service Desk", href: "/hubungi-kami/service-desk" },
      ],
    },
  ];

  return (
    <header
      className={`sticky top-0 z-60 w-full transition-all duration-300 ease-in-out ${isScrolled ? "bg-white shadow-sm xl:bg-transparent xl:shadow-none" : ""
        }`}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 py-4 md:px-8 xl:py-4">
        {/* Left: Logo */}
        <Link
          href="/"
          className={`flex shrink-0 items-center overflow-hidden transition-all duration-400 ease-in-out ${isScrolled ? "xl:w-0 xl:opacity-0 xl:pointer-events-none" : "w-[140px] md:w-[160px] lg:w-[180px] opacity-100"
            }`}
        >
          <Image
            src="/logo_hitam.png"
            alt="Logo SMK Telkom Malang"
            width={120}
            height={50}
            className="h-auto w-full min-w-[140px]"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary"
          className={`hidden xl:flex items-center rounded-full border border-border-light bg-white px-4 py-1.5 shadow-sm transition-all duration-400 ease-in-out ${isScrolled ? "py-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)]" : ""
            }`}
        >
          <Link
            href="/"
            className={`flex items-center overflow-hidden transition-all duration-400 ease-in-out ${isScrolled ? "mr-4 w-[120px] opacity-100" : "w-0 opacity-0"
              }`}
          >
            <Image src="/logo_hitam.png" alt="Logo" width={120} height={34} className="h-auto w-[120px]" />
          </Link>

          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.dropdownGroups || item.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 text-[13.5px] font-semibold text-gray-700 hover:bg-gray-100 hover:text-text-main focus-visible:outline-accent/30 focus-visible:outline-2"
                      aria-haspopup="true"
                    >
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="invisible absolute left-0 top-full mt-2 flex min-w-[200px] flex-col rounded-xl border border-border-light bg-white p-2 text-sm opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                      {item.dropdownGroups ? (
                        <div className="flex gap-2">
                          {item.dropdownGroups.map(group => (
                            <div key={group.title} className="flex flex-col min-w-[200px] p-2 border-l first:border-l-0 border-border-light">
                              <div className="px-2 mb-2 text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">{group.title}</div>
                              {group.items.map(drop => (
                                <Link key={drop.name} href={drop.href} className="rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-accent font-medium">
                                  {drop.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        item.dropdown?.map((drop) => (
                          <Link
                            key={drop.name}
                            href={drop.href}
                            className="rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-accent font-medium"
                          >
                            {drop.name}
                          </Link>
                        ))
                      )}
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
          <Link
            href="/brosur.pdf"
            className="ml-2 hidden md:inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-4 py-1.5 text-[13.5px] font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent-hover group"
            download
          >
            Unduh Brosur
            <Download className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-3">


          <Link
            href="/ppdb"
            className={`hidden md:inline-flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-full bg-accent px-4 py-0 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(215,25,32,0.26)] transition-all duration-400 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-accent group ${isScrolled ? "xl:w-0 xl:px-0 xl:opacity-0 xl:pointer-events-none h-0" : "h-[42px]"
              }`}
          >
            Daftar PPDB
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <div
            role="group"
            aria-label="Ganti bahasa"
            className={`hidden md:inline-flex rounded-full border border-border-light bg-gray-100 p-1 shadow-sm transition-all duration-400 overflow-hidden ${isScrolled ? "xl:w-0 xl:px-0 xl:opacity-0 xl:pointer-events-none" : ""
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
          className={`fixed inset-0 z-[85] bg-gray-900/40 backdrop-blur-[2px] transition-all duration-300 xl:hidden ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Floating Mobile Sidebar */}
        <nav
          id="mobile-menu"
          aria-label="Mobile Navigation"
          className={`fixed top-0 right-0 bottom-0 z-[90] flex w-[min(340px,88vw)] flex-col bg-white shadow-[-12px_0_40px_rgba(17,24,39,0.14)] transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] xl:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Top Section */}
          <div className="flex shrink-0 items-center justify-between border-b border-border-light px-5 py-[18px]">
            <Link href="/" className="block" onClick={() => setMobileMenuOpen(false)}>
              <Image src="/logo_hitam.png" alt="Logo" width={110} height={31} className="h-auto w-[110px]" />
            </Link>
            <button
              className="grid h-[38px] w-[38px] place-items-center rounded-[10px] bg-gray-100 text-gray-700 transition-colors hover:bg-accent hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Tutup menu"
            >
              <X className="h-[18px] w-[18px] stroke-[2px]" />
            </button>
          </div>

          {/* Scroll Section */}
          <div className="flex-1 overflow-y-auto p-[10px_12px]">
            <ul className="m-0 flex flex-col p-0">
              {navItems.map((item) => (
                <li key={item.name} className="border-b border-border-light last:border-none">
                  {item.dropdownGroups || item.dropdown ? (
                    <>
                      <button
                        className={`flex w-full items-center gap-3 rounded-[10px] p-[14px_10px] text-left text-[15.5px] font-bold transition-colors hover:bg-bg-main hover:text-accent focus-visible:bg-bg-main focus-visible:text-accent ${openDropdown === item.name ? "text-accent" : "text-text-main"
                          }`}
                        onClick={() => toggleDropdown(item.name)}
                        aria-expanded={openDropdown === item.name}
                      >
                        <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[9px] bg-accent/10 text-accent">
                          <item.icon className="h-[17px] w-[17px] stroke-[1.8px]" />
                        </span>
                        {item.name}
                        <ChevronDown
                          className={`ml-auto h-[15px] w-[15px] transition-all duration-300 ${openDropdown === item.name ? "rotate-180 text-accent" : "text-gray-400"
                            }`}
                        />
                      </button>
                      <div
                        className={`grid overflow-hidden transition-all duration-350 ease-in-out ${openDropdown === item.name ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="min-h-0">
                          <div className="ml-[27px] border-l-2 border-border-light pl-[12px] py-2 mb-2 mt-1">
                            {item.dropdownGroups ? (
                              item.dropdownGroups.map((group, idx) => (
                                <div key={group.title} className={idx !== 0 ? "mt-4" : ""}>
                                  <div className="px-[14px] mb-1.5 text-[11px] font-extrabold text-gray-400 uppercase tracking-wider">{group.title}</div>
                                  {group.items.map((drop) => (
                                    <Link
                                      key={drop.name}
                                      href={drop.href}
                                      className="block rounded-lg px-[14px] py-[9px] text-[14px] font-semibold text-gray-600 transition-colors hover:bg-bg-main hover:text-accent"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {drop.name}
                                    </Link>
                                  ))}
                                </div>
                              ))
                            ) : (
                              item.dropdown?.map((drop) => (
                                <Link
                                  key={drop.name}
                                  href={drop.href}
                                  className="block rounded-lg px-[14px] py-[11px] text-[14px] font-semibold text-gray-500 transition-colors hover:bg-bg-main hover:text-accent"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {drop.name}
                                </Link>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="flex w-full items-center gap-3 rounded-[10px] p-[14px_10px] text-left text-[15.5px] font-bold text-text-main transition-colors hover:bg-bg-main hover:text-accent focus-visible:bg-bg-main focus-visible:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-[9px] bg-accent/10 text-accent">
                        <item.icon className="h-[17px] w-[17px] stroke-[1.8px]" />
                      </span>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="shrink-0 border-t border-border-light bg-gray-50 p-[16px_20px_22px]">
            <div className="flex flex-col gap-2">
              <Link
                href="/brosur.pdf"
                className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-accent px-4 py-[14px] font-bold text-white transition-colors hover:bg-accent-hover"
                onClick={() => setMobileMenuOpen(false)}
                download
              >
                Unduh Informasi
                <Download className="h-4 w-4" />
              </Link>
              <Link
                href="/ppdb"
                className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-accent px-4 py-[14px] font-bold text-white transition-colors hover:bg-accent-hover"
                onClick={() => setMobileMenuOpen(false)}
              >
                Daftar PPDB 2026
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-3 flex w-full justify-center rounded-full border border-border-light bg-white p-1 shadow-sm">
              <button className="flex-1 rounded-full bg-white py-[6px] text-[13px] font-bold text-accent shadow-sm">ID</button>
              <button className="flex-1 rounded-full py-[6px] text-[13px] font-bold text-gray-500 hover:text-gray-700">EN</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
