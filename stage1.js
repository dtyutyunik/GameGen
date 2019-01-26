class Stage1 extends Phaser.Scene{
  constructor(){
    super({key:"Stage1"});
  }
    preload(){
      this.load.spritesheet('old', 'assets/oldman.gif', {
        frameHeight: 30,
        frameWidth: 32
      });

      this.load.image('older', 'assets/oldman.gif',{
        height:30,
        width:30
      });
    }

    create(){
     this.add.sprite(300,300,"old");

     this.add.image(500,500, 'older');

      this.key_A=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
      this.key_W=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
      this.key_S=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
      this.key_D=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);


    }
    update(delta){
      if(this.key_W.isDown){this.image.y--;}
      if(this.key_S.isDown){this.image.y++;}
      if(this.key_A.isDown){this.image.x--;}
      if(this.key_D.isDown){this.image.x++;}
    }



}
