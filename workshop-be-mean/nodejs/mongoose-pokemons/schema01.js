const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pokemons');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
	name: String,
	description: String,
	type: String,
	attack: Number,
	defense: Number,
	height: Number
});

module.exports = pokemonSchema;