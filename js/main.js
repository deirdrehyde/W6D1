const View = require('./ttt-view.js');// require appropriate file
const Game = require('./solution/game.js');// require appropriate file

$( () => {
  // Your code here
  const game = new Game();
  //get jquery object of figure
  let $fig = $('figure.ttt');
  new View(game, $fig);
});
