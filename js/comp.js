function comp(a1, a2) {
  //your code here
  if (!a1 || !a2 || a1.length !== a2.length) return false;
  const a1Check = a1
    .map(one => one * one)
    .sort((a, b) => a - b)
    .toString();
  const a2Check = a2.sort((a, b) => a - b).toString();

  if (a1Check === a2Check) return true;
}

//a1 = [];
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//a2 = [];
a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
