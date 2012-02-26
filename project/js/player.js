Crafty.c('Player', {
    color: 'black',
    playerNumber: 0,
    spawnCells: [],
    units: [],

    player: function(playerNumber) {
        this.playerNumber = playerNumber;
        if (playerNumber === 1) {
            this.color = 'blue';
        }
        else if (playerNumber === 2) {
            this.color = 'orange';
        }
        else {
            throw 'Player number out of range !';
        }
        this._initSpawnCells();
        return this;
    },

    _initSpawnCells: function() {
        var indexY;
        if (this.playerNumber === 1) {
            indexY = REACH.config.height - 1;
        }
        else {
            indexY = 0;
        }

        for (indexX = 0; indexX < REACH.config.width - 1; indexX++)
        {
            this.spawnCells.push([indexX, indexY]);
        }
    }
});
