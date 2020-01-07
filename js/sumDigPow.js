// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// 135 = 1^1 + 3^2 + 5^3

// 1 = 1^1 = 1

// 2 = 2^1 = 2

// 15 = 1^1 + 5^2 = 26

function sumDigPow(a, b) {
  let arr = [];

  for (let i = a; i <= b; i++) {
    let sum = 0;
    for (let j = 0; j <= String(i).length; j++) {
      // when i is 1, j loop will do 1

      // when i is 2, j loop will do twice, result of 2 digit numbers (89) [j = 0][j = 1]

      sum += Math.pow(parseInt(String(i)[j]), j + 1);

      // 89 => 89[0] = 8 ^ 1 = 8
      // 89 => 89[1] = 9 ^ 2 = 81
      // = 89
      if (sum === i) arr.push(i);
    }
  }

  return arr;
}

sumDigPow(1, 100);
