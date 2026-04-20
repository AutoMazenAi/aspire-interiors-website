const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = '/Users/alexandervaughn/Documents/Aspire App Images/Style Images/Living Room';
const outputDir = '/Users/alexandervaughn/.openclaw/workspace/REACT_VERCEL/aspire-interiors-website/public/website-images/optimized/styles';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const styles = [
  { src: 'Classic European Living Room.png', dst: 'style-classic-european.jpg', name: 'Classic European' },
  { src: 'Coastal Experience Living Room.png', dst: 'style-coastal-escape.jpg', name: 'Coastal Escape' },
  { src: 'Modern Deco Living Room.png', dst: 'style-modern-deco.jpg', name: 'Modern Deco' },
  { src: 'Minimal Essential Living Room.png', dst: 'style-minimal-essential.jpg', name: 'Minimal Essential' },
  { src: 'Futuristic Visionary Living Room.png', dst: 'style-futuristic-visionary.jpg', name: 'Futuristic Visionary' },
  { src: 'Industrial Raw Living Room.png', dst: 'style-industrial-raw.jpg', name: 'Industrial Raw' },
  { src: 'Historical Heritage Living Room.png', dst: 'style-historical-heritage.jpg', name: 'Historical Heritage' },
  { src: 'Organic Natural Living Room.png', dst: 'style-organic-natural.jpg', name: 'Organic Natural' },
  { src: 'Urban Contemprary Living Room.png', dst: 'style-urban-contemporary.jpg', name: 'Urban Contemporary' },
  { src: 'Warm Welcome Living Room.png', dst: 'style-warm-welcome.jpg', name: 'Warm Welcome' },
  { src: 'Bold Experience Living Room.png', dst: 'style-bold-expressive.jpg', name: 'Bold Expressive' },
  { src: 'Art Nouveau Revival Living Room.png', dst: 'style-art-nouveau.jpg', name: 'Art Nouveau Revival' }
];

async function process() {
  for (const style of styles) {
    const input = path.join(inputDir, style.src);
    const output = path.join(outputDir, style.dst);
    if (fs.existsSync(input)) {
      await sharp(input)
        .resize(800, 600, { fit: 'cover' })
        .jpeg({ quality: 85 })
        .toFile(output);
      console.log('✓ ' + style.src + ' → ' + style.dst);
    } else {
      console.log('⚠ Not found: ' + style.src);
    }
  }
  console.log('✅ Done!');
}

process().catch(err => console.error(err));
