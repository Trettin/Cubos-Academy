const express = require("express");
const pokemons = require("./controladores/pokemons");
const usuarios = require("./controladores/usuarios");

const rotas = express();

rotas.get("/pokemons", pokemons.listarpokemons);
rotas.get("/pokemons/:id", pokemons.consultarPokemon);
rotas.post("/pokemons", pokemons.cadastrarPokemon);
rotas.put("/pokemons/:id", pokemons.atualizarPokemon);
rotas.delete("/pokemons/:id", pokemons.excluirPokemon);

rotas.post("/usuarios", usuarios.cadastrarUsuario);
rotas.post("/login", usuarios.login);

module.exports = rotas;
