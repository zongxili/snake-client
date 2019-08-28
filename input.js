// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  handleUserInput();
}

const handleUserInput = function (){
  const stdin = process.stdin;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  let message = '';
  stdin.on('data', (key) => {
    if (key === '\u0003') {
        process.exit();
    } else if (key === "w") {
      connection.write("Move: up");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === 'y'){
      connection.write(`Say: ${message}`);
    } else {
        message = message + key;
    }
  });
};

module.exports = { setupInput };