$(document).ready(function() {
    var stageHeight = REACH.config.height * REACH.config.cell.height,
        stageWidth = REACH.config.width * REACH.config.cell.width;

    Crafty.init(stageWidth, stageHeight);

    Crafty.scene('loading', function() {
        Crafty.background('#fff');
        Crafty.e('2D, DOM, Text').attr({ w: 100, h: 20, x: 150, y: 120 })
                .text('Loading')
                .css({ 'text-align': 'center' });
    });

    Crafty.scene('game', function() {
        Crafty.sprite(1, 'img/grass.png', {
            'cell-0': [0, 0]
        });
        Crafty.sprite(1, 'img/stone.png', {
            'cell-1': [0, 0]
        });
        Crafty.sprite(1, 'img/wood.png', {
            'cell-2': [0, 0]
        });
        Crafty.sprite(1, 'img/dirt.png', {
            'cell-3': [0, 0]
        });

        var map = Crafty.e('Map').map(REACH.config.width, REACH.config.height);
    });

    Crafty.scene('game');
});
