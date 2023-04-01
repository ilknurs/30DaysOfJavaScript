let firstName = "Jane"
let lastName = "Eyre"
let country = "UK"
let city = "Manchester"
let age = 18
let isMarried = false

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(age))
console.log(typeof(isMarried))

console.log("----------------------------")

const check = 10 == 10
console.log(check)

const orn = parseInt('9,8') == 10
console.log(orn)

// const control = 4>3  || 4>=3 || 4 < 3
// console.log(control)

console.log("-----------------")
const control = !(4 > 3 && 10 > 12)
console.log(control)

const now = new Date()
console.log(now.getFullYear())
console.log(now.getUTCDate())


// // Kullanıcıdan taban ve yükseklik değerlerini al
// let taban = prompt("Üçgenin taban uzunluğunu giriniz:")
// let yukseklik = prompt("Üçgenin yüksekliğini giriniz:")

// // Alan hesaplaması
// let alan = 0.5 * taban * yukseklik;

// // Sonucu ekrana yazdır
// console.log(`Taban uzunluğu ${taban} ve yüksekliği ${yukseklik} olan üçgenin alanı: ${alan}`);

// let a = parseFloat(prompt("Üçgenin a kenarını giriniz: "))
// let b = parseFloat(prompt("Üçgenin b kenarını giriniz: "))
// let c = parseFloat(prompt("Üçgenin c kenarını giriniz: "))

// let cevre = a + b + c;
// console.log(`a kenarı ${a}, b kenarı ${b} ve c kenarı ${c} olan üçgenin çevresi ${cevre} dir. `)

// const pi = 3.14
// let r = prompt("Dairenin yarıçapını giriniz: ")

// let alan = pi*r*r

// console.log(`Yarıçapı ${r} olan dairenin alanı ${alan} dir. `)

// Denklemi tanımla
// let denklem = "y = 2x - 2";

// // Eğimi hesapla
// let egim = 2;

// // x kesme noktasını hesapla
// let xKesmeNoktasi = -1;

// // y kesme noktasını hesapla
// let yKesmeNoktasi = -2;

// // Sonuçları ekrana yazdır
// console.log(`Denklem: ${denklem}`);
// console.log(`Eğim: ${egim}`);
// console.log(`x Kesme Noktası: (${xKesmeNoktasi}, 0)`);
// console.log(`y Kesme Noktası: (0, ${yKesmeNoktasi})`);

// let isim = "İlknur"
// let soyisim = "Sercek"

// if(isim.length > 7)
// {
//     console.log("Adınız uzun")
// }
// else
// {
//     console.log("Adınız kısa")
// }

// if (isim.length > soyisim.length) {
//     console.log("Adınız soyadınızdan daha uzun");
//   } else if (isim.length < soyisim.length) {
//     console.log("Soyadınız adınızdan daha uzun");
//   } else {
//     console.log("Adınız ve soyadınızın uzunluğu eşit");
//   }


// const yasSiniri = 18; // kullanıcının yaş sınırı

// function arabaSurmeIzni() {
//   const dogumYili = prompt("Doğum yılınızı girin:");
//   const yas = new Date().getFullYear() - dogumYili; // kullanıcının yaşı hesaplanıyor

//   if (yas >= yasSiniri) {
//     setTimeout(function() {
//       console.log("Artık araba kullanabilirsiniz!");
//     }, 1000); // kullanıcıya 5 saniye beklemesi için zaman veriliyor
//   } else {
//     console.log(`Maalesef henüz araba kullanmak için yeterli yaşta değilsiniz. Sizin yaşınız: ${yas}`);
//   }
// }

// arabaSurmeIzni(); // fonksiyon çağrısı

//Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır (7 saat 07 ve 5 dakika 05 olmalıdır)
const year = now.getFullYear() // yılı döndürür
const month = ("0" + (now.getMonth() + 1)).slice(-2)
const date = ("0" + now.getDate()).slice(-2)
const hours = ("0" + now.getHours()).slice(-2)
const minutes = ("0" + now.getMinutes()).slice(-2)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)