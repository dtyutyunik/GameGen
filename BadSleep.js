var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
       default: 'arcade',
       arcade: {
           gravity: { y: 300 },
           debug: false
       },
     },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);



function preload(){
  // console.log(game.load);
  this.load.image('cat', 'cat.png');
  // game.load.image('cat', 'cat.png');
console.log('rpre');
}

function create(){
   this.add.image(400, 300, 'cat');
console.log('create');
}

function update(){
// console.log('u');
}
