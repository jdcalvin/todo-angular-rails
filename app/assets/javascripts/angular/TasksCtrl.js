app.controller('TasksCtrl', ['$scope', 'Task', 
	function($scope, Task) {

  	$scope.tasks = Task.query();
    $scope.editedTask = null;

    

  	$scope.createTask = function(list) {
      $scope.newTask.list_id = list.id;
  		var task = Task.save($scope.newTask);
  		$scope.list.tasks.push(task);
  		$scope.newTask = {};
  	};

    $scope.toggleTask = function(task) {
      Task.update(task, {completed: task.completed}); 
      $scope.list.tasks;
    }

    $scope.deleteTask = function(task) {
      index = $scope.list.tasks.indexOf(task);
      Task.delete(task);
      $scope.list.tasks.splice(index, 1);
    }

    $scope.editTask = function(task) {
      task.editing=true;
      $scope.editedTask = task;
    }

    $scope.doneEditing = function(task) {
      if (! angular.element(task.srcElement).hasClass('editable')) {
          angular.forEach($scope.list.tasks, function (key, value) {
             key.editing = false;
          });
      }
      Task.update(task);
      $scope.editedTask = null;
      $scope.list.tasks;
    }
}]);