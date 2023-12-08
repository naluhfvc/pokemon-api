const express = require("express");
const router = express.Router();
const pokemonController = require("./controllers/pokemonController");

router
    .route("/")
    .get(pokemonController.getAllPokemon)

router.route("/:id")
    .get(pokemonController.getPokemonById);

module.exports = router;
