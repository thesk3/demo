myApp.controller('printInvoiceCtr', function($scope,dataService,$filter,seqenceService, $rootScope, $timeout, $http,
		$location) {
	// create a message to display in our view
	$rootScope.title = "print invoice";
	$('.getDate').datepicker({
		format : "dd-M-yyyy",
		todayBtn : "linked",
		multidate : false,
		startDate : new Date(),
		todayHighlight : true,
		autoclose : true
	});
	var id=dataService.get();
	console.log(id);
	
	$http({
		method : 'GET',
		url : 'invoice/getInvoiceData',
		params : {
			id : id,
		}
	})
			.success(
					function(data, status) {
						$("#loader").fadeOut();
					console.log("data-->",data);
					$scope.invoiceu=data.data;
					$scope.total=$scope.invoiceu.total;
					$scope.invoiceu.total=inWords ($scope.invoiceu.total);

					$scope.rows=$scope.invoiceu.unitwise;
					$scope.rows3=$scope.invoiceu.visitwise;
					$scope.rows2=$scope.invoiceu.lumpsum;
					if($scope.invoiceu.billingEntity=='1')
					{
						$scope.idCode="MRC";
						$scope.invoiceu.name="Manoj Chemburkar";
						$scope.invoiceu.bankName="Vasai	Janata Sahakari Bank Ltd";
						$scope.invoiceu.branch="Bhayandar (East)";
						$scope.invoiceu.ifsc="VASJ0000005";
						$scope.invoiceu.accountNumber="005010100005981";
						$scope.invoiceu.accountType="Savings";
						$scope.invoiceu.pan = "ACDPC6214H";
						$scope.invoiceu.officeAddress = "101, Manoj Kunj, Old Cabin Road, Opp. Saraswati Vidyalaya," +
						" Kharigaon, Bhayandar (East), Dist. Thane 401 105. \n" +
						"Tel: 022 - 2814 1184 , email : manojchemburkar@rediffmail.com";
					}
					if($scope.invoiceu.billingEntity=='2')
					{
							$scope.idCode="CA";
							$scope.invoiceu.name="Chemburkar & Associates";
							$scope.invoiceu.bankName="The Bharat Co-op. Bank (Mumbai) Ltd.	";
							$scope.invoiceu.branch="Borivali (W)";
							$scope.invoiceu.ifsc="BCBM0000007";
							$scope.invoiceu.accountNumber="000612100022734";
							$scope.invoiceu.pan = "AAIHM1495D";
							$scope.invoiceu.officeAddress = "D / 126,  Ganesh  Krupa,   Chembur  Gaothan," +
							" Chembur, Mumbai - 400 071.\n" +
							"Tel : 9820355877     email : chemburkar.assoc@gmail.com	";
						
					}
					})
			.error(
					function(data, status) {
						$("#loader").fadeOut();
						console.log("fail");
					});
	
	console.log(new Date().getFullYear().toString().substr(-2));
	
	var year=new Date().getFullYear().toString().substr(-2);
	var thisYear = parseInt(year);
	var nextYear= thisYear+1;
	$scope.invoiceDate=thisYear+"-"+nextYear;
	
console.log("id-->",$scope.idCode,$scope.invoiceDate);

	$scope.cancel=function(){
		
		console.log("cancel-->",seqenceService.get());
		if (1 == seqenceService.get()) {
			$location.path("home/finance");
			seqenceService.set(null)
		} 
		else  if (3 == seqenceService.get()) {
			dataService.set(3);
			$location.path("home/reportsInvoiceOpen");
			seqenceService.set(null)
		} 

		else  if (4 == seqenceService.get()) {
			dataService.set(4);
			$location.path("home/reportsInvoiceClose");
			seqenceService.set(null)
		} 
		
		else  if (5 == seqenceService.get()) {
			dataService.set(5);
			$location.path("home/reportsInvoiceCash");
			seqenceService.set(null)
		} 
		else 
			$location.path("home/invoicepool");
		
		
	}
	
	/*$scope.printInvoice=Function(){
		
		window.print();
	}
	*/
	
	
	var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
	var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

	function  inWords(n) {
	    var nums = n.toString().split('.')
	    var whole = withDecimal(nums[0])
	    if (nums.length == 2) {
	        var fraction = withDecimal(nums[1])
	        return whole + 'and ' + fraction+'Rupees only';
	    } else {
	        return whole;
	    }
	}
	
	
	function withDecimal (num) {
	    if ((num = num.toString()).length > 9) return 'overflow';
	    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
	    if (!n) return; var str = '';
	    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
	    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
	    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
	    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
	    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'Rupees only ' : '';
	    return str;
	}
	
	$scope.printPage=function(){
		var tempTitle = document.title;
		console.log("document--->",document);
		$scope.invoiceu.createdDate=$filter('date')($scope.invoiceu.createdDate, "dd-MMM-yy");
	    document.title = $scope.invoiceu.clientName+"_"+$scope.invoiceu.invoiceNO +"_"+$scope.invoiceu.createdDate+".pdf";
	   
	    window.print();
	    document.title = tempTitle;
	    document.date="";
	}	
	
});