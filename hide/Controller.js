angular.module("MiApp",[])
.controller("PrimerControlador", function($scope, $http){
	$scope.posts=[];
	$scope.loading = true;
	$http.get("http://jsonplaceholder.typicode.com/posts")
	.success(function(data){
		console.log(data);
		$scope.posts=data;
		$scope.loading = false;
	})
	.error(function(err){
		$scope.loading = false;
	});


});