//callback fonksiyonu

// const callback = (n) =>{
//     return n ** 2
// }

// function cube(callback, n){
//     return callback(n)*n
// }
// console.log(cube(callback,3))


// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//     let sum = 0
//     const callback = function(element){
//         sum += element
//     }
//     arr.forEach(callback)
//     return sum


// }
// console.log(sumArray(numbers))

// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 1000) // saniyede 1 Hello yazdırır, 1000ms = 1s

 
  
// function sayHello(){
//     console.log('Hello')
// }
// setTimeout(sayHello, 2000)

// let sum = 0
// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(num => console.log(num))
// console.log(sum)

// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => console.log(element.toUpperCase()))

// const numbersSquare = numbers.map((num) => num * num)
// console.log(numbersSquare)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
// console.log(namesToUpperCase)

// const countriesContainingLand = countries.filter((country) => country.includes('land'))
// console.log(countriesContainingLand)

// const countriesHaveFiveLetters = countries.filter(
//     (country) => country.length === 5
//   )
//   console.log(countriesHaveFiveLetters)

//reduce function
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

//every function
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string')
console.log(areAllStr)