var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 760,
    desiredFps: 200,
    physics: {
       default: 'arcade',
       arcade: {
           gravity: { x: -50 },
           debug: true,

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
let old,old2,player,cam;

function random(speed){
  var r= Math.floor(Math.random() * speed+3) *50;
  return r;

}



function preload(){

  this.load.image('player', 'assets/OldMan_Side_Right.gif');
  this.load.image('red', 'assets/red.gif');
  this.load.image('green', 'assets/green.gif');
  this.load.image('background', 'assets/[Wrath] Street destroyed.png');

}


function ouch(a, obj){
  obj.destroy();
console.log('pp', player.body.gravity.x);
  // if(player.body.gravity<=0){
    player.body.gravity.x=50;
  // }


let num=Math.floor(Math.random() * 2);
if(num===0){
  // this.cameras.main.flash(1000);
}else{
  // this.cameras.main.shake(500);
}



}


function create(){


  this.cameras.main.setBounds(0, 0, 2200, 655);
  this.physics.world.setBounds(0, 120, 1600, 560);


  // pic = this.add.image(0, -120, 'background').setOrigin(0, 0);
  pic = this.add.image(0, 0, 'background').setOrigin(0, 0);
  pic2=this.add.image(1200, 400, 'background');
  // console.log(pic.height);
  console.log(pic);
  console.log(pic2);
  this.cameras.main.setViewport(0, 0, 1400, 900);
  // this.add.image(, 760, 'background');


  let gravity=game.config.physics.arcade.gravity;

  // this.cameras.main.setSize(game.config.width,game.config.height);

  cam=this.cameras.main;
  // cam.duration=300;
  console.log(cam.shakeEffect);

  // this.world.setBounds(0, 0, 1920, 1200);

  player = this.physics.add.sprite(0, 142, 'player');

  player.displayWidth=110;
  player.body.setSize(200, 200, 50, 50);
  player.scaleY=player.scaleX;
  player.body.offset.x+=130;
  player.body.offset.y+=10;
  //player is not effected by gravity by reversing its gravity
  player.body.gravity.x=50;

  //y--142 top
  //y--655 bottom
  //player.x -->1582
  //x--31.5 left


// console.log(this.player.onWorldBounds);




  // for(let i=0;i<20;i++){
  //   old2 = this.physics.add.sprite(850, random(10), 'red');
  //   // old2.displayWidth=50;
  //   // old2.scaleY=old2.scaleX;
  //
  //   old2.body.gravity.x=-random(2);
  // }
  game.canvas.offsetWidth=1600;
  console.log(game)

  // this.game.config.world.setBounds(0, 0, 3500, this.game.height);

  // this.physics.add.collider(player, old2);



  //declare its own set of gavity;
  // old2.body.gravity.x=-150;
  game.canvas.clientWidth=2000;
  console.log(player.getBounds());
  console.log(player.Container);
  // player.
  // old2.setCollideWorldBounds(true);
  // old.setCollideWorldBounds(true);

  // need to udpate to move within this
  player.setCollideWorldBounds(true);

  console.log()
  // Phaser.Physics.Arcade.World.setBounds(0, 0, 1500, 800, true,true,true,true);
// console.log(player.setCollideWorldBounds(true));

  // console.log(old)

// console.log(game.config.width);
// console.log(player.x)


      this.key_A=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.key_W=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.key_S=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.key_D=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

// this.cameras.main.startFollow(player);
// this.cameras.fade(0x000000, 4000);


// this.cameras.main.setBounds(-200,0,game.config.width+200,game.config.height);
// this.cameras.main.setScroll(player.x);
// this.cameras.main.startFollow(player);
// this.cameras.main.startFollow(player, 0.7, 0.7);

 // this.cameras.main.setBounds(0, 0, 1200, 800);
  this.cameras.main.startFollow(player, true);
  this.cameras.main.followOffset.set(-200, 0);


}
function update(delta){

let frequency=Math.floor(delta)

  if(frequency%60==10){

    old=this.physics.add.sprite(850, random(11), 'green');
    old2=this.physics.add.sprite(1580, random(11), 'red');
    // console.log(frequency);
   // old2=this.physics.add.sprite(850, random(11), 'red');
   // old=this.physics.add.sprite(1580, random(11), 'green');

    old.displayWidth=50;
    old.scaleY=old.scaleX;
    old2.displayWidth=50;
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



this.physics.add.collider(player, old);

this.physics.add.overlap(player, old, ouch, null, this);

if(player.x>=1560){
  console.log('you got to the end')
}

      if(this.key_W.isDown){
        player.y-=3;
       }
      if(this.key_S.isDown){player.y+=3;}
      if(this.key_A.isDown){player.x-=3;}
      if(this.key_D.isDown){player.x+=3;}

}
