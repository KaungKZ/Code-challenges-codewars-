function highestRank(arr) {
  //Your Code logic should written here

  let obj = {};

  // put the valluse in object with counts

  for (let i in arr) {
    !obj[arr[i]] ? (obj[arr[i]] = 1) : obj[arr[i]]++;
  }

  let arr2 = [...Object.entries(obj)].map(one => one.reverse()).sort();

  return +arr2[arr2.length - 1][1];

  // return the value which has the largest count
}

highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]);
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
