const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = '/Users/alexandervaughn/.openclaw/workspace/REACT_VERCEL/Aspire Interiors/Images for Website/Inspiration';
const outputDir = '/Users/alexandervaughn/.openclaw/workspace/REACT_VERCEL/aspire-interiors-website/public/website-images/optimized';

const images = [
  { src: 'Inspiration Image Results - Beach.PNG', dst: 'result-beach.jpg' },
  { src: 'Inspiration Image Results - Highland Cow.PNG', dst: 'result-highland-cow.jpg' },
  { src: 'Inspiration Image Results - cop.PNG', dst: 'result-cop.jpg' },
  { src: 'Inspiration Images Results Pink Flamingo.PNG', dst: 'result-pink-flamingo.jpg' }
];

async function processImages() {
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
    }
  }
  console.log('✅ Done!');
}

processImages().catch(err => console.error('Error:', err));
