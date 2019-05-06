// create the controller and inject Angular's $scope
myApp.controller('mainCtr', function($scope, $rootScope, DTOptionsBuilder,dataService,$location,
	AuthenticationService, $http) {
// create a message to display in our view
$rootScope.title = "Matrimony";

// new password function
$scope.updatePassword = function() {
	var id = $rootScope.globals.currentUser.userID;
	$scope.newPass.userID = id;

	var data = $scope.newPass;

	var res1 = $http.post('changePassword', data)
	res1.success(function(data, status, headers, config) {

		$scope.newPass = null;
		if (data.code == 200) {
			$('#changePwd').modal('hide');
			$scope.msg=data.message;
			$('#updatePasswordSuccess').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#updatePasswordSuccess').modal('show');
		}
		if (data.code == 400) {
			$scope.msg=data.message;
			$('#changePwd').modal('hide');
			$('#updatePasswordError').modal({
				backdrop : 'static',
				keyboard : false
			})
			$('#updatePasswordError').modal('show');
		
		}

	}), res1.error(function(data, status, headers, config) {
	
		$('#changePwd').modal('hide');
		$('#updatePasswordError').modal({
			backdrop : 'static',
			keyboard : false
		})
		$('#updatePasswordError').modal('show');
	
	});
	
	
	$scope.relod=function(){
		console.log("in client list progrsm");
		$('#updatePasswordError').modal('hide');
		$timeout(function() {
			location.reload();
		}, 400);
		
	}
	
};
 //logout
 $scope.logout = function() {
	
		$location.path("/login");
	
}


});

myApp.controller('loginCtr', function($scope, $rootScope, $location,$mdDialog,
	AuthenticationService, $http) {
// create a message to display in our view
$rootScope.title = "Login - Matrimony";
			
	// create a message to display in our view
	$scope.showTabDialog = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/loginModel.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
	};


	$scope.showTabDialog1 = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/registermodel.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
	};
	function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
			console.log("in cancel1")
			$mdDialog.cancel();
			$scope.showTabDialog(event);
			//$location.path("dashboard");
		//	cancel1();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
		};
		$scope.cancelDiloge = function() {
			$mdDialog.cancel();
		}
		
    $scope.login = function() {
			console.log("in login");
		
			$("#loader").fadeIn();
			console.log("username------>",$scope.username, $scope.password);
			AuthenticationService.Login($scope.username, $scope.password, function(
					response) {
				$scope.error = true;
				$scope.response = response;
				console.log("response1--->", response);
				$location.path("/home/dashboard");
					$("#loader").fadeOut();
					//console.log("response-->",$scope.response);
					$scope.logerrormsg=" ";	
					 if ($scope.response.success == true) {
						$mdDialog.cancel();
						$scope.response.message = "Login Successfully";
						AuthenticationService.SetCredentials("username","userID","password");
		
						$location.path("/home/myprofile");
					
					
					 }
					 else
						$scope.logerrormsg="Incorrect  username or password";	
					 


					if ($scope.response.code == 400) {
							$scope.logerrormsg="Incorrect  username or password";					
						$scope.response.message = "Wrong username or password";
						//$scope.password = null;
						//$scope.username = null;
					}
		
					if ($scope.response.code == 504) {
						
						$scope.password = null;
						$scope.username = null;
						$scope.response.message = "Database Server Unreachable";
					}

				
			});
		
		};
		
	}
	

	$scope.register=function(){
		$mdDialog.cancel();
		$location.path("registration");
		console.log("dfgdf");
	}
	$scope.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500,
    special: true
  };
	

	$scope.hello = function(){
		console.log("hello functions");
		$location.path("registration");
	}

	$scope.users =  $scope.users  || [
        { id: 1, name: 'Male' },
        { id: 2, name: 'Female' }
       
	  ];
	  $scope.age =  $scope.age  || [
        { id: 1, name: '18' },
		{ id: 2, name: '19' },
		{ id: 1, name: '20' },
		{ id: 1, name: '21' },
		{ id: 1, name: '30' },
		{ id: 1, name: '40' },
		{ id: 1, name: '50' },
		{ id: 1, name: '60' },
		{ id: 1, name: '70' }

       
      ];

	  $scope.age1 =  $scope.age1  || [
        { id: 1, name: '18' },
		{ id: 2, name: '19' },
		{ id: 1, name: '20' },
		{ id: 1, name: '21' },
		{ id: 1, name: '30' },
		{ id: 1, name: '40' },
		{ id: 1, name: '50' },
		{ id: 1, name: '60' },
		{ id: 1, name: '70' }

       
	  ];
	  $scope.religion =  $scope.religion  || [
        { id: 1, name: 'Jain' },
		{ id: 2, name: 'Hindu' },
		{ id: 3, name: 'Sikh' },
		{ id: 4, name: 'Parasi' },
		{ id: 5, name: 'Christian' },
		{ id: 6, name: 'Buddhisht' },
		{ id: 7, name: 'Muslim' },
		{ id: 7, name: 'Jewish' },
		{ id: 7, name: 'Other' }




       
	  ];
	  $scope.cast =  $scope.cast  || [
        { id: 1, name: 'Jain' },
		{ id: 2, name: 'Hindu' },
		{ id: 1, name: 'Sikh' }

       
      ];

