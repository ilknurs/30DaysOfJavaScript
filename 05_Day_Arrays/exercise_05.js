// const arr = Array()

// // let arr = new Array() // []

// // const arr = []

// console.log(arr)

// const  webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']

// // Diziyi ve dizinin uzunluğunu yazdırmak

// console.log('Web technologies:', webTechs)

// console.log('Number of web technologies:', webTechs.length)

// const numbers = [1,2,3,4,5]
// // ilk üç sıra bütün öğeyi kopyalar
// console.log(numbers.slice())
// console.log(numbers.slice(0))
// console.log(numbers.slice(0, numbers.length))
// console.log(numbers.slice(1,4)) // -> [2,3,4] // son elemanı dahil etmez

// const  numbers = [1, 2, 3, 4, 5, 6]

// numbers.splice(0,1)

// console.log(numbers) // -> Bütün elemanları kaldırır

// const  numbers = [1, 2, 3, 4, 5, 6]
// numbers.push(7)
// console.log(numbers)

// numbers.pop() // -> Dizinin sonundan bir eleman çıkarır.

// console.log(numbers)
// numbers.shift() // -> baştan bir elemanı kaldırır.

// console.log(numbers)

// numbers.unshift(0) // -> en başa eleman ekler

// console.log(numbers)

// numbers.reverse()
// console.log(numbers)

// // sort: Dizi elemanlarını alfabetik sırada düzenler.
// const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

// webTechs.sort()
// console.log(webTechs)


// const dizi = []
// console.log(dizi)

// const dizi0 = [5,4,3,2,1,0]
// console.log(dizi0)
// console.log(dizi0.length)

// console.log(dizi0[0]) // ilk elemanı
// console.log(dizi0[dizi0.length - 1]) // son elemanı

// const mixedDataTypes = [1, 'apple', 3, 4, 'kiwi']
// console.log(mixedDataTypes.length)




// const ItCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle']
// ItCompanies.unshift('Amazon')
// console.log(ItCompanies)
// console.log(ItCompanies.length)



// // Dizinin ilk elemanı
// console.log("İlk eleman: " + ItCompanies[0]);

// // Dizinin orta elemanı (uzunluğu çift ise, iki orta eleman vardır)
// let middleIndex = Math.floor(ItCompanies.length / 2);
// console.log("Orta eleman(lar): " + ItCompanies[middleIndex]);

// // Dizinin son elemanı
// console.log("Son eleman: " + ItCompanies[ItCompanies.length - 1]);



// for (let i = 0; i < ItCompanies.length; i++) {
//     console.log(ItCompanies[i]);
//   }

// console.log(ItCompanies.indexOf("Google"))

// console.log(ItCompanies.slice(0,3))

// let slicedCompanies = ItCompanies.slice(middleIndex, middleIndex + (ItCompanies.length % 2));

// // Dilimlenen şirketleri yazdır
// console.log(slicedCompanies);

// // ItCompanies.shift()
// // console.log(ItCompanies)

// //ortadaki elemanı siler.
// ItCompanies.splice(middleIndex, ItCompanies.length % 2);
// console.log(ItCompanies);

// //Bütün elemanları siler.
// ItCompanies.splice(0, ItCompanies.length)
// console.log(ItCompanies)

// let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
// text.split(" ");
// console.log(text)
// console.log(text.length);

// const  shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// shoppingCart.unshift('Meat') // en başa ekler.
// console.log(shoppingCart)

// shoppingCart.push('Sugar') // en sona ekler.
// console.log(shoppingCart)

// shoppingCart[shoppingCart.indexOf("tea")] = "green tea";
// console.log(shoppingCart)

const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const  backEnd = ['Node','Express', 'MongoDB']


const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)


const  ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//console.log(ages.sort())

console.log(ages)
let medianAge = ages[Math.floor(ages.length / 2)];
console.log(medianAge);

let minAge = console.log(ages[0])
let maxAge = console.log(ages.sort()[ages.length-1])

let avgAge;
for (i = 0; i < ages.length; i++) {
    let totalAge = 0;
    totalAge += ages[i];
    avgAge = totalAge / ages.length;
}
console.log(avgAge) 
