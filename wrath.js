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



function preload(){

  this.load.image('cat', 'cat.png');
  this.load.image('old', 'assets/red.gif');


}

function random(speed){
  var r= Math.floor(Math.random() * speed) *50;
  console.log(r);
  return r;

}

function create(){
  // console.log(game.config.physics.gravity.x);
  let gravity=game.config.physics.arcade.gravity;
  console.log(game.config.physics.arcade.gravity);



  cursors = this.input.keyboard.createCursorKeys();

  player = this.physics.add.sprite(100, 100, 'cat');




  for(let i=0;i<20;i++){
    old2 = this.physics.add.sprite(850, random(10), 'old');
    old2.body.gravity.x=-random(3);
  }

  old = this.physics.add.sprite(850, random(), 'old');
  // old2 = this.physics.add.sprite(850, random(), 'old');
  // old2 = this.physics.add.sprite(850, random(), 'old');
  // console.log(old2);
   // old2.scale.scaleX(rand, rand);




  //player is not effected by gravity by reversing its gravity
  player.body.gravity.x=50;
  //declare its own set of gavity;
  // old2.body.gravity.x=-150;


  old2.setCollideWorldBounds(true);
  old.setCollideWorldBounds(true);




  // old.setCollideWorldBounds(true);



      this.key_A=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.key_W=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.key_S=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.key_D=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

}

function update(delta){


        if(this.key_W.isDown){player.y--;}
       if(this.key_S.isDown){player.y++;}
       if(this.key_A.isDown){player.x--;}
       if(this.key_D.isDown){player.x++;}



}
