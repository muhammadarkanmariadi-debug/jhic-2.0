import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] pt-20 pb-8 text-white">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12 mb-16">
          {/* Logo & Info */}
          <div className="max-w-[320px]">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" alt="Logo" width={180} height={52} className="h-auto w-[160px]" />
            </Link>
            <p className="mt-5 text-[14px] leading-[1.7] text-gray-400">
              Pelopor SMK bidang Teknologi dan Informatika di Indonesia sejak 1992.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-accent hover:shadow-[0_8px_20px_rgba(215,25,32,0.3)]">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-accent hover:shadow-[0_8px_20px_rgba(215,25,32,0.3)]">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-accent hover:shadow-[0_8px_20px_rgba(215,25,32,0.3)]">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" aria-label="X" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:-translate-y-1 hover:bg-accent hover:shadow-[0_8px_20px_rgba(215,25,32,0.3)]">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Menu Utama */}
          <div>
            <h3 className="mb-5 text-[17px] font-bold text-white tracking-wide">Menu Utama</h3>
            <div className="flex flex-col gap-3">
              <Link href="#home" className="text-[14.5px] text-gray-400 transition-colors hover:text-accent">Beranda</Link>
              <Link href="#about" className="text-[14.5px] text-gray-400 transition-colors hover:text-accent">Tentang</Link>
              <Link href="#programs" className="text-[14.5px] text-gray-400 transition-colors hover:text-accent">Program</Link>
              <Link href="#news" className="text-[14.5px] text-gray-400 transition-colors hover:text-accent">Berita</Link>
            </div>
          </div>

          {/* Aplikasi Siswa */}
          <div>
            <h3 className="mb-5 text-[17px] font-bold text-white tracking-wide">Aplikasi Siswa</h3>
            <div className="flex flex-col gap-3">
              <Link href="#" className="text-[14.5px] text-gray-400 transition-colors hover:text-accent">MyLMS</Link>
              <Link href="#" className="text-[14.5px] text-gray-400 transition-colors hover:text-accent">Siakad</Link>
              <Link href="#" className="text-[14.5px] text-gray-400 transition-colors hover:text-accent">Ujian Online</Link>
              <Link href="#" className="text-[14.5px] text-gray-400 transition-colors hover:text-accent">Buku Induk</Link>
            </div>
          </div>

          {/* Pengunjung Website */}
          <div>
            <h3 className="mb-5 text-[17px] font-bold text-white tracking-wide">Pengunjung Website</h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13.5px] text-gray-400">Hari ini</span>
                <span className="text-[14px] font-extrabold text-white">1.297</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13.5px] text-gray-400">Bulan ini</span>
                <span className="text-[14px] font-extrabold text-white">47.827</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13.5px] text-gray-400">Total</span>
                <span className="text-[14px] font-extrabold text-accent">493.210</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Contact Info */}
        <div className="grid grid-cols-1 gap-12 border-t border-white/10 pt-10 md:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="mb-5 text-[17px] font-bold text-white tracking-wide">Hubungi Kami</h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 text-[13.5px] leading-relaxed text-gray-400">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <span>Jl. Danau Ranau, Sawojajar, Kec. Kedungkandang, Kota Malang, Jawa Timur 65139</span>
              </div>
              <a href="mailto:info@smktelkom-mlg.sch.id" className="flex gap-3 text-[13.5px] text-gray-400 hover:text-accent transition-colors">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <span>info@smktelkom-mlg.sch.id</span>
              </a>
              <a href="tel:+62341720510" className="flex gap-3 text-[13.5px] text-gray-400 hover:text-accent transition-colors">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <span>(0341) 720510</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-[17px] font-bold text-white tracking-wide">Lokasi Sekolah</h3>
            <div className="h-[200px] overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Lokasi Sekolah"
                src="https://www.google.com/maps?q=SMK%20Telkom%20Malang%20Jl.%20Danau%20Ranau%20Sawojajar&output=embed"
                className="h-full w-full border-0 grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row md:text-left">
          <p className="text-[13.5px] text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} SMK Telkom Malang. Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-[13.5px] text-gray-500 font-medium transition-colors hover:text-accent">Kebijakan Privasi</Link>
            <Link href="#" className="text-[13.5px] text-gray-500 font-medium transition-colors hover:text-accent">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
