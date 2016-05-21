const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  name:  String
}

const pokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('pokemons', pokemonSchema);
const dataModel = { name: 'Suissamon' };
const Suissamon = new PokemonModel(dataModel);

/*
Suissamon.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu:', data);
});
*/

PokemonModel.create({ name: 'Pokemon X' }, function(err, data){
  if (err) return console.log('ERRO: ', err);
  return console.log('Inseriu: ', data);
});

module.exports = PokemonModel;
