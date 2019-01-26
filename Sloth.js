// Initialize the Phaser Game object and set default game window size
const game = new Phaser.Game(900, 700, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update })

//Declare shared variables at the top so all methods can access them
var k

let surfaces
let cursors
let player

function preload () {
  //Load & Define our game assets.
  //game.load.image('background', 'backgroundPH.png')
  game.load.image('floor', 'surface1PH.png')
  game.load.image('block', 'surface2PH.png')
  game.load.spritesheet('character', 'characterPH.png', 32, 32) //32 refers to the character sprite being used I guess.  When I type in 0 the whole sprite sheet appears.
}



function create () {
  //We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE)

  //A simple background for our game
  //game.add.sprite(0, 0, 'background')

  //The surfaces group contains the floor and the 2 ledges we can jump on
  surfaces = game.add.group()

  //We will enable physics for any object that is created in this group
  surfaces.enableBody = true

  //Here we create the floor.
  let floor = surfaces.create(0, game.world.height - 318, 'floor')

  let stop1 = surfaces.create(110, game.world.height - 400, 'block')
  let stop2 = surfaces.create(230, game.world.height - 400, 'block')
  let stop3 = surfaces.create(400, game.world.height - 400, 'block')
  let stop4 = surfaces.create(530, game.world.height - 400, 'block')
  let stop5 = surfaces.create(610, game.world.height - 400, 'block')
  let stop6 = surfaces.create(790, game.world.height - 400, 'block')
  let stop7 = surfaces.create(885, game.world.height - 400, 'block')

  //Scale it to fit the width of the game (the original sprite is 400x32 in size)
  floor.scale.setTo(3, 1)
  stop1.scale.setTo(.5, .25)
  stop2.scale.setTo(.5, .25)
  stop3.scale.setTo(.5, .25)
  stop4.scale.setTo(.5, .25)
  stop5.scale.setTo(.5, .25)
  stop6.scale.setTo(.5, .25)
  stop7.scale.setTo(.5, .25)

  //This stops it from falling away when you jump on it
  floor.body.immovable = true
  stop1.body.immovable = true
  stop2.body.immovable = true
  stop3.body.immovable = true
  stop4.body.immovable = true
  stop5.body.immovable = true
  stop6.body.immovable = true
  stop7.body.immovable = true

  //The player and its settings
  player = game.add.sprite(32, game.world.height - 350, 'character') //32 refers to the sprite.

  //We need to enable physics on the player
  game.physics.arcade.enable(player)

  player.body.collideWorldBounds = true

  //Our two animations, walking left and right.
  //player.animations.add('left', [0, 1], 10, true)
  player.animations.add('right', [2, 3], 10, true)

  //And bootstrap our controls
  cursors = game.input.keyboard.createCursorKeys()

  m = game.input.keyboard
  y = game.input.keyboard
  p = game.input.keyboard
  x = game.input.keyboard
  b = game.input.keyboard
  v = game.input.keyboard
  k = game.input.keyboard

  console.log(m)
  console.log(y)
  console.log(p)
  console.log(x)
  console.log(b)
  console.log(v)
  console.log(k)
}



function update () {
  //We want the player to stop when not moving.
  player.body.velocity.x = -5

  //Setup collisions for the player, diamonds, and our surfaces.
  game.physics.arcade.collide(player, surfaces)

  //Configure the controls.
  if (cursors.left.isDown) {
    player.body.velocity.x = 0
  } else if (cursors.right.isDown) {
    player.body.velocity.x = 20
    player.animations.play('right')
  } else {
    //If no movement keys are pressed, stop the player
    player.animations.stop()
  }
 //console.log(k)

 if (m.isDown(77)) {
   console.log("M is pressed.")
 }
 if (y.isDown(89)) {
   console.log("Y is pressed.")
 }
 if (p.isDown(80)) {
   console.log("P is pressed.")
 }
 if (x.isDown(88)) {
   console.log("X is pressed.")
 }
 if (b.isDown(66)) {
   console.log("B is pressed.")
 }
 if (v.isDown(86)) {
   console.log("V is pressed.")
 }
 if (k.isDown(75)) {
   console.log("K is pressed")
 }
}
