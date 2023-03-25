export function setupTicTacToe(element) {
  element.innerHTML = `
    <div class="game">
      <div id="game-area" class="game-area">
      <div class="row">              
      </div>
      <div class="splitter splitter-m"></div> 
      <div class="row">
        <div id="field_101" class="cell cell-empity bordered"></div>  
        <div class="splitter splitter-c"></div>                
      </div>
      <div class="splitter splitter-m"></div> 
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
      <div id="game-controls">
      <button>Restart</button>
    </div>
  `;

  let currentPlayer = 1;

  document.querySelector('#field_101').className=`cell cell-player-${currentPlayer}`;
  //document.querySelector('#field_1x1').className="cell cell-empty";
  document.querySelector('#game-area').addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.currentTarget);

    if (e.target.classList.contains("cell-empty")) {
    e.target.className=`cell cell-player-${currentPlayer}`; 
    currentPlayer = currentPlayer === 1 ? 2 : 1;
    }



  })
}


