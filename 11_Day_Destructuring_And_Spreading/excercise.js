// const numbers = [1, 2, 3]
// let [numOne, numTwo, numThree] = numbers
// console.log(numOne, numTwo, numThree)

// const names = ['İlknur', 'Ocean', 'Drive']
// let [firstPerson, secondPerson, thirdPerson] = names
// console.log(firstPerson, secondPerson, thirdPerson)

// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
// const [frontend, backend] = fullStack
// console.log(frontend)
// console.log(backend)

// const numbers = [1, 2, 3]
// let [numOne, , numThree] = numbers //2 atlandı

// console.log(numOne, numThree)

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums
// console.log(num1, num2, num3)
// console.log(rest)

// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
// for(const [country, city] of countries){
//     console.log(country, city)
// }

// const rectangle = {
//     width: 20,
//     height:10,
//     area: 200
// }
// let {width: w, height: h, area: a, perimeter: p} = rectangle
// console.log(w, h, a, p)


const countries = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
  ]
  
let [gem, fra, , ...nordicCountries] = countries
console.log(gem)
console.log(fra)
console.log(nordicCountries)

const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

const user = {
    name:'İlknur',
    title:'Programmer',
    country:'Turkey',
    city:'Aydın'
  }
  
const copiedUser = {...user}
console.log(copiedUser)



const sumAllNums = (...args) => {
    console.log(args)
}
sumAllNums(1, 2, 3, 4, 5)
