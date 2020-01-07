const arr = [1, 2, 3, 4, 5];

// create new array methods in this file with Array.prototype.methodName

Array.prototype.square = function() {
  return this.map(val => val * val);
};
Array.prototype.cube = function() {
  return this.map(val => val * val * val);
};
Array.prototype.average = function() {
  return this.reduce((total, one) => total + one, 0) / this.length;
};
Array.prototype.sum = function() {
  return this.reduce((total, one) => total + one, 0);
};
Array.prototype.even = function() {
  return this.filter(val => val % 2 === 0);
};
Array.prototype.odd = function() {
  return this.filter(val => val % 2 === 1);
};

// numbers.square();  // must return [1, 4, 9, 16, 25]
// numbers.cube();    // must return [1, 8, 27, 64, 125]
// numbers.average(); // must return 3
// numbers.sum();     // must return 15
// numbers.even();    // must return [2, 4]
// numbers.odd();     // must return [1, 3, 5]
