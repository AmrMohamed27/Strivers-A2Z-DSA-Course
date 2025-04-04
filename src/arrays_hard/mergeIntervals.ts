export function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;
  let result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let left = 0;
  let right = left + 1;
  while (left < intervals.length && right < intervals.length) {
    // Interval is over so we add the current interval to the result
    if (intervals[right][0] > intervals[left][1]) {
      result.push(intervals[left]);
      left = right;
      right = left + 1;
    }
    // Overlapping intervals, merge them and move the right pointer
    else {
      // Merged interval with the least start and max end.
      let mergedInterval = [
        intervals[left][0],
        Math.max(intervals[right][1], intervals[left][1]),
      ];
      intervals[left] = mergedInterval;
      right++;
    }
  }
  result.push(intervals[left]);
  return result;
}
