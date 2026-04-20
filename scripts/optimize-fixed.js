const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = '/Users/alexandervaughn/.openclaw/workspace/REACT_VERCEL/Aspire Interiors/Images for Website/Fixed Styles';
const outputDir = '/Users/alexandervaughn/.openclaw/workspace/REACT_VERCEL/aspire-interiors-website/public/website-images/optimized';

const images = [
  { src: 'Blush Marble.PNG', dst: 'fixed-blush-marble.jpg', name: 'Blush Marble' },
  { src: 'Bold Geometric.PNG', dst: 'fixed-bold-geometric.jpg', name: 'Bold Geometric' },
  { src: 'Modern Deco.PNG', dst: 'fixed-modern-deco.jpg', name: 'Modern Deco' },
  { src: 'Moroccan Amethyst.PNG', dst: 'fixed-moroccan-amethyst.jpg', name: 'Moroccan Amethyst' }
];

async function optimizeImages() {
  for (const img of images) {
    const input = path.join(inputDir, img.src);
    const output = path.join(outputDir, img.dst);
    if (fs.existsSync(input)) {
      await sharp(input)
        .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 85, progressive: true })
        .toFile(output);
      const stats = fs.statSync(input);
      const newStats = fs.statSync(output);
      console.log('✓ ' + img.src + ' → ' + img.dst);
      console.log('  ' + (stats.size/1024/1024).toFixed(2) + 'MB → ' + (newStats.size/1024).toFixed(0) + 'KB');
    } else {
      console.log('⚠ Not found: ' + img.src);
    }
  }
  console.log('✅ Done!');
}

optimizeImages().catch(err => console.error('Error:', err));
