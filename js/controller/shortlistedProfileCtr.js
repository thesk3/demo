myApp.controller('shortlistedProfileCtr', function($scope, $rootScope, $location, $mdDialog, $location,$filter,dataService,
    AuthenticationService, $http) {
        var res = $http.get('json/similarprofiles.json');
        res.success(function (data, status, headers, config) {
            $scope.profiles = data;
            console.log("SUCCESS DATA:", data);
    
        }), res.error(function (data, status, headers, config) {
            console.log("fais DATA:", data);
        });

        $scope.partnerSearch=function(){
            console.log("data-->",$scope.partnerProfile);
        }
        $scope.goToProfileView=function(id){
            console.log("id-->",id);
            dataService.set(id);
            $location.path("home/searchprofileview");
        }
});