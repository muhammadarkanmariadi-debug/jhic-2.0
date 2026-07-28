import { PageHeader } from "@/shared/ui/PageHeader";
import { SectionHeader } from "@/shared/ui/SectionHeader";
import { Wallet, Bus, MapPin, Info } from "lucide-react";
import Image from "next/image";
import { livingCosts, kosRecommendations, foodRecommendations } from "@/services/dummyData";

export const metadata = {
  title: "Akomodasi & Biaya Hidup | SMK Telkom Malang",
  description: "Panduan informasi estimasi biaya hidup, rekomendasi tempat kos, dan pilihan kuliner di sekitar kawasan SMK Telkom Malang.",
};

export default function AkomodasiPage() {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Informasi" },
    { label: "Akomodasi", href: "/informasi/akomodasi" },
  ];

  return (
    <>
      <PageHeader
        breadcrumbItems={breadcrumbItems}
        title="Akomodasi & Biaya Hidup"
        description="Panduan estimasi biaya hidup, rekomendasi tempat tinggal (kos), dan pilihan kuliner di sekitar kawasan SMK Telkom Malang."
      />

      {/* Estimasi Biaya Hidup */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Perencanaan Finansial"
            title="Estimasi Biaya Hidup Per Bulan"
            description="Gambaran umum pengeluaran rata-rata bagi siswa perantauan yang tinggal di sekitar SMK Telkom Malang."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {livingCosts.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-border-light bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-5`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-text-main mb-2">{item.title}</h3>
                <div className="text-accent font-bold text-[15px] mb-3 bg-accent/5 inline-block px-3 py-1 rounded-lg">
                  {item.range}
                </div>
                <p className="text-text-muted leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-gray-50 border border-border-light rounded-2xl p-6 flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-1">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-text-main text-lg mb-1">Catatan Penting</h4>
              <p className="text-text-muted leading-relaxed text-sm">
                Estimasi di atas bersifat perkiraan (kurang lebih <strong>Rp 1.750.000 - Rp 3.800.000 per bulan</strong> secara total) dan sangat bergantung pada gaya hidup, pilihan tempat tinggal, dan cara mengelola keuangan masing-masing siswa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rekomendasi Kos */}
      <section className="py-16 md:py-24 bg-surface relative">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <SectionHeader
                eyebrow="Tempat Tinggal"
                title="Rekomendasi Area Kos"
                description="Banyak pilihan kos-kosan yang aman dan nyaman di sekitar area sekolah. Siswa dapat memilih area berdasarkan jarak dan budget."
                align="left"
                className="mb-8"
              />
              
              <div className="space-y-6">
                {kosRecommendations.map((kos, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-white border border-border-light hover:border-accent/30 transition-colors shadow-sm">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-accent/10 text-accent flex items-center justify-center mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-text-main mb-1">{kos.area}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-500 mb-3">
                        <span className="flex items-center gap-1.5"><Bus className="w-4 h-4" /> {kos.distance}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                        <span className="flex items-center gap-1.5 text-accent"><Wallet className="w-4 h-4" /> {kos.price}</span>
                      </div>
                      <ul className="flex flex-wrap gap-2">
                        {kos.features.map((feature, fIdx) => (
                          <li key={fIdx} className="bg-gray-50 text-gray-600 text-[13px] px-3 py-1 rounded-full font-medium border border-gray-100">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[600px] border border-border-light">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20 mix-blend-multiply z-10"></div>
                <Image
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop"
                  alt="Ilustrasi Kos dan Tempat Tinggal"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rekomendasi Makanan */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
          <SectionHeader
            eyebrow="Kuliner & Konsumsi"
            title="Rekomendasi Makanan Pelajar"
            description="Pilihan kuliner di sekitar sekolah yang cocok untuk lidah dan kantong pelajar, bersih, serta mengenyangkan."
            align="center"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {foodRecommendations.map((food, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl border border-border-light bg-white p-6 shadow-sm hover:shadow-md transition-all flex items-start gap-5">
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <food.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-accent uppercase tracking-wider mb-1.5">{food.type}</div>
                  <h3 className="text-xl font-bold text-text-main mb-2">{food.name}</h3>
                  <p className="text-text-muted leading-relaxed text-[15px]">
                    {food.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
