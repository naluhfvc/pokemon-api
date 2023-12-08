const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  pokedex_number: {
    type: Number,
    required: true,
  },
  image_name: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  generation: {
    type: Number,
    required: true,
  },
  evolution_stage: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  evolved: {
    type: Number,
    required: true,
  },
  family_id: {
    type: Number,
    required: true,
  },
  cross_gen: {
    type: Number,
  },
  type1: {
    type: String,
    required: true,
  },
  type2: {
    type: String,
  },
  weather1: {
    type: String,
    required: true,
  },
  weather2: {
    type: String,
  },
  stat_total: {
    type: Number,
    required: true,
  },
  atk: {
    type: Number,
    required: true,
  },
  def: {
    type: Number,
    required: true,
  },
  sta: {
    type: Number,
    required: true,
  },
  legendary: {
    type: Number,
  },
  aquireable: {
    type: Number,
    required: true,
  },
  spawns: {
    type: Number,
    required: true,
  },
  regional: {
    type: Number,
  },
  raidable: {
    type: Number,
  },
  hatchable: {
    type: Number,
  },
  shiny: {
    type: Number,
  },
  nest: {
    type: Number,
  },
  new: {
    type: Number,
  },
  not_gettable: {
    type: Number,
  },
  future_evolve: {
    type: Number,
  },
  _100_cp_40: {
    type: mongoose.Schema.Types.Mixed,
  },
  _100_cp_39: {
    type: mongoose.Schema.Types.Mixed,
  },
});

module.exports = mongoose.model('Pokemon', pokemonSchema);