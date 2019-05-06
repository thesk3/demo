myApp.controller('createprofileCtr', function ($scope, $rootScope,$http) {
	//Page title
	$rootScope.title = "Student Registration";

	var res = $http.get('json/dummy.json');
	res.success(function(data, status, headers, config) {
		console.log("SUCCESS DATA:", data);	
		
	}), res.error(function(data, status, headers, config) {
		console.log("fais DATA:", data);
	});


	var dummyJsopn=[{
		"fruit": "Apple",
		"size": "Large",
		"color": "Red"
	},
	{
		"fruit": "Apple",
		"size": "Large",
		"color": "Red"
	}];

	console.log("dummy json--->",dummyJsopn);
	
	this.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
	'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
	'WY').split(' ').map(function (state) { return { abbrev: state }; });

	$scope.sizes = [
		"small (12-inch)",
		"medium (14-inch)",
		"large (16-inch)",
		"insane (42-inch)"
	];


	$scope.createdBy =  $scope.createdBy  || [
        { id: 1, name: 'Parent' },
		{ id: 2, name: 'Brother' },
		{ id: 3, name: 'Sister' },
		{ id: 4, name: 'realetive' },
		{ id: 5, name: 'other' },
		{ id: 6, name: 'Friend' },
		{ id: 7, name: 'Self' }


       
	  ];
	  $scope.Children =  $scope.Children  || [
        { id: 1, name: 'yes' },
	
		{ id: 2, name: 'no' }


       
	  ];
	  $scope.maritalOption =  $scope.maritalOption  || [
        { id: 1, name: 'Never married' },
		{ id: 2, name: 'Widow' },
		{ id: 3, name: 'Widower' },
	    { id: 4, name: 'divorced' }


       
	  ];
	  

	  $scope.religion =  $scope.religion  || [
        { id: 1, name: 'Jain' },
		{ id: 2, name: 'Hindu' },
		{ id: 1, name: 'Sikh' }

       
	  ];
	  $scope.gender =  $scope.gender || [
        { id: 1, name: 'Male' },
		{ id: 2, name: 'Female' }
		

       
	  ];



$scope.createProfile1=function(){	
	console.log("date before-->",$scope.createProfile.personalDetails.dob)
	$scope.createProfile.personalDetails.dob=$filter('date')(new Date(dateValue),'DD-MMM-YYYY');
	console.log("date after-->",$scope.createProfile.personalDetails.dob)
	console.log("data12-->",$scope.createProfile)
}












//new profile photo
$scope.uploadNewPhoto = function () {
	setTimeout(function () {
		angular.element('#newProfilePhoto').trigger('click');	
	}, 0);

};
	// read and set image to logo header
	$scope.readImage = function (input, setTo) {
		if (input.files[0].size > 200000
			&& (input.files[0].type !== "image/png"
				|| input.files[0].type !== "image/jpeg" || input.files[0].type !== "image/jpg")) {
			
			angular.element('#newProfilePhoto').val("");
		//	$('#profileImg').attr('src',	'images/avatar.jpg');
			$scope.photoUploadStatus = true;
			$scope.uploadErr = true;
			console.log("upload error");
			$scope.$apply();
		} else {
			$scope.photoUploadStatus = false;
			$scope.uploadErr = false;
			console.log($scope.photoUploadStatus)
			$scope.$apply();
			var reader = new FileReader();



			uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+e.target.result+")");
			var uploadFile = $(this);
			reader.onload = function (e) {
			$('#' + setTo).attr('background-image', "url("+e.target.result+")");
			console.log("upload success");
			}
			
			reader.readAsDataURL(input.files[0]);
			$scope.newProfilePhoto = $("#newProfilePhoto")
				.prop("files")[0];	
			
			console.log("new photo---",$scope.newProfilePhoto);
			$("#picSubmit").removeAttr("disabled", "disabled");
		}
		console.log("status", $scope.photoUploadStatus)
		
	}	

	$scope.maxDate = new Date(
		$scope.myDate.getFullYear()+1,
		$scope.myDate.getMonth(),
		$scope.myDate.getDate());    })

.config(function($mdDateLocaleProvider) {
$mdDateLocaleProvider.formatDate = function(date) {
return date ? moment(date).format('DD-MMM-YYYY') : '';
};

	$mdDateLocaleProvider.parseDate = function(dateString) {
    var m = moment(dateString, 'DD-MMM-YYY', true);
    return m.isValid() ? m.toDate() : new Date(NaN);
	};
	

	$(".imgAdd").click(function(){
		$(this).closest(".row").find('.imgAdd').before('<div class="col-sm-2 imgUp"><div class="imagePreview"></div><label class="btn btn-primary">Upload<input type="file" class="uploadFile img" value="Upload Photo" style="width:0px;height:0px;overflow:hidden;"></label><i class="fa fa-times del"></i></div>');
	  });
	  $(document).on("click", "i.del" , function() {
		  $(this).parent().remove();
	  });
	  $(function() {
		  $(document).on("change",".uploadFile", function()
		  {
				  var uploadFile = $(this);
			  var files = !!this.files ? this.files : [];
			  if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support
	   
			  if (/^image/.test( files[0].type)){ // only image file
				  var reader = new FileReader(); // instance of the FileReader
				  reader.readAsDataURL(files[0]); // read the local file
	   
				  reader.onloadend = function(){ // set image data as background of div
					  //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
	  uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url("+this.result+")");
				  }
			  }
			
		  });
	  });

});