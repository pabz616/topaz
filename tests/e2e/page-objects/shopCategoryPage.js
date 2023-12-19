//HOME PAGE SHOP BY CATEGORY MENU

const {expect} = require('@playwright/test');
const baseURL = require('../../test-data/data');

exports.ShopCategoryPage = class ShopCategoryPage {
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;

        //LOCATORS
        // this.cameras = page.locator('(//li[@class="nav-item"])[2]') 
        // this.devices = page.locator('(//li[@class="nav-item"])[3]') 
        // this.software = page.locator('(//li[@class="nav-item"])[4]') 
        // this.mp3 = page.getByText('MP3 Players') 
        // this.computers = page.getByText('Laptops & Notebooks')
        // this.monitors = page.getByText('Desktops and Monitors')
        // this.printScan = page.getByText('Printers & Scanners')
        // this.mice = page.getByText('Mice and Trackballs')
        // this.fashion = page.getByText('Fashion and Accessories')
        // this.beauty = page.getByText('Beauty and Saloon')
        // this.autoparts = page.getByText('Autoparts and Accessories')
        // this.washers = page.getByText('Washing machine')
        // this.gameConsoles = page.getByText('Gaming consoles')
        // this.aircond = page.getByText('Air conditioner')
        // this.webcameras = page.getByText('Web Cameras')
    }
        //ACTIONS
        async clickCategoryItem(id){
            let categoryItem = this.page.locator(`(//li[@class="nav-item"])[${id}]`)
            await categoryItem.click()
        }
}