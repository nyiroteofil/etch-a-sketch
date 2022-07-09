const canvas = document.querySelector('.canvas');
const slider = document.querySelector('.slider');
const sliderCaption = document.querySelector('.size-count')

    function deleteAllChild(node) {
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }

    canvas.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;

    for (let i = 0; i < slider.value * slider.value; i++) {
        let tile = document.createElement('div');
        tile.style.border ='solid black 1px';
        tile.classList.add('tile');
        canvas.appendChild(tile);
    }


    /*Event listener before the slider is being set*/
    let tiles1 = document.querySelectorAll('.tile')

    tiles1.forEach((t) => {
        t.addEventListener('mouseover', (e) => {
                e.target.style = 'background-color: black';
        })
    })

    slider.oninput = () => {

    
    deleteAllChild(canvas);

    sliderCaption.textContent = slider.value;
    
    canvas.style.gridTemplateColumns = `repeat(${slider.value}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${slider.value}, 1fr)`;

    for (let i = 0; i < slider.value * slider.value; i++) {
        let tile = document.createElement('div');
        tile.style.border ='solid black 1px';
        tile.classList.add('tile');
        canvas.appendChild(tile);
    }

    let tiles = document.querySelectorAll('.tile')

    tiles.forEach((t) => {
        t.addEventListener('mousedown', (e) => {
                e.target.style = 'background-color: black';
        })
    })
}




