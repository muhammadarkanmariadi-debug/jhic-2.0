const fs = require('fs');
const path = require('path');

const folders = ['tentang-kami', 'program', 'alumni', 'hubungi-kami', 'berita'];
const baseDir = path.join(__dirname);

const imgMap = [
  { match: /\[FOTO GEDUNG TAMPAK DEPAN\]/g, url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO SISWA PRAKTIK\]/g, url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO BERSAMA\]/g, url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO LAB KOMPUTER 1\]/g, url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO LAB KOMPUTER 2\]/g, url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO PERPUSTAKAAN\]/g, url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO LAPANGAN OLAHRAGA\]/g, url: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO MASJID SEKOLAH\]/g, url: "https://images.unsplash.com/photo-1564767609342-620cb19b2357?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO JUARA 1\]/g, url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO JUARA 2\]/g, url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO JUARA 3\]/g, url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO ROBOTIK\]/g, url: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO ANIMASI\]/g, url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO BASKET\]/g, url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO FUTSAL\]/g, url: "https://images.unsplash.com/photo-1536511132770-e501dd149176?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO PADUS\]/g, url: "https://images.unsplash.com/photo-1516280440502-1262d1c67676?q=80&w=800&auto=format&fit=crop" },
  { match: /\[FOTO PRAMUKA\]/g, url: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=800&auto=format&fit=crop" },
  { match: /\[PETA SEBARAN ALUMNI \/ INFOGRAFIS INDONESIA\]/g, url: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop" },
  { match: /\[BAGAN STRUKTUR ORGANISASI\]/g, url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  imgMap.forEach(item => {
    if (item.match.test(content)) {
      content = content.replace(item.match, `<img src="${item.url}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" alt="Image">`);
      changed = true;
    }
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Replaced images in:', filePath);
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
console.log('Done injecting placeholder images.');
