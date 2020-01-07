function sortArray(array) {
  const odd = array.filter(val => val % 2 === 1);

  let indexes = odd.map(one => array.indexOf(one));
  let sortedOdd = odd.sort((a, b) => a - b);

  indexes.forEach((one, index) => (array[one] = sortedOdd[index]));

  return array;
}

// function sortArray(array) {
//     const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
//     return array.map((x) => x % 2 ? odd.shift() : x);
//   }

// sortArray([5, 3, 1, 8, 0]);
