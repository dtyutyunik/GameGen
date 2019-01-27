// Initialize the Phaser Game object and set default game window size
const game = new Phaser.Game(800, 800, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
})

//Declare shared variables at the top so all methods can access them
let surfaces
let floor
let cursors
let player
let stop1
let stop2
let stop3
let stop4
let stop5
let stop6
let stop7
var timer
var timerFinish = 60
var wallText0
var wallText1
var wallText2
var wallText3
var wallText4
var wallText5
//TO FINISH //let failText

function preload () {
  //Load & Define our game assets.
  game.load.image('background', '[Sloth] Bedroom Destoryed.png')
  game.load.image('floor', '[Sloth] floor.png')
  game.load.image('block', 'surface2PH.png')
  game.load.image('exit', 'doorPH.png')
  game.load.spritesheet('rightWalk', 'right.png', 400, 400)
}

//

function create () {
  game.physics.startSystem(Phaser.Physics.ARCADE) //We're going to be using physics, so enable the Arcade Physics system.


  rightAnimation = this.game.add.sprite(0, 0, 'rightWalk')
  rightAnimation.frame = 0
  rightAnimation.animations.add('left', [0, 1, 2, 3, 4, 5, 6], 10, true) //10 = frames per second


  game.add.sprite(0, 0, 'background') //A simple background for our game.

  surfaces = game.add.group() //The surfaces group contains the floor and walls.
  surfaces.enableBody = true  //We will enable physics for any object that is created in this group.
  surface()                   //Spawn the surface objects.

  floor = game.add.group()
  floor.enableBody = true
  let floorObj = floor.create(0, game.world.height - 318, 'floor') //Here we create the floor.
  floorObj.scale.setTo(3, 1) //Scale it to fit for the game (the original sprite is 400x32 in size).
  floorObj.body.immovable = true //This stops it from falling away when you jump on it.

  door = game.add.group()
  door.enableBody = true
  let exitDoor = door.create(784, game.world.height - 400, 'exit')
  exitDoor.scale.setTo(.5, .25) //Scale it to fit for the game (the original sprite is 400x32 in size).
  exitDoor.body.immovable = true //This stops it from falling away when you jump on it.

  timer()

  cursors = game.input.keyboard.createCursorKeys() //And bootstrap our controls

  m = game.input.keyboard; console.log(m);
  y = game.input.keyboard; console.log(y);
  p = game.input.keyboard; console.log(p);
  x = game.input.keyboard; console.log(x);
  b = game.input.keyboard; console.log(b);

  wallText0 = this.add.text(45, 200, '', {font: '36px Arial', fill: '#708090	'})
  wallText0.setText('Press & hold forward.  Do not touch the walls.')

  wallText1 = this.add.text(88, 373, '', {font: '24px Arial', fill: '#708090	'})
  wallText1.setText('M')

  wallText2 = this.add.text(200, 373, '', {font: '24px Arial', fill: '#708090	'})
  wallText2.setText('Y')

  wallText3 = this.add.text(330, 373, '', {font: '24px Arial', fill: '#708090	'})
  wallText3.setText('P')

  wallText4 = this.add.text(499, 373, '', {font: '24px Arial', fill: '#708090	'})
  wallText4.setText('X')

  wallText5 = this.add.text(578, 373, '', {font: '24px Arial', fill: '#708090	'})
  wallText5.setText('B')

  /* TO FINISH
  /// failText = this.add.text(400, 400, '', {font: '36px Arial', fill: '#708090	'})
  wallText5.setText('You fail.ff0000') /// */
}



