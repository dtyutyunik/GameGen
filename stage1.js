var sheet1, sheet2,sheet3, oldman;

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
            // height:5,
            // width:5
      });


    }



    create(){
     this.add.sprite(300,300,"old");
        //images to move around
      // sheet1 = this.add.image(0,0,'sheet1').setInteractive();





      // oldman = this.add.image(400,650, 'Carold');
        oldman = this.physics.add.sprite(400,650, 'Carold');
        sheet2 = this.physics.add.sprite(400,40,'sheet2').setInteractive();
        sheet1 = this.physics.add.sprite(80,40,'sheet1').setInteractive();
        sheet3 = this.physics.add.sprite(720,40,'sheet3').setInteractive();

        oldman.displayWidth=400;
        sheet1.displayWidth=250;
        sheet2.displayWidth=250;
        sheet3.displayWidth=250;
        oldman.body.setSize(200, 200, 50, 50);
        sheet1.body.setSize(200, 200, 50, 50);
        sheet2.body.setSize(200, 200, 50, 50);
        sheet3.body.setSize(200, 200, 50, 50);
        sheet1.scaleY=sheet1.scaleX;
        sheet2.scaleY=sheet2.scaleX;
        sheet3.scaleY=sheet3.scaleX;
        oldman.scaleY=oldman.scaleX;

        
sheet1.body.offset.x+=26;
sheet2.body.offset.x+=26;
sheet3.body.offset.x+=26;
sheet1.body.offset.y-=50;
sheet2.body.offset.y-=50;
sheet3.body.offset.y-=50;
        // oldman.body.offset.x+=0;
        // oldman.body.offset.y+=10;





     // oldman.scaleY=oldman.scaleX;

     // for (var i = 0; i < 10; i++) {
     //        //get the width and height of the
     //        //game from the config file
     //        var h = game.config.height;
     //        var w = game.config.width;
     //
     //        //create some random coordinates
     //        var x = Phaser.Math.Between(0, w);
     //        var y = Phaser.Math.Between(0, h);
     //
     //        //create a random width
     //        var width = Phaser.Math.Between(50, 200);
     //        //make a oldman sprite and place it
     //        //at the random place
     //        var oldman = this.add.sprite(x, y, "Carold");
     //
     //        //set the width of the sprite
     //        oldman.displayWidth = width;
     //        //scale evenly
     //        oldman.scaleY = oldman.scaleX;
     //    }

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


  // input drag behavior
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



    sheet1Touch(){
      console.log('toucb 1');
        sheet1.x=80;
        sheet1.y=40;

   }
     sheet2Touch(){
       console.log('touch 2');
       sheet2.x=400;
       sheet2.y=40;
    }
    sheet3Touch(){
      console.log('touch 3');
      sheet3.x=720;
      sheet3.y=40;
   }
    update(){

      this.physics.add.overlap(oldman, sheet1, this.sheet1Touch, null, this);
      this.physics.add.overlap(oldman, sheet2, this.sheet2Touch, null, this);
      this.physics.add.overlap(oldman, sheet3, this.sheet3Touch, null, this);
      //
      // console.log('sheet1 x is ', sheet1.x);
      // console.log('sheet1 y is ', sheet1.y);
      // console.log('oldman x is ', oldman.x);
      // console.log('oldman y is ', oldman.y);
    }





}
