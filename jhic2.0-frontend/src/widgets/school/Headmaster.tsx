import Image from "next/image";

export function Headmaster() {
  return (
    <section id="about-head" className="bg-white py-20 md:py-32">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
          <div className="relative w-full max-w-[400px] lg:w-1/2">
            <div className="absolute -left-6 -top-6 h-full w-full rounded-[32px] bg-accent/10 md:-left-8 md:-top-8"></div>
            <div className="relative overflow-hidden rounded-[32px] border border-border-color bg-white">
              <Image
                src="/images/school/assets/frontend/images/image1001.png"
                alt="Kepala Sekolah SMK Telkom Malang"
                width={500}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="mb-4 inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-[14px] font-bold text-accent">
              Sambutan Kepala Sekolah
            </div>
            <h2 className="mb-8 text-[32px] font-extrabold leading-[1.2] tracking-tight text-text-main md:text-[40px]">
              Kepala Sekolah
            </h2>
            
            <div className="relative">
              <span className="absolute -left-4 -top-6 text-[80px] font-serif text-accent/20 md:-left-8 md:-top-10 md:text-[100px]">
                &ldquo;
              </span>
              <p className="relative z-10 text-[18px] leading-[1.8] text-gray-700 md:text-[22px]">
                Selamat datang di SMK Telkom Malang. Kami berkomitmen mencetak lulusan yang siap bersaing di dunia industri global dengan karakter kuat dan kompetensi terbaik.
              </p>
            </div>
            
            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-[16px] font-extrabold text-white">
                RD
              </div>
              <div>
                <div className="text-[16px] font-extrabold text-text-main">
                  Rahmat Dwi Djatmiko, S.Kom., M.M.
                </div>
                <div className="text-[14px] font-medium text-gray-500">
                  Kepala SMK Telkom Malang
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
