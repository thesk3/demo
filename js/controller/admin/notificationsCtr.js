myApp.controller('notificationsCtr', function($scope, $rootScope, dataService,dataSideService,
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
	
	$("#loader").fadeOut();
	
	
	/*$(".chosen-select").chosen({
		  no_results_text: "Oops, nothing found!"
		})*/
		
		
		
	$scope.init=function(){
		
		var res = $http({
			method : 'get',
			url : 'client/getAllNotifications',
		});
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			//$scope.clientlist = data.data;
			$scope.notifications = data.data;
			console.log("--->",data.data);
			
		}), res.error(function(data, status, headers, config) {
			console.log("fail data");
			$("#loader").fadeOut();
		});
		
	}
	
	$scope.msgSendTo=function(){
			
		console.log("hello");
		console.log("number --->",$scope.msg.recipient);
		var number=$scope.msg.recipient;
		
		if(number==1)
		{
			$scope.msg.sendToSite=null;
			$scope.msg.sendToclient=null;
		
		}
		if(number==3)
		{
		
			$scope.msg.sendToSite=null;
			$scope.msg.sendToclient=null;
		}
		
		if(number==2)
			{
			
			$scope.msg.sendToSite=null;
			$("#loader").fadeIn();
			var res = $http({
				method : 'get',
				url : 'client/getAllclient',
			});
			res.success(function(data, status, headers, config) {
				$("#loader").fadeOut();
				 $scope.toppings = data.data;
				
				
				
				
				
				  	             $scope.msg.clientID = [];
				  	       /*      $scope.printSelectedToppings = function printSelectedToppings() {
				  	               var numberOfToppings = this.selectedToppings.length;

				  	               // If there is more than one topping, we add an 'and'
				  	               // to be gramatically correct. If there are 3+ toppings
				  	               // we also add an oxford comma.
				  	               if (numberOfToppings > 1) {
				  	                 var needsOxfordComma = numberOfToppings > 2;
				  	                 var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' and ';
				  	                 var lastTopping = lastToppingConjunction +
				  	                     this.selectedToppings[this.selectedToppings.length - 1];
				  	                 return this.selectedToppings.slice(0, -1).join(', ') + lastTopping;
				  	               }

				  	               return this.selectedToppings.join('');
				  	             };*/

				
				
				
				
				
				console.log("--->",data.data);
				$scope.init();
			}), res.error(function(data, status, headers, config) {
				console.log("fail data");
				$("#loader").fadeOut();
			});
			
			}
		
		if(number==4)
		{
			$scope.msg.sendToclient=null;
			var res = $http({
				method : 'get',
				url : 'client/getAllSite',
			});
			res.success(function(data, status, headers, config) {
				$("#loader").fadeOut();
				//$scope.clientlist = data.data;
				$scope.sitelist = data.data;
				
				$scope.toppings1 = data.data;
				
				
				
				
				
 	             $scope.msg.siteID = [];
 	             
 	             
				console.log("--->",data.data);
				$scope.init();
			}), res.error(function(data, status, headers, config) {
				console.log("fail data");
				$("#loader").fadeOut();
			});
		}
	}
	
	
	$scope.sendMsg=function(){
		var number=$scope.msg.recipient;
		if(number==1)
		{
			$scope.msg.sendToSite=null;
			$scope.msg.sendToclient=null;
		
		}
		if(number==0)
		{
			$scope.msg.sendToSite=null;
			$scope.msg.sendToclient=null;
		
		}
		if(number==3)
		{
		
			$scope.msg.sendToSite=null;
			$scope.msg.sendToclient=null;
		}
		console.log("data-->",$scope.msg);
		
		
		var data = $scope.msg;
		var res = $http.post('client/notificationsSend', data)
		res.success(function(data, status, headers, config) {
			$("#loader").fadeOut();
			//$scope.clientlist = data.data;
			
			console.log("Successfull--->",data.data);
			$scope.init();
			//$scope.msg=" ";
			//$scope.msg={};
			
			
			
			
			$('#sendNotifications').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#sendNotifications').modal('show');

		}), res.error(function(data, status, headers, config) {
			console.log("fail data");
			$("#loader").fadeOut();
		});
	}
/*	 $scope.sizes = [
	                 "small (12-inch)",
	                 "medium (14-inch)",
	                 "large (16-inch)",
	                 "insane (42-inch)"
	             ];*/
	
	
	$scope.realode=function(){
		
		location.reload(true);
	}
	           
});




/**
Copyright 2018 Google LLC. All Rights Reserved. 
Use of this source code is governed by an MIT-style license that can be found
in the LICENSE file at http://material.angularjs.org/HEAD/license.
**/