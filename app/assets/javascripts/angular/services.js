app.factory('Task', [
	'$resource', function($resource){
	 return $resource('/api/tasks/:id',
			{id: '@id'},
			{update: {method: "PUT"}
		});
}])