


var renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

PIXI.loader
    .add('assets/img/spritesheet.json')
    .load(onAssetsLoaded);

var movie;


function onAssetsLoaded()
{
    // create an array of textures from an image path
    var frames = [];

    for (var i = 0; i < 30; i++) {
        var val = i < 10 ? '0' + i : i;

        // magically works since the spritesheet was loaded with the pixi loader
        frames.push(PIXI.Texture.fromFrame(‘frameID”));
    
    }

    // create a MovieClip (brings back memories from the days of Flash, right ?)
    movie = new PIXI.extras.MovieClip(frames);

    /*
     * A MovieClip inherits all the properties of a PIXI sprite
     * so you can change its position, its anchor, mask it, etc
     */
    movie.position.set(300);

    movie.anchor.set(0.5);
    movie.animationSpeed = 0.5;

    movie.play();

    stage.addChild(movie);

    animate();
}


function animate() {
  // Don't need rotation from example!
    // movie.rotation += 0.01;

    // render the stage container
    renderer.render(stage);

    requestAnimationFrame(animate);
}





// //Create the renderer
// var stage = new PIXI.Container(), 
// 	renderer = PIXI.autoDetectRenderer(225, 170);

// //Add the canvas to the HTML document
// document.body.appendChild(renderer.view);


// // Use Pixi's built-in `loader` object to load an image
// PIXI.loader
//   .add("assets/img/lich.gif")
//   .load(setup);

//This `setup` function will run when the image has loaded
// function setup() {

//   //Create the sprite from the texture
//   var test = new PIXI.Sprite(
//     PIXI.loader.resources["assets/img/lich.gif"].texture
//   );

// 	test.position.set(0, 5)
// 	test.scale.x = 2;
// 	test.scale.y = 2;


//   //Add the sprite to the stage
//   stage.addChild(test);

// renderer.autoResize = true;
// // renderer.resize(window.innerWidth, window.innerHeight);
// renderer.view.style.border = "1px solid red";
// renderer.backgroundColor = 0x061639;
// //Tell the `renderer` to `render` the `stage`
// renderer.render(stage);
// }





// EXAMPLE FROM http://pixijs.github.io/examples/index.html?s=basics&f=spritesheet.js&title=SpriteSheet%20Animation

// var renderer = PIXI.autoDetectRenderer(800, 600);
// document.body.appendChild(renderer.view);

// // create the root of the scene graph
// var stage = new PIXI.Container();

// PIXI.loader
//     .add('_assets/basics/fighter.json')
//     .load(onAssetsLoaded);

// var movie;

// function onAssetsLoaded()
// {
//     // create an array of textures from an image path
//     var frames = [];

//     for (var i = 0; i < 30; i++) {
//         var val = i < 10 ? '0' + i : i;

//         // magically works since the spritesheet was loaded with the pixi loader
//         frames.push(PIXI.Texture.fromFrame('rollSequence00' + val + '.png'));
//     }


//     // create a MovieClip (brings back memories from the days of Flash, right ?)
//     movie = new PIXI.extras.MovieClip(frames);

//     /*
//      * A MovieClip inherits all the properties of a PIXI sprite
//      * so you can change its position, its anchor, mask it, etc
//      */
//     movie.position.set(300);

//     movie.anchor.set(0.5);
//     movie.animationSpeed = 0.5;

//     movie.play();

//     stage.addChild(movie);

//     animate();
// }

// function animate() {
//     movie.rotation += 0.01;

//     // render the stage container
//     renderer.render(stage);

//     requestAnimationFrame(animate);
// }



