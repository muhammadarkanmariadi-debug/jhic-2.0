import React from 'react';
import { PageHeader } from '@/shared/ui/PageHeader';
import { AlumniDistribution } from '@/widgets/alumni/AlumniDistribution';

export default function ProfilSebaran() {
  const breadcrumbItems = [
    { label: 'Alumni' },
    { label: 'Profil & Sebaran Alumni' },
  ];

  return (
    <main>
      {/* Page Header */}
      <PageHeader 
        breadcrumbItems={breadcrumbItems}
        title="Profil & Sebaran Alumni"
        description="Jejaring alumni Moklet yang tersebar di berbagai perusahaan teknologi nasional maupun multinasional."
      />

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-surface-alt">
         <div className="container max-w-[1200px] mx-auto px-4 md:px-6">
            
            <div className="text-center mb-16">
               <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full"></div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-4">Peta Sebaran Lulusan</h2>
               <p className="text-text-muted text-lg max-w-2xl mx-auto">
                  Lulusan kami tersebar di berbagai perusahaan terkemuka, institusi pemerintahan, dan universitas di seluruh Indonesia maupun luar negeri.
               </p>
            </div>

            <AlumniDistribution />

         </div>
      </section>
    </main>
  );
}