$scope.homeSideImageFirst="images/couple1.jpg";
$scope.homeSideImageSecond="images/wedding1.jpg";

AuthenticationService.ClearCredentials();
$("#loader").fadeOut();
// login function

$scope.createprofile =function(){
	console.log("details-->");

}

// / Call forgot password details
$scope.sendCredentials = function() {
	$scope.emailID;

	var res = $http({
		method : 'get',
		url : 'forgotPassword',
		params : {
			emailAddress : $scope.emailID
		}
	});
	res.success(function(data, status, headers, config) {
		$('#myModal').modal('hide');
		console.log("data--->",data);
		$('#ForgotPasswordSuccess').modal({
			backdrop : 'static',
			keyboard : false
		})
		$scope.msg=data.message;
		$scope.emailID=null;
		$('#ForgotPasswordSuccess').modal('show');

	}), res.error(function(data, status, headers, config) {
		$('#myModal').modal('hide');
		$('#ForgotPasswordError').modal({
			backdrop : 'static',
			keyboard : false
		})
		$('#ForgotPasswordError').modal('show');
		$scope.emailID=null;
	});

	/*
	 * // return the promise directly. return $http({ method : 'GET', url :
	 * 'forgotPassword', params : { emailAddress : $scope.emailID } })
	 * .success(
	 * 
	 * function(result) { result = {}; result.code = 200; console
	 * .log("forgot details response :" + result.data);
	 * $('#myModal').modal('hide'); $('#ForgotPasswordSuccess').modal({
	 * backdrop : 'static', keyboard : false })
	 * $('#ForgotPasswordSuccess').modal('show'); return result.data; })
	 * .error( function(result) { result = {}; result.code = 504; console
	 * .log(" response :" + result.code); $('#myModal').modal('hide');
	 * $('#ForgotPasswordError').modal({ backdrop : 'static', keyboard :
	 * false }) $('#ForgotPasswordError').modal('show'); return result.code;
	 * });
	 */
}

/*
 * $scope.login = function() { $("#loader").fadeIn();
 * //$location.path('/home/customerpool');
 * AuthenticationService.Login($scope.username, $scope.password, function(
 * response) { $scope.error = true; $scope.response = response; if
 * ($scope.response.code == 200) {
 * 
 * console.log($scope.response.data.modules)
 * AuthenticationService.SetCredentials( $scope.response.data.firstName,
 * $scope.password, $scope.response.data.role);
 * 
 * $location.path('/home/MyDeva'); $("#loader").fadeOut();
 *  } if ($scope.response.code == 400) { $("#loader").fadeOut();
 * $scope.password = null; } if ($scope.response.code == 504) {
 * $("#loader").fadeOut(); $scope.password = null;
 * $scope.response.message="Database Server Unreachable"; } }); };
 */

});

myApp.run([
	'$rootScope',
	'$location',
	'$cookieStore',
	'$http',
	'AuthenticationService',
	function($rootScope, $location, $cookieStore, $http,
			AuthenticationService, $window) {
		// keep user logged in after page refresh
		$rootScope.globals = $cookieStore.get('globals') || {};
		if ($rootScope.globals.currentUser) {
			$http.defaults.headers.common['Authorization'] = 'Basic '
					+ $rootScope.globals.currentUser.authdata; // jshint
																// ignore:line
		}
		// check session
		// $rootScope.$on('$stateChangeSuccess', function() {
		// 	$http({
		// 		method : 'GET',
		// 		url : 'checkSession',
		// 	}).success(function(data, status, headers, config) {
		// 		console.log(data.message);
		// 		console.log("code-->",data.code);
				
		// 		if (data.code == 502) {
		// 			$rootScope.logout();
		// 			$('#sessionpopup').modal({
		// 				backdrop : 'static',
		// 				keyboard : false
		// 			})
		// 			$('#sessionpopup').modal('show');
		// 		}
		// 	}, function myError(response) {
		// 		console.log("Not able to redirect to login page ");
		// 	});
		// });
		
		$rootScope.$on('$locationChangeStart', function(event, next,
				current) {
			// redirect to login page if not logged in
			// if ($location.path() !== '/login'
			// 		&& !$rootScope.globals.currentUser) {
			// 	$location.path('/login');
			// }
		});

		 //logout
		$rootScope.logout = function() {
			$http({
				method : 'GET',
				url : 'logout',
			}).success(function(data, status, headers, config) {
				$location.path("/login");
			}, function myError(response) {
				$location.path("/login");
			});
			
		}
	} ]);
