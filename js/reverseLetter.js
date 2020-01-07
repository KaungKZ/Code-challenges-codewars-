function reverseLetter(str) {
  //coding and coding..

  return str
    .match(/[a-z]/gi)
    .reverse()
    .join("");
}

reverseLetter("ultr53o?n"); // "nortlu"
