/**
 * Write function isPalindrome that checks if a string (case insensitive) is a palindrome.
 * 
 * Dad == true
 * Mum == true
 * Dean == false
 */



function getPalindrome(string) {
    let word = string.toLowerCase();
    return word === string.split('').reverse('').join('');
}

console.log(getPalindrome('hello'));
console.log(getPalindrome('wow'));