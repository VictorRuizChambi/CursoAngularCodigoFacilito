angular.module("FinalApp")
.controller("MainController",function($scope, $resource, PostResource){
	User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});

	$scope.posts = PostResource.query();
	$scope.users = User.query();
	//requiere que si o si se devuelva un arreglo
	//query() tiene un atributo isArray que espera true
	// query()  -> GET /posts  -> Un arreglo de posts  -> isArray: true
	$scope.removePost = function(post){
		PostResource.delete({id: post.id}, function(data){
			console.log(data);
		});
		$scope.posts = $scope.posts.filter( function(element){
			return element.id !== post.id;
		});
	};

})
.controller("PostController", function($scope,PostResource, $routeParams, $location){
	$scope.title = "Editar Post";
	$scope.post = PostResource.get({id: $routeParams.id}); //este no tiene el atributo isArray
													//por lo que espera un objeto JSON
	$scope.savePost = function(){
		PostResource.update({id: $scope.post.id}, {data: $scope.post}, function(data){
			console.log(data);
			$location.path("/post/" +$scope.post.id);
		});
	};

})
.controller("NewPostController", function($scope,PostResource, $location){
	$scope.post={}; 
	$scope.title="Crear Post";										
	$scope.savePost = function(){
		PostResource.save({data: $scope.post}, function(data){
			console.log(data);
			$location.path("/");
		});
	};
});