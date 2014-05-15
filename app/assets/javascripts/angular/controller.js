app.controller('TasksCtrl', ['$scope', 'Task', 
	function($scope, Task) {

  	$scope.tasks = Task.query();

  	$scope.createTask = function() {
  		var task = Task.save($scope.newTask);
  		$scope.tasks.push(task);
  		$scope.newTask = {};
      $scope.editedTask = null;
  	};

    $scope.toggleTask = function(task) {
      Task.update(task, {completed: task.completed}); 
      $scope.tasks
    }
    $scope.selectTask = function() {
    }

    $scope.deleteTask = function(task) {
      index = $scope.tasks.indexOf(task);
      Task.delete(task);
      $scope.tasks.splice(index, 1);
    }

    $scope.editTask = function(task) {
      task.editing=true;
    }

    $scope.doneEditing = function(task) {
      
      if (! angular.element(task.srcElement).hasClass('editable')) {
            angular.forEach($scope.tasks, function (key, value) {
               key.editing = false;
            });
        }
     Task.update(task);
    }
}]);