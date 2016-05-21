const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name: String
}

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);

const id = '564b1dae25337263280d0484';

PokemonModel.findById(id, function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Buscou:', data);
});

module.exports = PokemonModel;
