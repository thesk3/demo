myApp.controller('addClientCtr', function($scope, $rootScope, $timeout, $http,
		$location) {
	// create a message to display in our view
	$rootScope.title = "Add New Client";
	$("#loader").fadeOut();
	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		todayHighlight : true,
		autoclose : true
	});

	
	$scope.addNewEmp = function() {
		$scope.clientInfo.createdBy = $rootScope.globals.currentUser.userID;
		console.log("data -->",$scope.clientInfo);
		var data = $scope.clientInfo;
		var res = $http.post('client/addClient', data)
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			$scope.cid = $scope.clientInfo.clientName;
			console.log("SUCCESS DATA:", data);
			$('#addClient').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#addClient').modal('show');

		}), res.error(function(data, status, headers, config) {
			$("#loader").fadeOut();
			$scope.cid = data.data;
			$('#addClient').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#addClient').modal('show');

		});
	}
	//redirect to client list from pop client added
	$scope.clientList = function() {
	
		$timeout(function() {
			location.reload();
			$location.path("/home/clientlist");
		}, 400);
	}

});