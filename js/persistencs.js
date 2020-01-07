function persistent(num) {
  let str = `${num}`.split("");

  // if (str.length === 1) {
  //   return 0;
  // } else {
  //   return 1 + persistent(str.reduce((all, one) => all * one));
  // }

  return str.length === 1
    ? 0
    : 1 + persistent(str.reduce((all, one) => all * one));
}

persistent(39);
