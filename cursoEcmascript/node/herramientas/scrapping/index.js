const puppeteer = require('puppeteer');

(async () => {
    console.log('Lanzamos navegador');
    const browser = await puppeteer.launch({ 
        headless: false, 
        executablePath: '/usr/bin/google-chrome' // Ruta en Linux
    });

    const page = await browser.newPage();
    await page.goto('https://trello.com/b/o5bJOppC/davidhernandez');

    console.log('Cerramos navegador');
    await browser.close();
    console.log('Navegador cerrado');
})();
