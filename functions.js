'use strict';

// 1. isHometown

// function isHometown(town) {
//     return town === 'San Francisco';
// }

const isHometown = town => town === 'San Francisco'

// console.log(isHometown('San Francisco'))
// console.log(isHometown('San Jose'))

// Define your function here

// 2. getFullName
let getFullName = (firstName, lastName) => {
    if(firstName.length != 0 && lastName != 0) {
        return `${firstName} ${lastName}`
    }
    return "Please enter valid name"
}
//console.log(getFullName("","Aza"))
// Define your function here

// 3. calculateTotal

function calculateTotal(basePrice, state, tax=0.05) {
    let subtotal = basePrice * (1 + tax);

    let fee = 0;
    if (state === 'CA') {
        fee = 0.03 * subtotal;
    } else if (state === 'PA') {
        fee = 2;
    } else if (state === 'MA') {
        if (basePrice <= 100) {
            fee = 1
        } else {
                fee = 0.03 * subtotal;
            }
    }
    return subtotal + fee
}

console.log(calculateTotal(100, 'CA'))
console.log(calculateTotal(100, 'PA'))
console.log(calculateTotal(50, 'MA'))
console.log(calculateTotal(100, 'MA'))

// Define your function here
