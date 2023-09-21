// Jalen Miller
// Chapter 5

// Problem #1 

let arrays = [[1, 2, 3], [4, 5], [6]], [7, 8, 9];

console.log(arrays.reduce((flat, current) => flat.concat(current), []));

// Problem #2 - WRITE YOUR OWN LOOP FUNCTION

function loop(start, test, update, body) {
    for (let value = start;
        test(value);
        value = update(value)) {
      body(value);
    }
  }
  
  loop(88, n => n > 0, n => n - 1, console.log);

  // I decided to go with a bigger number in order to see the loop continue to work as it going down in size. 

// Probelm #3 - Everything

function every(array, predicate) {
    for (let element of array) {
      if (!predicate(element)) return false;
    }
    return true;
  }
  
  function every2(array, predicate) {
    return !array.some(element => !predicate(element));
  }
  
  console.log(every([1, 3, 5], n => n < 10));

