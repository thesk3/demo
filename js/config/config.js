
	var myApp = angular.module('invoice', ['ui.router','datatables','LocalStorageModule','ui.bootstrap','ngCookies', 'ngMaterial','ngMessages']);

	// configure our routes
	myApp.config(function($stateProvider, $urlRouterProvider, $mdDateLocaleProvider) {
		
		// display date in particular formate
		$mdDateLocaleProvider.formatDate = function(date) {
			return date ? moment(date).format('dd-MMM-yyyy') : null;
		};
	
		$urlRouterProvider.otherwise('/login');

		
		
		$stateProvider

			// route for the Login page
		
            .state('login', {
				url : '/login',
				templateUrl : 'views/login.html',
				controller  : 'loginCtr'
			})	
			.state('home', {
			url : '/home',
			templateUrl : 'views/home.html',
			controller  : 'mainCtr'
		})
		.state('home.myprofile', {
			url : '/myprofile',
			templateUrl : 'views/myprofile.html',
			controller  : 'myprofileCtr'
		})
		.state('createProfile', {
			url : '/createprofile',
			templateUrl : 'views/createprofile.html',
			controller  : 'createprofileCtr'
		})
			.state('registration', {
				url : '/registration',
				templateUrl : 'views/registration.html',
				controller  : 'registrationCtr'
			})
			.state('home.editmyprofile', {
				url : '/editmyprofile',
				templateUrl : 'views/editmyprofile.html',
				controller  : 'editMyProfileCtr'
			})
			.state('home.partnerProfile', {
				url : '/partnerProfile',
				templateUrl : 'views/partnerprofile.html',
				controller  : 'partnerProfileCtr'
			})
			.state('home.searchProfileView', {
				url : '/searchprofileview',
				templateUrl : 'views/searchprofileview.html',
				controller  : 'searchProfileViewCtr'
			})
			.state('home.dashboard', {
				url : '/dashboard',
				templateUrl : 'views/dashboard.html',
				controller  : 'dashboardCtr'
			})
			.state('home.shortlistedProfile', {
				url : '/shortlistedProfile',
				templateUrl : 'views/shortlistedProfile.html',
				controller  : 'shortlistedProfileCtr'
			})
	});

