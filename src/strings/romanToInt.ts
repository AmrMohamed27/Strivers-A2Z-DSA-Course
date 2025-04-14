function romanToInt(s: string): number {
  let map = getRomanMap();
  let sum = 0,
    prev = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    let curr = map.get(s.charAt(i))!;
    if (curr >= prev) {
      sum += curr;
    } else {
      sum -= curr;
    }
    prev = curr;
  }
  return sum;
}

function getRomanMap() {
  let map = new Map<string, number>();
  map.set("I", 1);
  map.set("V", 5);
  map.set("X", 10);
  map.set("L", 50);
  map.set("C", 100);
  map.set("D", 500);
  map.set("M", 1000);
  return map;
}
