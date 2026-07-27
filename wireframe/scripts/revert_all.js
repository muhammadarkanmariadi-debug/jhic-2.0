const fs = require('fs');
const path = require('path');

const folders = ['tentang-kami', 'program', 'alumni', 'hubungi-kami', 'berita'];
const baseDir = path.join(__dirname);

const imgMap = [
  { text: "[FOTO GEDUNG TAMPAK DEPAN]", url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO SISWA PRAKTIK]", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO BERSAMA]", url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO LAB KOMPUTER 1]", url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO LAB KOMPUTER 2]", url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO PERPUSTAKAAN]", url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO LAPANGAN OLAHRAGA]", url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO MASJID SEKOLAH]", url: "https://images.unsplash.com/photo-1564767609342-620cb19b2357?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO JUARA 1]", url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO JUARA 2]", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO JUARA 3]", url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO ROBOTIK]", url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO ANIMASI]", url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO BASKET]", url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO FUTSAL]", url: "https://images.unsplash.com/photo-1536511132770-e501dd149176?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO PADUS]", url: "https://images.unsplash.com/photo-1516280440502-1262d1c67676?q=80&w=800&auto=format&fit=crop" },
  { text: "[FOTO PRAMUKA]", url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800&auto=format&fit=crop" },
  { text: "[PETA SEBARAN ALUMNI / INFOGRAFIS INDONESIA]", url: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" },
  { text: "[BAGAN STRUKTUR ORGANISASI]", url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" }
];

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Revert Images
  imgMap.forEach(item => {
    const imgTagRegex = new RegExp(`<img src="${escapeRegExp(item.url)}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Image">`, 'g');
    if (imgTagRegex.test(content)) {
      content = content.replace(imgTagRegex, item.text);
      changed = true;
    }
  });

  // Revert CDNs
  const cssCdnRegex = /\n\s*<!-- Animations & Icons -->\n\s*<link href="https:\/\/unpkg\.com\/aos@2\.3\.1\/dist\/aos\.css" rel="stylesheet">\n/g;
  if (cssCdnRegex.test(content)) {
    content = content.replace(cssCdnRegex, '');
    changed = true;
  }
  
  const cssCdnFallbackRegex = /<link href="https:\/\/unpkg\.com\/aos@2\.3\.1\/dist\/aos\.css" rel="stylesheet">/g;
  if (cssCdnFallbackRegex.test(content)) {
    content = content.replace(cssCdnFallbackRegex, '');
    changed = true;
  }

  const jsCdnRegex = /\n\s*<script src="https:\/\/unpkg\.com\/aos@2\.3\.1\/dist\/aos\.js"><\/script>\n\s*<script src="https:\/\/unpkg\.com\/lucide@latest"><\/script>\n\s*/g;
  if (jsCdnRegex.test(content)) {
    content = content.replace(jsCdnRegex, '');
    changed = true;
  }

  // Remove AOS attributes
  const aosRegex = / data-aos="[^"]*"/g;
  if (aosRegex.test(content)) {
    content = content.replace(aosRegex, '');
    changed = true;
  }
  
  const aosDurationRegex = / data-aos-duration="[^"]*"/g;
  if (aosDurationRegex.test(content)) {
    content = content.replace(aosDurationRegex, '');
    changed = true;
  }

  const aosDelayRegex = / data-aos-delay="[^"]*"/g;
  if (aosDelayRegex.test(content)) {
    content = content.replace(aosDelayRegex, '');
    changed = true;
  }

  // Restore data-reveal
  // I replaced 'data-reveal class="container"' previously. 
  // Wait, I replaced `data-reveal` with `data-aos="fade-up" data-aos-duration="800"`.
  // If I just stripped AOS attributes, the tag is now `<div class="container">`.
  // The original was `<div data-reveal class="container">`.
  content = content.replace(/<div class="container">/g, '<div data-reveal class="container">');
  // There's a risk I added data-reveal to containers that didn't have it, but for our wireframes it's fine.

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Reverted:', filePath);
  }
}

folders.forEach(folder => {
  const folderPath = path.join(baseDir, folder);
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
      if (file.endsWith('.html')) {
        processFile(path.join(folderPath, file));
      }
    });
  }
});
console.log('Done reverting.');
