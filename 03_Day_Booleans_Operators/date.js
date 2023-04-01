const now = new Date()
console.log(now)

console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getTime())

const allSeconds = Date.now()
console.log(allSeconds)

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds)

const year = now.getFullYear() // yılı döndürür
const month = now.getMonth() + 1 // ayı döndürür (0 - 11) olduğu için +1 ekliyor
const date = now.getDate() // günü döndürür (1 - 31)
const hours = now.getHours() // sayıyı döndürür (0 - 23)
const minutes = now.getMinutes() // sayıyı döndürür (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)