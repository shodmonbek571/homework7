//   1 - MASALA
// regular function 
// function kubi(number) {
//     let kub = number * number * number;
//     return kub;
// }
 //console.log(kubi(5));


//   2  - MASALA
// function kattasi(arg1, arg2) {
//     let max;
//     if (arg1 > arg2) {
//         max = arg1 * 2
//     } else {    
//         max = arg2 * 2
//     }
//     return max;
// }
// console.log(kattasi(25,15));


//  3 - MASALA

// function yigindi(number) {
// let birlar = number % 10;
// let onlar = Math.floor((number % 100) / 10);
// let yuzlar = Math.floor(number / 100);
// let natija = birlar + onlar + yuzlar;
//     return natija;
   
// }
// console.log(yigindi(256));


//  4 - MASALA
// function boluvchilari(arg) {
//     let result = 0;
//     for (let i = 1; i <= arg; i++) {
//         if (arg % i === 0) {
//             result++;
//         }
//     }
//     return result;
// }
// console.log(boluvchilari(120));


//  5 - MASALA
// function toqSonlar(n) {
//     let result = 0;
//     let counter = 0;
//     for (let i = 1; i <= n; i++) {
//         if (i % 2 == 1) {
//             result++;
//             counter+=i;
//         }
//     }
//     return counter;
// }
// console.log(toqSonlar(30));


//  6 - MASALA
// function karrali(a, b) {
// for (let i = a; i <= b; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//  return i; 
//    }
//   }
// }
// console.log(karrali(10,75));


//   7 - MASALA
// function tubSon(num) {
//     if (num <= 1) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//  }
//   console.log(tubSon(7)); 
 
//  8 - MASALA
function isPalindrome(number) {
const numStr = number.toString();
const reversedNumStr = numStr.split('').reverse().join('');
return numStr === reversedNumStr;
  }

  console.log(isPalindrome(121)); // true
  console.log(isPalindrome(123)); // false
  
