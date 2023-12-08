const Pokemon = require("../models/pokemonModel");
const { successResponse, errorResponse } = require("../utils/apiResponse");

// Obtém todos os pokémons.
const getAllPokemon = async (req, res) => {
    try {
        const allPokemon = await Pokemon.find();
        return successResponse(res, 200, { pokemons: allPokemon });
    } catch (err) {
        return errorResponse(res, 500, err.message);
    }
};

// Obtém um pokémon pelo id.
const getPokemonById = async (req, res) => {
    try {
        const pokemon = await Pokemon.findById(req.params.id);
        if (!pokemon) return errorResponse(res, 404, "Pokemon not found");

        return successResponse(res, 200, { pokemon: pokemon });
    } catch (err) {
        return errorResponse(res, 500, err.message);
    }
};


module.exports = {
    getAllPokemon,
    getPokemonById,
};
