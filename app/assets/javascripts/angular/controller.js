app.controller('TasksCtrl', ['$scope', 'Task', 
	function($scope, Task) {

  	$scope.tasks = Task.query();

  	$scope.createTask = function() {
  		var task = Task.save($scope.newTask);
  		$scope.tasks.push(task);
  		$scope.newTask = {};
  	};

    $scope.completeTask = function(task) {
      Task.update(task);
      $scope.task = {};
      
      
    }
    $scope.selectTask = function() {

    }

    $scope.deleteTask = function(task) {
      index = $scope.tasks.indexOf(task);
      Task.delete(task);
      $scope.tasks.splice(index, 1);
    }
    $scope.editTask = function(task) {
      $scope.task = Task.update(task);
    }
}]);