import { setupTicTacToe } from "./tic-ta-toe";

document.querySelector('#app').innerHTML = `
  <div id="tictactoe" class="tic-tac-toe"/>    
`;

setupTicTacToe(document.querySelector('#tictactoe'))
