const Pokemon = require('../models/pokemonModel');

// Obtém todos os pokémons.
const getAllPokemon = async (req, res) => {
    try {
        const allPokemon = await Pokemon.find();
        res.status(200).json(allPokemon);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Obtém um pokémon pelo id.
const getPokemonById = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id);
        res.status(200).json(pokemon);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Cria um novo pokémon.
const createPokemon = async (req, res) => {
    try {
        const newPokemon = new Pokemon(req.body);
        const savedPokemon = await newPokemon.save();
        res.status(201).json(savedPokemon);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllPokemon,
    getPokemonById,
    createPokemon,
};
