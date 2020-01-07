function generateHashtag(str) {
  if (str.length === 0 || !str.trim()) return false;
  str = str
    .replace(/(?<=\s)\w/gi, val => val.toUpperCase())
    .replace(/(^\w)/gi, val => val.toUpperCase())
    .replace(/\s/gi, "");
  if (str.length >= 140) return false;
  return `#${str}`;
}

generateHashtag(" ");

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
