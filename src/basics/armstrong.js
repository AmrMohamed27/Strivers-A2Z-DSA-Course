import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => {
    rl.question(query, resolve);
  });

function countDigits(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

function armstrong(n) {
  let digits = countDigits(n);
  let sum = 0;
  let num = n;
  while (n > 0) {
    let d = n % 10;
    sum += Math.pow(d, digits);
    n = Math.floor(n / 10);
  }
  return sum === num;
}

async function main() {
  let num1 = await question("Enter number: ");
  let res = armstrong(parseInt(num1));
  console.log(`${num1} is ${res ? "" : "not "}an Armstrong number`);
  rl.close();
}

main();
