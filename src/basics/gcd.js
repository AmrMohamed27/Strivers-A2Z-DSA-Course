import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => {
    rl.question(query, resolve);
  });

function gcd(a, b) {
  return a === 0
    ? b
    : b === 0
    ? a
    : gcd(Math.min(a, b), Math.max(a, b) - Math.min(a, b));
}

async function main() {
  let num1 = await question("Enter first number: ");
  let num2 = await question("Enter second number: ");
  let x = Math.max(num1, num2);
  let y = Math.min(num1, num2);
  let res = gcd(x, y);

  console.log(`The Greatest Common Divisor of ${num1} and ${num2} is ${res}`);
  rl.close();
}

main();
