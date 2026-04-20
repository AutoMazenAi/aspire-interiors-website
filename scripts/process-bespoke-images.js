const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const outputDir = '/Users/alexandervaughn/.openclaw/workspace/REACT_VERCEL/aspire-interiors-website/public/website-images/optimized/bespoke';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Note: The user sent 3 images that I need to process
// For now I'll create a script that can be run once the images are saved

const bespokeImages = [
  { 
    src: '/Users/alexandervaughn/.openclaw/media/inbound/file_70---329c5966-45c2-46f5-91a3-73c57bb487f2.jpg', // iPhone
    dst: 'bespoke-text-vision.jpg',
    name: 'Describe Your Vision'
  },
  { 
    src: '/Users/alexandervaughn/.openclaw/media/inbound/file_68---cd15f965-b50b-4fb5-83ae-0ab7177130a9.jpg', // Mood board
    dst: 'bespoke-mood-board.jpg',
    name: 'Upload a Mood Board'
  },
  { 
    src: '/Users/alexandervaughn/.openclaw/media/inbound/file_69---e581ef2f-2121-45a2-a274-82006ecd9a1c.jpg', // Living room
    dst: 'bespoke-recreate-room.jpg',
    name: 'Recreate Any Room'
  }
];

async function process() {
  for (const img of bespokeImages) {
    if (fs.existsSync(img.src)) {
      await sharp(img.src)
        .resize(600, 400, { fit: 'cover' })
        .jpeg({ quality: 85 })
        .toFile(path.join(outputDir, img.dst));
      console.log('✓ ' + img.name + ' → ' + img.dst);
    } else {
      console.log('⚠ Source not found: ' + img.src);
    }
  }
  console.log('✅ Done!');
}

process().catch(err => console.error(err));
