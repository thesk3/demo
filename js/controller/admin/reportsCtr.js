myApp.controller('reportsCtr', function($scope, $rootScope, $timeout, $http,dataSideService,seqenceService,
		$location, dataService) {
	// create a message to display in our view
	$rootScope.title = "Reports";
	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		todayHighlight : true,
		autoclose : true
	});
	$("#loader").fadeOut();
	console.log("data-->", dataService.get());
	var status = dataService.get();
	if (status == 1) {

		$("#loader").fadeIn();
		var res = $http({
			method : 'get',
			url : 'invoice/getAllInvoice',
		});
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("sucees data-->", data.data);
			$scope.visitlist = data.data;

		}), res.error(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("fail data");
		});
	}
	if (status == 2) {

		$("#loader").fadeIn();
		var res = $http({
			method : 'get',
			url : 'visit/getAllVisitCanceled',
		});
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("sucees data-->", data.data);
			$scope.visitlistCancelled = data.data;

		}), res.error(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("fail data");
		});
	}
	if (status == 3) {

		$("#loader").fadeIn();
		var res = $http({
			method : 'get',
			url : 'invoice/getAllInvoice',
		});
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("sucees data-->", data.data);
			$scope.invoiceList = data.data;

		}), res.error(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("fail data");
		});
	}
	if (status == 4) {

		$("#loader").fadeIn();
		var res = $http.post('visit/financeList')
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("success data-->", data.data);
			$scope.clientlist=data.data;
		}), res.error(function(data, status, headers,config) {
			console.log("fail data");
		});
	}
	if (status == 5) {

		$("#loader").fadeIn();
		var res = $http.post('visit/financeList')
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("success data-->", data.data);
			$scope.clientlist=data.data;
		}), res.error(function(data, status, headers,config) {
			console.log("fail data");
		});
	}
	
	//to edit  visits
	//datasideservice store visits info
	//dataservice make null bcz dataservice store sites info
	$scope.visitDetail = function(d) {
		dataService.set(d);
		if (status == 1) {
		seqenceService.set(1);
		
		$location.path("/home/reportsviewvisit");
		}
		if (status == 2) {
			seqenceService.set(2);
			
			$location.path("/home/reportsviewvisit");
			}
			
		}
	
	$scope.closeInvoice = function(d) {
		dataService.set(d);
		if (status == 1) {
		seqenceService.set(1);
		
		$location.path("/home/reportsviewvisit");
		}
		if (status == 2) {
			seqenceService.set(2);
			
			$location.path("/home/reportsviewvisit");
			}
			
		}
	
	$scope.printInvoice= function(id) {
		console.log("invoice id-->", id);
		dataService.set(id);
		
		$location.path("/home/printInvoice");
	}
	var year=new Date().getFullYear().toString().substr(-2);
	var thisYear = parseInt(year);
	var nextYear= thisYear+1;
	$scope.year=thisYear+"-"+nextYear;
	$scope.printInvoice= function(id,dataNumber) {
		console.log("invoice id-->", id);
		dataService.set(id);
		if(dataNumber==3)
			seqenceService.set(dataNumber);

		if(dataNumber==4)
			seqenceService.set(dataNumber);

		if(dataNumber==5)
			seqenceService.set(dataNumber);
		
		if(dataNumber==6)
			seqenceService.set(dataNumber);

		
		
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
			//$scope.invoiceList=data.data;
			$scope.clientlist=data.data;
		}), res.error(function(data, status, headers,config) {
			console.log("fail data");
		});
	}
	$scope.visitFilter=function(){
		var from=$scope.financeFilter.from;
		var to=$scope.financeFilter.to;
		console.log("data-->",from);
		var res = $http({
			method : 'get',
			url : 'visit/visitFilter',
			params : {
				from : from,
				to:to
			}
		});
		res.success(function(data, status, headers, config) {
			console.log("success data-->", data.data);
			//$scope.invoiceList=data.data;
			$scope.visitlist=data.data;
			$scope.visitlistCancelled = data.data;
		}), res.error(function(data, status, headers,config) {
			console.log("fail data");
		});
	}
	
	
	$scope.invoiceOpenFilter=function(){
		var from=$scope.financeFilter.from;
		var to=$scope.financeFilter.to;
		console.log("data-->",from);
		var res = $http({
			method : 'get',
			url : 'invoice/invoiceOpenFilter',
			params : {
				from : from,
				to:to
			}
		});
		res.success(function(data, status, headers, config) {
			console.log("success data-->", data.data);
			$scope.invoiceList=data.data;
			$scope.invoiceList = data.data;
		}), res.error(function(data, status, headers,config) {
			console.log("fail data");
		});
	}
	
});