myApp.controller('invoiceCtr', function($scope, $rootScope, dataService,
		$timeout, $http, $location) {
	// create a message to display in our view
	$rootScope.title = "Invoice";

	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		todayHighlight : true,
		 endDate: '+0d',
		autoclose : true
	});
	
	$scope.init = function() {
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
	var selectVisitID = 0;

	
	var rwSelectedData=null
	
	$scope.rwSelecte=function(invoice){
		
	console.log("invoice select-->",invoice);
	selectVisitID=invoice.visitID;
	rwSelectedData=invoice;
	}
	console.log("clicked-->");
	 $scope.autoScroll = true;
	
/*	$(document).ready(function() {
		var table = $('#dataTable1').DataTable();

		$('#dataTable1 tbody').on('click', 'tr', function() {
			console.log("clicked-->");
			if ($(this).hasClass('selected')) {
				$(this).removeClass('selected');
			} else {
				table.$('tr.selected').removeClass('selected');
				$(this).addClass('selected');
			}
		});

	});*/
	
	
	/*
	 * $('#dataTable1 tbody').on( 'click', 'tr', function () { var table =
	 * $('#dataTable1').DataTable(); $(this).toggleClass('selected'); } );
	 */
	var val = 0;
	var iidarray = 0;
	$scope.getdata = function(number) {
	/*	var oTable = $('#dataTable1').DataTable();
		var oData = oTable.rows('.selected').data();
		for (var i = 0; i < oData.length; i++) {
			val = oData[i][10];
			console.log(oData[i][11]);
		}

		var strArray = val.split(">");
		var str = strArray[1].split("<");
		// Display array values on page
		selectVisitID = str[0];*/
		if (number == 1) {
			console.log("1 close visit");
			if(rwSelectedData.invoiceID!=0)
				{
				$scope.closeVisit();
				
				}
			else
			{
			$('#invoiceNotCreated').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#invoiceNotCreated').modal('show');$scope.init();
			}
		}

		if (number == 2) {
			console.log("2 send sms",rwSelectedData);
			if(rwSelectedData.invoiceID!=0){
				$scope.sendSMS();
				
			}
			else
				{
				$('#invoiceNotCreated').modal({
					backdrop : 'static',
					keyboard : false
				})
				$('#invoiceNotCreated').modal('show');$scope.init();
				}
		}

		if (number == 3) {
			console.log("3 send email.");
			if(rwSelectedData.invoiceID!=0){
				$scope.sendEmail();
				
			}
			else
			{
			$('#invoiceNotCreated').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#invoiceNotCreated').modal('show');$scope.init();
			}
		}

		// 
	}

	// Functiopns for sending notifications
	$scope.sendEmail = function() {
		var res = $http({
			method : 'get',
			url : 'visit/sendEmail',
			params : {
				selectVisitID : selectVisitID,
			}
		});
		res.success(function(data, status, headers, config) {
			console.log("success data", data);
			$scope.notificationType = "Email sent ";
			$('#notoficatons').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#notoficatons').modal('show');$scope.init();

		}), res.error(function(data, status, headers, config) {
			console.log("fail data");$scope.init();
		});

	}

	$scope.sendSMS = function() {
		var res = $http({
			method : 'get',
			url : 'visit/sendSMS',
			params : {
				selectVisitID : selectVisitID,
			}
		});
		res.success(function(data, status, headers, config) {
			console.log("success data", data);
			$scope.notificationType = "SMS sent";
			$('#notoficatons').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#notoficatons').modal('show');$scope.init();

		}), res.error(function(data, status, headers, config) {
			console.log("fail data");$scope.init();
		});

	}

	$scope.closeVisit = function() {
		console.log("in funcrt--->", selectVisitID);
		var res = $http({
			method : 'get',
			url : 'visit/getVisit',
			params : {
				selectVisitID : selectVisitID,
			}
		});
		res.success(function(data, status, headers, config) {
			console.log("success data", data.data);
			$scope.notificationType = "Visit Close";
			console.log("data-->", data.data);
			$scope.invoiceClose = data.data;
			$scope.init();
			
		}), res.error(function(data, status, headers, config) {
			console.log("fail data");
		});

		$('#closeVisit').modal({
			backdrop : 'static',
			keyboard : false
		})
		$('#closeVisit').modal('show');
	}

	

	// for create invoice
	$scope.invoice = function() {

		console.log("new visit-->", $scope.invoiceu)
	}

	var invoice1;
	$scope.createInvoice = function() {
		console.log("in optradio-->", $scope.optradio);
		invoice1.billingEntity = $scope.optradio;
		console.log("in visit details-->", invoice1);

		dataService.set(invoice1);
		$timeout(function() {
			dataService.set(invoice1);
			$location.path("/home/createInvoice");
		}, 400);

	}
	$scope.createInvoicepopup = function(invoice) {
		invoice1 = invoice;
		console.log("in visit details-->", invoice);
		$('#bilingentity').modal({
			backdrop : 'static',
			keyboard : false
		})
		$('#bilingentity').modal('show');
	}

	$scope.printInvoice = function(id) {
		console.log("invoice id-->", id);
		dataService.set(id);
		$location.path("/home/printInvoice");
	}

	$scope.closeInvoice = function() {
		console.log("invoice  close1--->", $scope.invoiceClose);
		$scope.invoiceClose.siteCitySelected=rwSelectedData.siteCitySelected;
		$scope.invoiceClose.activity=rwSelectedData.activity;
		//data=rwSelectedData;
		console.log("invoice  close2--->", $scope.invoiceClose);
		var res = $http.post('visit/closeVisit', $scope.invoiceClose)
		res.success(function(data, status, headers, config) {
			console.log("success data", data.data);
			console.log("data-->", data.data);
			$scope.invoiceClose = data.data;
		
			location.reload();
		}), res.error(function(data, status, headers, config) {
			console.log("fail data");
		});

		$('#closeVisit').modal({
			backdrop : 'static',
			keyboard : false
		})
		$('#closeVisit').modal('show');$scope.init();
	}

	// redirect to client list from pop client added
	$scope.invoicepool = function() {
		console.log("in client list progrsm");
		$timeout(function() {
			
			$location.path("/home/invoicepool");
		}, 400);
	}
	
	//highlight row with selected class
	$scope.idSelectedRow = null;
	$scope.setSelected = function (idSelectedRow) {
	   $scope.idSelectedRow = idSelectedRow;
	};
	

});