/**
 * Task
Given an integral number, determine if it's a square number:
* In mathematics, a square number or perfect square is an integer that is the square of an integer.
* in other words, it is the product of some integer with itself.
 * 
 * 
 * isSquare(4) = true
 * isSquare(7) = false
 */


 function isSquare(num) {
     return Number.isInteger(Math.sqrt(num))
 }





// // WEIRD MATH WAY
// // IGNORE THIS IT DOESN'T WORK YET

// function isSquared(num) {
//    let digitalRoot = 1 + (num - 1) % 9;
//    //  ^ math shortcut for digital root, the remainder of any num
//    //  divided by 9 is the digital root of the number
    
//    //  18 % 9 = 0 (0 = 9 with digital root)
//    //  to get 9 rather than 0 we do
//    //  18 - 1 which equals 17, modulo 9 equals 8. + 1 equals 9.

//     return  (digitalRoot === 1 ||
//             digitalRoot === 4 ||
//             digitalRoot === 5 ||
//             digitalRoot === 7 ||
//             digitalRoot === 9)

//     // a perfect square's digital root will always be 1, 4, 5,  7 or 9
//     // it cannot be 2, 3, 5, 6 or 8

//    }
   console.log(isSquare(20)) // false
   console.log(isSquare(9))   // true
   console.log(isSquare(16))   // true
   console.log(isSquare(64))    // true
   console.log(isSquare(36))    // true
   console.log(isSquare(244))   // false
