#!/usr/bin/env node
const { IP, PORT } = require('./constants');

process.stdout.write('\x07');
const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: ZXL");
  });
  
  //Update the connect function to also attach an event handler to handle incoming data and console log it for the player.
  conn.on('data', (data) => {
    console.log('Message from server: ', data);
  });

  return conn;
};

module.exports = { connect };