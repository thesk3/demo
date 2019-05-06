myApp
		.controller(
				'createInvoiceCtr',
				function($scope, dataService, $rootScope, $timeout, $http,
						$location) {
					// create a message to display in our view
					$rootScope.title = "Create Invoice";

					$('.getDate').datepicker({
						format : "dd-M-yyyy",
						todayBtn : "linked",
						multidate : false,
						todayHighlight : true,
						autoclose : true
					});
					$scope.invoiceu = dataService.get();
					$("#loader").fadeOut();
					// for Unitwise ArrayList
					var ro = {

						"description" : null,
						"qty" : null,
						"unit" : null,
						"rate" : null,
						"amount" : null
					};
					$scope.rows = [ ro ];
					var counter = 1;
					$scope.addRow = function($event, mytab, tabname) {

						var key = $event.keyCode;
						if (key == 13) {
							console.log("YEY Enter  Is Pressed");
							$scope.rows.push({

								"description" : null,
								"qty" : null,
								"unit" : null,
								"rate" : null,
								"amount" : null
							});
						}
						console.log("rows -->", $scope.rows);
					};

					// for Lumpsum ArrayList
					var ro2 = {

						"description" : null,
						"qty" : null,
						"unit" : null,
						"rate" : null,
						"amount" : null
					};
					$scope.rows2 = [ ro2 ];
					var counter = 1;
					$scope.addRow2 = function($event, mytab, tabname) {

						console.log("in function", $scope.rows2);

						var key = $event.keyCode;
						if (key == 13) {
							console.log("YEY Enter  Is Pressed");
							$scope.rows2.push({

								"description" : null,
								"qty" : null,
								"unit" : null,
								"rate" : null,
								"amount" : null
							});
						}

					};

					// for VisitWise ArrayList
					var ro3 = {

						"description" : null,
						"qty" : null,
						"unit" : null,
						"rate" : null,
						"amount" : null
					};
					$scope.rows3 = [ ro3 ];
					var counter = 1;
					console.log("gross amount-->", $scope.invoiceu);

					$scope.addRow3 = function($event, mytab, tabname) {

						var key = $event.keyCode;
						if (key == 13) {

							$scope.rows3.push({

								"description" : null,
								"qty" : null,
								"unit" : null,
								"rate" : null,
								"amount" : null
							});
						}

					};

					var g = 0;
					var g2 = 0;
					var g3 = 0;

					// for visitwise calculation
					$scope.grossamt = function(rs) {
						console.log("in gross amont");
						var grossamount = 0;
						console.log("before loop rows lengthj", $scope.rows.length);
						for (var i = 0; i < $scope.rows.length; i++) {
							console.log("in for loop");
							console.log("row-->",$scope.rows[i]);
							$scope.rows[i].amount = $scope.rows[i].qty* $scope.rows[i].rate;
							grossamount += $scope.rows[i].amount;
							$scope.invoiceu.grossamount = grossamount;
							g = $scope.invoiceu.grossamount;
							console.log("grossamount of g1-->",g);
						}
						$scope.invoiceu.total = $scope.invoiceu.grossamount;
						console.log("grossamount-->",$scope.invoiceu.grossamount);
						console.log("grossamount of g2-->",g);

						$scope.total();

					};
					$scope.grossamt3 = function(rs) {
						var grossamount = 0;

						for (var i = 0; i < $scope.rows3.length; i++) {

							$scope.rows3[i].amount = $scope.rows3[i].qty
									* $scope.rows3[i].rate;
							grossamount += $scope.rows3[i].amount;
							$scope.invoiceu.grossamount3 = grossamount;
							g3 = $scope.invoiceu.grossamount3;
						}
						$scope.invoiceu.total = g
								+ $scope.invoiceu.grossamount3;
						$scope.total();
					};
					$scope.grossamt2 = function(rs) {
						console.log("in funct");
						var grossamount = 0;
						for (var i = 0; i < $scope.rows2.length; i++) {

							grossamount += $scope.rows2[i].amount;
							g2 = grossamount;
						}
						$scope.invoiceu.grossamount2 = grossamount;
						$scope.invoiceu.total = g
								+ $scope.invoiceu.grossamount2 + g3;
						$scope.total();
					};
					var tab;
					$scope.tablelist = [ tab ];

					$scope.addTable = function() {
						/*
						 * console.log("in add
						 * table",$scope.invoiceu.invoicetype);
						 * console.log("includes-->
						 * ",$scope.tablelist.includes("1"));
						 */
						if ($scope.invoiceu.invoicetype != undefined) {
							if (false == $scope.tablelist
									.includes($scope.invoiceu.invoicetype)) {
								$scope.tablelist
										.push($scope.invoiceu.invoicetype);

								$scope.msg = " ";
								$scope.sh = $scope.invoiceu.invoicetype;
							}

							else {
								$scope.msg = "Selected section already exists";
								$timeout(function() {
									$scope.msg = "";
								}, 5000);
							}

						}

						console.log("in add table", $scope.tablelist);
					}

					$scope.removeTable = function(tb, rowName) {
						/*if ($scope.tablelist[0] == undefined)
							$scope.tablelist.splice(0, 1);*/
						var a=tb;
						
						console.log("numbere-->", a);
						
						index = $scope.tablelist.indexOf(a);
						console.log("a-->", $scope.tablelist.indexOf(a));
						
						
						$scope.tablelist.splice(index, 1);

						if (rowName == "rows") {
							$scope.rows = null;
							$scope.invoiceu.grossamount=0;
							$scope.total();
							$scope.rows = [{
								"description" : null
							}];
						}
						if (rowName == "rows2") {
							$scope.invoiceu.grossamount2=0;
							console.log();
							$scope.total();
							//$scope.invoiceu.total=$scope.invoiceu.total-$scope.invoiceu.grossamount2;
							
							$scope.rows2 = null;
							$scope.rows2 = [{
								"description" : null
							}];
						}
						if (rowName == "rows3") {
							$scope.rows3 = null;
							$scope.invoiceu.grossamount3=0;
							$scope.total();
							$scope.rows3 = [{
									"description" : null
								}];
						}

											
						console.log("in add table", $scope.tablelist);

					}

					$scope.deleteRows = function(rs) {

						var index = $scope.rows.indexOf(rs);
						$scope.rows.splice(index, 1);

					}

					$scope.deleteRows2 = function(rs) {

						var index = $scope.rows2.indexOf(rs);
						$scope.rows2.splice(index, 1);

					}
					$scope.deleteRows3 = function(rs) {

						var index = $scope.rows3.indexOf(rs);
						$scope.rows3.splice(index, 1);

					}
					/*
					 * $scope.chekrow=function () {
					 * 
					 * var tbody = $("#myTable tbody");
					 * 
					 * if (tbody.children().length == 0) { tbody.html("<tr>message
					 * foo</tr>"); } console.log("check row index-->"); }
					 */
					$scope.total = function() {
						console.log("in total");
						if ($scope.invoiceu.grossamount == undefined)
							$scope.invoiceu.grossamount = 0;

						if ($scope.invoiceu.grossamount2 == undefined)
							$scope.invoiceu.grossamount2 = 0;

						if ($scope.invoiceu.grossamount3 == undefined)
							$scope.invoiceu.grossamount3 = 0;
						console.log("gross amount ",
								$scope.invoiceu.grossamount);
						console.log("gross amount 2",
								$scope.invoiceu.grossamount2);
						console.log("gross amount 3",
								$scope.invoiceu.grossamount3);

						$scope.invoiceu.total = $scope.invoiceu.grossamount
								+ $scope.invoiceu.grossamount2
								+ $scope.invoiceu.grossamount3;
						$scope.totalNumbert=inWords($scope.invoiceu.total);
					}
					//console.log("invoice121 data-->", $scope.invoiceu);
					$scope.invoice = function() {

						$scope.invoiceu.unitwise = $scope.rows;
						$scope.invoiceu.lumpsum = $scope.rows2;
						$scope.invoiceu.visitwise = $scope.rows3;
						$scope.invoiceu.gstn = $scope.invoiceu.clientGST;
						console.log("invoice121 data-->", $scope.invoiceu);

						var data = $scope.invoiceu;
						var res = $http.post('invoice/createInvoice', data)
						res.success(function(data, status, headers, config) {

							$scope.invoiceID = data.data;

							$('#invoiceSucceess').modal({
								backdrop : 'static',
								keyboard : false
							})
							$('#invoiceSucceess').modal('show');
							console.log("SUCCESS DATA:", data.data);

						}), res.error(function(data, status, headers, config) {
							$('#invoiceSucceess').modal({
								backdrop : 'static',
								keyboard : false
							})
							$('#invoiceSucceess').modal('show');
						});

					}
					$scope.invoiceu.remarks=null;
					
					var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
					var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

					function  inWords(n) {
					    var nums = n.toString().split('.')
					    var whole = withDecimal(nums[0])
					    
					    if (nums.length == 2) {
					        var fraction = withDecimal(nums[1]);
					        console.log("---->",whole,fraction);
					        return whole + 'and ' + fraction+'Rupees only';
					    } else {
					        return whole;
					    }
					}
					
					function withDecimal (num) {
					    if ((num = num.toString()).length > 91) return 'overflow';
					    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
					    if (!n) return; var str = '';
					    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
					    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
					    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
					    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
					    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + ' ' : '';
					    return str;
					}

					if($scope.invoiceu.total!=undefined)
					
					
						
					console.log(new Date().getFullYear().toString().substr(-2));

					var year = new Date().getFullYear().toString().substr(-2);
					var thisYear = parseInt(year);
					var nextYear = thisYear + 1;
					$scope.invoiceDate = thisYear + "-" + nextYear;

					if ($scope.invoiceu.billingEntity == '1') {
						$scope.idCode = "MRC";
					}
					if ($scope.invoiceu.billingEntity == '2') {
						$scope.idCode = "CA";
					}
					console.log("id-->", $scope.idCode, $scope.invoiceDate);

					if ($scope.invoiceu.billingEntity == '1') {
						$scope.invoiceu.name = "Manoj Chemburkar";
						$scope.invoiceu.bankName = "Vasai	Janata Sahakari Bank Ltd";
						$scope.invoiceu.branch = "Bhayandar (East)";
						$scope.invoiceu.ifsc = "VASJ0000005";
						$scope.invoiceu.accountNumber = "005010100005981";
						$scope.invoiceu.accountType = "Savings";
						$scope.invoiceu.pan = "ACDPC6214H";
						$scope.invoiceu.officeAddress = "101, Manoj Kunj, Old Cabin Road, Opp. Saraswati Vidyalaya,"
								+ " Kharigaon, Bhayandar (East), Dist. Thane 401 105. \n"
								+ "Tel: 022 - 2814 1184 , email : manojchemburkar@rediffmail.com";
					} else {
						$scope.invoiceu.name = "Chemburkar & Associates";
						$scope.invoiceu.bankName = "The Bharat Co-op. Bank (Mumbai) Ltd.	";
						$scope.invoiceu.branch = "Borivali (W)";
						$scope.invoiceu.ifsc = "BCBM0000007";
						$scope.invoiceu.accountNumber = "000612100022734";
						$scope.invoiceu.pan = "AAIHM1495D";
						$scope.invoiceu.officeAddress = "D / 126,  Ganesh  Krupa,   Chembur  Gaothan,"
								+ " Chembur, Mumbai - 400 071.\n"
								+ "Tel : 9820355877     email : chemburkar.assoc@gmail.com	";

					}

					console.log("sucees data-->", $scope.invoiceu);

					$scope.invoiceList = function() {
						console.log("in client list progrsm");
						$timeout(function() {
							$location.path("/home/invoicepool");
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