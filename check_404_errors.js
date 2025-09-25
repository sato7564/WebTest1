const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // 404エラーをキャッチするリスナー
  const failedRequests = [];
  page.on('response', response => {
    if (response.status() === 404) {
      failedRequests.push({
        url: response.url(),
        status: response.status(),
        statusText: response.statusText()
      });
    }
  });

  // ネットワークエラーをキャッチ
  page.on('requestfailed', request => {
    console.log('❌ Request failed:', request.url(), request.failure().errorText);
  });

  try {
    console.log('🔍 Checking https://sato7564.github.io/WebTest1/ for 404 errors...');

    // サイトにアクセス
    const response = await page.goto('https://sato7564.github.io/WebTest1/', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    console.log(`📄 Main page status: ${response.status()}`);

    // 少し待ってすべてのリソースが読み込まれるのを確認
    await page.waitForTimeout(3000);

    // 404エラーの報告
    if (failedRequests.length > 0) {
      console.log('\n🚨 404 ERRORS FOUND:');
      failedRequests.forEach((req, i) => {
        console.log(`${i + 1}. ${req.url} - ${req.status} ${req.statusText}`);
      });
    } else {
      console.log('\n✅ No 404 errors found');
    }

    // 画像の状態を確認
    const images = await page.locator('img').all();
    console.log(`\n🖼️ Total images found: ${images.length}`);

    const brokenImages = [];
    for (let i = 0; i < images.length; i++) {
      const img = images[i];
      const src = await img.getAttribute('src');
      const isLoaded = await img.evaluate(el => el.complete && el.naturalWidth > 0);

      if (src && !isLoaded) {
        brokenImages.push(src);
      }
    }

    if (brokenImages.length > 0) {
      console.log('\n💔 BROKEN IMAGES:');
      brokenImages.forEach((src, i) => {
        console.log(`${i + 1}. ${src}`);
      });
    } else {
      console.log('\n✅ All images loaded successfully');
    }

    // 背景画像もチェック
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
              element: el.tagName + (el.className ? '.' + el.className.split(' ').slice(0, 2).join('.') : ''),
              backgroundImage: urlMatch[1]
            });
          }
        }
      });

      return bgImages;
    });

    console.log('\n🎨 BACKGROUND IMAGES:');
    backgroundImages.forEach((bg, i) => {
      console.log(`${i + 1}. Element: ${bg.element}, URL: ${bg.backgroundImage}`);
    });

  } catch (error) {
    console.error('❌ Error accessing site:', error.message);
  }

  await browser.close();
})();