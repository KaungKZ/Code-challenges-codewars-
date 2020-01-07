function findSum(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((total, one) => total + one);
}

findSum(10); // 3 + 5 + 6 + 9 + 10
