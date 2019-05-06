myApp.controller('viewVsitCtr', function($scope, $rootScope, $filter,
		dataService, dataSideService, seqenceService, $timeout, $http,
		$location) {
	// create a message to display in our view
	$rootScope.title = "Visits";

	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		todayHighlight : true,
		startDate : new Date(),
		autoclose : true
	});

	
	$scope.editVisit = dataSideService.get();

	$scope.editVisit.visitDate = new Date($scope.editVisit.visitDate);
	$scope.editVisit.visitDate = $filter('date')($scope.editVisit.visitDate,
			"dd-MMM-yyyy");
	// console.log("value-->",$scope.editVisit);

	// check if site data not equal to null assign to site data
	var sideData = dataService.get();
	$("#loader").fadeOut();
	console.log("data service -->", sideData);
	if (dataService.get() != null) {
		if (sideData.visitID != $scope.editVisit.visitID) {
			console.log("in if -->", sideData);
			$scope.editVisit.siteAddressSelected = sideData.siteAddress;
			$scope.editVisit.siteCitySelected = sideData.siteCity;

		}
	}

	// update visit
	$scope.updateVisit = function() {
		$scope.editVisit.updatedBy = $rootScope.globals.currentUser.userID;
		if ($scope.editVisit.visitFullDate == true) {
			$scope.editVisit.fromTime = "09:00AM";
			$scope.editVisit.toTime = "06:00PM"
		}
		/* update visit */
		console.log("data --->", $scope.editVisit)
		var res = $http.post('visit/updateVisit', $scope.editVisit)
		res.success(function(data, status, headers, config) {
			$scope.message = data.message;
			// console.log("SUCCESS DATA:", data);
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup').modal('show');
			$scope.editEmpStatus = true;
		}), res.error(function(data, status, headers, config) {
			$scope.cid = data.data;
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#popup').modal('show');

		});
	}

	// got to add site and maintain seqence service for return to correct page
	$scope.visit = function(visit) {
		seqenceService.set(1);
		dataService.set(visit);
		$location.path("home/addsite");
	}

	/*
	 * $scope.cancel=function(){ console.log("in function"); if(
	 * seqenceService.get()==21) { seqenceService.set(23);
	 * $location.path("home/reportsInvoiceOpen");
	 *  } else { seqenceService.set(null); $location.path("home/visitPool");
	 *  } }
	 */

	/*
	 * $scope.visit=function(visit){ seqenceService.get(1);
	 * dataService.set(visit); $location.path("home/addsite"); }
	 */

	// now iots goini to visit pool for change status completed
	/*
	 * $scope.saveStatus=function(){ $scope.sat.updatedBy =
	 * $rootScope.globals.currentUser.userID; $scope.sat.visitID=
	 * $scope.editVisit.visitID; if($scope.sat.visitFullDate==true) {
	 * $scope.sat.fromTime="09:00AM"; $scope.sat.toTime="06:00PM" }
	 * 
	 * console.log("statust 2-->",$scope.sat); var res =
	 * $http.post('visit/updateVisitStatus', $scope.sat)
	 * res.success(function(data, status, headers, config) { $scope.message =
	 * data.message; console.log("SUCCESS DATA:", data);
	 * $('#saveStatus').modal({ backdrop : 'static', keyboard : false })
	 * $('#saveStatus').modal('show'); //location.reload(); }),
	 * res.error(function(data, status, headers, config) { console.log("fail");
	 * $scope.message = data.message; $('#saveStatus').modal({ backdrop :
	 * 'static', keyboard : false }) $('#saveStatus').modal('show');
	 * 
	 * }); }
	 */
	$scope.visitpool = function() {
		console.log("in client list progrsm");

		$timeout(function() {
			$location.path("home/visitPool");
		}, 400);
	}

	var res = $http.get('views/json/remarks.json')
	res.success(function(data, status, headers, config) {
		console.log(data);
		$scope.selectRemarks = data;

	}), res.error(function(data, status, headers, config) {
		console.log(data);
	});

});