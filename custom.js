/********************************************************************
 * 
 * Script to write a list of artist names into index.html
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
 ]

 // Solution
 // I recieved an error saying document was not defined. Not sure why but I am assuming this plays a part in it not running. 

for(i in artists){
  let table = document.getElementById("Bhangra");
  let row = table.insertRow(i +1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
}

cell1.innerHTML = artists[i].name;
cell2.innerHTML = artists[i].birthYear;
cell3.innerHTML = artists[i].link