function update () {
  // TO FINISH //var move = false

  //player.body.velocity.x = -5  //We want the player to be drawn back to bed when not moving.
  //game.physics.arcade.collide(player, surfaces) //Setup collisions for the player, and our surfaces.
  this.game.physics.arcade.collide(player, surfaces)

  /*TO FINISH
  if (this.game.physics.arcade.collide(player, door)) {
  }
  this.game.physics.arcade.collide(player, surfaces, updatePlayerPosition(), null, this)
  //this.position = new Phaser.Point(sprite.x, sprite.y)*/

  timeRender()

  if (timerFinish == 0) {
    console.log("You failed")
  }

/* TO FINISH
  this.physics.add.collider(player, stop1)
  this.physics.add.collider(player, stop2)
  this.physics.add.collider(player, stop3)
  this.physics.add.collider(player, stop4)
  this.physics.add.collider(player, stop5)
  this.physics.add.collider(player, stop6)*/

  //Configure the controls.
  if (cursors.left.isDown) {
    player.body.velocity.x = 0
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 30
    //player.animations.play('walkRight')
    rightAnimation.animations.play('right')
  } else {
    rightAnimation.animations.stop('right') //If no movement keys are pressed, stop the player.
  }

  rightAnimation.frame = 0

  if (m.isDown(77)) {
    stop1.kill()
    console.log("M is pressed.")
  } else {
    stop1.revive()
  }

  if (y.isDown(89) && m.isDown(77)) {
    stop2.kill()
    console.log("Y is pressed.")
  } else {
    stop2.revive()
  }

  if (p.isDown(80) && y.isDown(89) && m.isDown(77)) {
    stop3.kill()
    console.log("P is pressed.")
  } else {
    stop3.revive()
  }

  if (x.isDown(88) && p.isDown(80) && y.isDown(89) && m.isDown(77)) {
    stop4.kill()
    console.log("X is pressed.")
  } else {
    stop4.revive()
  }

  if (b.isDown(66) && x.isDown(88) && p.isDown(80) && y.isDown(89) && m.isDown(77)) {
    stop5.kill()
    console.log("B is pressed.")
  } else {
    stop5.revive()
  }
}

/* TO FINISH
function playerCharacter(){
  rightAnimation = this.game.add.sprite(0, 0, 'rightWalk')
  rightAnimation.frame = 0

  rightAnimation.animations.add('left', [0, 1, 2, 3, 4, 5, 6], 10, true) //10 = frames per second
}*/




function surface () {
  stop1 = surfaces.create(90, game.world.height - 400, 'block')
  stop1.scale.setTo(.5, .25)
  stop1.body.immovable = true

  stop2 = surfaces.create(198, game.world.height - 400, 'block')
  stop2.scale.setTo(.5, .25)
  stop2.body.immovable = true

  stop3 = surfaces.create(328, game.world.height - 400, 'block')
  stop3.scale.setTo(.5, .25)
  stop3.body.immovable = true

  stop4 = surfaces.create(498, game.world.height - 400, 'block')
  stop4.scale.setTo(.5, .25)
  stop4.body.immovable = true

  stop5 = surfaces.create(578, game.world.height - 400, 'block')
  stop5.scale.setTo(.5, .25)
  stop5.body.immovable = true
}



function timer() {
  timer = game.time.create(false); //Create our Timer.
  timer.loop(999, updateTimer, this); //Set a TimerEvent to occur every second
  timer.start(); //Start the timer running - this is important!  It does not start automatically.
}

function updateTimer(){
  timerFinish--
}

function timeRender() {
  game.debug.text('Energy: ' + timerFinish, 32, 32);
}
/* TO FINISH
function updatePlayerPosition(move) {
  if (move == true) {
    player.x = 32
  }
}*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ***Text & timer

// Coliding with the last wall wins the game.
// I need to import the art.
// I need to adjust the walking speed and cloud distance from the player depending on the room size.
// I need to position the prompts on the screen & keep them there as the player moves.
// I need text telling the player what they are doing.
// I need a boolean ported to the main stage indicating a fail or win state.

// Wait and see what the imported asssets are like.  Adjust accordingly.

// I want shaky cam, and for it to increase as they go on.
// I want to zoom in on the player as the y go on.
// I want the player to have to press a button on the bed.
// I want a peaceful state where the player walks to the bed.
  // If I can't do this then I can add a bed rustling sound effect and text explaining the situation.



/* SCRAP
//v = game.input.keyboard; console.log(v);
//k = game.input.keyboard; console.log(k);



//wallText6 = this.add.text(658, 373, '', {font: '24px Arial', fill: '#708090	'})
//wallText6.setText('V')

//wallText6 = this.add.text(658, 373, '', {font: '24px Arial', fill: '#708090	'})
//wallText6.setText('K')



/*stop6 = surfaces.create(658, game.world.height - 400, 'block')
stop6.scale.setTo(.5, .25)
stop6.body.immovable = true

stop7 = surfaces.create(783, game.world.height - 400, 'block')
stop7.scale.setTo(.5, .25)
stop7.body.immovable = true*/



/*if (v.isDown(86) && b.isDown(66) && x.isDown(88) && p.isDown(80) && y.isDown(89) && m.isDown(77)) {
  stop6.kill()
  console.log("V is pressed.")
} else {
  stop6.revive()
}*/

/*if (k.isDown(75) && v.isDown(86) && b.isDown(66) && x.isDown(88) && p.isDown(80) && y.isDown(89) && m.isDown(77)) {
  stop7.kill()
  console.log("K is pressed")
} else {
  stop7.revive()
}*/
