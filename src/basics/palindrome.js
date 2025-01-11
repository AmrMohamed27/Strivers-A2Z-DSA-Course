import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => {
    rl.question(query, resolve);
  });

function palindrome(str) {}

async function main() {
  let str = await question("Enter string: ");
  let res = palindrome(str);
  console.log(`${str} is ${res ? "" : "not "}a palindrome`);
  rl.close();
}

main();
