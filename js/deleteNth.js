function longest(s1, s2) {
  // your code
  const [arr1, arr2] = [s1.split(""), s2.split("")];

  const newArr = arr1.concat(arr2);
  return [...new Set(newArr)].sort().join("");
  // return finalArr.sort().join('');
}

a = "xyaabbbccccdefww";
b = "xxxxyyyyabklmopq";
longest(a, b);
