function ColorsCtrl($scope) {
  $scope.items = [
    'FBAAAE','B2ADDB','B7EAB1','C9A6D7','959595','CACACA'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    console.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
}