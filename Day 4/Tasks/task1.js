//create number.txt 1 2 3 4 5 6 7 read this number ,convert numbers from string to numeric seperate even and odd number and write all even to even.txt and odd to odd.txt

const fs = require("fs");

try {
  fs.writeFileSync("number.txt", "1 2 3 4 5 6 7");
  console.log("number.txt created");

  const data = fs.readFileSync("number.txt", "utf-8");
  const numbers = data.split(" ").map(Number);

  const even = numbers.filter((num) => num % 2 === 0);
  const odd = numbers.filter((num) => num % 2 !== 0);

  fs.writeFileSync("even.txt", even.join(" "));
  fs.writeFileSync("odd.txt", odd.join(" "));

  console.log("Even and odd numbers written successfully");
} catch (err) {
  console.log("Error:", err);
}
