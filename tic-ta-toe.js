export function setupTicTacToe(element) {
  element.innerHTML = `
    <div class="header">Wellcome to Tic-tac-toePVZ!</div>
    <div class="game">
      <div id="game-area" class="game-area">
      <div class="row">
        <div id="field_1x1" class="cell cell-empty"></div>         
        <div class="splitter splitter-v"></div> 
        <div id="field_1x2" class="cell cell-empty"></div>         
        <div class="splitter splitter-v"></div>
        <div id="field_1x3" class="cell cell-empty"></div>                            
      </div>     
      <div class="splitter  splitter-h"></div> 
      <div class="row">
        <div id="field_2x1" class="cell cell-empty"></div>  
        <div class="splitter splitter-v"></div>        
        <div id="field_2x2" class="cell cell-empty"></div>       
        <div class="splitter splitter-v"></div>   
        <div id="field_2x3" class="cell cell-empty"></div> 
      </div>      
      <div class="splitter splitter-h"></div>  
      <div class="row">
        <div id="field_3x1" class="cell cell-empty"></div>  
        <div class="splitter splitter-v"></div>        
        <div id="field_3x2" class="cell cell-empty"></div> 
        <div class="splitter splitter-v"></div>         
        <div id="field_3x3" class="cell cell-empty"></div> 
      </div>      
      </div>
      <div id="currentPlayer" class="current-player cell-player-1"></div>
      <div id="game-controls">
      <button>Restart</button>
    </div>
  `;

  let currentPlayer = 1;


  document.querySelector('#game-area').addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.currentTarget);

    if (e.target.classList.contains("cell-empty")) {
    e.target.className=`cell cell-player-${currentPlayer}`; 
    //e.target.className=`current-player cell-player-${currentPlayer}`;
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
  })
}


