const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public/images/team');
const outputDir = path.join(__dirname, 'public/images/team');

const images = fs.readdirSync(inputDir)
  .filter(file => /\.(jpg|jpeg|png)$/i.test(file));

console.log('🔧 Optimiere Team-Bilder...\n');

async function optimizeImages() {
  for (const image of images) {
    const inputPath = path.join(inputDir, image);
    const outputName = image.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(outputDir, outputName);

    const stats = fs.statSync(inputPath);
    const sizeMB = (stats.size / 1024 / 1024).toFixed(2);

    console.log(`📸 ${image} (${sizeMB} MB)`);

    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .resize(800, 800, {
        fit: 'cover',
        position: 'center'
      })
      .toFile(outputPath);

    const newStats = fs.statSync(outputPath);
    const newSizeKB = (newStats.size / 1024).toFixed(0);
    const saved = ((1 - newStats.size / stats.size) * 100).toFixed(0);

    console.log(`   ✅ → ${outputName} (${newSizeKB} KB) - ${saved}% gespart\n`);
  }

  console.log('✨ Fertig! Alle Bilder optimiert.');
}

optimizeImages().catch(console.error);
