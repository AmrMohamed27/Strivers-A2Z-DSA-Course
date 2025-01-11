import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => {
    rl.question(query, resolve);
  });

function factorial(n) {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
}

async function main() {
  let num1 = await question("Enter number: ");
  let res = factorial(num1);
  console.log(res);
  rl.close();
}

main();
