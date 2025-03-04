let num = [1, 2, 5, 7, 9, 15, 21, 25]
let total =  num.map(num => (num * 5))
console.log(total)
total = num.filter( (num) => num > 10)
console.log(total)
total = num.reduce((acc, cur) => acc + cur, 0)
console.log(total)
console.log(``)

