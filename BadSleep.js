// Initialize the Phaser Game object and set default game window size
const game = new Phaser.Game(900, 700, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update })

// Declare shared variables at the top so all methods can access them
let surfaces
let cursors
let player

function preload () {
  // Load & Define our game assets
  game.load.image('background', 'backgroundPH.png')
  game.load.image('wall', 'surface1PH.png')
  game.load.spritesheet('character', 'characterPH.png', 32, 32) //32 refers to the character sprite being used I guess.  When I type in 0 the whole sprite sheet appears.
}

function create () {
    //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE)

    //  A simple background for our game
  game.add.sprite(0, 0, 'background')

    //  The surfaces group contains the wall and the 2 ledges we can jump on
  surfaces = game.add.group()

    //  We will enable physics for any object that is created in this group
  surfaces.enableBody = true

    // Here we create the wall.
  let wall = surfaces.create(0, game.world.height - 64, 'wall')

    //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
  wall.scale.setTo(2, 2)

    //  This stops it from falling away when you jump on it
  wall.body.immovable = true

    //  Now let's create two ledges
  let ledge = surfaces.create(400, 450, 'wall')
  ledge.body.immovable = true

  ledge = surfaces.create(-75, 350, 'wall')
  ledge.body.immovable = true

    // The player and its settings
  player = game.add.sprite(32, game.world.height - 150, 'character')

    //  We need to enable physics on the player
  game.physics.arcade.enable(player)

  player.body.collideWorldBounds = true

    //  Our two animations, walking left and right.
  player.animations.add('left', [0, 1], 10, true)
  player.animations.add('right', [2, 3], 10, true)

    //  And bootstrap our controls
  cursors = game.input.keyboard.createCursorKeys()
}

function update () {
    //  We want the player to stop when not moving
  player.body.velocity.x = 0
  player.body.velocity.y = 0

    //  Setup collisions for the player, diamonds, and our surfaces
  game.physics.arcade.collide(player, surfaces)

    // Configure the controls!
  if (cursors.left.isDown) {
    player.body.velocity.x = -150
    player.animations.play('left')

  } else if (cursors.right.isDown) {
    player.body.velocity.x = 150
    player.animations.play('right')

  } else if (cursors.up.isDown) {
    player.body.velocity.y = -150

  } else if (cursors.down.isDown) {
    player.body.velocity.y = 150

  } else {
    // If no movement keys are pressed, stop the player
    player.animations.stop()
  }
}
