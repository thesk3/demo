myApp.controller('financeCtr', function($scope, $rootScope,seqenceService, $timeout, dataService,$http,
		$location) {
	// create a message to display in our view
	$rootScope.title = "Finance Pool";

	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		todayHighlight : true,
		 endDate: '+0d',
		autoclose : true
	});
	var res = $http.post('visit/financeList')
	res.success(function(data, status, headers, config) {
		$("#loader").fadeOut();
		console.log("success data-->", data.data);
		$scope.clientlist=data.data;
	}), res.error(function(data, status, headers,config) {
		console.log("fail data");
	});
	
	var year=new Date().getFullYear().toString().substr(-2);
	var thisYear = parseInt(year);
	var nextYear= thisYear+1;
	$scope.year=thisYear+"-"+nextYear;
	
	
	// redirect to client list from pop client added
	$scope.clientList = function() {
		console.log("in client list progrsm");
		$timeout(function() {
			$location.path("/home/clientlist");
		}, 400);
	}
	$scope.printInvoice = function(id) {
		console.log("invoice id-->", id);
		dataService.set(id);
		seqenceService.set(1);
		$location.path("/home/printInvoice");
	}
	
	
	
	
	
	$scope.finaceFilter=function(){
		var from=$scope.financeFilter.from;
		var to=$scope.financeFilter.to;
		console.log("data-->",from);
		var res = $http({
			method : 'get',
			url : 'visit/financeFilter',
			params : {
				from : from,
				to:to
			}
		});
		res.success(function(data, status, headers, config) {
			console.log("success data-->", data.data);
			$scope.clientlist=data.data;
		}), res.error(function(data, status, headers,config) {
			console.log("fail data");
		});
	}
	
	// Finance Statement excel download
	
	
	$scope.downloadFinanceReport=function(){
		location.href = 'visit/downloadFinanceReport';
			}
	
	
});