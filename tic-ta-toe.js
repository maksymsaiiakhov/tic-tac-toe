export function setupTicTacToe(element) {
  element.innerHTML = `
    <div>
    <div id="game-area">
    <div id="fieald_1x1">?</div>
    <div id="fieald_1x2">?</div>
    <div id="fieald_1x3">?</div>     
    <div id="fieald_2x1">?</div>
    <div id="fieald_2x2">?</div>
    <div id="fieald_2x3">?</div>    
    <div id="fieald_3x1">?</div>
    <div id="fieald_3x2">?</div>
    <div id="fieald_3x3">?</div>

      </div>
      <div id="game-controls">
      <button>Start</button>
    </div>
  `;
}
