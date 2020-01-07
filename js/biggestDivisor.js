function divisor(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") return false;
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  while (num2) {
    let t = num2;
    num2 = num1 % num2;
    num1 = t;
  }
  return num1;
}
divisor(9, 3);
