app.controller('TasksCtrl', ['$scope', '$resource', 
	function($scope, $resource) {
		var Task = $resource('/api/tasks/:id',
			{id: '@id'},
			{update: {method: "PUT"}});

  	$scope.tasks = Task.query();

  	$scope.createTask = function() {
  		var task = Task.save($scope.newTask);
  		$scope.tasks.push(task);
  		$scope.newTask = {};
  	};
}]);