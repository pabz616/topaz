# topaz

Playwright w. Javascript

## Setup

1. Create a directory, then navigate to it
2. Initialize npm: `npm init -y`
3. Install playwright: `npm init playwright@latest`

## PW Commands

1. Run the end-to-end tests: `npx playwright test`
2. Start interactive UI mode: `npx playwright`
3. Run tests in a distinct browser: `npx playwright test --project=chromium`
4. Run a specific test: `npx playwright test <file>`
5. Run tests in debug mode: `npx playwright test --debug`

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