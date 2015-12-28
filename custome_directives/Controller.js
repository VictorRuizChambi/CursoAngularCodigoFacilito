angular.module("CustomeDirective",[])
.directive("myAutocomplete", function(){
	/*directivas que modifican al elemento al que estamos aplicando la directiva
	se hace a travez de link*/
	function link(scope, element, attrs){
		$(element).autocomplete({

			/*source: scope[attrs.myAutocomplete],*/
			source: scope.$eval(attrs.myAutocomplete),
			select: function(ev, ui){
				ev.preventDefault();
				if(ui.item){
					scope.optionSelected(ui.item.value);
				}
			},
			focus: function(ev, ui){
					ev.preventDefault();
					$(this).val(ui.item.label);
			}
		});
	};
	return {
		link: link
	};
})
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

.controller("AppCtrl", function($scope, $http){
	$scope.repos = [];
	/*scope.repos
	scope["repos"]*/
	$http.get("https://api.github.com/repositories?since=0")
	.success(function(data){
		$scope.posts= data;
		for (var i= data.length -1;i>=0; i--){
			var repo = data[i];
			$scope.repos.push(repo.name);
		}
	})
	.error(function(err){
		
	});

	$scope.optionSelected = function(data){
		$scope.$apply(function(){ 
			$scope.main_repo = data;
		});
	};
});