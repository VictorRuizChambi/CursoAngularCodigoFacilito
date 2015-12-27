angular.module("ToDoList", ["LocalStorageModule"])
.factory('ToDoService', function(localStorageService){
	var toDoService = {};

	toDoService.key = "angular-todolist";

	if(localStorageService.get(toDoService.key)){
		toDoService.activities = localStorageService.get(toDoService.key);
	}else{
	toDoService.activities = [];
	}

	toDoService.add = function(newActv){
	toDoService.activities.push(newActv);
	toDoService.updateLocalStorage();
	};

	toDoService.updateLocalStorage = function(){/*Para reemplazar al watcher ya que es una mala practica*/
		localStorageService.set(toDoService.key, toDoService.activities);
	};

	toDoService.clean = function(){
		toDoService.activities = [];
		toDoService.updateLocalStorage();
		return toDoService.getAll();
	};

	toDoService.getAll = function(){
		return toDoService.activities;
	};

	toDoService.removeItem = function(item){
		/*filter va sobre un arreglo en este caso activities*/
		toDoService.activities = toDoService.activities.filter(function(activity){
			return activity !== item;
		});
		toDoService.updateLocalStorage();
		return toDoService.getAll();
	};
	return toDoService;
})
.controller("ToDoControlador", function($scope, ToDoService){/*Inyecto mi servicio creado*/
	
	
	$scope.todo = ToDoService.getAll();
	
	$scope.addActv = function(){
		ToDoService.add($scope.newActv);
		$scope.newActv = {};
	};
	$scope.removeActv = function(item){
		$scope.todo = ToDoService.removeItem(item);
	};
	$scope.clean = function(){
		$scope.todo = ToDoService.clean();
	};

});