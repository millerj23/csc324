/********************************************************************
 * 
 * I struggled with the last homework assignment so I spent some time researching and trying new things on this one. 
 * I feel more confident in this assignment as I learned how to do more things. 
 * 
 *******************************************************************/

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

// locate the table:
const tab = document.querySelector("#bhangra");

populateTable(arr = artists);

// now deal with event-listeners
//find the buttons:
const nameButton = document.querySelector("#name-button");
const yearButton = document.querySelector("#year-button");
const shuffleButton = document.querySelector("#shuffle-button");

//add eventlisterners:
nameButton.addEventListener("click", sortByName);
yearButton.addEventListener("click", sortByYear);
shuffleButton.addEventListener("click", shuffleTable);


// declare listener-functions
function sortByName() {
  let sortedArray = artists.slice().sort((a, b) => a.name.localeCompare(b.name));
  populateTable(sortedArray);
 }
 
 function sortByYear() {
  let sortedArray = artists.slice().sort((a, b) => a.birthYear - b.birthYear);
  populateTable(sortedArray);
 }
 
 function shuffleTable() {
  let shuffledArray = artists.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  populateTable(shuffledArray);
 }


// function to populate a table:
function populateTable(arr) {
 let contents = "<tbody>";


 // get in the header row:
 contents += `
   <tr>
     <th>Name</th>
     <th>Year of Birth</th>
     <th>Link</th>
   </tr>
   `;
   arr.forEach(artist => {
     // open the row:
     contents += "<tr>";
     contents += `<td>${artist.name}</td>`;
     contents += `<td>${artist.birthYear}</td>`;
     contents += `<td><a href="${artist.link} target = "_blank">${artist.link}</a></td>`;
     // close the row:
     contents += "</tr>"
   });


   // close out the table body:
   contents += "</tbody>";
   tab.innerHTML = contents;
}

