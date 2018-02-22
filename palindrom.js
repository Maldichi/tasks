'use strict';
function isPrime(min, max) {

    let array = [], maxLim = Math.sqrt(max), output = [];
    let i, j;

    // Making array
    for (i = 0; i < max; i++) {

        array.push(true);
    }

    // Remove numbers which multiple to 2, 3, 5,...
    for (i = 2; i <= maxLim; i++) {

        if (array[i]) {

            for (j = i * i; j < max; j += i) {
                array[j] = false;
            }
        }
    }
    // All primes from 2 to max
    for (i = 2; i < max; i++) {

        if(array[i]) {
            output.push(i);
        }
    }

    // slice the array of primes from set min
    for (i=0; i<output.length; i++) {

        if (output[i]>=min) {
            return output.slice(i);
        }
    }
}

let prime = isPrime(10000, 100000);
let l = prime.length;

//identify palindrome
function isPalindrome (str) {
    let firstStep = str.split('');
    let secondStep = firstStep.reverse();
    let thirdStep = secondStep.join('');

    if (thirdStep===str) {
        return true;
    }

}
//Define palindromes
function multiplier () {
    let i, j;
    let pal = [];
    let arr = prime;
    let toCheck;
    let max = 1;

    for (i = 0; i < l; i++) {
        let marked = prime[i];

        for (j = 0; j < i; j++) {

            toCheck = marked * arr[j];
            let check = toCheck.toString();

            if (isPalindrome(check)) {

                pal[j]={
                    res:toCheck,
                    mult1:marked,
                    mult2:arr[j]
                };

                pal.push(pal[j]);
                // console.log(check + ' is palindrome! ' + ' multipliers: ' + marked + ' & ' + arr[j]);
                // count++;
            }
        }
    }
    let pal1 = [];
    for (i = 0; i < pal.length; i++) {

        if (pal[i]!==undefined){
            pal1.push(pal[i]);
            if (max < pal[i].res)
                max = pal[i].res;
        }
    }
  for (i = 0; i < pal1.length; i++) {

        if (max === pal1[i].res) {
            console.log(pal1[i]);
            break;
        }
    }
}
multiplier();