// Filter prime numbers
// number.txt read convert filter and store to prime.txt

const fs = require("fs");
const data = fs.readFileSync("number.txt", "utf-8");
const nums = data.split(" ").map(Number);
const primes = nums.filter((n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
});
fs.writeFileSync("prime.txt", primes.join(" "));
console.log("Prime numbers saved to prime.txt");
