// play.js for the client side
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');

setupInput(connect());
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */