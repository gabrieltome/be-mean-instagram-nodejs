// Schema com Array
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
	pokemons: [String]
}

//Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {
	pokemons: ['Pikachu 01', 'Squirtle 02']
};

var Model = mongoose.model('pokemons', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data){
	if (err) return console.log('Erro: ', err);
	console.log('Inseriu:', data)
})

module.exports = pokemonSchema;