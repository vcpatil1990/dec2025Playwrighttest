const { test, expect } = require('@playwright/test')

test("Handling frames  ", async ({ page }) => {

    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForTimeout(4000);

    let all_frames = await page.frames();
    console.log("number of frames are ", all_frames.length);
    await page.waitForTimeout(4000);

    //Handling Frames with URLs

    let frame1 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" })

    await frame1.fill("//input[@name='mytext1']", 'hi team automation');
    await page.waitForTimeout(4000);

    let frame4 = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_4.html" })

    await frame4.fill("//input[@name='mytext4']", 'I am from Pune');
    await page.waitForTimeout(4000);


    //Handling Frames with Framelocator

    let frame2 = await page.frameLocator("//frame[@src='frame_2.html']");
    await frame2.locator("//input[@name='mytext2']").fill("Learning playwright");
    await page.waitForTimeout(4000);
})