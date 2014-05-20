app.controller('ListsCtrl', ['$scope', 'List', 
	function($scope, List) {
		$scope.lists = List.query();

		$scope.editList = function(list) {
			list.editing=true;
			$scope.editedList = list;
		}

		$scope.doneEditing = function(list) {
			if (! angular.element(list.srcElement).hasClass('editable')) {
          angular.forEach($scope.lists, function (key, value) {
             key.editing = false;
          });
      }
      List.update(list);
      $scope.editedList = null;
		}

}]);