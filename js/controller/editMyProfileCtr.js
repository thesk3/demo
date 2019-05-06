myApp.controller('editMyProfileCtr', function($scope, $rootScope, $location, $mdDialog, $location,$filter,
    AuthenticationService, $http) {
        var res1 = $http.get('json/myprofile.json')
        res1.success(function(data, status, headers, config) {
    
            console.log("data->",data);
            $scope.createProfile=data;
    
        }), res1.error(function(data, status, headers, config) {
        
        
        });
        $('.getDate').datepicker({
            format : "dd-M-yyyy",
            todayBtn : "linked",
            multidate : false,
          
            todayHighlight : true,
            autoclose : true
        });
    

        $scope.submitData=function(){
     console.log("data--->",$scope.createProfile);

        }
    });