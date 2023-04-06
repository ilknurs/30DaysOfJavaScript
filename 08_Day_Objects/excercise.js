//Temel kural olarak, herhangi bir sabit değer için let 
//ve dizi, nesne, ok fonksiyonu ve işlev ifadesi için const özelliğini kullanabilirsiniz.


const person = {
    firstName : 'İlknur',
    lastName : 'Sercek',
    age : 24,
    country : 'Turkiye',
    city: 'Aydin',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
  ],

    isMarried: false,

    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
  },

  'phone number': '+11111111'
}

person.nationality = 'Turkish'
person.country = 'Turkiye'
person.title = 'Student'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = false


person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length-1).join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]

    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nShe lives in ${this.country}. \nShe learns ${skills}.`
    return statement
}

console.log(person)
console.log(person.getPersonInfo())

//Object.assign:Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır
const copyPerson = Object.assign({}, person)
console.log(copyPerson)


//Object.keys: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır.

const keys = Object.keys(copyPerson)
console.log(keys) //  ['firstName', 'lastName', 'age', 'country', 'city', 'skills', 'isMarried', 'getFullName', 'phone number', 'nationality', 'title', 'getPersonInfo']

//Object.values: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır
const values = Object.values(copyPerson)
console.log(values)

//Object.entries: Bir dizideki key ve value değerlerini almak için kullanılır
const entries = Object.entries(copyPerson)
console.log(entries)

//hasOwnProperty: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('firstName'))

// console.log(person)
// // '.' kullanarak nesneyi çağırmak.
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)

// // Köşeli parantez ile çağırmak.
// console.log(person['firstName'])
// console.log(person['lastName'])

// console.log(person["phone number"])

// console.log(person.getFullName())