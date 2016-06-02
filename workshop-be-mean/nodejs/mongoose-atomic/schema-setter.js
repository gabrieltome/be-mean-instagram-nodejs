/*
Setters: permitem que você transforme os dados originais antes que cheguem ao documento.
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function toLower(v) {
  return v.toLowerCase();
}

const UserSchema = new Schema({
  email: { type: String, set: toLower}
});

const User = mongoose.model('User', UserSchema);
const user = new User({ email: 'CONTATO@gabrieltome.com.br' });

console.log(user.email);
