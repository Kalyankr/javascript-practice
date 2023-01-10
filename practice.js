// const arr = [101, -222, 333, -444, 555, -666, 777, -888];

// arr.forEach((mve) => {
//   if (mve > 0) {
//     console.log(`you deposited ${mve}`);
//   } else console.log(`you withdraw ${Math.abs(mve)}`);
// });

const currencies = new Map([
  ["USA", "USA Dollar"],
  ["IND", "Rupee"],
  ["EUR", "Euro"],
]);

console.log(currencies);
currencies.forEach((value, key, map) => {
  console.log(`you withdraw ${value} of ${key}`);
});
