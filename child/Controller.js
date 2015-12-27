angular.module("MiApp",[])
.run(function($rootScope){
	$rootScope.nombre = "Codigo Facilito";
})
.controller("PrimerControlador", function($scope){
	$scope.nombre= "VR";
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.nombre=":3";
		});
	}, 1000);
})
.controller("ChildController", function($scope){

});