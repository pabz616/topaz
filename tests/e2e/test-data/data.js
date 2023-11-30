let randNumbr = Math.floor(Math.random() * 9)

var items = Array('Courage Under Fire', 'Matrox G400 32MB', 'SWAT 3: Close Quarters Battle', 'Got Mail', 'Life', 
    'Hewlett Packard LaserJet 1100Xi', 'Samsung Galaxy Tab', 'Under Siege', 'Disciples: Sacred Lands')

let randomProductSelection = items[Math.floor(Math.random () * items.length)]


module.exports = {
    baseURL: 'https://ecommerce-playground.lambdatest.io/index.php',
    products: randomProductSelection,
    productName: 'Palm Treo Pro',
    productNumber: randNumbr,
    brand: 'Apple'
}