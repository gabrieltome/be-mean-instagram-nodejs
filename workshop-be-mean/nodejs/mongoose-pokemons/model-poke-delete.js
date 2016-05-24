const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name: String,
  description: String,
  type: String,
  attack: Number,
  defense: Number,
  height: Number
};

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);

const query = {_id: '573bc1150802efd62cc9a634'};
//const query = {name: /teste/i};

PokemonModel.remove(query, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Deletou:', data);
});

module.exports = PokemonModel;
