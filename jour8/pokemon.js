    function catchPokemon(id, lang) {
    request.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`, function(error, response, body) {
        console.log(response.statusCode);
        var pokemon = JSON.parse(body);
        var translatedName = pokemon.names.find(function(element) {
            return element.language.name === lang;
        })
        console.log(`Mon pokemon numéro ${pokemon.id} s'appelle: ${translatedName.name}`);
    })
}
