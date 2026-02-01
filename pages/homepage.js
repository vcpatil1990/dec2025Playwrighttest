const{expect}=require('@playwright/test');
exports.homepage =
    class homepage {
        constructor(page) {
            this.page = page;
            this.headers = "//div[@id='menu-primary']//ul/li";
            this.heading = page.locator("//h1[text()='Logged In Successfully']");
        }
        async checkheaders() {
            const options = await this.page.$$(this.headers);

            for (let option of options) {
                console.log(await option.textContent());
            }

        }
        async checkHeading(expectedtext) {
            await expect(this.heading).toHaveText(expectedtext);
        }
    }