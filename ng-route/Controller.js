angular.module("CustomeDirective")
.controller("ReposController", function($scope, $http){
	$scope.repos = [];
	
	// $http.get("https://api.github.com/repositories?since=0")
	$http.get("https://api.github.com/search/repositories?q=VictorRuizChambi")
	.success(function(data){
		$scope.posts= data;
		for (var i= data.length -1;i>=0; i--){
			var repo = data[i];
			$scope.repos.push(repo.name);
			console.log(repo.name);
		}
	})
	.error(function(err){
		
	});

	$scope.optionSelected = function(data){
		$scope.$apply(function(){ 
			$scope.main_repo = data;
		});
	};
})
.controller("RepoController", function($scope, $http,$routeParams){
	$scope.repo={};
	$http.get("https://api.github.com/search/repositories?q=repo"+ $routeParams.full_name)
	.success(function(data){
		$scope.repo= data;
		
	})
	.error(function(err){
		
	});
});