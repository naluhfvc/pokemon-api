const Pokemon = require('../models/pokemonModel');

const getAllPokemon = async (req, res) => {
    try {
        const allPokemon = await Pokemon.find();
        res.status(200).json(allPokemon);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllPokemon,
};