'use sctrict';

require('./db/config');

const CRUD = require('./pokemon-controller');

const query = { _id: '574e3a841207c6b91670103d'};

const data = {
  name: 'AtomicMon',
  description: 'Vai que vai!',
  type: 'terra',
  attack: 69,
  defense: 96,
  height: 97
}

const mod = { description: 'vamo que vamo!'};

CRUD.delete(query);
