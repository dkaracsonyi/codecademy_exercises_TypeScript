import products from './products'
let productName : string = 'fanny pack';
let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number;

const shippingAddress : string = 'Trg bana Josipa Jelačića, Virovitica, Hrvatska';

const product = products.filter(product => product.name === productName)[0];

console.log(product);
if ((product.preOrder) === 'true') {
  console.log('We will send you a message when your product is on its way.');
}

if (Number(product.price) >= 25) {
  shipping = 0;
  console.log("We provide free shipping on this product!")
}
else{
  shipping = 5;
  console.log("No free shipping, unfortunately! Shipping total is " + shipping)
}

if (shippingAddress.match("Virovitica")){
  taxPercent = 0.1;
}
else {
  taxPercent = 0.05;
}

taxTotal = Number(product.price) * taxPercent;
total = taxTotal + Number(product.price) + shipping;
console.log("You have ordered " + productName + " at your address: " + shippingAddress + ". The price of the product is " + product.price + ", and your tax total is " + taxTotal + ". The total amount to pay is " + total + ".");

