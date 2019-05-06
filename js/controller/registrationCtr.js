myApp.controller('registrationCtr', function($scope, $rootScope, $location, $mdDialog, $location,$filter,
    AuthenticationService, $http) {
       
        $('.getDate').datepicker({
            format : "dd-M-yyyy",
            todayBtn : "linked",
            multidate : false,
          
            todayHighlight : true,
            autoclose : true
        });
    

        $scope.project = {
            description: 'Nuclear Missile Defense System',
            rate: 500,
            special: true
          };
        console.log("hello registraion");
        $scope.registration={

            username:'',
            confirmPassword:'',
            password:''
        }
$scope.register =function(event){
    console.log("details-->",$scope.registration);
    
			
				$('#success').modal('show');
}
$scope.closePopup =function(event){
    console.log("details1-->",$scope.registration);
    
			
                $('#success').modal('hide');
                $scope.showtext=true;
}
// create a message to display in our view

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
    console.log("date before-->",$scope.dob)
   // $scope.createProfile.personalDetails="fg";
	//var d=$filter('date')(new Date($scope.dob),'dd-MMM-yyyy');
	//console.log("date after-->",d)
	console.log("data12-->",$scope.createProfile)
//$location.path("myprofile")
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