var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
       default: 'arcade',
       arcade: {
           gravity: { x: -50 },
           debug: false
       },
     },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
let old,old2,player;

function random(speed){
  var r= Math.floor(Math.random() * speed) *50;
  return r;

}

function createGreen(){

  let old=this.physics.add.sprite(850, random(13), 'green');
  return old;
}

function preload(){

  this.load.image('cat', 'assets/OldMan_Side_Right.gif');
  this.load.image('red', 'assets/red.gif');
  this.load.image('green', 'assets/green.gif');


}



function create(){
  // console.log(game.config.physics.gravity.x);
  let gravity=game.config.physics.arcade.gravity;

  player = this.physics.add.sprite(100, 100, 'cat');

  player.displayWidth=120;
  player.scaleY=player.scaleX;






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


  old2.setCollideWorldBounds(true);
  // old.setCollideWorldBounds(true);
  player.setCollideWorldBounds(true);


  this.physics.add.collider(player, old);
  console.log(old)

  // old.setCollideWorldBounds(true);



      this.key_A=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.key_W=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.key_S=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.key_D=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


}
function update(delta){

  // console.log(Math.floor(delta/200));
  if(Math.floor(delta/100)%20===0){
    // old=this.physics.add.sprite(850, random(13), 'green');
    // this.createGreen();
  }

  // console.log(timestamp);
  // console.log(elasped);
// this.physics.add.sprite(850, random(12), 'green');

        if(this.key_W.isDown){player.y-=4;}
       if(this.key_S.isDown){player.y+=4;}
       if(this.key_A.isDown){player.x-=4;}
       if(this.key_D.isDown){player.x+=4;}



}
