myApp.controller('editClientCtr', function($scope,seqenceService, $rootScope, dataService,
		$timeout, $http, $location) {
	// create a message to display in our view
	$rootScope.title = "Edit Client";

	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		todayHighlight : true,
		autoclose : true
	});

	$("#loader").fadeOut();
	/* delete client */
	$scope.deleteClient = function() {
		var data = $scope.clientInfo;
		var res = $http.post('client/deleteClient', data);
		res.success(function(data, status, headers, config) {
			$('#deletecon').modal({
				backdrop : 'static',
				keyboard : false
			})
		$('#deletecon').modal('show');
		}), res.error(function(data, status, headers, config) {
			$('#deleteClientConfirm').modal({
				backdrop : 'static',
				keyboard : false
			})
		$('#deleteClientConfirm').modal('show');
			
			
		});
		
	}
	
	/* update client */
	$scope.updateClient = function() {
		var data = $scope.clientInfo;
		var res = $http.post('client/updateClient', data);
		res.success(function(data, status, headers, config) {
			console.log("SUCCESS DATA:", data);
			$('#updateClient').modal({
				backdrop : 'static',
				keyboard : false
			})
		$('#updateClient').modal('show');

		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
			
		});
		
	}

	
	// gets sites by client
	$scope.clientInfo = dataService.get();
	var clientID=$scope.clientInfo.clientID;
	var res = 	$http({
		  method: 'post',
		  url: 'client/getSitesByClient',
			params: {
				clientID:clientID,
		    }
		});
	res.success(function(data, status, headers, config) {
		$("#loader").fadeOut();
		$scope.addressList=data.data;
		$scope.clientInfo.siteCount=data.data.length;
	}), res.error(function(data, status, headers, config) {
		console.log("fais DATA:", data);
	});
	console.log("info-->",$scope.clientInfo);
	if($scope.clientInfo.secondaryMobileNo==0)
		{
		$scope.clientInfo.secondaryMobileNo='';
		
		}
	if($scope.clientInfo.landlineNO==0)
	{
	$scope.clientInfo.landlineNO='';
	
	}
	
	 $scope.visit=function(visit){
		 seqenceService.set(2);
		 dataService.set($scope.clientInfo);
		 $location.path("home/addsite");
	 }
	//to go in client list
	$scope.clientList = function() {
		console.log("in client list progrsm");
		$timeout(function() {
			location.reload();
			$location.path("/home/clientlist");
		}, 500);
	}
});