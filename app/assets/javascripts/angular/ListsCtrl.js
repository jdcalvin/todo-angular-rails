app.controller('ListsCtrl', ['$scope', 'List', 
	function($scope, List) {
		$scope.lists = List.query();

		$scope.setList = function(x) {
			$scope.list = x;
		};
		$scope.listTasks = function(list) {
			var tasks  = Task.query(list.id);
			list.tasks.push(tasks);
		};

}]);