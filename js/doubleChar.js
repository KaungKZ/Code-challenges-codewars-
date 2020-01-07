function doubleChar(str) {
  // Your code here
  let newS = [];
  for (let i in str) {
    newS.push(str[i] + str[i]);
  }
  return newS.join("");
}
doubleChar("hello");
