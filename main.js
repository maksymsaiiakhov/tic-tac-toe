import { setupTicTacToe } from "./tic-ta-toe";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Wellcome to Tic-tac-toe!</h1>
    <div id="tictactoe" />    
  </div>
`;

setupTicTacToe(document.querySelector('#tictactoe'))
