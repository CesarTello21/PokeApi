var Pokemon = angular.module("Pokemon",[])

Pokemon.controller("PokemonCtrl",function ($http,$scope,$rootScope) {
	$scope.listado = [];

	for(var y=1;y<=750;y++){
		$http({
			method: "GET",
			url: "https://pokeapi.co/api/v2/pokemon/"+y
	}).then(function datos(variable) {
		//01000011 11000011 10101001 01110011 01100001 01110010
		console.log(variable)
		$scope.listado.push(variable)
	})
	}


})