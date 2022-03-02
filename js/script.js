/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero (in ordine) tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49 
*/

// mi seleziono gli elementi
const eleLevel = document.querySelector('#level-difficulty');
const eleBtnPlay = document.querySelector('.play');
const eleCellContainer = document.querySelector('#cell-container');


eleBtnPlay.addEventListener('click', generateGrid)
function generateGrid(){
    let level = eleLevel.value;
    console.log(level);
    eleCellContainer.innerHTML = ''
    if (level == 'normal') {
        for (i = 1; i < 101; i++) {
            eleCellContainer.innerHTML += `<div class="cell">${i}</div>`;
        }
        

    } else if (level == 'hard') {
        for (i = 1; i < 81; i++) {
            eleCellContainer.innerHTML += `<div class="cell">${i}</div>`
        }
        

    } else {
        for (i = 1; i < 51; i++) {
            eleCellContainer.innerHTML += `<div class="cell">${i}</div>`
        }
    }
    eleCell = document.querySelectorAll('.cell')
    play();
}

function play(){
   eleCell.forEach(element => {
       element.addEventListener('click', function(){
           element.classList.add("clicked");
       })
   });
}
