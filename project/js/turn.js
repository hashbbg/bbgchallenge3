(function(Crafty, REACH) {

    var getEmptyCellsMatrix = function(width, height) {
        var i, j, matrix = [];

        for (i = 0; i < width; i++) {
            matrix[i] = [];
            for (j = 0; j < height; j++) {
                matrix[i][j] = null;
            }
        }

        return matrix;
    };

    Crafty.c('Turn', {
        current: 0,
        players: [],

        turn: function() {
            return this;
        },

        getActivePlayer: function() {
            return this.players[ this.current % 2 ];
        },

        getInactivePlayer: function() {
            return this.players[ (this.current + 1) % 2 ];
        },

        generateListOfAccessibleCells: function() {
            var player = this.getActivePlayer(),
                inactivePlayer = this.getInactivePlayer(),
                units = player.units,
                accessibleCells = getEmptyCellsMatrix(REACH.config.width, REACH.config.height),
                u, unit, cells, c, cell;

            // get 1. list of cells made accessible by active player's units
            for (u in units) {
                unit = units[u];
                cells = unit.getListOfAccessibleCells();

                for (c in cells) {
                    cell = cells[c];
                    accessibleCells[ cell[0] ][ cell[1] ] = cell;
                }
            }

            // get 2. list of cells made unaccessible by non-active player's units
            units = inactivePlayer.units;
            for (u in units) {
                unit = units[u],
                cells = unit.getListOfInaccessibleCells();

                for (c in cells) {
                    cell = cells[c];
                    accessibleCells[ cell[0] ][ cell[1] ] = null;
                }
            }

            // get 3. list of spawning cells of active player
            cells = player.getListOfAccessibleCells();
            for (c in cells) {
                cell = cells[c];
                accessibleCells[ cell[0] ][ cell[1] ] = cell;
            }

            // accessible cells = 1 - 2 + 3
            return REACH.accessibleCells = accessibleCells;
        },

        nextTurn: function() {
            this.current++;
            this.generateListOfAccessibleCells();
        },
    });

})(window.Crafty, window.REACH);
