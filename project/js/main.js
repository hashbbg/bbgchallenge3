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

    var displayMap = function(map) {
        var width = REACH.config.width,
            height = REACH.config.height,
            i, j;

        for (i = 0; i < height; i++) {
            for (j = 0; j < width; j++) {
            }
        }
    };

    Crafty.scene('loading');
});
