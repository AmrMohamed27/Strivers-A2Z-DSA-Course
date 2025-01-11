export function maxFrequency(arr: number[]): number {
  const max = {
    key: arr[0],
    value: 0,
  };
  const map = new Map<number, number>();
  for (const num of arr) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      let freq = map.get(num)!;
      map.set(num, freq + 1);
    }
    if (num === max.key) {
      max.value = map.get(num)!;
    }
    if (map.get(num)! > max.value) {
      max.value = map.get(num)!;
      max.key = num;
    }
  }
  return max.key;
}

export function minFrequency(arr: number[]): number {
  const min = {
    key: arr[0],
    value: arr.length,
  };
  const map = new Map<number, number>();
  for (const num of arr) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      let freq = map.get(num)!;
      map.set(num, freq + 1);
    }
    if (num === min.key) {
      min.value = map.get(num)!;
    }
    if (map.get(num)! < min.value) {
      min.value = map.get(num)!;
      min.key = num;
    }
  }
  return min.key;
}
test("minFrequency", () => {
  expect(minFrequency([1, 1, 2, 3, 3, 3, 4, 4, 6, 6, 6, 6])).toBe(2);
  expect(minFrequency([1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 6, 6, 6])).toBe(5);
  expect(minFrequency([1, 1, 1, 1])).toBe(1);
});

test("maxFrequency", () => {
  expect(maxFrequency([1, 1, 2, 3, 3, 3, 4, 6, 6, 6, 6])).toBe(6);
  expect(maxFrequency([1, 1, 1, 1])).toBe(1);
});
