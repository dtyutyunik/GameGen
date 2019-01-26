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

      this.load.image('sheet1','assets/test1.png',{
        height:5,
        width:5
      });


      this.load.image('sheet2','assets/test2.png',{
        height:5,
        width:5
      });


      this.load.image('sheet3','assets/test3.png',{
        height:5,
        width:5
      });

      this.load.image('Carold', 'assets/OldMan_Front.gif',{
            height:50,
            width:50
      });


    }

    create(){
     this.add.sprite(300,300,"old");
        //images to move around
     var sheet1 = this.add.image(0,0,'sheet1').setInteractive();

     var sheet2 = this.add.image(400,0,'sheet2').setInteractive();

     var sheet3 = this.add.image(800,0,'sheet3').setInteractive();

     var oldman = this.add.image(400,400, 'Carold');

     for (var i = 0; i < 10; i++) {
            //get the width and height of the
            //game from the config file
            var h = game.config.height;
            var w = game.config.width;

            //create some random coordinates
            var x = Phaser.Math.Between(0, w);
            var y = Phaser.Math.Between(0, h);

            //create a random width
            var width = Phaser.Math.Between(50, 200);
            //make a oldman sprite and place it
            //at the random place
            var oldman = this.add.sprite(x, y, "Carold");

            //set the width of the sprite
            oldman.displayWidth = width;
            //scale evenly
            oldman.scaleY = oldman.scaleX;
        }

    //block for sheet1 to have pointer behavior
     sheet1.on('pointerover', function () {

     this.setTint(0x00ff00);

      });

      sheet1.on('pointerout', function () {

        this.clearTint();

    });

    this.input.setDraggable(sheet1);

    // block for sheet2 to have pointer behavior
    sheet2.on('pointerover', function () {

    this.setTint(0x00ff00);

     });

     sheet2.on('pointerout', function () {

       this.clearTint();

   });

   this.input.setDraggable(sheet2);

   //block for sheet3 to have pointer behavior
   sheet3.on('pointerover', function () {

   this.setTint(0x00ff00);

    });

    sheet3.on('pointerout', function () {

      this.clearTint();

  });

  this.input.setDraggable(sheet3);



    this.input.on('dragstart', function (pointer, gameObject) {

        gameObject.setTint(0xff0000);

    });

    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });

    this.input.on('dragend', function (pointer, gameObject) {

        gameObject.clearTint();

    });


    }




}
