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
        this.components = page.getByText('Components')
        this.cameras = page.getByText('Cameras')
        this.devices = page.getByText('Phone, Tablets & Ipod')
        this.software = page.getByText('Software') 
        this.mp3 = page.getByText('MP3 Players') 
        this.computers = page.getByText('Laptops & Notebooks')
        this.monitors = page.getByText('Desktops and Monitors')
        this.printScan = page.getByText('Printers & Scanners')
        this.mice = page.getByText('Mice and Trackballs')
        this.fashion = page.getByText('Fashion and Accessories')
        this.beauty = page.getByText('Beauty and Saloon')
        this.autoparts = page.getByText('Autoparts and Accessories')
        this.washers = page.getByText('Washing machine')
        this.gameConsoles = page.getByText('Gaming consoles')
        this.aircond = page.getByText('Air conditioner')
        this.webcameras = page.getByText('Web Cameras')


       
        //ACTIONS
    }
}