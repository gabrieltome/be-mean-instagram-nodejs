'use sctrict';

const Schema = require('./schema');
const Model = require('./model')(Schema, 'pokemon');
const CRUD = {

  create: function(data) {
    const Suissamon = new Model(data);
    Suissamon.save(function(err, data){
      if (err) return console.log('ERRO: ', err);
      return console.log('Inseriu: ', data);
    });
  },

  retrieve: function(query) {
    Model.find(query, function(err, data) {
      if (err) return console.log('ERRO:', err);
      return console.log('BUSCOU: ', data);
    });
  },

  update: function(query, mod, options) {
    options = options || {};
    Model.update(query, mod, options, function(err, data) {
      if (err) return console.log('ERRO:', err);
      return console.log('Alterou:', data);
    });
  },

  delete: function(query) {
    Model.remove(query, function(err, data) {
      if (err) return console.log('ERRO: ', err);
      return console.log('Deletou: ', data);
    });
  }

}

module.exports = CRUD;
