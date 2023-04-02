// let num = 3
// if(num > 0){
//     console.log(`${num} bir pozitif sayıdır.`)
// }



// let isRaining = true
// if (isRaining) {
//   console.log('Remember to take your rain coat.')
// }

// let weather = 'cloudy'
// switch(weather){
//     case 'rainy':
//         console.log('Yağmurluğa ihtiyacın var.')
//         break
//     case 'cloudy':
//         console.log('Soğuk olabilir, ceketini alabilirsin.')
//         break
//     case 'sunny':
//         console.log('Dışarı çıkabilirsin. ')
//         break
//     default:
//         console.log('Yağmurluğa ihtiyacın yok.')
// }


// let age = prompt(`Yaşınızı giriniz: `)
// let yearsToTurn18 = 18 - age;

// if(age >= 18){
//     console.log('Araba kullanabilirsiniz.')
// }else{
//     console.log('Araba kullanabilmek için henüz ' + yearsToTurn18+ ' yılın var')
// }


// let a
// let b
// if(a>b){
//     console.log('a, b den büyüktür.')
// }
// else{
//     console.log('a,b den küçüktür.')
// }



// let sayi = prompt("Bir sayı giriniz. ")

// if(sayi%2==0){
//     console.log(`${sayi} çift sayıdır.`)
// }else{
//     console.log(`${sayi} tek sayıdır.`)
// }

// let month = prompt("Enter a month:");
// let season;

// if (month === "December" || month === "January" || month === "February") {
//   season = "winter";
// } else if (month === "March" || month === "April" || month === "May") {
//   season = "spring";
// } else if (month === "June" || month === "July" || month === "August") {
//   season = "summer";
// } else if (month === "September" || month === "October" || month === "November") {
//   season = "fall";
// } else {
//   console.log("Invalid input.");
// }

// if (season) {
//   console.log("The season is " + season + ".");
// }


let month = prompt("Enter a month:");
let days;

switch (month.toLowerCase()) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    days = 31;
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    days = 30;
    break;
  case "february":
    days = 28;
    break;
  default:
    console.log("Invalid input.");
}

if (days) {
  console.log(month + " has " + days + " days.");
}