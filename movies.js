const movieList = [
  ["The Godfather", "Gangster", "10.99", 1],
  ["The Dark Knight", "DC", "6.99", 0],
  ["Shrek", "Comedy", "10.01", 50],
  ["Ironman", "Marvel", "8.99", 10],
  ["LOTR", "Fantasy", "7.99", 50],
  ["Pulp Fiction", "Comedy", "14.50", 8],
  ["Schindler's List", "War", "4.29", 0],
  ["12 Angry Men", "Drama", "4.29", 3],
];

let yourMovies = [];


// console.log(`movie length: ${movieList.length}`)

const table = document.getElementById("table-body");
// console.log(table)

function generateMovieList() {


    table.innerHTML = ''



  movieList.forEach((elem, index) => {
    let tr = document.createElement("tr");
    tr.classList.add("movie-block-list");
    table.appendChild(tr);

    movieList[index].forEach((elem, index) => {
      tr.innerHTML += `<td class="movie-block-list-${index}">${elem}</td>`;
    });

    console.log(elem[3]);

    // if (elem[3] <= 0) {
    //   tr.innerHTML += `<td class="movie-button-box"><button id="rent-me${index}" class="rent" disabled>Rent</button></td>`;
    // } else {
    //   tr.innerHTML += `<td class="movie-button-box"><button id="rent-me${index}" class="rent">Rent</button></td>`;
    // }

    tr.innerHTML += `<td class="movie-button-box"><button onclick="rentThisMovie(${index})" id="rent-me${index}" class="rent">Rent</button></td>`

  });

  let isInStock = document.querySelectorAll(".movie-block-list-3");

  isInStock.forEach((elem) => {
    if (elem.innerHTML > 0) {
      elem.innerHTML = `<img class="availability" src="img/check.png" alt="check">`;
    } else {
      elem.innerHTML = `<img class="availability" src="img/cross.png" alt="check">`;
    }
  });

}



// function addButtonFunctionality(){

//   let rentBtn = document.getElementById('rent-me0')
//   console.log(rentBtn)
//   rentBtn.addEventListener("click", () => {
//     elem[3] -= 1
//     console.log(elem[3])
//   })
 
// //  generateMovieList()

// }
generateMovieList()
// addButtonFunctionality()


// function deleteMovieList(){
//   table.innerHTML = ''
// }


// movieList[0][3] -= 1
// movieList[2][3] -= 50
// // deleteMovieList()
// generateMovieList()

function rentThisMovie(index){
  // console.log(`Movie is rented ${movieList[index][3]}`)

  if(movieList[index][3] === 0){
    alert("A movie is not availabe right now!")
  }else{
    movieList[index][3] -= 1
    yourMovies.push(movieList[index])
  }


  console.log(yourMovies)


  generateMovieList()
}
