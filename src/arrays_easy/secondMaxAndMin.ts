interface MaxMinObject {
  max: number;
  second_max: number;
  min: number;
  second_min: number;
}

export function secondMaxAndMin(arr: number[]): MaxMinObject | undefined {
  if (arr.length === 0) return;
  if (arr.length === 1)
    return {
      max: arr[0],
      second_max: -1,
      min: arr[0],
      second_min: -1,
    };

  const result: MaxMinObject = {
    max: arr[0],
    second_max: arr[1],
    min: arr[0],
    second_min: arr[1],
  };

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > result.max) {
      result.second_max = result.max;
      result.max = arr[i];
    } else if (arr[i] > result.second_max) {
      result.second_max = arr[i];
    } else if (arr[i] < result.min) {
      result.second_min = result.min;
      result.min = arr[i];
    } else if (arr[i] < result.second_min) {
      result.second_min = arr[i];
    } else {
      continue;
    }
  }
  return result;
}
