const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Checking GitHub Pages deployment...');
    await page.goto('https://sato7564.github.io/WebTest1/', { waitUntil: 'networkidle' });

    // Check if mobile-fix.css is loaded
    const mobileCssLoaded = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
      return links.some(link => link.href.includes('mobile-fix.css'));
    });

    console.log('Mobile-fix.css loaded:', mobileCssLoaded);

    // Check if pilates section exists
    const pilatesSection = await page.locator('.py-16.bg-gray-50').count();
    console.log('Pilates section found:', pilatesSection > 0);

    if (pilatesSection > 0) {
      // Check grid layout
      const gridLayout = await page.locator('.py-16.bg-gray-50 .grid').first();
      const gridStyles = await gridLayout.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return {
          gridTemplateColumns: styles.gridTemplateColumns,
          gap: styles.gap,
          display: styles.display
        };
      });
      console.log('Grid styles:', gridStyles);

      // Count pilates cards
      const cardCount = await page.locator('.py-16.bg-gray-50 .grid > div').count();
      console.log('Number of pilates cards:', cardCount);

      // Check if tatemono image is hidden on mobile
      await page.setViewportSize({ width: 375, height: 667 }); // iPhone viewport
      await page.waitForTimeout(1000);

      const tatemonoVisible = await page.locator('img[src*="tatemono"]').isVisible().catch(() => false);
      console.log('Tatemono image visible on mobile:', tatemonoVisible);

      // Check mobile layout
      const mobileGridStyles = await gridLayout.evaluate(el => {
        const styles = window.getComputedStyle(el);
        return {
          gridTemplateColumns: styles.gridTemplateColumns,
          gap: styles.gap
        };
      });
      console.log('Mobile grid styles:', mobileGridStyles);
    }

    // Check for opening hours table
    const openingHoursTable = await page.locator('table').count();
    console.log('Opening hours tables found:', openingHoursTable);

    // Take screenshots
    await page.setViewportSize({ width: 1200, height: 800 }); // Desktop
    await page.screenshot({ path: 'desktop-view.png', fullPage: true });

    await page.setViewportSize({ width: 375, height: 667 }); // Mobile
    await page.screenshot({ path: 'mobile-view.png', fullPage: true });

    console.log('Screenshots saved: desktop-view.png, mobile-view.png');

  } catch (error) {
    console.error('Error checking deployment:', error);
  }

  await browser.close();
})();