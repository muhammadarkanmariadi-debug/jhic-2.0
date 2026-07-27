import Image from "next/image";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "Kurikulum yang selalu up-to-date membuat lulusan SMK Telkom dapat bersaing dan diandalkan perusahaan.",
      name: "Iqbal Wahyu Septian",
      role: "Telkom Akses Malang",
      image: "https://www.smktelkom-mlg.sch.id/assets/upload/image/testi/img3.png",
    },
    {
      text: "Bangga menjadi bagian SMK Telkom Malang. Fasilitas lengkap dan pendidikan attitude mempersiapkan saya di dunia kerja.",
      name: "Dandy Purba Cantaka",
      role: "SIP Jakarta",
      image: "https://www.smktelkom-mlg.sch.id/assets/upload/image/testi/img2.png",
    },
    {
      text: "Proyek nyata sejak kelas 10 bikin aku percaya diri langsung masuk dunia kerja.",
      name: "Nadia Putri Ananda",
      role: "Software Engineer",
      avatarInitials: "NP",
      avatarBg: "linear-gradient(135deg, #10B981, #14B8A6)",
    },
  ];

  return (
    <section className="bg-bg-main py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-[640px] text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-[14px] font-bold text-accent">
            Testimoni Alumni
          </div>
          <h2 className="mb-4 text-[32px] font-extrabold leading-[1.2] tracking-tight text-text-main md:text-[40px]">
            Kata mereka tentang Moklet
          </h2>
          <p className="text-[16px] leading-[1.6] text-gray-600 md:text-[18px]">
            Dengarkan pengalaman langsung dari alumni kami yang telah sukses berkarier di berbagai bidang teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testi, idx) => (
            <figure
              key={idx}
              className="relative flex h-full flex-col rounded-[24px] border border-border-color bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-gray-100" />
              <div className="mb-4 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mb-6 flex-1 text-[15.5px] leading-[1.7] text-gray-700">
                &ldquo;{testi.text}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4 border-t border-border-light pt-6">
                {testi.image ? (
                  <Image
                    src={testi.image}
                    alt={testi.name}
                    width={46}
                    height={46}
                    className="h-[46px] w-[46px] rounded-full bg-gray-100 object-cover"
                  />
                ) : (
                  <div
                    className="flex h-[46px] w-[46px] items-center justify-center rounded-full text-[15px] font-extrabold text-white"
                    style={{ background: testi.avatarBg }}
                  >
                    {testi.avatarInitials}
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-[14.5px] font-extrabold text-text-main">
                    {testi.name}
                  </span>
                  <span className="text-[13px] font-semibold text-gray-500">
                    {testi.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
