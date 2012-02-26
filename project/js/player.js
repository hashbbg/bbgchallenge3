(function(Crafty, REACH) {

    var generateSpawnCells = function(playerNumber) {
        var indexY, indexX,
            spawnCells = [];
        if (playerNumber === 1) {
            indexY = REACH.config.height - 1;
        }
        else {
            indexY = 0;
        }

        for (indexX = 0; indexX < REACH.config.width; indexX++) {
            spawnCells.push([indexX, indexY]);
        }

        return spawnCells;
    }

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
                throw 'Player number out of range!';
            }
            this.spawnCells = generateSpawnCells(this.playerNumber);
            return this;
        },

        getListOfAccessibleCells: function() {
            return this.spawnCells;
        },
    });

})(window.Crafty, window.REACH);
