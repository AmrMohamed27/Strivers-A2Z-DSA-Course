import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => {
    rl.question(query, resolve);
  });

function reverse(arr, start, end) {
  if (end <= start) return;
  let tmp = arr[start];
  arr[start] = arr[end];
  arr[end] = tmp;
  reverse(arr, start + 1, end - 1);
}

async function main() {
  //   let num1 = await question("Enter first number: ");
  let N = 5;
  let arr = [1, 2, 3, 4, 5];
  reverse(arr, 0, N - 1);
  console.log(arr);
  rl.close();
}

main();
