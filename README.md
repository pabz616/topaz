# topaz

Playwright w. Javascript

## Setup

1. Create a directory, then navigate to it
2. Initialize npm: `npm init -y`
3. Install playwright: `npm init playwright@latest`
4. For API Testing - Fake data: `npm install --save-dev @faker-js/faker`
5. For API Testing - Fake date: `npm install --save-dev luxon`
6. For API Testing - Clean Folder Before Test Run: `npm install --save-dev rimraf`
7. For Accessibility Testing - `npm install @axe-core/playwright`

## PW Commands

1. Run the end-to-end tests: `npx playwright test`
2. Start interactive UI mode: `npx playwright`
3. Run tests in a distinct browser: `npx playwright test --project=chromium`
4. Run a specific test: `npx playwright test <file>`
5. Run tests in debug mode: `npx playwright test --debug`
6. Run tests by tag (make sure you add them to the test description): `npx playwright test --grep "@tag"`

## Create desired structure

Pesonally I like using:

```
..tests
  |_components
    |_test_name.spec.js
  |_api
    |_test_name.spec.js
  |_e2e
    |_page-objects
    |_page-locators
    |_specs
```

## PAGE-Object Template

A quick and painless reference to set up the page objects

1. Create a directory under the root of the test directory -- `page-objects`
2. Create files for the relevant names of the pages under test -- `nameOfPage.js`
3. In the file, use the following boilerplate and customize accordingly

   ```
   exports.myPage = class myPage {
    
    /**
   * @param {import('@playwright/test').Page} page
   */

    //LOCATORS
    constructor(page) {
        this.page = page;
        this.x = page.locator("span.title", {hasText: 'Mega Menu' })
        this.y = page.locator('//xpath')
        this.z = page.locator('#id')
    }

    //ACTIONS
    async action (term) {
        await this.locator.hover()
        await this.link.click()
        await this.button.click()
    
    //ASSERTIONS
        await expect(this.locator).toBeVisible()
        await expect(this.locator).toHaveValue("1")
    }

  }

   ```

4. In the test, import the class and functions, as in the following example:
```

const {LambdaHomePage} = require('./page-objects/homePage')

test.describe('Open site and perform a search', () => {
    test('Search for existing product by name', async ({page}) => {
        const onLambdaSite = new LambdaHomePage(page);

        await page.goto(LambdaSite);
        await onLambdaSite.search(productName)
    });
```
