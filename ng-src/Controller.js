angular.module("CustomeDirective",[])
.directive("backImg", function(){
	/*Los atributos(attrs) se tranforman en un hash*/
	return function(scope, element, attrs){
		/*attrs.backImg;   Esto no*/
		attrs.$observe('backImg', function(value){
			element.css({
				"background" : "url("+value+")",
				"background-size":"cover",
				"background-position" : "center"
			});
		});
	};
})

/* style="background:url({{repo.owner.avatar_url}}); background-position:center; background-size:cover;" */
.controller("AppCtrl", function($scope, $http){
	$http.get("https://api.github.com/repositories?since=0")
	.success(function(data){
		$scope.repos= data;
	})
	.error(function(err){
		console.log(err);
	});
});