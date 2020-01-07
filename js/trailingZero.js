function trailingZero(num) {
  let zero = 0;
  while ((num = Math.floor(num / 5))) {
    zero += num;
    // 25

    // 5

    // 1
  }
  return zero;
}

trailingZero(125);

// Divide the number by 5, to find out how much 5 factors are present, then,
// Divide the number by 25 to find out how many times 25 are present in a number as it will add extra 5 to number then,
// Divide the number by 125 to find out how many times 125 are present in a number as it will add extra 5 to number and so on.
