import React from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { OrgNode } from '@/shared/ui/OrgNode';

export default function StrukturOrganisasi() {
  const breadcrumbItems = [
    { label: 'Tentang Kami' },
    { label: 'Struktur Organisasi' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Struktur Organisasi"
        description="Bagan Struktur Organisasi SMK Telkom Malang Tahun 2026."
      />

      {/* Org Chart Container */}
      <section className="py-16 bg-[#f5f7f9] overflow-x-auto min-h-screen">
        <div className="min-w-[1200px] max-w-[1400px] mx-auto px-4 relative flex flex-col items-center">
          
          {/* Main Central Line - extending down */}
          <div className="absolute left-1/2 top-0 bottom-40 w-[2px] bg-black -translate-x-1/2 z-0"></div>

          {/* 1. Direktur Utama */}
          <div className="relative z-10 mt-10">
            <OrgNode 
              title="Direktur Utama Yayasan Pendidikan Telkom" 
              name="Dodi Irawan, S.T." 
            />
          </div>

          <div className="h-16 w-full relative z-0"></div>

          {/* 2. Komite & Kepsek */}
          <div className="relative z-10 flex justify-center w-full">
            {/* Komite - Left absolute */}
            <div className="absolute right-1/2 top-1/2 -translate-y-1/2 flex items-center z-0">
              <OrgNode 
                title="Komite Sekolah" 
                name="Endahing Nurweni R.A., S.E." 
              />
              <div className="w-[170px] border-t-[2px] border-dashed border-black -z-10 relative -left-2"></div>
            </div>
            
            <div className="relative z-10">
              <OrgNode 
                title="Kepala Sekolah" 
                name="Rahmat Dwi Djatmiko, S.Kom., M.M." 
                image="https://www.smktelkom-mlg.sch.id/assets/frontend/images/image1001.png"
              />
            </div>
          </div>

          <div className="h-24 w-full relative z-0"></div>

          {/* 3. Kaur Quality & Kepala Administrasi */}
          <div className="relative z-10 w-full max-w-[900px] flex justify-between items-start">
            {/* Horizontal connection */}
            <div className="absolute top-0 left-[130px] right-[130px] border-t-[2px] border-black -z-10"></div>
            <div className="absolute top-0 left-[130px] w-[2px] h-6 bg-black -z-10"></div>
            <div className="absolute top-0 right-[130px] w-[2px] h-6 bg-black -z-10"></div>
            
            <div className="pt-6">
              <OrgNode 
                title="Kaur. Quality Development Performance Management" 
                name="Muhamad Arifin, M.Pd." 
              />
            </div>
            
            <div className="pt-6 flex flex-col items-center">
              <OrgNode 
                title="Kepala Administrasi" 
                name="Laili Agustin, S.T." 
              />
              {/* Sub-tree for Administrasi */}
              <div className="w-[2px] h-8 bg-black"></div>
              <div className="relative w-[560px] flex justify-between items-start">
                <div className="absolute top-0 left-[130px] right-[130px] border-t-[2px] border-black -z-10"></div>
                <div className="absolute top-0 left-[130px] w-[2px] h-6 bg-black -z-10"></div>
                <div className="absolute top-0 right-[130px] w-[2px] h-6 bg-black -z-10"></div>
                
                <div className="pt-6">
                  <OrgNode title="Kaur. Keuangan" name="Anum Rosallani Nur Mufida, S.E." />
                </div>
                <div className="pt-6">
                  <OrgNode title="Kaur. Human Capital, Logistik, dan Sekretariat" name="Sri Chusnul Haniyah, S.Pd." />
                </div>
              </div>
            </div>
          </div>

          <div className="h-24 w-full relative z-0"></div>

          {/* 4. The 4 Waka Pillars */}
          {/* Dashed Bounding Box for the 4 Wakas */}
          <div className="relative z-10 w-full max-w-[1150px] border-[2px] border-dashed border-black p-8 pt-0 pb-12 rounded-lg bg-[#f5f7f9]/80 backdrop-blur-sm mt-8">
             
             <div className="relative w-full flex justify-between mt-12 items-start">
               {/* Horizontal solid line connecting the 4 wakas */}
               <div className="absolute top-0 left-[130px] right-[130px] border-t-[2px] border-black -z-10"></div>
               
               {/* Vertical line from top center connecting to the horizontal line */}
               <div className="absolute -top-[48px] left-1/2 w-[2px] h-[48px] bg-black -translate-x-1/2 -z-10"></div>
               
               {/* Pilar 1: Kurikulum */}
               <div className="flex flex-col items-center relative pt-6">
                 <div className="absolute top-0 w-[2px] h-6 bg-black -z-10"></div>
                 <OrgNode title="Waka Bid. Kurikulum" name="Ifa Choirunnisa, S.ST., M.Pd." />
                 <div className="w-[2px] h-8 bg-black"></div>
                 <OrgNode title="Kaur. Pengembangan Kursilmat" name="Rendi Lusbiantoro, M.Pd." />
                 <div className="w-[2px] h-8 bg-black"></div>
                 <OrgNode title="Kaur. Pembelajaran & Perpustakaan" name="Larasati Chairun Nisa, S.Pd." />
               </div>

               {/* Pilar 2: Kesiswaan */}
               <div className="flex flex-col items-center relative pt-6">
                 <div className="absolute top-0 w-[2px] h-6 bg-black -z-10"></div>
                 <OrgNode title="Waka Bid. Kesiswaan & Karakter" name="Drs. Bambang Siswantoro" />
                 <div className="w-[2px] h-8 bg-black"></div>
                 <OrgNode title="Kaur. Bimbingan Konseling & Karakter" name="Ahmad Nasikin, M.Pd." />
                 <div className="w-[2px] h-8 bg-black"></div>
                 <OrgNode title="Kaur. Ekstrakurikuler & Pembinaan Prestasi" name="Adi Nurrachman, S.T., M.Kom., Gr." />
               </div>

               {/* Pilar 3: Hubinmas */}
               <div className="flex flex-col items-center relative pt-6">
                 <div className="absolute top-0 w-[2px] h-6 bg-black -z-10"></div>
                 <OrgNode title="Waka Bid. Hubungan Industri & Komunikasi" name="Qodri Akbar Wajdi, S.Kom." />
                 <div className="w-[2px] h-8 bg-black"></div>
                 <OrgNode title="Kaur. Sinergi, Unit Produksi, & Alumni" name="Tito Tri Prabowo, M.Pd." />
                 <div className="w-[2px] h-8 bg-black"></div>
                 <OrgNode title="Kaur. PPDB & Komunikasi" name="Kinanti Retnaning W., M.Pd." />
               </div>

               {/* Pilar 4: IT & Sarpra */}
               <div className="flex flex-col items-center relative pt-6">
                 <div className="absolute top-0 w-[2px] h-6 bg-black -z-10"></div>
                 <OrgNode title="Waka Bid. IT, Laboratorium & Sarpra" name="M. Hadi Wijaya, S.Kom., M.T." />
                 <div className="w-[2px] h-8 bg-black"></div>
                 <OrgNode title="Kaur. IT" name="Whyna Agustin, S.Pd." />
                 <div className="w-[2px] h-8 bg-black"></div>
                 <OrgNode title="Kaur. Laboratorium" name="M. Chusni Agus, M.Pd., Gr." />
                 <div className="w-[2px] h-8 bg-black"></div>
                 <OrgNode title="Kaur. Sarpra" name="Ekon Anjar P., S.Kom." />
               </div>
             </div>
          </div>

          <div className="h-16 w-full relative z-0"></div>

          {/* 5. Kaprog (Ketua Kompetensi Keahlian) */}
          <div className="relative z-10 w-full max-w-[900px] flex justify-between items-start">
            {/* Horizontal line for Kaprog */}
            <div className="absolute top-0 left-[130px] right-[130px] border-t-[2px] border-black -z-10"></div>
            
            {/* 3 Verticals */}
            <div className="absolute top-0 left-[130px] w-[2px] h-6 bg-black -z-10"></div>
            <div className="absolute top-0 right-[130px] w-[2px] h-6 bg-black -z-10"></div>
            {/* Center vertical is handled by the main central line */}
            
            <div className="pt-6">
               <OrgNode title="Ketua Kompetensi Keahlian RPL" name="Firdausa, S.Pd., Gr." />
            </div>
            <div className="pt-6 relative bg-[#f5f7f9] z-10 px-2 rounded-t-xl">
               <OrgNode title="Ketua Kompetensi Keahlian TKJ" name="Roselina Febriati, S.ST., Gr." />
            </div>
            <div className="pt-6">
               <OrgNode title="Ketua Kompetensi Keahlian Pengembangan Gim" name="Bias Damiasa, S.Pd." />
            </div>
          </div>

          <div className="h-24 w-full relative z-0"></div>

          {/* 6. Wali Kelas Guru */}
          <div className="relative z-10 w-full max-w-[900px] flex items-start">
             {/* Horizontal dashed line from center to left */}
             <div className="absolute top-0 left-[130px] right-1/2 border-t-[2px] border-dashed border-black -z-10"></div>
             <div className="absolute top-0 left-[130px] w-[2px] h-6 bg-black -z-10"></div>

             <div className="pt-6 flex justify-start">
               <div className="w-[260px] md:w-[280px] bg-white rounded-xl overflow-hidden shadow-md border border-accent relative z-10 flex items-center p-4">
                 <div className="shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center text-accent mr-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                     <circle cx="9" cy="7" r="4"></circle>
                     <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                     <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                   </svg>
                 </div>
                 <div className="font-bold text-text-main text-lg uppercase">
                   Wali Kelas & Guru
                 </div>
               </div>
             </div>
          </div>

          {/* Legend Box */}
          <div className="absolute bottom-10 right-10 bg-white border border-border-light rounded-xl shadow-md p-4 w-[280px]">
            <div className="bg-accent text-white text-center py-1 font-bold text-sm mb-4 rounded">Keterangan</div>
            <div className="flex items-center gap-3 mb-2">
               <div className="w-12 border-t-[2px] border-black"></div>
               <span className="text-sm font-semibold">Garis Komando</span>
            </div>
            <div className="flex items-center gap-3">
               <div className="w-12 border-t-[2px] border-dashed border-black"></div>
               <span className="text-sm font-semibold">Garis Koordinasi</span>
            </div>
          </div>
          
        </div>
      </section>

      {/* Mobile Notice (Visible only on very small screens if they don't scroll) */}
      <div className="xl:hidden bg-blue-50 border-t border-b border-blue-100 text-blue-800 p-4 text-center text-sm font-medium">
        Geser layar (swipe) untuk melihat bagan selengkapnya.
      </div>
    </main>
  );
}
