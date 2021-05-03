const express = require('express');
const axios = require('axios');

const app = express();

app.get("/pokemon", async (req, res) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    const offSet = req.query.offset;
    const qtdPokemons = req.query.limit

    if (offSet && qtdPokemons) {
        res.json({
            Pokemons: response.data.results.splice(offSet, qtdPokemons),
        })
        return;
    }
    res.json({
        Pokemons: response.data.results,
    })

})

app.get("/pokemon/:idOuNome", async (req, res) => {
    const pokemon = req.params.idOuNome;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    res.json({
        Id: response.data.id,
        Name: response.data.name,
        Height: response.data.height,
        Weight: response.data.weight,
        Base_experience: response.data.base_experience,
        Forms: response.data.forms,
        Abilities: response.data.abilities,
        Species: response.data.species
    })
})

app.listen(8000);
