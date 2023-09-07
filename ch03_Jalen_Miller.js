// Jalen Miller
// Chapter 3 

// Problem #1 - Minimum 
function min(a, b)
 {if (a < b) return a;
    else return b;}

  console.log(min(0, -88));
 

// Problem #2 - Recursion
function isEven(num) 
  {if (num == 0) return true;
    else if (num == 1) return false;
    else if (num < 0) return isEven(-num);
    else return isEven(num - 2);}

  console.log(isEven(23));


// Problem #3 - Bean Counting 
function countLetter(string, letter) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == letter) {
            counted += 1; }}
    return counted;}
function countBs(string) 
    {return countLetter(string, "B");}
  
  console.log(countBs("BAHKBBFYBC"));
