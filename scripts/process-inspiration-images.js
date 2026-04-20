const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = '/Users/alexandervaughn/.openclaw/workspace/REACT_VERCEL/Aspire Interiors/Images for Website/Inspiration';
const outputDir = '/Users/alexandervaughn/.openclaw/workspace/REACT_VERCEL/aspire-interiors-website/public/website-images/optimized';

// Image pairs to process
const imagePairs = [
  {
    inspiration: 'Inspiration Image Gold and Black Statue.JPG',
    result: 'Inspiration Imag Results black and gold statue.PNG',
    name: 'gold-black-statue'
  },
  {
    inspiration: 'Inspiration Image - Coral.PNG',
    result: 'Inspiration Image Results.PNG',
    name: 'coral'
  },
  {
    inspiration: 'Inspiration Image - Unicron.PNG',
    result: 'Inspiration Image Results - Unicorn.PNG',
    name: 'unicorn'
  },
  {
    inspiration: 'INspiration Image Gold and Black Statue and Necklace.JPG',
    result: 'Inspiration Image Results black and Gold Neck.PNG',
    name: 'gold-black-necklace'
  }
];

async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, progressive: true })
      .toFile(outputPath);
    
    const stats = fs.statSync(inputPath);
    const newStats = fs.statSync(outputPath);
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`  ${(stats.size / 1024 / 1024).toFixed(2)}MB → ${(newStats.size / 1024).toFixed(0)}KB`);
  } catch (err) {
    console.error(`✗ Error: ${err.message}`);
  }
}

async function processImages() {
  for (const pair of imagePairs) {
    const inspPath = path.join(inputDir, pair.inspiration);
    const resultPath = path.join(inputDir, pair.result);
    
    if (fs.existsSync(inspPath)) {
      await optimizeImage(inspPath, path.join(outputDir, `inspiration-${pair.name}.jpg`));
    } else {
      console.log(`⚠ Inspiration not found: ${pair.inspiration}`);
    }
    
    if (fs.existsSync(resultPath)) {
      await optimizeImage(resultPath, path.join(outputDir, `result-${pair.name}.jpg`));
    } else {
      console.log(`⚠ Result not found: ${pair.result}`);
    }
  }
}

processImages().then(() => console.log('\n✅ Done!'));
