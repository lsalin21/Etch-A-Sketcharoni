const grid = document.querySelector('.grid');
const box = document.createElement('div');
const buttonReset = document.querySelector('.clearButton');
let size = 16;

function gridPlatform(){
    for (i = 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for(j = 0 ; j < size; j++){
            const box = document.createElement('div');
            box.classList.add('box');
            row.appendChild(box);
            box.addEventListener('mouseover', function(e){
                e.target.style.background = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
                e.target.style.opacity = "10";
            })
        }
    }
}

buttonReset.addEventListener('click',function(){
    let newSize = parseInt(prompt("Choose Grid size between 2 and 100"))
    if(newSize > 1 && newSize <= 100){
        size = newSize
        while(grid.firstChild){
            grid.removeChild(grid.lastChild)
        }
        gridPlatform()
    }else{
        alert("Please choose grid number between 2 and 100.")
    }
    console.log(size);
})

gridPlatform();
