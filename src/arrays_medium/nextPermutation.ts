/*
  * What is the next permutation of an array of integers?

  - It's the next "lexicographically" greater permutation of its integers.

  * And what does that mean?

  - A lexicon is the vocabulary of a language (or a branch of knowledge like medicine for example). Lexicographically ordering, which is used in
    dictionaries, is the ordering of a lexicon according to the underlying ordering of the alphabet or "symbols" used in the language, so, for example,
    in English, all words that start with the letter "A" will appear in a dictionary before words that begin with "B", and words that begin with "Aa" come first before "Ab" etc.
  - The same logic can be applied to an array of integers, where we can assume that the array is the "lexicon" and the integers are the "symbols".
  - So for an array [1, 2, 3], the next lexicographically ordered permutation will be [1, 3, 2] and then [2, 1, 3], [2, 3, 1] etc..

  * OK, now how do we get the next "lexicographical" permutation?

  - Using an algorithm first written down by a 14th century Indian mathematician called Narayana Pandita, we follow the following steps:
    . First we find the break-point, which is largest index k such that a[k] < a[k+1]. In other words, it's first index from the back of the array where the current element is
      less than the next element. If none exists, then this is the largest permutation (which is the array sorted in descending order). This means we find the last index in the
      array where the element at the index is less than the next one by 1.
      IF this is NOT the largest permutation:
        . Then we find the largest index j such that a[k] < a[j]. In other words, we find the last index in the array where the element is larger than the element at index k.
        . Now swap the values of a[k] and a[j].
        . After that, reverse the sequence from a[k+1] until the end of the array.
      IF this IS the largest permutation
        . Just sort the array in ascending order.

*/

export function nextPermutation(nums: number[]): void {
  let k = -1;
  let j = -1;
  // If it's an empty array or an array of one element, don't change anything
  if (nums.length <= 1) return;
  // Loop to get the break point, i.e. the value of k
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i + 1] > nums[i]) {
      k = i;
      break;
    }
  }
  // If k not found, then the array is in descending order and we just reverse it to sort it in ascending order
  if (k === -1) {
    reverse(nums, 0, nums.length - 1);
    return;
  }
  // If k is found, loop over to get the value of j
  for (let i = k + 1; i < nums.length; i++) {
    if (nums[i] > nums[k]) {
      j = i;
    }
  }
  // Swap the elements at indices k and j
  [nums[k], nums[j]] = [nums[j], nums[k]];
  // Reverse the sequence from k+1 until the end of the array
  reverse(nums, k + 1, nums.length - 1);
}

// Helper function to reverse a subarray.
function reverse(nums: number[], start: number, end: number): void {
  let left = start;
  let right = end;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
