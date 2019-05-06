myApp.controller('visitCtr', function($scope, $rootScope, dataService,dataSideService,
		$timeout, $http, $location) {
	// create a message to display in our view
	$rootScope.title = "Visits";

	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		todayHighlight : true,
		autoclose : true
	});
	
	

	//get all visits
	$scope.init = function() {
		$("#loader").fadeIn();
		var res = $http({
			method : 'get',
			url : 'visit/getAllVisit',
		});
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("sucees data-->", data.data);
			$scope.visitlist=data.data;
			
		}), res.error(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("fail data");
		});
	}

	//to edit  visits
	//datasideservice store visits info
	//dataservice make null bcz dataservice store sites info
	$scope.visitDetail = function(d) {
		dataSideService.set(d);
		dataService.set(null);
		$location.path("/home/viewvisit");
	}
	
	 var res = $http.get('views/json/remarks.json')
		res.success(function(data, status, headers, config) {
		console.log(data);
		$scope.selectRemarks=data;

		}), res.error(function(data, status, headers, config) {
			console.log(data);
		});

	 var visit=null;
	 $scope.changStatusModelBox = function(visitData) {
			visit=visitData;
		 console.log("visit data-->",visit);
		   $('#changestatus').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#changestatus').modal('show');
	
		}
		
	 $scope.saveStatus=function(){
			
		 console.log("in funcr");
	       $scope.sat.updatedBy = $rootScope.globals.currentUser.userID;
	       $scope.sat.visitID= visit.visitID;
			  console.log("statust 2-->",$scope.sat);
			 var res = $http.post('visit/updateVisitStatus', $scope.sat)
				res.success(function(data, status, headers, config) {
				
				console.log("success");
				//$('#changestatus').modal('hide');
				
					location.reload();
				}), res.error(function(data, status, headers, config) {
					console.log("fail");
					$scope.message = data.message;
				});
		 }
	 $scope.success = function() {
		 $('#saveStatus').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#saveStatus').modal('show');
		}
	 
	 $scope.visitpool = function() {
			console.log("in client list progrsm");

			$timeout(function() {
				$location.path("home/visitPool");
			}, 400);
		}
	 
});