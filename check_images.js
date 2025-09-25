const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Checking GitHub Pages for image issues...');
    await page.goto('https://sato7564.github.io/WebTest1/', { waitUntil: 'networkidle' });

    // Get all images on the page
    const images = await page.locator('img').all();
    console.log(`Total images found: ${images.length}`);

    const brokenImages = [];
    const workingImages = [];

    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt');

      if (src) {
        // Check if image loaded successfully
        const isLoaded = await img.evaluate(el => {
          return el.complete && el.naturalWidth > 0;
        });

        const isVisible = await img.isVisible();

        if (!isLoaded || !isVisible) {
          brokenImages.push({ src, alt, loaded: isLoaded, visible: isVisible });
        } else {
          workingImages.push({ src, alt });
        }
      }
    }

    console.log('\n=== WORKING IMAGES ===');
    workingImages.forEach((img, i) => {
      console.log(`${i + 1}. ${img.src} (alt: "${img.alt}")`);
    });

    console.log('\n=== BROKEN/MISSING IMAGES ===');
    brokenImages.forEach((img, i) => {
      console.log(`${i + 1}. ${img.src} (alt: "${img.alt}", loaded: ${img.loaded}, visible: ${img.visible})`);
    });

    // Check background images in CSS
    const backgroundImages = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const bgImages = [];

      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const bgImage = style.backgroundImage;

        if (bgImage && bgImage !== 'none' && !bgImage.includes('gradient')) {
          const urlMatch = bgImage.match(/url\(['"]?(.*?)['"]?\)/);
          if (urlMatch) {
            bgImages.push({
              element: el.tagName + (el.className ? '.' + el.className.split(' ').join('.') : ''),
              backgroundImage: urlMatch[1]
            });
          }
        }
      });

      return bgImages;
    });

    console.log('\n=== BACKGROUND IMAGES ===');
    backgroundImages.forEach((bg, i) => {
      console.log(`${i + 1}. Element: ${bg.element}, Background: ${bg.backgroundImage}`);
    });

    // Check for 404 errors in network
    const failedRequests = [];
    page.on('response', response => {
      if (response.status() === 404 && response.url().includes('.jpg', '.png', '.gif', '.webp')) {
        failedRequests.push(response.url());
      }
    });

    // Reload to catch network errors
    await page.reload({ waitUntil: 'networkidle' });

    if (failedRequests.length > 0) {
      console.log('\n=== 404 IMAGE REQUESTS ===');
      failedRequests.forEach((url, i) => {
        console.log(`${i + 1}. ${url}`);
      });
    }

    console.log(`\nSummary: ${workingImages.length} working, ${brokenImages.length} broken images`);

  } catch (error) {
    console.error('Error checking images:', error);
  }

  await browser.close();
})();