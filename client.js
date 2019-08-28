#!/usr/bin/env node
process.stdout.write('\x07');

const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    // conn.write("Name: ZXL", ()=>{
    //   console.log("Sent Name");
    // });
    conn.write("Name: ZXL");

    // setTimeout(function(){ 
    //   conn.write("Move: up");
    // }, 1000);

    // setTimeout(function(){ 
    //   conn.write("Move: left");
    // }, 2000);

    // setTimeout(function(){ 
    //   conn.write("Move: down");
    // }, 3000);

    // setTimeout(function(){ 
    //   conn.write("Move: right");
    // }, 4000);



  });



  
  //Update the connect function to also attach an event handler to handle incoming data and console log it for the player.
  conn.on('data', (data) => {
    console.log('Message from server: ', data);
  });

  return conn;
}

module.exports = { connect };