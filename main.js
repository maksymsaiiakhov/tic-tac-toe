import { setupTicTacToe } from "./tic-ta-toe";

document.querySelector('#app').innerHTML = `
  <h1>Wellcome to Tic-tac-toePVZ!</h1>
  <div id="tictactoe" class="tic-tac-toe"/>    
`;

setupTicTacToe(document.querySelector('#tictactoe'))
