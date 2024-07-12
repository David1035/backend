const items = [1,3,2,3,3,5,5,10,5,3,5]

const rta = items.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 1
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj
}, {})

console.log(rta)