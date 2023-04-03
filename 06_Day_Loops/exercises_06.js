// for(let i =0; i<= 5; i++){
//     console.log(`${i} * ${i} = ${i*i}`)
// }


// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
// const newArr = []

// for(let i = 0; i < countries.length; i++){
//     newArr.push(countries[i].toLocaleUpperCase())
// }
// console.log(newArr)



// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }



// const numbers = [1, 2, 3, 4, 5]

// for (const num of numbers) {
//   console.log(num)
// }

// let sum = 0
// for (const num of numbers){
//     sum += num
// }
// console.log(sum)

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
// for (const tech of webTechs) {
//     console.log(tech[0]) // her öğenin yalnızca ilk harfini alın,  H C J R N M
//   }

//   for(let i = 0; i <= 5; i++){
//     if(i == 3){
//       break;
//     }
//     console.log(i)
//   }
  

//   for(let i = 0; i <= 5; i++){
//     if(i == 3){
//       continue
//     }
//     console.log(i)
//   }
  
//   // 0 1 2 4 5

//   let i = 0
//   do{
//     console.log(i)
//     i++
//   }while (i<=10)

//   let i = 10
//   do{
//     console.log(i)
//     i--
//   }while (i>=0)



// let str = "";
// for (let i = 0; i < 7; i++) {
//     str += "#";
//     console.log(str)
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i + 'x' + i +' = ' +i*i  )
// }

// for (let i = 0; i<=10; i++){
//     console.log(i )
//     console.log(i*i )
//     console.log(i*i*i)
// }


// let sum = 0
// for(let i = 0; i<= 100; i++){
//     sum = sum + i
// }
// console.log(sum)


// for (let i=0; i<=100; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

// for (let i=0; i<=100; i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }

// //print prime numbers
// for (let i = 0; i <= 100; i++) {
//     for (let k = 2; k < i; k++) {
//         if (i % k === 0 && i > 1) {
//             console.log(i)
//         }
//     }
// }


// //sum of all even and odd
// let even = 0;
// let odd = 0;
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         even += i;
//     } else if (i % 2 > 0) {
//         odd += i
//     }
// }
// console.log(`the sum of all even number is ${even}. And the sum of all odd numbers is ${odd}`)

// //storing sum of all even/odd numbers in an array
// let sumEvenOdd = [0, 0]
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 0) {
//         sumEvenOdd[0] += i;
//     } else if (i % 2 > 0) {
//         sumEvenOdd[1] += i;
//     }
// }
// console.log(sumEvenOdd)

//generating random unique arr
let randomUniqueArr = [];
for (let i = 5; randomUniqueArr.length < i;) {
    let random = Math.floor(Math.random() * 10);
    if (randomUniqueArr.indexOf(random) === -1) {
        randomUniqueArr.push(random);
    }
}
console.log(randomUniqueArr)

//Herhangi bir sayıda rastgele id numarası atayan bir fonksiyon yazın
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let r = Math.floor(Math.random() * chars.length);
let randChars = "";
for (let i = 0; i < r; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randChars += chars[random];
}
console.log(randChars);

