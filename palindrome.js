/**
 * Write function isPalindrome that checks if a string (case insensitive) is a palindrome.
 * 
 * Dad == true
 * Mum == true
 * Dean == false
 */



function getPalindrome(word) {

    return word.toLowerCase() === word.split('').reverse('').join('').toLowerCase()
    
}

console.log(getPalindrome('hello'));
console.log(getPalindrome('wow'));