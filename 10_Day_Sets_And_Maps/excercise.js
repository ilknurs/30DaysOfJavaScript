// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
// ]

// const setOfLanguages = new Set(languages)
// console.log(setOfLanguages)

// for (const language of setOfLanguages){
//     console.log(language)
// }


// const companies = new Set()
// console.log(companies)

// console.log(companies.size)
// companies.add('Google')
// companies.add('Facebook')
// companies.add('Amazon')
// companies.add('Microsoft')
// companies.add('Oracle')
// console.log(companies)

// // const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
// // setOfCompanies = new Set()
// // for (const company of companies) {
// //   setOfCompanies.add(company)
// // }
// // console.log(companies)

// console.log(companies.delete('Google'))
// console.log(companies.size)

// console.log(companies.has('Apple'))

// companies.clear()
// console.log(companies)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]


// //A U B)
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// //let c = [...a, ...b]
  
// let A = new Set(a)
// let B = new Set(b)
// //let C = new Set(c)
  
// //console.log(C)

// //(A ∩ B) 
// let c = a.filter((num) = B.has(num))
// let C = new Set(c)

// console.log(C)


// Map
//const map = new Map()
//console.log(map)

countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]

const map = new Map(countries)
console.log(map)
console.log(map.size)


const countriesMap = new Map()
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)

console.log(countriesMap.get('Finland'))

console.log(countriesMap.has('Finland'))

for (const [country, city] of countriesMap){
    console.log(country, city)
   }