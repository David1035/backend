const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];
console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);

// Modifica el array, ya que estamos invocando el resultado  en memoria
// const rta2 = orders.map((item) => {
//   item.tax = 0.19;
//   return item;
// });
// console.log("rta2", rta2);
// console.log("original", orders);
const rta3 = orders.map((item) => {
  return {
    ...item,
    adicional: 0.20,
  };
});
console.log("rta3", rta3);
console.log("original", orders);

const rta4 = orders
.map(item => item.total)
.reduce((obj, item) => {
  if (!obj[item]) {
      obj[item] = 1
  } else {
      obj[item] = obj[item] + 1;
  }
  return obj
}, {})

console.log(rta4)
