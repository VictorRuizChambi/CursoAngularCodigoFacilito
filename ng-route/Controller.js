angular.module("CustomeDirective")
.controller("ReposController", function($scope, $http){
	$scope.repos = [];
	
	// $http.get("https://api.github.com/repositories?since=0")
	$http.get("https://api.github.com/search/repositories?q=user:VictorRuizChambi")
	.success(function(data){
		$scope.posts= data.items;
		for (var i= data.items.length -1;i>=0; i--){
			var repo = data.items[i];
			$scope.repos.push(repo.name);
			
		}
	})
	.error(function(err){
		
	});

	$scope.optionSelected = function(data){
		$scope.$apply(function(){ 
			$scope.main_repo = data;
			console.log(data);
		});
	};
})
.controller("RepoController", function($scope, $http,$routeParams){
	$scope.repo={};
	
	$http.get("https://api.github.com/search/repositories?q=repo:"+$routeParams.login+"/"+ $routeParams.name)
	.success(function(data){
		$scope.repo= data.items[0];
	})
	.error(function(err){
		
	});
});