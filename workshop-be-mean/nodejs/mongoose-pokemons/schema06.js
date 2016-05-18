// Schema com Mixed
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const _schema = {
	attacks: Schema.Types.Mixed // <- type MIXED
}

//Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = {attacks: 
	[
		{
			name: 'Punch in face!',
			power: '9000',
			order: 1,
			active: true,
			created_at: Date.now()
		},
		{
			name: 'Punch in chest!',
			power: '9400',
			order: 2,
			active: false,
			created_at: Date.now()
		}
	]
};

var Model = mongoose.model('pokemons', pokemonSchema);
var poke = new Model(data);
poke.save(function (err, data){
	if (err) return console.log('Erro: ', err);
	console.log('Inseriu:', data)
})

module.exports = pokemonSchema;