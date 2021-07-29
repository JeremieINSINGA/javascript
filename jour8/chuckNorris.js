function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function(error, response, body) {
        console.log(response.statusCode);
        var fact = JSON.parse(body);
        console.log(fact.value);
    });
}