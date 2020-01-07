function addToN(n) {
  if (n <= 0 || typeof n !== "number" || Number.isInteger(n) === false)
    return false;
  let total = 1;
  for (let i = n; i > 1; i--) {
    total += i;
  }
  return total;
}
