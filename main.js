
var config= {
  type: Phaser.AUTO,
  width: 800,
  height:800,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },

  },

  scene: [Stage1],

};
var game = new Phaser.Game(config);
