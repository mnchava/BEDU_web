const car = {
  brand: "Nissan",
  model: "Sentra",
  year: 2020,
};

function addColor(c) {
  const newCar = Object.assign({}, c, {
    color: "Black",
  });
  return newCar;
}

console.log("Before calling addColor()", car);

const newCar = addColor(car);

console.log("After calling addColor()", car);
console.log("After calling addColor()", newCar);

console.log("Same car?", car === newCar); // false

function addItemToCart(cart, item, quantity) {
  const newCart = cart.map(function (element) {
    return element;
  });

  newCart.push({
    item: item,
    quantity: quantity,
  });

  return newCart;
}

let cart = [
  {
    item: "Laptop",
    quantity: 1,
  },
];

cart = addItemToCart(cart, "Phone", 1);

console.log(cart);

function sumDigits(number) {
  return number
    .toString()
    .split("")
    .map(Number)
    .reduce(function (a, b) {
      return a + b;
    }, 0);
}

console.log(sumDigits(12345)); // 15
