function likes(names) {
  // check if name is empty

  return names.length <= 0
    ? "no one likes this"
    : // if length is 1, return 'likes this' at the end of the name
    names.length === 1
    ? `${names[0]} likes this`
    : // if length is 2, return 'and' and 'like this'
    names.length === 2
    ? `${names[0]} and ${names[1]} like this`
    : // if length is 3, return '1st,' and '2nd and 3rd like this'
    names.length === 3
    ? `${names[0]}, ${names[1]} and ${names[2]} like this`
    : // else, return '1st, 2nd and' length - 2 others like this
      `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

//likes([]), 'no one likes this';
//likes(['Peter']), 'Peter likes this';
//likes(['Jacob', 'Alex']), 'Jacob and Alex like this';
//likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this';
likes(["Alex", "Jacob", "Mark", "Max"]); // 'Alex, Jacob and 2 others like this';
