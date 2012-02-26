Crafty.c('Cell', {
    gridX: 0,
    gridY: 0,

    init: function() {
        this.requires('2D, DOM, Mouse')
            .bind('Click', function() {
                console.log('clicked '+this.gridX+', '+this.gridY);
                if (REACH.accessibleCells[this.gridX][this.gridY] !== null) {
                    console.log('YOUPI');
                }
            })
            .areaMap(new Crafty.polygon(
                [0, REACH.config.cell.offsetTopY],
                [REACH.config.cell.width, REACH.config.cell.offsetTopY],
                [REACH.config.cell.width, REACH.config.cell.height - REACH.config.cell.offsetBottomY],
                [0, REACH.config.cell.height - REACH.config.cell.offsetBottomY]));

        return this;
    },

    cell: function(gridX, gridY) {
        this.gridX = gridX;
        this.gridY = gridY;
        return this;
    }
});
