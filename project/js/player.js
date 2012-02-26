Crafty.c('Player', {
    color: 'black',
    playerNumber: 0,
    spawnLines: [],
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
        this._setSpawnLines();
        return this;
    },

    _setSpawnLines: function() {
        if (this.playerNumber === 1) {
            this.spawnLines.push(9);
        }
        else {
            this.spawnLines.push(0);
        }
    }
});
