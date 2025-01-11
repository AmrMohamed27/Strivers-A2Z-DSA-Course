import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => {
    rl.question(query, resolve);
  });

function divisors(n) {
  n = parseInt(n);
  let divisors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }
  return divisors;
}

async function main() {
  let num1 = await question("Enter first number: ");
  let res = divisors(num1);
  console.log(res);
  rl.close();
}

main();
