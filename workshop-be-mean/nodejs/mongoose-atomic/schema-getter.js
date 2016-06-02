/*
  Getters: permitem que você transforme a representação dos dados, uma vez que é transformado
  a partir do documento para o valor que você vê.
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/teste');

function apenasMaiusculas (v) {
  return v.toUpperCase();
}

const CommentsSchema = new Schema ({
  title: String
, body: String
, date: Date
});

const BlogPostSchema = new Schema ({
  title: { type: String, get: apenasMaiusculas }
, body: String
, comments: [CommentsSchema]
});

const BlogPostModel = mongoose.model('BlogPost', BlogPostSchema);
const post_id = '';

BlogPostModel.findById(post_id, function(err, post){
  if (err) return console.log('Erro: ', err);
  return console.log('Título: ', post.title);
});
