myApp.controller('addVisitDirectCtr', function($scope, $rootScope,
		dataSideService, $timeout, dataService, $http, $location) {
	// create a message to display in our view
	$rootScope.title = "Add visit";

	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		 startDate: new Date(),
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
			"city" : null,
			"contact person" : null,
			"mobile" : null
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
			$('#siteDelete').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#siteDelete').modal('show');

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
		$scope.newVisit.siteAddressSelected = rw.siteAddress;
		$scope.newVisit.siteCitySelected = rw.siteCity;
		$scope.newVisit.siteContactPerson=rw.contactPerson;
		$scope.newVisit.siteContactNumber=rw.mobileNO;
		
//		$scope.count = true;
	//	dataService.set(rw);

	}

	/* add site */
	$scope.addSite = function() {
		$scope.clientInfo = dataService.get();
		console.log("$scope->",$scope.newSite);
		$scope.newSite.clientID = $scope.clientInfo.clientID;
		var data = $scope.newSite;
		console.log("data-12->",data);
		var res = $http.post('client/addSite', data);
		res.success(function(data, status, headers, config) {
			$scope.siteAddmsg="Site added successfully"
			console.log("SUCCESS DATA:", data);
			$scope.addElement =data; 
				$('#siteAdd').modal({
					backdrop : 'static',
					keyboard : false
				})
				$('#siteAdd').modal('show');
				$scope.addressList.push($scope.newSite);
				$scope.newSite = {};
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
				
			
			$('#saveSite').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#saveSite').modal('show');
			/*if (1 == seqenceService.get()) {
				$location.path("home/viewvisit");
			} else if (2 == seqenceService.get()) {
				$location.path("home/addvisit");
			}*/
			//$location.path("/home/addvisit");
		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
			$scope.msg="Fail"
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup').modal('show');
		});
	}

	/* to get all sites of client */
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
		console.log("list of sites", data.data.length);
		$scope.clientInfo.siteCount = data.data.length;
		$scope.addressList = data.data;
	}), res.error(function(data, status, headers, config) {
		console.log("fais DATA:", data);
	});

	//data service get cliennt info
	$scope.newVisit = dataService.get();
	//data side service get sites
	/*var sideData = dataSideService.get();
	console.log("sideData-->"+sideData);
	if (sideData != null) {
		$scope.newVisit.siteAddressSelected = sideData.siteAddress;
		$scope.newVisit.siteCitySelected= sideData.siteCity;
		$scope.newVisit.siteContactPerson=sideData.contactPerson;
		$scope.newVisit.siteContactNumber=sideData.mobileNO;
		console.log("sideData-->"+sideData);
		console.log("newVisit-->"+$scope.newVisit);
	
	} else
		$scope.newVisit.siteAddressSelected = "";
	$scope.newVisit.siteCitySelected = "12";
*/
	/* to get all sites of client */
	$scope.clientInfo = dataService.get();

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
	

		$scope.addressList = data.data;
	}), res.error(function(data, status, headers, config) {
		console.log("fais DATA:", data);
	});

	//for add new visit
	$scope.addNewVisit = function() {
		$scope.newVisit.createdBy = $rootScope.globals.currentUser.userID;
		//$scope.newVisit.siteCitySelected=$scope.newVisit.siteCity;
		//$scope.newVisit.clientGST=$scope.newVisit.siteCity;
		if($scope.newVisit.visitFullDate==true)
		{
		$scope.newVisit.fromTime="09:00AM";
		$scope.newVisit.toTime="06:00PM"
		}
		console.log("vists data-->", $scope.newVisit);
		var data = $scope.newVisit;

		var res = $http.post('visit/addVisit', data)
		res.success(function(data, status, headers, config) {
			$scope.message = data.message;
			console.log("SUCCESS DATA:", data);
			$('#save').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#save').modal('show');
			

		}), res.error(function(data, status, headers, config) {
			$scope.cid = data.data;
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#save').modal('show');
			location.reload();

		});
	}
//for save and continoue 
	$scope.addNewVisitNew = function() {
		$scope.newVisit.createdBy = $rootScope.globals.currentUser.userID;
		//$scope.newVisit.siteCitySelected=$scope.newVisit.siteCity;
		//$scope.newVisit.clientGST=$scope.newVisit.siteCity;
		if($scope.newVisit.visitFullDate==true)
		{
		$scope.newVisit.fromTime="09:00AM";
		$scope.newVisit.toTime="06:00PM"
		}
		var data = $scope.newVisit;

		var res = $http.post('visit/addVisit', data)
		res.success(function(data, status, headers, config) {
			$scope.message = data.message;
			console.log("SUCCESS DATA:", data);
			$('#saveNew').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#saveNew').modal('show');
			//location.reload();
			//$scope.newVisit=null;$scope.newVisit.visitDate="";
			
		}), res.error(function(data, status, headers, config) {
			$scope.message = data.message;
			$('#saveNew').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#saveNew').modal('show');
			//location.reload();
		});
	}
	/* to go client list */
	$scope.visitpool= function() {
		console.log("in client list progrsm");
		dataSideService.set(null);
		$timeout(function() {
			$location.path("home/visitPool");
		}, 400);
	}

	//to go client list and make data side service(sites info) null
	$scope.cancel = function() {
		dataSideService.set(null);
		$location.path("home/clientlist");
	}
	
	$scope.relod = function() {
		$timeout(function() {
			location.reload();
			
		}, 400);
	}
});
