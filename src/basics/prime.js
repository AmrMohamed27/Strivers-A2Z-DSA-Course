import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => {
    rl.question(query, resolve);
  });

function prime(n) {
  n = parseInt(n, 10);
  if (n <= 1) return false;
  if (n <= 3) return true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

async function main() {
  let num1 = await question("Enter first number: ");
  let res = prime(num1);
  console.log(res);
  rl.close();
}

main();
