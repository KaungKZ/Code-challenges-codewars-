function sumPairs(values, sum) {
  let arr = [];
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] + values[j] === sum) {
        arr.push([values[i], values[j]]);
      } else {
        return undefined;
      }
    }
  }

  return arr.sort()[0];
}

// sumPairs([11, 3, 7, 5], 10); // 3 7
// sumPairs([4, 3, 2, 3, 4], 6); // 4 2
sumPairs([10, 5, 2, 3, 7, 5], 10); // 3 7
