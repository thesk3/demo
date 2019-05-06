myApp.controller('addVisitCtr', function($scope, $rootScope, $timeout,
		dataService, $http, $location) {
	// create a message to display in our view
	$rootScope.title = "Add New Visit";
	$scope.hideshow = false;
	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		startDate : new Date(),
		todayHighlight : true,
		autoclose : true
	});

	console.log("controller ", dataService.get());
	var siteInfo = dataService.get();
	$scope.init = function() {
		console.log("init ");
		var res = $http({
			method : 'get',
			url : 'client/getAllclient',
		});
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("sucees data-->", data.data);
			$scope.clients = data.data;
			var values = data.data;
			var log = [];
			angular.forEach(values, function(value1, key) {
				log.push(value1);
			});

			/* Autocomplete for client name */
			$scope.states = log;

		}), res.error(function(data, status, headers, config) {

			console.log("fail data");

		});
	}

	var visit = null;
	var clientIDForAddSite=0;
	// get sites info by sprecific client
	$scope.getid = function(visit) {
		visit = visit;
		console.log("controller ---->", visit);
		var clientID = visit.clientID;
		clientIDForAddSite=clientID;
		var res = $http({
			method : 'post',
			url : 'client/getSitesByClient',
			params : {
				clientID : clientID,
			}
		});
		res.success(function(data, status, headers, config) {
			console.log("list of sites", data);
			console.log("list of sites", data.data.length);

			$scope.addressList = data.data;
		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
		});

	}

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
	$scope.removeElement = function() {
		var data = $scope.newRW;
		var res = $http.post('client/deleteSite', data);
		console.log("index of selected-->", index);
		$scope.addressList.splice(index, 1);
		res.success(function(data, status, headers, config) {
			console.log("SUCCESS DATA:", data);
			$('#deleteSuccess').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#deleteSuccess').modal('show');

		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
		});

	}

	// any change made in checkbox call this
	$scope.updateSelection = function(position, entities, rw) {
		// for making select btn hide show
		for (var i = 0; i < entities.length; i++) {
			if (entities[i].checked == true) {
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
		$scope.newVisit.siteContactPerson = rw.contactPerson;
		$scope.newVisit.siteContactNumber = rw.mobileNO;
	}
	$scope.newSite = null;
	/* add site */
	$scope.addSite = function() {
		
		$scope.newSite.clientID = clientIDForAddSite;
		console.log("row data--->", $scope.newSite);

		var data = $scope.newSite;
		var res = $http.post('client/addSite', data);
		res.success(function(data, status, headers, config) {
			console.log("SUCCESS DATA:", data);
			$scope.message = data.message;
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup').modal('show');
			
			$scope.addressList.push($scope.newSite);
			$scope.newSite = {};
		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
			$scope.message = data.message;
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup').modal('show');
		});

	}

	/* update site */
	$scope.updateSite = function() {

		console.log("to save arrdres--->", $scope.addressList);

		var data = $scope.addressList;
		var res = $http.post('client/updateSite', data);
		res.success(function(data, status, headers, config) {
			console.log("SUCCESS DATA:", data);
			$scope.message = data.message;
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup').modal('show');
			// $location.path("/home/addvisit");
		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
			$scope.message = data.message;
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup').modal('show');
		});

	}

	/* for add new Visit */
	$scope.addNewVisit = function() {
		$scope.newVisit.createdBy = $rootScope.globals.currentUser.userID;
		console.log("vists data-->", $scope.newVisit);
		if ($scope.newVisit.visitFullDate == true) {
			$scope.newVisit.fromTime = "09:00AM";
			$scope.newVisit.toTime = "06:00PM"
		}
		var data = $scope.newVisit;
		console.log("data-->", data);
		var res = $http.post('visit/addVisit', data)
		res.success(function(data, status, headers, config) {
			$scope.message = data.message;
			console.log("SUCCESS DATA:", data);
			$('#popup2').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup2').modal('show');
			$scope.addressList.push({
				"address" : null,
				"city" : null
			});
			//location.reload();
		}), res.error(function(data, status, headers, config) {
			$scope.cid = data.data;
			$('#popup2').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup2').modal('show');
			//location.reload();
		});
	}

	// for save and continoue on same page
	$scope.addNewVisit1 = function() {
		$scope.newVisit.createdBy = $rootScope.globals.currentUser.userID;
		console.log("vists data-->", $scope.newVisit);
		if ($scope.newVisit.visitFullDate == true) {
			$scope.newVisit.fromTime = "09:00AM";
			$scope.newVisit.toTime = "06:00PM"
		}

		var data = $scope.newVisit;

		var res = $http.post('visit/addVisit', data)
		res.success(function(data, status, headers, config) {
			$scope.message = data.message;
			console.log("SUCCESS DATA:", data);
			$('#popup1').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup1').modal('show');
			
		}), res.error(function(data, status, headers, config) {
			$scope.cid = data.data;
			$('#popup1').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup1').modal('show');
			
		});
	}

	/* to go visit pool */
	$scope.visitpool = function() {
		console.log("in client list progrsm");

		$timeout(function() {
			$location.path("home/visitPool");
		}, 400);
	}

});
