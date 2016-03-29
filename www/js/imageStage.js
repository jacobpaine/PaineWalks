//Create the renderer
var stage = new PIXI.Container(), 
	renderer = PIXI.autoDetectRenderer(225, 170);

//Add the canvas to the HTML document
document.body.appendChild(renderer.view);


//Use Pixi's built-in `loader` object to load an image
PIXI.loader
  .add("assets/img/lich.gif")
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the sprite from the texture
  var test = new PIXI.Sprite(
    PIXI.loader.resources["assets/img/lich.gif"].texture
  );

	test.position.set(0, 5)
	test.scale.x = 2;
	test.scale.y = 2;


  //Add the sprite to the stage
  stage.addChild(test);

renderer.autoResize = true;
// renderer.resize(window.innerWidth, window.innerHeight);
renderer.view.style.border = "1px solid red";
renderer.backgroundColor = 0x061639;
//Tell the `renderer` to `render` the `stage`
renderer.render(stage);
}

