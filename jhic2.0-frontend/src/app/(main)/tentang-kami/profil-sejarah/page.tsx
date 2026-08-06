 
import React from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { Timeline, TimelineEvent } from '@/shared/ui/Timeline';
import { Card } from '@/shared/ui/Card';
import { Users, Calendar, Briefcase, Award, Play } from 'lucide-react';
import { SectionHeader } from '@/shared/ui/SectionHeader';

export default function ProfilSejarah() {
   const breadcrumbItems = [
      { label: 'Tentang Kami' },
      { label: 'Profil & Sejarah' },
   ];

   const historyEvents: TimelineEvent[] = [
      {
         year: '1992',
         title: 'Awal Mula Pendirian',
         description: 'SMK Telkom Malang didirikan pada tahun 1992 sebagai wujud komitmen PT Telkom Indonesia dalam mencetak SDM unggul di bidang Teknologi Informasi dan Komunikasi. Berawal dari Sekolah Menengah Kejuruan dengan program studi Teknik Telekomunikasi, sekolah ini menjadi pionir sekolah berbasis IT di Jawa Timur bahkan Indonesia.',
      },
      {
         year: '2000',
         title: 'Transisi Era Digital',
         description: 'Seiring dengan perkembangan teknologi internet, SMK Telkom Malang menyesuaikan kurikulum untuk fokus pada rekayasa perangkat lunak dan jaringan komputer, menetapkan standar baru pendidikan vokasi IT.',
      },
      {
         year: '2015',
         title: 'Yayasan Pendidikan Telkom',
         description: 'Kini, SMK Telkom Malang secara resmi berada di bawah naungan Yayasan Pendidikan Telkom (YPT) dan telah melahirkan ribuan alumni yang tersebar di berbagai perusahaan teknologi terkemuka baik nasional maupun internasional.',
      },
      {
         year: '2026',
         title: 'School of Global Digitalent',
         description: 'Berkomitmen pada moto "Attitude is Everything", SMK Telkom Malang tidak hanya membekali peserta didiknya dengan kompetensi hardskill berbasis industri, tetapi juga softskill yang mencakup kedisiplinan, integritas, dan kemampuan berkolaborasi, menjadikan lulusannya sangat dicari di pasar tenaga kerja global.',
      },
   ];

   return (
      <main>
         {/* Page Header */}
         <PageHeader 
            breadcrumbItems={breadcrumbItems}
            title="Profil & Sejarah"
            description="SMK Telkom Malang adalah pelopor Sekolah menengah kejuruan pertama di Indonesia di bidang Teknologi dan Informatika. Berpengalaman dari tahun 1992 yang telah terakreditasi &quot;A&quot; dan mempunyai standart mutu ISO 9001:2015. SMK Telkom Malang juga merupakan sekolah adiwiyata yang menerapkan prinsip sekolah hijau, hal tersebut semakin memberikan suasana yang nyaman bagi warga sekolah."
         />

         {/* Sejarah Section */}
         <section className="py-16 md:py-24 bg-surface-alt">
            <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
               <SectionHeader
                  title="Jejak Perjalanan Kami"
                  description="Sejarah panjang dedikasi SMK Telkom Malang dalam mencetak talenta digital berprestasi."
                  className="mb-16"
               />
               <div className="max-w-4xl mx-auto">
                  <Timeline events={historyEvents} />
               </div>
            </div>
         </section>

         {/* Stats Section */}
         <section className="py-16 bg-surface-alt border-t border-border-light">
            <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <Card className="p-6 text-center hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 rounded-xl bg-accent/5 text-accent flex items-center justify-center mx-auto mb-4">
                        <Users className="w-8 h-8" />
                     </div>
                     <div className="text-4xl font-extrabold text-text-main mb-2">3000<span className="text-accent">+</span></div>
                     <div className="text-sm font-semibold text-text-muted">Siswa Aktif</div>
                  </Card>
                  <Card className="p-6 text-center hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 rounded-xl bg-accent/5 text-accent flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8" />
                     </div>
                     <div className="text-4xl font-extrabold text-text-main mb-2">1992</div>
                     <div className="text-sm font-semibold text-text-muted">Tahun Berdiri</div>
                  </Card>
                  <Card className="p-6 text-center hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 rounded-xl bg-accent/5 text-accent flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="w-8 h-8" />
                     </div>
                     <div className="text-4xl font-extrabold text-text-main mb-2">500<span className="text-accent">+</span></div>
                     <div className="text-sm font-semibold text-text-muted">Mitra Industri</div>
                  </Card>
                  <Card className="p-6 text-center hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 rounded-xl bg-accent/5 text-accent flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8" />
                     </div>
                     <div className="text-4xl font-extrabold text-text-main mb-2">A</div>
                     <div className="text-sm font-semibold text-text-muted">Akreditasi Unggul</div>
                  </Card>
               </div>
            </div>
         </section>

         {/* Video Profile */}
         <section className="py-20 md:py-32 bg-surface">
            <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
               <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                  <div className="flex-1 space-y-6">
                     <h2 className="text-3xl md:text-4xl font-extrabold text-text-main leading-tight">
                        Mengenal Lebih Dekat <br /><span className="text-accent">Profil Sekolah Kami</span>
                     </h2>
                     <p className="text-lg text-text-muted leading-relaxed">
                        Tonton video profil SMK Telkom Malang untuk melihat secara langsung berbagai aktivitas, fasilitas unggulan, serta lingkungan belajar yang inspiratif. Kami berkomitmen untuk terus mencetak generasi emas di bidang teknologi digital.
                     </p>
                     <div className="flex items-center gap-2 font-bold text-text-main">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                           <Play className="w-4 h-4 text-red-600 fill-current" />
                        </div>
                        Official Channel
                     </div>
                  </div>
                  <div className="flex-1 w-full">
                     <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black">
                        <iframe
                           src="https://www.youtube.com/embed/GaZ7tHSiSco"
                           title="YouTube video player"
                           frameBorder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowFullScreen
                           className="absolute inset-0 w-full h-full"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </section>

      </main>
   );
}
