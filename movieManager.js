const readline = require('readline');
const { write } = require('./fileHandling');
function ReadInput(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

function displayCatalog(movies) {
  console.log('Movies Catalog:');
  movies.forEach((movie, index) => {
    console.log( (index+1 )+"- "+"title =  "+movie.title+ " releaseYear= "+movie.releaseYear +" director= "+movie.director +" genre= "+movie.genre);

  });
}

async function addMovie(movies) {
  const title = await ReadInput('Enter the title: ');
  const director = await ReadInput('Enter the director: ');
  const releaseYear = await ReadInput('Enter the release year: ');
  const genre = await ReadInput('Enter the genre: ');

  const newMovie = { title, director, releaseYear, genre };
  movies.push(newMovie);
  write(movies)

  console.log('The movie has been added');
}

async function updateMovie(movies) {
  const index = await ReadInput('Enter the movie index: ');
  const movie = movies[index - 1];

  if (movie) {
    console.log("you chose this movie:" + movie.title);
    const title = await ReadInput('Enter the new title (to keep the value press enter): ');
    const director = await ReadInput('Enter the new director (to keep the value press enter): ');
    const releaseYear = await ReadInput('Enter the new release year (to keep the value press enter): ');
    const genre = await ReadInput('Enter the new genre (to keep the value press enter): ');
    if (title=="")
    movie.title
    else
    movie.title = title ;

    if (director=="")
    movie.director
    else
    movie.director = director ;

    if (releaseYear=="")
    movie.releaseYear
    else
    movie.releaseYear = releaseYear ;

    if (genre=="")
    movie.genre
    else
    movie.genre = genre ;

    console.log('Movie info has been updated');
    write(movies)
    } else {
    console.log('Invalid movie index');
  }
}
async function deleteMovie(movies) {
  const index = await ReadInput('Enter the index to delete: ');
  const movie = movies[index - 1];

  if (movie) {
    movies.splice(index - 1, 1);
    console.log('Movie deleted !');
    write(movies)
  } else {
    console.log('Invalid index!');
  }
}

async function search(movies) {
  const query = await ReadInput('Enter the name,releaseYear,director,genre ');
  const lQuery = query.toLowerCase();

  const result = movies.filter(movie => {
    const lTitle = movie.title.toLowerCase();
    const lDirector = movie.director.toLowerCase();
    const lGenre = movie.genre.toLowerCase();

    return (
      lTitle.includes(lQuery) ||
      lDirector.includes(lQuery) ||
      lGenre.includes(lQuery)
    );
  });

  console.log(result) ;
}
module.exports = {
  displayCatalog,
  addMovie,
  updateMovie,
  deleteMovie,
  search
};


