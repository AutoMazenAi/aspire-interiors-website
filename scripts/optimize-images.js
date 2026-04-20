const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/website-images';
const outputDir = './public/website-images/optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Image mapping for SEO-friendly names
const imageMap = {
  'Main Image.PNG': 'hero-main-design.jpg',
  'Mood Board - Gold and Black.PNG': 'mood-board-gold-black.jpg',
  'Mood Board - Emerald and Gold.PNG': 'mood-board-emerald-gold.jpg',
  'Mood Board - Cream and Natural.PNG': 'mood-board-cream-natural.jpg',
  'Mood Board - Grey and Silver.PNG': 'mood-board-grey-silver.jpg',
  'Mood Board - Pink and Light Green.PNG': 'mood-board-pink-green.jpg',
  'Mood Board Black Image 1.PNG': 'design-gold-black-luxury-1.jpg',
  'Mood Board Black Image 2.PNG': 'design-gold-black-luxury-2.jpg',
  'Mood Board Black Image 3.PNG': 'design-gold-black-luxury-3.jpg',
  'Mood Board Emerald Image.PNG': 'design-emerald-gold-elegance.jpg',
  'Mood Board Natural.PNG': 'design-cream-natural-tones.jpg',
  'mood board grey and blue.PNG': 'design-grey-silver-modern.jpg',
  'mood board pink and light green.PNG': 'design-pink-green-fresh.jpg',
  'Inspiration Image - Beach.PNG': 'inspiration-beach-coastal.jpg',
  'Inspiration Image - Highland Cow.JPG': 'inspiration-highland-cow-rustic.jpg',
  'Inspiration Image - Futuristic Cop.JPG': 'inspiration-futuristic-cop.jpg',
  'Inspiration Image - Pink Flamingo.JPG': 'inspiration-pink-flamingo.jpg',
};

async function optimizeImage(inputPath, outputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    
    let pipeline = sharp(inputPath)
      .resize(1200, 1200, { 
        fit: 'inside',
        withoutEnlargement: true 
      });
    
    if (ext === '.png') {
      pipeline = pipeline.jpeg({ 
        quality: 85,
        progressive: true 
      });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ 
        quality: 85,
        progressive: true 
      });
    }
    
    await pipeline.toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const newSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    console.log(`  ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024).toFixed(0)}KB (${savings}% smaller)`);
    
  } catch (err) {
    console.error(`✗ Error processing ${inputPath}:`, err.message);
  }
}

async function processImages() {
  const files = fs.readdirSync(inputDir).filter(f => 
    f.match(/\.(png|jpg|jpeg)$/i) && !f.startsWith('.')
  );
  
  console.log(`Processing ${files.length} images...\n`);
  
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputFileName = imageMap[file] || file.replace(/\.[^.]+$/, '.jpg');
    const outputPath = path.join(outputDir, outputFileName);
    
    await optimizeImage(inputPath, outputPath);
  }
  
  console.log('\n✅ All images optimized!');
}

processImages();
