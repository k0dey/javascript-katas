/**
 * Write a function that accepts an array of 11 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 *
 * For the UK - 07000 000 000
 *
 * For the US - (123) 456-7890
 */

 let numberArray = [0, 7, 1, 2, 3, 4, 5, 6, 7, 8]; // example array

 function phoneNumber(number) {

    let text;
    switch(number.length) {
        case 11:
        text = `${number.slice(0,5).join('')} ${number.slice(5,8).join('')} ${number.slice(8,11).join('')}`;
        break;
        case 10:
        text = `(${number.slice(0,3).join('')}) ${number.slice(3,6).join('')}-${number.slice(6,10).join('')}`
        break;
        default:
        text = `Please enter a 10 or 11 digit phone number.`
    }
    return text;
 }

 console.log(phoneNumber(numberArray)); // log example


     // if(number.length === 11) {
    //     return `${number.slice(0,5).join('')} ${number.slice(5,8).join('')} ${number.slice(8,11).join('')}`
    // } else if (number.length === 10) {
    //     return `(${number.slice(0,3).join('')}) ${number.slice(3,6).join('')}-${number.slice(6,10).join('')}`
    // } else {
    //     return `Please enter a 10 or 11 digit phone number.`
    // }