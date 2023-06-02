const readline = require('readline');
const { read } = require('./fileHandling');
const {displayCatalog,addMovie,updateMovie,deleteMovie,search} = require('./movieManager');
const { fetchdata } = require('./http');


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



const DATA_FILE = 'movies.json';

async function main() {
  let movies = [];

  try {
    movies = await read(DATA_FILE);
  } catch (error) {
    console.log('Error reading data:', error);
  }

let choice ;
   while (choice != "q" ) {
    menu();

      choice = await ReadInput('Enter your choice (1-6):') ;

    switch (choice) {
      case '1':
        await displayCatalog(movies);
        break;
      case '2':
        await addMovie(movies);
        break;
      case '3':
        await updateMovie(movies);
        break;
      case '4':
        await deleteMovie(movies);
        break;
      case '5':
        await search(movies);
        break;
      case '6':
        fetchdata()
        console.log('Movies fetched from API and added to the catalog.');
        break;
        case 'q':
          case 'Q':
         console.log("Good bye");
         break;
  
      default:
        console.log('Invalid. Please try again.');
    }

  }

}

function menu() {
  console.log('Welcome to Movie Catalog Application');
  console.log('1- Display All Movies');
  console.log('2- Add New Movie');
  console.log('3- Update Movie Info');
  console.log('4- Delete Movie');
  console.log('5- Search');
  console.log('6- Fetch Movie Data');
  console.log(' --- q to exit ---');

}

main().catch((error) => {
  console.log( error);
  process.exit();
});
