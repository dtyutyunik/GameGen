var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
       default: 'arcade',
       arcade: {
           gravity: { x: -50 },
           debug: true
       },
     },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
let old,old2,player;

function random(speed){
  var r= Math.floor(Math.random() * speed) *50;
  return r;

}


function preload(){

  this.load.image('player', 'assets/OldMan_Side_Right.gif');
  this.load.image('red', 'assets/red.gif');
  this.load.image('green', 'assets/green.gif');


}

function ouch(player, obj){
  obj.destroy();
  // star.disableBody(true,true);
  game.camera();
this.camera.shake(0.01, 100, true, Phaser.Camera.SHAKE_BOTH, true);
  // this.camera.shake(0.05, 500);
  // console.log('hit');
}

function shake() {

    //  You can set your own intensity and duration


}

function create(){
  // console.log(game.config.physics.gravity.x);
  let gravity=game.config.physics.arcade.gravity;



  player = this.physics.add.sprite(100, 100, 'player');

  player.displayWidth=110;
  player.body.setSize(200, 200, 50, 50);

  player.scaleY=player.scaleX;
  // player.displayHeight=150-player.scaleX*12;
  // player.scaleY=player.scaleX;

  player.body.offset.x+=130;
  player.body.offset.y+=10;




  // game.config.camera.follow(player);

  for(let i=0;i<20;i++){
    old2 = this.physics.add.sprite(850, random(10), 'red');
    // old2.displayWidth=50;
    // old2.scaleY=old2.scaleX;
    // old = this.physics.add.sprite(850, random(10), 'green');
    old2.body.gravity.x=-random(2);
  }



  // this.physics.add.collider(player, old2);


  //player is not effected by gravity by reversing its gravity
  player.body.gravity.x=50;
  //declare its own set of gavity;
  // old2.body.gravity.x=-150;


  // old2.setCollideWorldBounds(true);
  // old.setCollideWorldBounds(true);
  player.setCollideWorldBounds(true);



  // console.log(old)

console.log(game.config.width);
console.log(player.x)


      this.key_A=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.key_W=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.key_S=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.key_D=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);






}
function update(delta){


  if(Math.floor(delta/100)%20===0){
    old=this.physics.add.sprite(850, random(13), 'green');
    old.displayWidth=50;
    old.scaleY=old.scaleX;
  }

  if(Math.floor(delta/100)%30===0){
    old2=this.physics.add.sprite(850, random(13), 'red');
  }

  // console.log('y is ', player.y);
  // console.log('width is ', player.offsetY(idle));
  // console.log('x is ', player.x);

this.physics.add.collider(player, old);

if(this.physics.add.collider(player, old)===true){
  console.log('hit');
  // .moveBy(50,50);
}

this.physics.add.overlap(player, old, ouch, null, this);

if(player.x>=745){
  console.log('you got to the end')
}

        if(this.key_W.isDown){player.y-=3;}
       if(this.key_S.isDown){player.y+=3;}
       if(this.key_A.isDown){player.x-=3;}
       if(this.key_D.isDown){player.x+=3;}



}
