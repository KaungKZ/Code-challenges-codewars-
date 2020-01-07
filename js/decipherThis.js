function decipherThis(str) {
  //have fun!
  // split by space

  return str
    .split(" ")
    .map(one => {
      // transform to char from code for the 1st letter
      one = one.replace(/[0-9]+/gi, val => {
        return String.fromCharCode(val);
      });
      let strArr = one.split("");

      // swap first and last letter

      [strArr[1], strArr[strArr.length - 1]] = [
        strArr[strArr.length - 1],
        strArr[1]
      ];

      return strArr.join("");
    })
    .join(" ");
  // join back
}

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)

decipherThis("72olle 103doo 100ya"); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'
