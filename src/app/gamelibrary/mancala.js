/**
 * Manages the mancala board
 */
var Mancala = (function () {
	'use strict';

	/**
	 * Initialise class
	 * @param {Game} game
	 */
	var Mancala = function (game) {
		this.game = game;
		this.other_pits = new Array();
		this.current_pits = new Array();
		this.pits = parseInt(game.pits);
	
		for(var nb = 0; nb < game.pits ; nb++ ) {
			this.current_pits.push(4);
			this.other_pits.push(4);
		}
	
		//this.current_pits = [4, 4, 4, 4, 4, 4];
		//this.other_pits = [4, 4, 4, 4, 4, 4];
		this.current_store = 0;
		this.other_store = 0;
	};

	/**
	 * Exchange the players' positions on the board
	 */
	Mancala.prototype.flip_board = function () {
		var current_pits = this.current_pits;
		this.current_pits = this.other_pits;
		this.other_pits = current_pits;

		var current_store = this.current_store;
		this.current_store = this.other_store;
		this.other_store = current_store;
	};

	/**
	 * Retrieve the amount of stones in a pit
	 * @param  {Number} pit The pit number
	 * @return {Number}     The amount of stones
	 */
	Mancala.prototype.get_stones = function (pit) {

		if (pit === this.pits) {
			return this.current_store;
		} else if (pit === (this.pits +1)) {
			return this.other_store;
		} else if (pit < this.pits) {
			return this.current_pits[pit];
		} else if (pit > this.pits) {
			return this.other_pits[pit - (this.pits +1)];
		}

		return NaN;
	};

	/**
	 * Set the amount of stones in a pit
	 * @param {Number} pit    The pit number
	 * @param {Number} stones The amount of stones
	 */
	Mancala.prototype.set_stones = function (pit, stones) {

		if (pit === this.pits) {
			this.current_store = stones;
		} else if (pit === (this.pits * 2) + 1) {
			this.other_store = stones;
		} else if (pit < this.pits) {
			this.current_pits[pit] = stones;
		} else if (pit > this.pits) {
			this.other_pits[pit - (this.pits + 1)] = stones;
		}
	};

	/**
	 * Adjust the amount of stones in a pit
	 * @param {Number} pit    The pit number
	 * @param {Number} stones The amount of stones
	 */
	Mancala.prototype.add_stones = function (pit, stones) {

		if (pit === this.pits) {
			this.current_store += stones;
		} else if (pit === (this.pits * 2) + 1) {
			this.other_store[pit] += stones;
		} else if (pit < this.pits) {
			this.current_pits[pit] += stones;
		} else if (pit > this.pits) {
			this.other_pits[pit - (this.pits + 1)] += stones;
		}
	};

	return Mancala;
})();
