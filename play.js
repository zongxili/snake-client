// play.js for the client side
const { connect } = require('./client');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  handleUserInput();

  stdin.resume();
  return stdin;
}



const handleUserInput = function (){
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.on('data', (key) => {
      if (key === '\u0003') {
          process.exit();
      }

      if (key === "1") {
          console.log('Ayyyyy')
      }
      
      console.log(key)
  });
};
setupInput();

