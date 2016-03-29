//Create the renderer
var myCanvas = document.getElementById('picture-box');
var renderer = PIXI.autoDetectRenderer(100, 100, {view: myCanvas});
//Add the canvas to the HTML document
document.myCanvas.appendChild(renderer.view);

var blah = document.body.childNodes;
console.log("blah", blah);

// function canvasIt(){
// 	console.log("CanvasIt");
// 	document.appendChild(renderer.view);
// }

function changeColor(newColor) {
	var thing = document.getElementById('thing');
	thing.style.color = newColor;
}

//Create a container object called the `stage`
var stage = new PIXI.Container();
renderer.view.style.border = "1px dashed red";
renderer.backgroundColor = 0x061639;
//Tell the `renderer` to `render` the `stage`
renderer.render(stage);