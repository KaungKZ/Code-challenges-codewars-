function indexOfMiddle(inputArray) {
  // copy an array and sort the values

  // get the index of middle value of copy array by comparing with original array
  // 64 31 40
  // 31 40 64 = 40

  const newArr = [...inputArray];

  return inputArray.indexOf(newArr.sort((a, b) => a - b)[1]);
}

indexOfMiddle([2, 3, 1]);
