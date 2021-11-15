// Datas
let cart = [
    {
        id: 1,
        productName: "Telefon",
        quantity: 8,
        unitPrice: 6700
    },
    {
        id: 2,
        productName: "Laptop",
        quantity: 5,
        unitPrice: 5500
    },
    {
        id: 3,
        productName: "Kulaklık",
        quantity: 27,
        unitPrice: 240
    },
    {
        id: 4,
        productName: "Şarj Cihazı",
        quantity: 15,
        unitPrice: 80
    },
    {
        id: 5,
        productName: "Kitap",
        quantity: 10,
        unitPrice: 120
    },
    {
        id: 6,
        productName: "Tripod",
        quantity: 12,
        unitPrice: 300
    },
    {
        id: 7,
        productName: "Kamera",
        quantity: 3,
        unitPrice: 2500
    }
]

// Codes

cart.push( 
    {
        id: 8,
        productName: "Bardak",
        quantity: 2,
        unitPrice: 35
    }
) 

function addToCart(sepet) {
    sepet.push(
        {
            id: 8,
            productName: "Bardak",
            quantity: 2,
            unitPrice: 35
        }
    )
}

addToCart(cart) 
console.log(cart) 

// Map 

console.log("Sepetinizdeki Ürünler")

cart.map(
    product => {        
        console.log("Ürün : " + product.productName + "\n" +
                    "Ürün Fiyatı : " + product.unitPrice + " TL" + "\n" + "Adedi : " + product.quantity + "\n" +
                    "Toplam Fiyatı : " + product.unitPrice * product.quantity)
    }
)
// Filter

let quantityOver2 = cart.filter(product => product.quantity > 2)
console.log(quantityOver2)

// Reduce

let cartTotalPrice = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)
console.log("Sepet Toplamı : " + cartTotalPrice + " TL")
