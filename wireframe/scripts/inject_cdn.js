const fs = require('fs');
const path = require('path');

const folders = ['tentang-kami', 'program', 'alumni', 'hubungi-kami', 'berita'];
const baseDir = path.join(__dirname);

const cssCdn = `\n  <!-- Animations & Icons -->\n  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">\n`;
const jsCdn = `\n  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>\n  <script src="https://unpkg.com/lucide@latest"></script>\n  `;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Insert CSS
  if (!content.includes('aos.css') && content.includes('</head>')) {
    content = content.replace('</head>', cssCdn + '</head>');
    changed = true;
  }

  // Insert JS
  if (!content.includes('aos.js') && content.includes('<script src="../script.js"></script>')) {
    content = content.replace('<script src="../script.js"></script>', jsCdn + '<script src="../script.js"></script>');
    changed = true;
  }
  
  // Add AOS data attributes to main sections if not present
  if (!content.includes('data-aos=')) {
    // find elements like <div data-reveal class="container"> and replace with data-aos
    content = content.replace(/data-reveal/g, 'data-aos="fade-up" data-aos-duration="800"');
    // Also add to cards
    content = content.replace(/class="feature-card"/g, 'class="feature-card" data-aos="fade-up" data-aos-delay="100"');
    content = content.replace(/class="program-card"/g, 'class="program-card" data-aos="fade-up" data-aos-delay="100"');
    content = content.replace(/class="news-card"/g, 'class="news-card" data-aos="fade-up" data-aos-delay="100"');
    content = content.replace(/class="testimonial-card"/g, 'class="testimonial-card" data-aos="zoom-in" data-aos-delay="100"');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated:', filePath);
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
console.log('Done injecting CDNs and AOS attributes.');
