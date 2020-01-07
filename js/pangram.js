function isPangram(str) {
  if (str.length === 0) return undefined;
  else {
    str = [...str.replace(/[\s.?,\d]/gi, "").toLowerCase()];
    const newArr = new Set(str);
    return newArr.size === 26 ? true : false;
  }
}
// isPangram("i am not a pangram obviously");
// isPangram("The quick brown fox jumps over the lazy dog");
// isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ");
// isPangram("Cwm fjord bank glyphs vext quiz");
