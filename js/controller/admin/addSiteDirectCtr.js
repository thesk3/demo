myApp.controller('addSiteDirectCtr', function ($scope, $rootScope,dataSideService,dataService, $timeout, $http, $location) {
	// create a message to display in our view
	$rootScope.title = "View Site";
	
	
	$('.getDate').datepicker({
		format: "dd-M-yyyy",
		todayBtn: "linked",
		multidate: false,
		todayHighlight: true,
		autoclose: true
	});
	
	/*to get all sites of client*/
	$scope.init=function(){
		var obj = dataService.get();
		var clientID=obj.clientID;
		var res = 	$http({
			  method: 'post',
			  url: 'client/getSitesByClient',
				params: {
					clientID:clientID,
			    }
			});
		res.success(function(data, status, headers, config) {
			console.log("list of sites", data.data);
			$scope.addressList=data.data;
		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
		});
		

	}
	
	$scope.clientInfo = dataService.get();
	
	var index;
	var rw;
	/*show pop up delete site address*/
	$scope.deleteAddress=function(rw){
		$scope.newRW=rw;
		index = $scope.addressList.indexOf(rw);
		$('#deleteSite').modal({
			backdrop : 'static',
			keyboard : false
		})
	$('#deleteSite').modal('show');
		
		
	}
	//remove site address
	$scope.removeElement = function() {
		
	
		var data = $scope.newRW;
		var res = $http.post('client/deleteSite', data);
		res.success(function(data, status, headers, config) {
			console.log("SUCCESS DATA:", data);
			
			$scope.init();

		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
		});
		$scope.addressList.splice(index, 1);
	}

	
	//any change  make in checkbox call thi function
	$scope.updateSelection = function(position, entities,rw) {
		for(var i =0;i<entities.length;i++)
		{
		
		if(entities[i].checked==true)
		{
		$scope.hideshow = true;
		break;
		}
		$scope.hideshow = false;
		
		}
		
		angular.forEach(entities, function(selected, index) {
	
			if (position != index)
				selected.checked = false;
		});
		dataSideService.set(rw);
		
	}
	
	
	/* add site */
	$scope.addSite = function() {
		$scope.clientInfo = dataService.get();

		$scope.newSite1.clientID = $scope.clientInfo.clientID;
		console.log("row data--->", $scope.newSite1);

		var data = $scope.newSite1;
		var res = $http.post('client/addSite', data);
		res.success(function(data, status, headers, config) {
			console.log("SUCCESS DATA:", data);
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
		$('#popup').modal('show');
			$scope.init();

		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
		});
		$scope.newSite1={};

	}
	
	/* update site */
	$scope.updateSite = function() {

		console.log("to save arrdres--->",$scope.addressList);
		
		var data = $scope.addressList;
		var res = $http.post('client/updateSite', data);
		res.success(function(data, status, headers, config) {
			console.log("SUCCESS DATA:", data);
			$('#popup').modal({
				backdrop : 'static',
				keyboard : false
			})
		$('#popup').modal('show');
		}), res.error(function(data, status, headers, config) {
			console.log("fais DATA:", data);
		});
		
	}

	
	});	