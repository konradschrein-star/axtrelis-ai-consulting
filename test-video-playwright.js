const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  console.log('🔍 Navigiere zu http://localhost:3002...');
  await page.goto('http://localhost:3002');

  // Warte 3 Sekunden damit alles lädt
  await page.waitForTimeout(3000);

  // Prüfe ob Video-Element existiert
  const videoExists = await page.evaluate(() => {
    const videos = document.querySelectorAll('video');
    return videos.length > 0;
  });

  console.log(`\n📹 Video-Element gefunden: ${videoExists ? '✅ JA' : '❌ NEIN'}`);

  if (videoExists) {
    // Prüfe Video-Details
    const videoInfo = await page.evaluate(() => {
      const video = document.querySelector('video');
      return {
        src: video?.querySelector('source')?.src || 'N/A',
        paused: video?.paused,
        readyState: video?.readyState,
        networkState: video?.networkState,
        currentTime: video?.currentTime,
        duration: video?.duration,
        width: video?.offsetWidth,
        height: video?.offsetHeight,
        opacity: window.getComputedStyle(video).opacity,
        zIndex: window.getComputedStyle(video.parentElement).zIndex,
      };
    });

    console.log('\n📊 Video-Informationen:');
    console.log(`   Quelle: ${videoInfo.src}`);
    console.log(`   Pausiert: ${videoInfo.paused ? '❌ JA (spielt nicht!)' : '✅ NEIN (spielt!)'}`);
    console.log(`   Ready State: ${videoInfo.readyState} (4 = voll geladen)`);
    console.log(`   Network State: ${videoInfo.networkState} (2 = lädt)`);
    console.log(`   Aktuelle Zeit: ${videoInfo.currentTime}s`);
    console.log(`   Dauer: ${videoInfo.duration}s`);
    console.log(`   Größe: ${videoInfo.width}x${videoInfo.height}px`);
    console.log(`   Opacity: ${videoInfo.opacity}`);
    console.log(`   Z-Index: ${videoInfo.zIndex}`);
  }

  // Screenshot machen
  console.log('\n📸 Erstelle Screenshot...');
  await page.screenshot({ path: 'playwright-screenshot.png', fullPage: false });
  console.log('✅ Screenshot gespeichert: playwright-screenshot.png\n');

  await browser.close();
})();
