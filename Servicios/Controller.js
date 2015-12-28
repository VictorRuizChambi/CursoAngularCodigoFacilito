angular.module("ToDoList", ["LocalStorageModule"])
.service('ToDoService', function(localStorageService){
	
/*Lo agregamos al objeto que el service está construyendo*/
	this.key = "angular-todolist";

	if(localStorageService.get(this.key)){
		this.activities = localStorageService.get(this.key);
	}else{
	this.activities = [];
	}

	this.add = function(newActv){
	this.activities.push(newActv);
	this.updateLocalStorage();
	};

	this.updateLocalStorage = function(){/*Para reemplazar al watcher ya que es una mala practica*/
		localStorageService.set(this.key, this.activities);
	};

	this.clean = function(){
		this.activities = [];
		this.updateLocalStorage();
		return this.getAll();
	};

	this.getAll = function(){
		return this.activities;
	};

	this.removeItem = function(item){
		/*filter va sobre un arreglo en este caso activities*/
		this.activities = this.activities.filter(function(activity){
			return activity !== item;
		});
		this.updateLocalStorage();
		return this.getAll();
	};
	
})
/*
function toDoService(localStorageService){};
toDoService(); //Esto es un Factory
new toDoService(); //Esto es un Service
*/
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