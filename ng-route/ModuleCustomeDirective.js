angular.module("CustomeDirective",["ngRoute"])/*el routing es la forma como va a
												 responder la aplicacion a las 
												 diferentes URL's*/
.config(function($routeProvider){
	$routeProvider /*nos permitirá definir la ruta*/
	.when("/",{
		controller: "ReposController",
		templateUrl: "templates/home.html",

	})
	.when("/repo/:login/:name",{
		controller: "RepoController",
		templateUrl: "templates/repo.html"
	})
	.otherwise("/");
});
