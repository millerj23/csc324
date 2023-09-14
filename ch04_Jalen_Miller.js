// Jalen Miller
// Chapter 4

// Problem #1 - The sum of a range

function range(start, end, step = start < end ? 1 : -1) {
    let Numarray = [];
    if (step > 0) {
      for (let i = start; i <= end; i += step) Numarray.push(i);}
       else {
      for (let i = start; i >= end; i += step) Numarray.push(i)}
    return Numarray;} 

  function sum(Numarray) {
    let total = 0;
    for (let value of Numarray) {
      total += value; }
    return total;}

console.log(range(1, 10));


// Problem #2 - Reversing an array

function reverseArray(Letarray) {
    let output = [];
    for (let i = Letarray.length - 1; i >= 0; i--) {
      output.push(Letarray[i]);}
    return output;}
  
  function reverseArrayInPlace(Letarray) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
      let old = Letarray[i];
      Letarray[i] = Letarray[array.length - 1 - i];
      Letarray[array.length - 1 - i] = old;}
    return Letarray;}

  console.log(reverseArray(["A", "B", "C", "D", "E", "F"]));


