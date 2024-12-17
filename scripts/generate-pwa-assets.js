import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICONS_DIR = path.join(__dirname, '../public/images');
const SOURCE_ICON = path.join(__dirname, '../src/assets/logo.svg');

const PWA_ICONS = [
  { size: 192, filename: 'icon-192x192.png' },
  { size: 512, filename: 'icon-512x512.png' },
  { size: 180, filename: 'apple-touch-icon.png' },
  { size: 32, filename: 'favicon-32x32.png' },
  { size: 16, filename: 'favicon-16x16.png' }
];

async function generateIcons() {
  try {
    // Create icons directory if it doesn't exist
    await fs.mkdir(ICONS_DIR, { recursive: true });

    // Generate each icon
    for (const icon of PWA_ICONS) {
      await sharp(SOURCE_ICON)
        .resize(icon.size, icon.size)
        .png()
        .toFile(path.join(ICONS_DIR, icon.filename));
      
      console.log(`Generated ${icon.filename}`);
    }

    // Generate favicon.ico (16x16 and 32x32 combined)
    await sharp(SOURCE_ICON)
      .resize(32, 32)
      .png()
      .toFile(path.join(ICONS_DIR, 'favicon.ico'));
    
    console.log('Generated favicon.ico');
    console.log('PWA assets generation completed successfully!');
  } catch (error) {
    console.error('Error generating PWA assets:', error);
    process.exit(1);
  }
}

generateIcons();
