require('@playwright/test')

module.exports = {
    siteUrl: 'https://ecommerce-playground.lambdatest.io/',
    spanTitle:  'span.title',
    desktopLink: 'a[title=Desktop]',
    palmTreoProLink: "div.carousel-item.active > img[title='Palm Treo Pro']",
    addToCartLink: "#container button[title='Add to Cart']",
    viewCartLink: 'a.btn.btn-primary.btn-block',

    searchResult: 'td.text-left',
    searchResultQty: "div[class$='flex-nowrap'] > input"

}