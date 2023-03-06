const things = ['apples', 'baboons', 'cribs', 'dulcimers'];

function printThings(items) {
  items.forEach((item) => {
    console.log(item);
  });
}

console.log(printThings(things));

/* 
apples
baboons
cribs
dulcimers

printThings has an efficiency of O(N)
*/

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
// True

console.log(isPrime(12));
// False

//isPrime has an efficiency of O(N)
