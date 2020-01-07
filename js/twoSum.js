function twoSum(numbers, target) {
  // ...

  if (numbers.length < 2) return false;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j].sort();
      }
    }
  }
}

// twoSum([5, 6, 7, 8, 9, 10], 17);
// twoSum([3, 2, 1], 4);
twoSum([2, 2, 3], 4);
