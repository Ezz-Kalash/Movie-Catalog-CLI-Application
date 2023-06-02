const fs = require('fs');

const DATA_FILE = 'movies.json';

function read() {
  return new Promise((resolve, reject) => {
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        const movies = JSON.parse(data);
        resolve(movies);
      }
    });
  });
}

function write(movies) {

  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
    
      console.error(err);
      return;
    }
  
    let jsonData = [];
      jsonData = JSON.parse(data);
    
    jsonData.push(movies);
  
    fs.writeFile(DATA_FILE,JSON.stringify(movies), 'utf8', (err) => {
      if (err) {
        console.error(err);
        return;
      }
  
      console.log('Done');
    });
  });

}

module.exports = { read, write };
