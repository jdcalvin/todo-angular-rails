app.controller('TasksCtrl', ['$scope', 'Task', 
	function($scope, Task) {

  	$scope.tasks = Task.query();

  	$scope.createTask = function() {
  		var task = Task.save($scope.newTask);
  		$scope.tasks.push(task);
  		$scope.newTask = {};
  	};

    $scope.completeTask = function(task) {
      task.update();
    }
}]);