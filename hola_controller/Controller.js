angular.module("MyFirstApp",[])
.controller("FirstController",["$scope","$http", function(m, http){
	m.nombre = "Victor";
	m.nuevoComentario ={};
	m.comentarios = [
					{comentario: "Buen Tutorial",
					 username: "codigoFacilito"
					},
					{
					comentario: "Malísimo el Tutorial",
					username: "otro Usuario"
					}

	];

	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario ={};
	}
}]);