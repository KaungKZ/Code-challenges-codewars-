function squareDigits(num) {
  //may the code be with you
  num = [...`${num}`];

  return +num.map(val => val * val).join("");
}

squareDigits(9119); //  811181;
