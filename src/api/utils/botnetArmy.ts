import {chromium} from 'playwright'
import botnet from './botnet'
import {v4 as uuidv4} from 'uuid' 

class Army {

    async createArmy(websiteTarget: string, path: string) {
        const browser = await chromium.launch({headless: true});
            
        // await Promise.all([
        //     botnet.createBotnet(browser, websiteTarget, path),  // 1
        //     botnet.createBotnet(browser, websiteTarget, path),  // 2
        //     botnet.createBotnet(browser, websiteTarget, path),  // 3
        //     botnet.createBotnet(browser, websiteTarget, path),  // 4
        //     botnet.createBotnet(browser, websiteTarget, path),  // 5
        //     botnet.createBotnet(browser, websiteTarget, path),  // 6
        //     botnet.createBotnet(browser, websiteTarget, path),  // 7
        //     botnet.createBotnet(browser, websiteTarget, path),  // 8
        //     botnet.createBotnet(browser, websiteTarget, path),  // 9
        //     botnet.createBotnet(browser, websiteTarget, path),  // 10
        //     botnet.createBotnet(browser, websiteTarget, path),  // 11
        //     botnet.createBotnet(browser, websiteTarget, path),  // 12
        //     botnet.createBotnet(browser, websiteTarget, path),  // 13
        //     botnet.createBotnet(browser, websiteTarget, path),  // 14
        //     botnet.createBotnet(browser, websiteTarget, path),  // 15
        //     botnet.createBotnet(browser, websiteTarget, path),  // 16
        //     botnet.createBotnet(browser, websiteTarget, path),  // 17
        //     botnet.createBotnet(browser, websiteTarget, path),  // 18
        //     botnet.createBotnet(browser, websiteTarget, path),  // 19
        //     botnet.createBotnet(browser, websiteTarget, path),  // 20
        // ])

        const context1 = await browser.newContext();
        const page1 = await context1.newPage();
        await page1.goto(websiteTarget);
        await page1.screenshot({path: `${path}/${uuidv4()}.png`})

        const context2 = await browser.newContext();
        const page2 = await context2.newPage();
        await page2.goto(websiteTarget);
        await page2.screenshot({path: `${path}/${uuidv4()}.png`})

        const context3 = await browser.newContext();
        const page3 = await context3.newPage();
        await page3.goto(websiteTarget);
        await page3.screenshot({path: `${path}/${uuidv4()}.png`})

        const context4 = await browser.newContext();
        const page4 = await context4.newPage();
        await page4.goto(websiteTarget);
        await page4.screenshot({path: `${path}/${uuidv4()}.png`})

        const context5 = await browser.newContext();
        const page5 = await context5.newPage();
        await page5.goto(websiteTarget);
        await page5.screenshot({path: `${path}/${uuidv4()}.png`})

        const context6 = await browser.newContext();
        const page6 = await context6.newPage();
        await page6.goto(websiteTarget);
        await page6.screenshot({path: `${path}/${uuidv4()}.png`})

        const context7 = await browser.newContext();
        const page7 = await context7.newPage();
        await page7.goto(websiteTarget);
        await page7.screenshot({path: `${path}/${uuidv4()}.png`})

        const context8 = await browser.newContext();
        const page8 = await context8.newPage();
        await page8.goto(websiteTarget);
        await page8.screenshot({path: `${path}/${uuidv4()}.png`})

        const context9 = await browser.newContext();
        const page9 = await context9.newPage();
        await page9.goto(websiteTarget);
        await page9.screenshot({path: `${path}/${uuidv4()}.png`})

        const context10 = await browser.newContext();
        const page10 = await context10.newPage();
        await page10.goto(websiteTarget);
        await page10.screenshot({path: `${path}/${uuidv4()}.png`})

        await browser.close();
    }

}

export default new Army