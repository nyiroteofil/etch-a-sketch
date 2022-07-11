const canvas = document.querySelector('.canvas');
const slider = document.querySelector('.slider');
const sliderCaption = document.querySelector('.size-count');
const clearButton = document.querySelector('.clear');
const rainbowButton = document.querySelector('.rainbow-button');
const gridCheck = document.querySelector('.gridCheck');
const eraserButton = document.querySelector('.eraser');
const userColor = document.querySelector('.userColor')
let eraserON = false;
let mouseDown = false;
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

    eraserButton.addEventListener('click', () => {
        if (eraserON === false) {
            eraserON = true;
            eraserButton.style = 'border: 3px solid firebrick;';
        } else {
            eraserON = false;
            eraserButton.style.border = 'grey 3px solid';
        }
    });


    rainbowButton.addEventListener('click', () => {

        if (rainbowON === false) {
            rainbowON = true;
            rainbowButton.style = 'border: 3px solid firebrick;'
        } else {
            rainbowON = false;
            rainbowButton.style.border = '3px grey solid';
        }
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

            if (i === 2) {
                colorCode += num;    
            } else {
            colorCode += num + ', ';
            }
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
    
    };

    /*Event listener for the tiles before the slider is being set*/

    let tiles = document.querySelectorAll('.tile')

    tiles.forEach((t) => {
        t.addEventListener('mouseenter', (e) => {
             

            if (rainbowON === false && mouseDown === true && eraserON === false) {

                e.target.style = `background-color: ${userColor.value}`;
            
            } else if (rainbowON === true && mouseDown === true) {
                if (gridCheck.checked === true && mouseDown === true) {

                    e.target.style = `background-color: ${rainbowColorHex()}; border: 1px black solid;`;
                
                } else {

                    e.target.style = `background-color: ${rainbowColorHex()}`;
                
                }
            }   else if (eraserON === true && mouseDown === true && rainbowON === false) {
                if (gridCheck.checked === true) {
                    e.target.style = 'background-style: rgb(215, 218, 189); border: 1px solid black';
                } else {
                    e.target.style = 'background-style: rgb(215, 218, 189);';
                }
            }
                


        })
    })

    tiles.forEach((t) => {
        t.addEventListener('mousedown', () => {
            mouseDown = true;
            console.log(mouseDown)
        });

        t.addEventListener('mouseup', () => {
            mouseDown = false;
            console.log(mouseDown)
        });
    });

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

    /*this is a listener for the mouse button, so it will only draw when the mouse is pressed */
    tiles.forEach((t) => {
        t.addEventListener('mousedown', () => {
            mouseDown = true;
            console.log(mouseDown)
        });

        t.addEventListener('mouseup', () => {
            mouseDown = false;
            console.log(mouseDown)
        });
    });

    tiles.forEach((t) => {
        t.addEventListener('mouseenter', (e) => {
            

            if (rainbowON === false && mouseDown === true && eraserON === false) {

                e.target.style = `background-color: ${userColor.value}`;
            
            } else if (rainbowON === true && mouseDown === true) {
                if (gridCheck.checked === true && mouseDown === true) {

                    e.target.style = `background-color: ${rainbowColorHex()}; border: 1px black solid;`;
                
                } else {

                    e.target.style = `background-color: ${rainbowColorHex()}`;
                
                }
            }   else if (eraserON === true && mouseDown === true && rainbowON === false) {
                if (gridCheck.checked === true) {
                    e.target.style = 'background-style: rgb(215, 218, 189); border: 1px solid black';
                } else {
                    e.target.style = 'background-style: rgb(215, 218, 189);';
                }
            }
                

        })
    })

    gridCheck.oninput = () => {
        tiles.forEach((n) => {
            if (gridCheck.checked === true) {
                n.style.border = '1px black solid';
            }
            else {
                n.style.border = '';
            }
        });
    }
   
}




