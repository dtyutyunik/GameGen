var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 760,
    desiredFps: 200,
    physics: {
       default: 'arcade',
       arcade: {
           gravity: { x: -50 },
           // debug: true,

       },
     },

    scene: {
        preload: preload,
        create: create,
        update: update
    },
    camera: true
};

var game = new Phaser.Game(config);
let old,old2,player,cam,walkRight,walkLeft,sprite,animCloud;
var timer;
var winner=0;
var timerFinish = 60;

function random(speed){
  var r= Math.floor(Math.random() * speed+3) *50;
  return r;

}



function preload(){

  this.load.image('player', 'assets/OldMan_Side_Right.gif');
  this.load.image('red', 'assets/red.gif');
  this.load.image('green', 'assets/green.gif');
  this.load.image('background', 'assets/[Wrath] Street destroyed.png');
  this.load.spritesheet('right', 'assets/right.png', { frameWidth: 400, frameHeight: 400 });
  this.load.spritesheet('toxic', 'assets/cloud.png', { frameWidth: 400, frameHeight: 400 });

}


function ouch(a, obj){
  obj.destroy();
// console.log('pp', player.body.gravity.x);

    player.body.gravity.x=50;



let num=Math.floor(Math.random() * 2);
if(num===0){
  this.cameras.main.flash(1000);
}else{
  this.cameras.main.shake(500);
}



}


function create(){


  this.cameras.main.setBounds(0, 0, 2200, 655);
  this.physics.world.setBounds(0, 120, 1600, 560);

  pic = this.add.image(0, 0, 'background').setOrigin(0, 0);
  pic2=this.add.image(1200, 400, 'background');


  this.cameras.main.setViewport(0, 0, 1400, 900);



  let gravity=game.config.physics.arcade.gravity;



  cam=this.cameras.main;


  var walkingConfig = {
       key: 'walkRight',
       frames: this.anims.generateFrameNumbers('right'),
       frameRate: 20,
       yoyo: true,
       repeat: 0
   };


     var toxicConfig = {
          key: 'cloud',
          frames: this.anims.generateFrameNumbers('toxic'),
          frameRate: 14,
          yoyo: true,
          repeat: -1
      };


anim = this.anims.create(walkingConfig);
animCloud = this.anims.create(toxicConfig);

player = this.physics.add.sprite(0, 142, 'right');

   player.anims.load('walkRight');


   player.displayWidth=110;
   player.body.setSize(200, 200, 50, 50);
   player.scaleY=player.scaleX;
   player.body.offset.x+=130;
   player.body.offset.y+=10;
   player.body.gravity.x=50;
   player.body.gravity.x=50;



  game.canvas.offsetWidth=1600;
  game.canvas.clientWidth=2000;

      player.setCollideWorldBounds(true);

      this.cameras.main.startFollow(player, true);
      this.cameras.main.followOffset.set(-150, 0);
// timer();

}
function win(){
  // winner++;
  cam.flash(5000);
  // if(winner=1){
    // window.alert('you got to the end');

  // }
  // winner++;


}


function update(delta){

let frequency=Math.floor(delta)
// console.log(frequency%120);
// timeRender()


//
// if(frequency%60==0){
//
// }
  if(frequency%120>=110){
    // old2=this.physics.add.sprite(850, random(11), 'cloud');
    // old=this.physics.add.sprite(850, random(11), 'green');
    old2=this.physics.add.sprite(1580, random(11), 'cloud');

    old2.anims.load('cloud');
    old2.anims.play('walk',true)
   //  // console.log(frequency%60);
   // // old2=this.physics.add.sprite(850, random(11), 'red');
   // // old=this.physics.add.sprite(1580, random(11), 'green');
   //
   //  // old.displayWidth=50;
   //  // old.scaleY=old.scaleX;
    old2.displayWidth=80;
    old2.scaleY=old2.scaleX;

  }

  //  if(frequency%60<=0){
  //    // console.log(frequency);
  //   old2=this.physics.add.sprite(850, random(11), 'red');
  //   old=this.physics.add.sprite(1580, random(11), 'green');
  //   old.displayWidth=50;
  //   old.scaleY=old.scaleX;
  //   old2.displayWidth=50;
  //   old2.scaleY=old2.scaleX;
  // }



this.physics.add.collider(player, old2);

this.physics.add.overlap(player, old2, ouch, null, this);

if(player.x>=1560){
  // window.alert('you got to the end')
  win();
}
 let cursors = this.input.keyboard.createCursorKeys();

      if(cursors.up.isDown){player.y-=3;

        player.anims.play('walk',true);}
      if(cursors.down.isDown){player.y+=3;

        player.anims.play('walk',true)}
      if(cursors.left.isDown){player.x-=3;

        player.anims.play('walk',true)}
      if(cursors.right.isDown){
        player.x+=3;

        player.anims.play('walk',true);}


}


// function timer() {
//   timer = this.time.create(false); //Create our Timer.
//   timer.loop(999, updateTimer, this); //Set a TimerEvent to occur every second
//   timer.start(); //Start the timer running - this is important!  It does not start automatically.
// }
//
// function updateTimer(){
//   timerFinish--
// }

// function timeRender() {
//   // this.debug.text('Energy: ' + timerFinish, 32, 32);
// }
