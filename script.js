//global var
var container = document.getElementById("container");
var foot = document.querySelector('footer');
var canvasHeightWidth = 600;
var colorPixel = [219, 58, 52];


//sets the size of canvas
document.getElementById('container').style.maxWidth = canvasHeightWidth.toString() + "px"
document.getElementById('container').style.maxHeight = canvasHeightWidth.toString() + "px"


//Takes the users size of canvas and creates a canvas
document.getElementById("myButton").onclick = function(){
    foot.innerHTML = '';
    container.innerHTML = ''; 
    let resolution = document.getElementById("size").value;
    if(parseInt(resolution) > 100 || parseInt(resolution) < 1){
        return reminder()
    }
    makeGrid(resolution);
    
}

//when mouses hovers over pixels changes the color.
addEventListener('mouseover', (e) => {
    if(e.target.matches(".pixel")) {
        let darkenPixel = getComputedStyle(e.target).backgroundColor.replace(/[^\d,]/g, '').split(',');
        for(let i = 0; i < 2; i++){
            darkenPixel[i] = parseInt(darkenPixel[i]) - 20;
        }
        console.log(`rgb(${darkenPixel[0]}, ${darkenPixel[1]}, ${darkenPixel[2]})`);
        e.target.style.backgroundColor = `rgb(${darkenPixel[0]}, ${darkenPixel[1]}, ${darkenPixel[2]})`;
        
    }});




// Creates a grid of divs with a class of pixel with a parent of container
function makeGrid(resolution){

    let heightAndWidth = canvasHeightWidth / parseInt(resolution)
    let square = parseInt(resolution) * parseInt(resolution);
    for(let i = 0; i < square; i++){
        let p = document.createElement('div')
        p.className = "pixel"
        p.style.width = heightAndWidth.toString() + "px"
        p.style.height = heightAndWidth.toString() + "px"
        p.style.backgroundColor = `rgb(${colorPixel[0]}, ${colorPixel[1]}, ${colorPixel[2]})`
        container.appendChild(p);
        
    }

}

// Reminds users of limitations
function reminder(){
    let remind = document.createTextNode('canvas resolution can only be between 1 to 100');
    
    foot.appendChild(remind)
}


