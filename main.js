var config= {
  type: Phaser.AUTO,
  width: 800,
  height:800,
  color: 'red',
  physics: {
    default: 'arcade',
    arcade: {

      gravity: {
        y: 200
      },
      debug: true,
    }
  },
  scene: [Stage1]
};
var game = new Phaser.Game(config);
