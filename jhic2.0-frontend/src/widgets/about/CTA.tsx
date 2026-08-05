import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section id="contact-cta" className="bg-white py-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-border-color bg-white p-10 text-center shadow-[0_20px_40px_rgba(0,0,0,0.05)] md:p-16 lg:p-20">
          <div className="relative z-10">
            <h2 className="mx-auto max-w-[720px] text-[28px] font-extrabold leading-[1.1] tracking-tight text-text-main md:text-[36px] lg:text-[44px]">
              Siap menjadi talenta<br />digital masa depan?
            </h2>
            <p className="mx-auto mt-5 max-w-[560px] text-[16px] leading-[1.7] text-gray-600 md:text-[18px]">
              Bergabunglah dengan ribuan Mokleter dari seluruh Indonesia.<br />
              Pendaftaran SPMB 2026 telah dibuka.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/spmb"
                className="flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-[16px] font-bold text-white shadow-[0_8px_20px_rgba(200,16,46,0.2)] transition-all hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-accent"
              >
                Daftar SPMB 2026
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#contact"
                className="rounded-full border-2 border-gray-300 bg-transparent px-8 py-3.5 text-[16px] font-semibold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
              >
                Hubungi Kami
              </Link>
            </div>

            {/* Social Media Info */}
            <div className="mt-16 flex flex-col items-center gap-4 border-t border-border-light pt-10">
              <p className="text-[14px] font-semibold tracking-widest text-gray-500 uppercase">
                Ikuti Keseruan Kami di Sosial Media
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/images/expertise/smktelkommalang.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border-color bg-white px-5 py-2.5 text-[14px] font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-1 hover:border-pink-300 hover:shadow-md"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white">
                    <Calendar className="h-4 w-4" />
                  </div>
                  @smktelkommalang
                </a>
                <a
                  href="/images/expertise/smktelkommalang.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border-color bg-white px-5 py-2.5 text-[14px] font-semibold text-gray-700 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-white">
                    <Calendar className="h-4 w-4 fill-current" />
                  </div>
                  SMK Telkom Malang
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
