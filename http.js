const { write } = require('./fileHandling');


async function fetchdata() {
fetch('http://www.omdbapi.com/?i=tt3896198&apikey=fc144c98')
  .then(response => {
    return response.json();
  })
  .then(data => {
    
    write(data);
  })
  .catch(error => {
    console.error(error);
  });
}
  module.exports={fetchdata}
