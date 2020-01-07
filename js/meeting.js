function meeting(s) {
  // split the names by ';'
  s = s.toUpperCase().split(";");

  // split each name by ':'

  let newArr = [];
  s.forEach(one => newArr.push(one.split(":")));

  // sort by the last name

  // if last name is the same, sort by first name
  let final = [];
  newArr.forEach(one => final.push(one.reverse()));
  final = final.sort().join(")(");

  // return the names
  return final
    .replace(/(,)/gi, "$1 ")
    .replace(/(\w$)/gim, "$1)")
    .replace(/(^\w)/gi, "($1");
}

meeting(
  "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
);
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// function meeting(s) {
//   let string = s.toUpperCase().split(';')
//                 .map(x => x.split(':').reverse().join(', '))
//                 .sort()
//                 .join(')(')
//   return '(' + string + ')'
// }
