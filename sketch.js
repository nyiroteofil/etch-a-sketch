const canvas = document.querySelector('.canvas');
const slider = document.querySelector('.slider');
const sliderCaption = document.querySelector('.size-count')
const clearButton = document.querySelector('.clear');
const gridCheck = document.querySelector('.gridCheck');
let rainbowON = false;

    clearButton.addEventListener('click', () => {
        let tiles = document.querySelectorAll('.tile')

        tiles.forEach((n) => {
            if (gridCheck.checked === true){
                n.style = 'background-color: rgb(215, 218, 189); border: 1px black solid';
            }
            else {
                n.style = 'background-color: rgb(215, 218, 189);';
            }            
            

        });
    });

    function deleteAllChild(node) {
        
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }

    }

    function rainbowColorHex () {

        let colorCode = '';

        for (let i = 0; i < 3; i++) {
            let num = (Math.floor(Math.random() * (0 + 255)));
            colorCode += num + ', ';
        } 

        colorCode.slice(13, 2);

        return `rgb(${colorCode})`; 
        
    }

/*-------------------- Setting up the basic grid and listeners --------------------*/

    canvas.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;

    for (let i = 0; i < slider.value * slider.value; i++) {

        let tile = document.createElement('div');
        tile.classList.add('tile');
        canvas.appendChild(tile);
    
    }

    console.log(rainbowColorHex());

    /*Event listener for the tiles before the slider is being set*/
    let tiles = document.querySelectorAll('.tile')

    tiles.forEach((t) => {
        t.addEventListener('mouseenter', (e) => {
            if (rainbowON === false) {
                e.target.style = 'background-color: black';
            }        

        })
    })

    gridCheck.oninput = () => {
        tiles.forEach((n) => {
            if (gridCheck.checked === true) {
                n.style = 'background-color: rgb(215, 218, 189); border: 1px black solid';
            }
            else {
                n.style = 'background-color: rgb(215, 218, 189);'
            }
        });
    }
    

/*-------------------- Setting up the basic grid and listeners --------------------*/
/*-------------- Setting up the slider configured grid and listeners --------------*/

slider.oninput = () => {

    
    deleteAllChild(canvas);

    sliderCaption.textContent = slider.value;
    
    canvas.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;

    for (let i = 0; i < slider.value * slider.value; i++) {
        let tile = document.createElement('div');
        tile.classList.add('tile');

        if(gridCheck.checked === true) {
            tile.style = 'border: 1px solid black';
        }

        canvas.appendChild(tile);
    }

    let tiles = document.querySelectorAll('.tile')

    tiles.forEach((t) => {
        t.addEventListener('mouseenter', (e) => {

            if (rainbowON === false) {
                e.target.style = 'background-color: black';
            }

        })
    })

    gridCheck.oninput = () => {
        tiles.forEach((n) => {
            if (gridCheck.checked === true) {
                n.style = 'background-color: rgb(215, 218, 189); border: 1px black solid';
            }
            else {
                n.style = 'background-color: rgb(215, 218, 189);'
            }
        });
    }
   
}




