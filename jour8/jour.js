function getCountries() {
    request.get("https://restcountries.eu/rest/v2/all", function(error, response, body) {
        console.log(response.statusCode);
        var countries = JSON.parse(body);
	/*
	var countriesNames = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            countriesNames.push(country.name);
        }
        console.log(countriesNames.join("-"));
        */
       var pays = countries.map(function(element) {
           return element.name;
       })
       console.log(pays.join("-"));
    });

}