function multiply(a, b) {
  a = +a;
  b = +b;

  let ans = a * b;
  return ans.toLocaleString().replace(/,/gi, "");
}

multiply("432523", "597259724895");

let bigNumber = 2830869077153280552556547081187254342445169156730;

console.log(JSON.stringify(bigNumber));
