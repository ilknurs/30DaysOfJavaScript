//Level 1
const set = new Set()

for(let i = 0; i<=10; i++){
    set.add(i)
}
console.log(set)

console.log(set.delete(5))
set.clear()
console.log(set)

const fruits = [
    'apple',
    'kiwi',
    'banana'
]

const fruitsSet = new Set(fruits)
fruits.forEach(fruit => {
    set.add(fruit)
})
console.log(set)


//level 2
//(A U B)
let a = [ 4, 5, 8, 9]
let b = [3, 4, 5, 7]
let c =  [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)

//(A ∩ B) 
let intersection = a.filter(num => {
    return B.has(num)
})
console.log(intersection)

// A ile B
let union = [...a, ...b]
console.log(union);

//Level 3

