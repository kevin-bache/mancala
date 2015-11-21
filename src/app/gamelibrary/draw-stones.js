(function () {
    'use strict';

    /**
     * Update the stones on the page
     */
    Game.prototype.draw_all_stones = function () {
        var format = function (stones) {
            return stones === 0 ? '' : stones;
        };

        this.current_player_store.textContent = format(this.mancala.current_store);
        this.other_player_store.textContent = format(this.mancala.other_store);

        for (var pit = 0; pit < this.pits; pit++) {
            this.current_player_pits[pit].textContent = format(this.mancala.current_pits[pit]);
            this.other_player_pits[pit].textContent = format(this.mancala.other_pits[pit]);
        }
    };

    /**
     * Update the number of stones in a pit
     * @param {Number} pit The pit number
     */
    Game.prototype.draw_stones = function (pit) {
        var format = function (stones) {
            return stones === 0 ? '' : stones;
        };

        if (pit === this.pits) {
            this.current_player_store.textContent = format(this.mancala.current_store);
        } else if(pit === (this.pits * 2) + 1) {
            this.other_player_store.textContent = format(this.mancala.other_store);
        } else if (pit < this.pits) {
            this.current_player_pits[pit].textContent = format(this.mancala.current_pits[pit]);
        } else if (pit > this.pits) {
            pit -= (parseInt(this.pits) + 1);
            this.other_player_pits[pit].textContent = format(this.mancala.other_pits[pit]);
        }
    };

})();