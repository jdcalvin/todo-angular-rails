app.controller('ListsCtrl', ['$scope', 'List', 
	function($scope, List) {
		$scope.lists = List.query();
		$scope.editedList = null;

		$scope.createList = function() {
  		var list = List.save({title:'New List'})
  		$scope.lists.push(list);
  	};

  	$scope.testClick = function(x) {
  		alert(x);
  	};

    $scope.toggleColor = function(list, color) {
      List.update(list, {color: '#' + color});
      $scope.lists;
    }

		$scope.editList = function(list) {
			list.editing=true;
			$scope.editedList = list;
		}

    $scope.deleteList = function(list) {
      var response = confirm("Are you sure?");
      if (response) {
        index = $scope.lists.indexOf(list);
        List.delete(list);
        $scope.lists.splice(index, 1);
      }
    }

		$scope.doneEditing = function(list) {
			if (! angular.element(list.srcElement).hasClass('editable')) {
          angular.forEach($scope.lists, function (key, value) {
             key.editing = false;
          });
      }
      List.update(list);
      $scope.editedList = null;
      $scope.lists;
		}

}]);