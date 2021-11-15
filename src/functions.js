function addToCart(productName) {
  console.log(productName + " sepete Eklendi.");
}
addToCart("Meyve");
function addToCart2(productName, unitPrice, quantity) {}

let sayHello = () => {
  console.log("Hello World!");
};
sayHello();

let sayHello2 = function (params) {
  console.log("2 - Hello World! ");
};
sayHello2();

function addToCart3(product) {
  console.log("Ürün Adı : " + product.productName);
  console.log("Ürün Fiyatı : " + product.unitPrice);
  console.log("Ürün Miktarı : " + product.quantity);
}

let product1 = {
  productName: "Elma",
  unitPrice: 10,
  quantity: 5,
};

let product2 = {
  productName: "Elma",
  unitPrice: 10,
  quantity: 5,
};

let product3 = {
  productName: "Elma",
  unitPrice: 10,
  quantity: 5,
};

product2 = product3;

product2.productName = "KARPUZ";

console.log(product3.productName);

addToCart3(product1);

function addToCart4(x) {
  console.log(products);
}

let products = [
  {
    productName: "Elma",
    unitPrice: 5,
    quantity: 20,
  },
  {
    productName: "Armut",
    unitPrice: 10,
    quantity: 15,
  },
  {
    productName: "Karpuz",
    unitPrice: 12,
    quantity: 5,
  },
];
addToCart4(products);

function add(bisey, ...numbers) {
  // Rest Operator
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
  console.log(bisey);
}

add(20, 30);
add(50, 70, 85, 60, 135);

let numbers = [30, 10, 500, 600, 120];
console.log(...numbers);
console.log(Math.max(...numbers));

let [icAnadolu, Marmara, Karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
  {
    name: "İç Anadolu",
    population: "20M",
  },
  {
    name: "Marmara",
    population: "30M",
  },
  {
    name: "Karadeniz",
    population: "10M",
  },
  [
    ["Ankara", "Konya", "Kırıkkale", "Sivas"],
    [("İstanbul", "Kocaeli", "Bursa", "Balıkesir")],
    [("Rize", "Samsun", "Trabzon", "Giresun")],
  ],
];
console.log(icAnadolu.name);
console.log(Marmara.name);
console.log(icAnadoluSehirleri);
console.log(icAnadolu);

let newProductName, newUnitPrice, newQuantity
({
    productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity
} = {productName:"Elma", unitPrice: 20, quantity:4})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
