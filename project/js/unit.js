Crafty.c('Unit', {
    gridX: 0,
    gridY: 0,
    healthPoint: 1,
    attackValue: 1,
    moveY: 1,
    player: null,

    init: function() {
        this.requires('2D, DOM');
    },

    unit: function(player) {
        this.player = player;
        return this;
    },

    move: function() {
        var direction = -1;
        if (this.player.playerNumber === 1) {
            direction = 1;
        }

        if (REACH.ennemyUnits[ this.gridX ][ this.gridY + direction * this.moveY  ] !== null
            || REACH.friendlyUnits[ this.gridX ][ this.gridY + direction * this.moveY  ] !== null) {
            return false;
        }

        this.gridY = this.gridY + direction * this.moveY;

        if (this.player.playerNumber === 1 && this.gridY === 0) {
            console.log('Player 1 got a point !');
        } else if (this.player.playerNumber === 2 && this.gridY === REACH.config.height - 1) {
            console.log('Player 2 got a point !');
        }

        return true;
    },

    attack: function() {
        var reachableCells = this.getListOfReachableCells();
        for (i = 0; i < reachableCells.length; i++)
        {
            var ennemyUnit = REACH.ennemyUnits[ reachableCells[i][0] ][ reachableCells[i][1]  ];
            if (ennemyUnit !== null) {
                ennemyUnit.healthPoint -= this.attackValue;
                if (ennemyUnit.healthPoint <= 0) {
                    ennemyUnit.die();
                }
            }
        }
    },

    die: function() {
        console.log('Player '+this.player.playerNumber+' lost a unit !');
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

        return accessibleCells;
    },

    getListOfInaccessibleCells: function() {
        var inaccessibleCells = [];

        if (this.gridX > 0) {
            inaccessibleCells.push([this.gridX - 1, this.gridY]);
        }
        if (this.gridX < REACH.config.width - 1) {
            inaccessibleCells.push([this.gridX + 1, this.gridY]);
        }
        if (this.gridY > 0) {
            inaccessibleCells.push([this.gridX, this.gridY - 1]);
        }
        if (this.gridY < REACH.config.height - 1) {
            inaccessibleCells.push([this.gridX, this.gridY + 1]);
        }

        return inaccessibleCells;
    },

    getListOfReachableCells: function() {
        return this.getListOfInaccessibleCells();
    }
});
