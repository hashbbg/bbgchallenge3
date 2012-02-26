Crafty.c('Unit', {
    gridX: 0,
    gridY: 0,
    healthPoint: 1,
    attackValue: 1,
    player: null,

    init: function() {
        this.requires('2D, DOM');
    },

    unit: function(player) {
        this.player = player;
        return this;
    },

    move: function() {

    },

    attack: function() {

    },

    die: function() {

    },

    getListOfAccessibleCells: function() {
        var yDelta = -1;
        var accessibleCells = [];
        if (this.player.playerNumber === 1) {
            yDelta = 1;
        }

        if (this.gridY + yDelta >= 0 && this.gridY + yDelta < REACH.config.height) {
            accessibleCells.push([this.gridX, this.gridY + yDelta]);
        }

        if (this.gridX > 0) {
            accessibleCells.push([this.gridX - 1, this.gridY]);
        }
        if (this.gridX < REACH.config.width - 1) {
            accessibleCells.push([this.gridX + 1, this.gridY]);
        }
    }
});
