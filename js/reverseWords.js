function reverseWords(str) {
  // Go for it
  const arr = str
    .split(" ")
    .map(elm => elm.split("").reverse())
    .join(" ")
    .replace(/,/g, "");

  return arr;
}
reverseWords("double  spaced  words");
