myApp.controller('addSiteCtr', function($scope, $rootScope, dataService,
		dataSideService, seqenceService, $timeout, $http, $location) {
	// create a message to display in our view
	$rootScope.title = "Add New Site";
	$("#loader").fadeOut();
	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		todayHighlight : true,
		autoclose : true
	});

	// for showing sites by array list
	var row = {
		"address" : null,
		"city" : null
	}
	// declare empty array
	$scope.addressList = [ row ];
	$scope.clientInfo = dataService.get();
	
	$scope.addElement = function() {
		$scope.addressList.push({
			"address" : null,
			"city" : null
		});

	}
	var index;
	var rw;
	/* show pop up delete site address */
	$scope.deleteAddress = function(rw) {
		index = $scope.addressList.indexOf(rw);
		$scope.newRW = rw;
		$('#deleteSite').modal({
			backdrop : 'static',
			keyboard : false
		})
		$('#deleteSite').modal('show');

	}
	
	//for delete  site adress
	$scope.removeElement = function() {
		console.log("index of selected rw-->", rw);
		var data = $scope.newRW;
		var res = $http.post('client/deleteSite', data);
		res.success(function(data, status, headers, config) {
			console.log("SUCCESS DATA:", data);
			$('#deleteSuccess').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#deleteSuccess').modal('show');
			$scope.init();
			//location.reload();
		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
		});
		$scope.addressList.splice(index, 1);
	}
	//if any change is mafe in checkbox call this functin
	$scope.updateSelection = function(position, entities, rw) {
		for(var i =0;i<entities.length;i++)
			{
			if(entities[i].checked==true)
			{
			$scope.hideshow = true;
			break;
			}
			$scope.hideshow = false;
			
			}
		angular.forEach(entities, function(selected, index) {
			if (position != index)
				selected.checked = false;
		});
		$scope.count = true;
		console.log("seqenceService->",seqenceService.get());
		if (1 == seqenceService.get()) {
			console.log("in data service-->",rw);
			dataService.set(rw);
		}
		//else
			//dataService.set(null);
			
		

	}
	//dataService.set(null);
	
	/* add site */
	$scope.addSite = function() {
		$scope.clientInfo = dataService.get();

		$scope.newSite.clientID = $scope.clientInfo.clientID;
		var data = $scope.newSite;
		var res = $http.post('client/addSite', data);
		res.success(function(data, status, headers, config) {
			console.log("SUCCESS DATA:", data);
$scope.init();
		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
		});
	}

	/* update site */
	$scope.updateSite = function() {
		var data = $scope.addressList;
		var res = $http.post('client/updateSite', data);
		res.success(function(data, status, headers, config) {
			console.log("SUCCESS DATA:", data);
				
			
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup').modal('show');
			/*if (1 == seqenceService.get()) {
				$location.path("home/viewvisit");
			} else if (2 == seqenceService.get()) {
				$location.path("home/addvisit");
			}*/
			//$location.path("/home/addvisit");
		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup').modal('show');
		});
	}

	/* to get all sites of client */
	$scope.init=function(){
		
	$scope.clientInfo = dataService.get();
	console.log("dataService.get()-->", dataService.get());
	var clientID = $scope.clientInfo.clientID;
	var res = $http({
		method : 'post',
		url : 'client/getSitesByClient',
		params : {
			clientID : clientID,
		}
	});
	res.success(function(data, status, headers, config) {
		$("#loader").fadeOut();
		console.log("list of sites", data);
		
		$scope.clientInfo.siteCount = data.data.length;
		$scope.addressList = data.data;
	}), res.error(function(data, status, headers, config) {
		console.log("fais DATA:", data);
	});
	}
	$scope.cancel = function() {
		console.log("sequence ser get---->", seqenceService.get());
		if (1 == seqenceService.get()) {
			$location.path("home/viewvisit");
		} else if (2 == seqenceService.get()) {
			$location.path("home/editclient");
		}
	}
	
	$scope.relod = function() {
		$timeout(function() {
			location.reload();
			
		}, 400);
	}
});