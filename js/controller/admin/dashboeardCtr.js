myApp.controller('dashboeardCtr', function($scope, $rootScope, $timeout, $http,
		$location) {
	// create a message to display in our view
	$rootScope.title = "Dashboard";
	$("#loader").fadeOut();
	
	$scope.graphData=function(data){
		
		if(data==null)
			{
			console.log("in data null")
			Highcharts.chart('container', {
				  chart: {
				    type: 'column'
				  },
				  title: {
				    text: 'Invoice Graph'//Monthly Average Rainfall
				  },
				  subtitle: {
				    text: ''//Source: WorldClimate.com
				  },
				  xAxis: {
				    categories: [
				                 'Jan',
				                 'Feb',
				                 'Mar',
				                 'Apr',
				                 'May',
				                 'Jun',
				                 'Jul',
				                 'Aug',
				                 'Sep',
				                 'Oct',
				                 'Nov',
				                 'Dec'
				             ],
				    crosshair: true
				  },
				  yAxis: {
				    min: 0,
				    title: {
				      text: 'Amount'//Rainfall (mm)
				    },
				
				  },
				  tooltip: {
				    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				    footerFormat: '</table>',
				    shared: true,
				    useHTML: true
				  },
				  plotOptions: {
				    column: {
				      pointPadding: 0.2,
				      borderWidth: 0
				    }
				  },
				  series: [{
				    name: 'Invoices Receivables',
				    data: [0, 0, 0, 0,0, 0,0, 0, 0, 0,0, 0]

				  },  {
				    name: 'Payments Received',
				    data: [0, 0, 0, 0,0, 0,0, 0, 0, 0,0, 0]

				  }]
				});
			}
		if(data!=null)
		{
		var month=[];
		var recivableAmount=[];
		var receiptAmount=[];
		
		console.log("in graph data-->",data);
	
		
		angular.forEach(data, function(selected, index) {

			console.log(selected.month);
			month.push(selected.month);
			recivableAmount.push(selected.recivableAmount);
			receiptAmount.push(selected.receiptAmount);
		});
		console.log("recivableAmount-->",recivableAmount);
		console.log("receiptAmount-->",receiptAmount);
		receiptAmount = receiptAmount.map(function(v) {
			  return parseInt(v, 10);
			});
		recivableAmount = recivableAmount.map(function(v) {
			  return parseInt(v, 10);
			});
		console.log("recivableAmount-->",recivableAmount);
		console.log("receiptAmount-->",receiptAmount);
	const d1 = new Date();
	
	//chart details
	Highcharts.chart('container', {
	  chart: {
	    type: 'column'
	  },
	  title: {
	    text: 'Invoice Graph'//Monthly Average Rainfall
	  },
	  subtitle: {
	    text: ''//Source: WorldClimate.com
	  },
	  xAxis: {
	    categories: month,
	    crosshair: true
	  },
	  yAxis: {
	    min: 0,
	    title: {
	      text: 'Amount'//Rainfall (mm)
	    },
	
	  },
	  tooltip: {
	    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
	    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
	      '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
	    footerFormat: '</table>',
	    shared: true,
	    useHTML: true
	  },
	  plotOptions: {
	    column: {
	      pointPadding: 0.2,
	      borderWidth: 0
	    }
	  },
	  series: [{
	    name: 'Invoices Receivables',
	    data:  receiptAmount

	  },  {
	    name: 'Payments Received',
	    data: recivableAmount

	  }]
	});
	}
	
	}
	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		todayHighlight : true,
		autoclose : true
	});

	
	
	const monthNames = ["January", "February", "March", "April", "May", "June",
	                    "July", "August", "September", "October", "November", "December"
	                  ];

	                  const d = new Date();
	                  
	                  $scope.thisMonth=monthNames[d.getMonth()];
	                  $scope.nextMonth=monthNames[1+d.getMonth()];
	                  $scope.thisYear=d.getFullYear();
	
	var dates='';
	var res = $http.post('visit/getVisitDates')
	res.success(function(data, status, headers, config) {
	
		dates=data.data;

		$("#loader").fadeOut();
		//Attendance calandar
			$('#calendar').fullCalendar({
				header: {
					left: 'prev,next today',
					center: 'title',
					right: 'month'
				},
				defaultDate:new Date(),
				defaultView: 'month',
				editable: true,
				events:  data.data
			});
		
	}), res.error(function(data, status, headers, config) {
	
	});
	
  $scope.init=function(){
	
	
  }

  $scope.init=function(){
		var res = $http.post('visit/dashboardData')
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("dashboard data-->", data.data);
			
			$scope.graphData(data.data[2]);
			
			thisMonth=data.data[0];

			$scope.ScheduledCount=0;
			$scope.CompletedCount=0;
			$scope.PendingCount=0;
			thisMonth.forEach(function(visit) {
			    if(visit.status=='Scheduled')
			    	$scope.ScheduledCount++;
			    
			    if(visit.status=='Completed')
			    	$scope.CompletedCount++;
			
			    if(visit.status=='Pending')
			    	$scope.PendingCount++;
			
			});
			
			//next Month

			nextMonth=data.data[1];

			$scope.nextScheduledCount=0;
			$scope.nextCompletedCount=0;
			$scope.nextPendingCount=0;
			nextMonth.forEach(function(visit) {
			    if(visit.status=='Scheduled')
			    	$scope.nextScheduledCount++;
			    
			    if(visit.status=='Completed')
			    	$scope.nextCompletedCount++;
			
			    if(visit.status=='Pending')
			    	$scope.nextPendingCount++;
			
			});
			
		}), res.error(function(data, status, headers, config) {
		
		});
		
		
	  }
  $scope.init2=function(){
		$("#loader").fadeIn();
		var res = $http({
			method : 'get',
			url : 'invoice/getAllInvoice',
		});
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			$scope.InvoiceCreatedCount=0;
			$scope.InvoiceCompletedCount=0;
			$scope.invoiceList = data.data;
			$scope.invoiceList.forEach(function(visit) {
			    if(visit.invoiceID!=0)
			    	$scope.InvoiceCreatedCount++;
			    
			    if(visit.invoiceID==0)
			    	$scope.InvoiceCompletedCount++;
			
			});
		}), res.error(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("fail data");
		});
	  }
  
  
  $scope.init3=function(){
	  console.log("init3");
		$("#loader").fadeIn();
		var res = $http({
			method : 'get',
			url : 'visit/smsCount',
		});
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			
			$scope.smsCount = data.data;
			
		}), res.error(function(data, status, headers, config) {
			$("#loader").fadeOut();
			console.log("fail data");
		});
	  }
  
  
  
  
  
  
  
  
  
});