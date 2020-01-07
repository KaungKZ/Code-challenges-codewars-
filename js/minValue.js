function minValue(values) {
  //your code here
  const uniqueArr = [...new Set(values)];
  return parseInt(uniqueArr.sort((a, b) => a - b).join(""));
}

minValue([1, 3, 1]);
// minValue([4, 7, 5, 7]);
// minValue([4, 8, 1, 4]);
// minValue([5, 7, 9, 5, 7]);
