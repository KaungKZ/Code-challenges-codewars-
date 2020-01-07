function printerError(s) {
  // your code
  let counter = 0;

  const newS = s.replace(/[n-z]/g, "1").split("");
  for (let i = 0; i < newS.length; i++) {
    if (newS[i] === "1") {
      counter++;
    }
  }
  return `${counter} / ${s.length}`;
}

printerError("abcnxzxzx");
