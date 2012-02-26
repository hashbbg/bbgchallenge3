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
                var posX = j * REACH.config.cell.width,
                    posY = i * REACH.config.cell.height - i * 88,
                    max = 3, min = 0,
                    cellType = Math.floor(Math.random() * (max - min + 1)) + min;

                this.cells[i][j] = Crafty.e('Cell, cell-' + cellType.toString()).attr({x: posX, y: posY, w: REACH.config.cell.width, h: REACH.config.cell.height});
            }
        }
        return this;
    }
});
