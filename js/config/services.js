//angular dataService to pass data between pages.
myApp.factory("dataService", function(localStorageService) {
	var savedData = {};
	var token = "lms";
	function set(data) {
		savedData = data;
		localStorageService.set(token, savedData);// location storage used to
		// store data in browser
		// cookies

	}
	function get() {
		return localStorageService.get(token);// get data from localstorage
	}

	return {
		set : set,
		get : get
	}
});


//angular dataService to pass data between pages.
myApp.factory("seqenceService", function(localStorageService) {
	var savedData = {};
	var token = "billing";
	function set(data) {
		savedData = data;
		localStorageService.set(token, savedData);// location storage used to
		// store data in browser
		// cookies

	}
	function get() {
		return localStorageService.get(token);// get data from localstorage
	}

	return {
		set : set,
		get : get
	}
});


//angular dataService to pass data between pages.
myApp.factory("dataSideService", function(localStorageService) {
	var savedData = {};
	var token = "invoice";
	function set(data) {
		savedData = data;
		localStorageService.set(token, savedData);// location storage used to
		// store data in browser
		// cookies

	}
	function get() {
		return localStorageService.get(token);// get data from localstorage
	}

	return {
		set : set,
		get : get
	}
});


//angular datepicker service
myApp.service('datepickerService', function($rootScope) {
	// temp variable
	var factory = {};

	//get today's date
	factory.today = new Date();
	// calendar 1
	factory.open1 = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		this.opened2 = false;
		this.opened1 = true;
		this.opened3 = false;
		this.opened4 = false;
	};
	// calendar 2
	factory.open2 = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		this.opened1 = false;
		this.opened2 = true;
		this.opened3 = false;
		this.opened4 = false;
	};
	// calendar 3
	factory.open3 = function($event, picker) {

		$event.preventDefault();
		$event.stopPropagation();
		this.opened2 = false;
		this.opened1 = false;
		this.opened3 = true;
		this.opened4 = false;

	};
	// calendar 4
	factory.open4 = function($event, picker) {
		$event.preventDefault();
		$event.stopPropagation();
		this.opened1 = false;
		this.opened2 = false;
		this.opened3 = false;
		this.opened4 = true;

	};
});
