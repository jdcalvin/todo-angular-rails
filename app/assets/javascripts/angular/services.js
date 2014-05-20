app.factory('Task', [
	'$resource', function($resource, list_id){
	 return $resource('/api/lists/:list_id/tasks/:id',
			{list_id: 'list_id', id: '@id'},
			{update: {method: "PUT"}
		});
}])

app.factory('List', [
	'$resource', function($resource){
	 return $resource('/api/lists/:id',
			{id: '@id'},
			{update: {method: "PUT"}
		});
}])