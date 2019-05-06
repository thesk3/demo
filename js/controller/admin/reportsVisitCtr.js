myApp.controller('reportsVisitCtr', function($scope, $rootScope, $timeout, $http,dataService,seqenceService,
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

	$scope.editVisit = dataService.get();

	//redirect to client list from pop client added
	$scope.cancel = function() {
		console.log("in client list progrsm");
			if(seqenceService.get()==1)
			{
			dataService.set(1)
			$location.path("home/reportsCompleted");
		
			}
		else if(seqenceService.get()==2){
				dataService.set(2)
				$location.path("home/reportsCancelled");
				
			}
		
			
	}

});