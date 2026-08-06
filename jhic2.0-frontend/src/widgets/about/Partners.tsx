import Image from 'next/image';
import { SectionHeader } from '@/shared/ui/SectionHeader';
export function Partners() {
  const partners = [
    { name: "Lenovo", src: "/images/school/assets/upload/image/thumbs/1762938428_Lenovo_Global_Corporate_Logo.png" },
    { name: "Fortinet", src: "/images/school/assets/upload/image/thumbs/1762937046_fortinet-logo-rgb-black-red-png-1024x281_Medium.png" },
    { name: "Livin by Mandiri", src: "/images/school/assets/upload/image/thumbs/1762937266_Logo-Livin-by-Mandiri-Format-PNG-CDR-EPS-300x183.png" },
    { name: "Merkle", src: "/images/school/assets/upload/image/thumbs/1762938094_MERKLE-logo.png" },
    { name: "Sevima", src: "/images/school/assets/upload/image/thumbs/1762938130_logo-sevimaplatform-small.png" },
    { name: "Jagoan Hosting", src: "/images/school/assets/upload/image/thumbs/1762938049_Logo-Jagoan-Hosting-1_Medium.png" },
    { name: "Box Hill", src: "/images/school/assets/upload/image/thumbs/1762937192_box-hill.png" },
    { name: "ITC ITTJ", src: "/images/school/assets/upload/image/thumbs/1762936954_logo-itc-ittj.png" },
  ];

  return (
    <section className="bg-surface py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <SectionHeader
          eyebrow="Mitra Industri"
          pill
          title="Dipercaya oleh perusahaan teknologi terkemuka"
          description="Bekerja sama dengan berbagai perusahaan terkemuka untuk memastikan kurikulum dan lulusan sesuai dengan kebutuhan industri."
          className="mb-12"
        />
      </div>

      {/* Marquee Container */}
      <div className="relative mb-16 overflow-hidden">
        {/* Fade Edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[15%] bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-[15%] bg-gradient-to-l from-white to-transparent"></div>

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* First Set */}
          <div className="flex items-center justify-around">
            {partners.map((partner, idx) => (
              <div key={idx} className="mx-10 flex h-[50px] items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={150}
                  height={50}
                  className="h-full w-auto max-w-[150px] object-contain opacity-60 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
          {/* Second Set (Duplicate) */}
          <div className="flex items-center justify-around" aria-hidden="true">
            {partners.map((partner, idx) => (
              <div key={idx} className="mx-10 flex h-[50px] items-center justify-center">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={150}
                  height={50}
                  className="h-full w-auto max-w-[150px] object-contain opacity-60 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
