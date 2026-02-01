exports.loginpage =
    class loginpage {
        constructor(page) {
            this.page = page;
            this.username = "//input[@name='username']";
            this.passowrd = "//input[@name='password']";
            this.submit = "//button[@id='submit']";
        }
        async gotologinpage() {
            await this.page.goto("https://practicetestautomation.com/practice-test-login/")

        }
        async login(username, passowrd) {

            await this.page.locator(this.username).fill(username);
            await this.page.locator(this.passowrd).fill(passowrd);
            await this.page.locator(this.submit).click();

        }


    }