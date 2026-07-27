import { Laptop, Building, Users, Handshake } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Fasilitas Lengkap",
      description: "Lab dan penunjang belajar berkualitas premium berstandar industri.",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Lingkungan Nyaman",
      description: "Kampus asri, aman, dan kondusif untuk belajar dan berkarya.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Pengajar Kompeten",
      description: "Guru yang up-to-date dengan perkembangan teknologi industri.",
    },
    {
      icon: <Handshake className="h-6 w-6" />,
      title: "Kerjasama Luas",
      description: "Jaringan mitra industri untuk peluang kerja sebelum lulus.",
    },
  ];

  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-[680px] text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-[14px] font-bold text-accent">
            Mengapa Kami
          </div>
          <h2 className="mb-4 text-[32px] font-extrabold leading-[1.2] tracking-tight text-text-main md:text-[40px]">
            Mengapa memilih <span className="text-accent">SMK Telkom Malang?</span>
          </h2>
          <p className="text-[16px] leading-[1.6] text-gray-600 md:text-[18px]">
            Empat alasan utama yang membuat SMK Telkom Malang jadi pilihan tepat untuk masa depanmu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group flex flex-col rounded-[24px] border border-border-color bg-white p-8 transition-all hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-[19px] font-bold text-text-main">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-[1.6] text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
