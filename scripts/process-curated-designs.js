const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = '/Users/alexandervaughn/.openclaw/workspace/AUTOMAZEN_AI/Aspire App/Assets/Designs/LivingRoom';
const outputDir = '/Users/alexandervaughn/.openclaw/workspace/REACT_VERCEL/aspire-interiors-website/public/website-images/optimized/designs';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const designs = [
  { src: 'Bioluminescent_Cobalt.jpg', dst: 'design-bioluminescent-cobalt.jpg', name: 'Bioluminescent Cobalt' },
  { src: 'Biophilic_Retreat.jpg', dst: 'design-biophilic-retreat.jpg', name: 'Biophilic Retreat' },
  { src: 'Blush_Fluted.jpg', dst: 'design-blush-fluted.jpg', name: 'Blush Fluted' },
  { src: 'Bold_Geometric.jpg', dst: 'design-bold-geometric.jpg', name: 'Bold Geometric' },
  { src: 'Coastal_Calm.jpg', dst: 'design-coastal-calm.jpg', name: 'Coastal Calm' },
  { src: 'Contemporary_Art.jpg', dst: 'design-contemporary-art.jpg', name: 'Contemporary Art' },
  { src: 'Curved_Elegance.jpg', dst: 'design-curved-elegance.jpg', name: 'Curved Elegance' },
  { src: 'Jewelbox_Glam.jpg', dst: 'design-jewelbox-glam.jpg', name: 'Jewelbox Glam' }
];

async function process() {
  for (const design of designs) {
    const input = path.join(inputDir, design.src);
    const output = path.join(outputDir, design.dst);
    if (fs.existsSync(input)) {
      await sharp(input)
        .resize(400, 400, { fit: 'cover' })
        .jpeg({ quality: 85 })
        .toFile(output);
      const stats = fs.statSync(output);
      console.log('✓ ' + design.src + ' → ' + design.dst + ' (' + (stats.size/1024).toFixed(0) + 'KB)');
    } else {
      console.log('⚠ Not found: ' + design.src);
    }
  }
  console.log('✅ Done!');
}

process().catch(err => console.error(err));
