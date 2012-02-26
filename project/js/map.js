Crafty.c('Map', {
    width: 0,
    height: 0,
    cells: [],

    map: function(width, height) {
        var i, j;

        this.width = width;
        this.heigth = height;

        for (i = 0; i < height; i++) {
            this.cells[i] = [];

            for (j = 0; j < width; j++) {
                var posx = j * REACH.config.cell.width,
                    posy = i * REACH.config.cell.height - i * 88;

                this.cells[i][j] = Crafty.e('2D, DOM, cell').attr({x: posx, y: posy, w: REACH.config.cell.width, h: REACH.config.cell.height});
            }
        }
    }
});
