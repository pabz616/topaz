let randNumbr = Math.floor(Math.random() * 9)

var items = Array('Courage Under Fire', 'Matrox G400 32MB', 'SWAT 3: Close Quarters Battle', 'Got Mail', 'Life', 
    'Hewlett Packard LaserJet 1100Xi', 'Samsung Galaxy Tab', 'Under Siege', 'Disciples: Sacred Lands')

let randomProductSelection = items[Math.floor(Math.random () * items.length)]


module.exports = {
    baseURL: 'https://ecommerce-playground.lambdatest.io/index.php',
    apiURL: 'https://restful-booker.herokuapp.com',
    products: randomProductSelection,
    productName: 'Palm Treo Pro',
    productNumber: randNumbr,
    brand: 'Apple',
    fname:'QA',
    lname:'QA'+randNumbr,
    email:'qa@email.com',
    tel:'2123334455',
    pwd:'qa247',
    mixedChar: 'Lorem ipsum Римский 北京位於華北平原的西北边缘',
    longCharacters: 'Loremipsumdolorsiaametlasjdfklldf',
    sqlInjection: " 'OR 1=1'--",
    errorMsgCopy: 'Warning: No match for E-Mail Address and/or Password.',
    multiLoginCopy: 'Warning: Your account has exceeded allowed number of login attempts. Please try again in 1 hour.'

}