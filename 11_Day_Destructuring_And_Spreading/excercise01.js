//Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]

const [E, Pi, g, humanBodyTemp, waterBoilingTemp ] = constants
console.log(E, Pi, g, humanBodyTemp, waterBoilingTemp)

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

const [fin, est, swe, den, nor] = countries
console.log(fin, est, swe, den, nor)

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
  }

const {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w, h, a, p)


// //Level 2

// const users = [
//     {
//       name:'Brook',
//       scores:75,
//       skills:['HTM', 'CSS', 'JS'],
//       age:16
//     },
//     {
//       name:'Alex',
//       scores:80,
//       skills:['HTM', 'CSS', 'JS'],
//       age:18
//     },
//     {
//       name:'David',
//       scores:75,
//       skills:['HTM', 'CSS'],
//       age:22
//     },
//     {
//       name:'John',
//       scores:85,
//       skills:['HTM'],
//       age:25
//     },
//     {
//       name:'Sara',
//       scores:95,
//       skills:['HTM', 'CSS', 'JS'],
//       age: 26
//     },
//     {
//       name:'Martha',
//       scores:80,
//       skills:['HTM', 'CSS', 'JS'],
//       age:18
//     },
//     {
//       name:'Thomas',
//       scores:90,
//       skills:['HTM', 'CSS', 'JS'],
//       age:20
//     }
//     ]

// for(const {name, scores, skills, age} of users){
//     console.log(name, scores, age)
//     skills.forEach(x => console.log(x))
// }

// // find users have <2 skills
// for (const { name, scores, skills, age} of users){
//     if(skills.length <2){
//         console.log(name)
//     }
// }

//Level 3
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, [,, jsScore, reactScore]] = student
console.log(name, skills, jsScore, reactScore)

