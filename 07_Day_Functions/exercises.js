// function functionName(){

// }
// functionName()

// // Function expression
// const square = function() {
//     console.log("Bu bir expression function türünde fonksiyondur")
//   }

//   function printFullName (){
//     let firstName = 'İlknur'
//     let lastName = 'Serçek'
//     let space = ' '
//     let fullName = firstName + space + lastName
//     console.log(fullName)
// }

// printFullName() // fonksiyon çağırımına bir örnek

function printFullName(){
    let firstName = 'İlknur'
    let lastName = 'Serçek'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())


function areaOfCircle(r){
    let area = Math.PI*r*r
    return area
}
console.log(areaOfCircle(2))



function sumArrayValues(arr){
    let sum = 0
    for (let i = 0; i< arr.length; i++){
        sum = sum +=arr[i]

    }
    return sum
}
const numbers = [1,2,3,4,5]
console.log(sumArrayValues(numbers))

function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


  console.log("------------")
//   function square(n) {
//     return n * n
//   }

//   console.log(square(2)) // 4

// const square = n => {
//   return n * n
// }

// console.log(square(2))

const square = n => n * n  // -> 4
console.log(square(2))

console.log("-------------")





















