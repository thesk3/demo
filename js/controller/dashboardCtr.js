myApp.controller('dashboardCtr', function($scope, $rootScope, $location, $mdDialog, $location,$filter,
    AuthenticationService, $http) {
 // for similar profiles
 var res = $http.get('json/similarprofiles.json');
 res.success(function(data, status, headers, config) {
    $scope.similarProfiles=data;
     console.log("SUCCESS DATA:",data);	
     
 }), res.error(function(data, status, headers, config) {
     console.log("fais DATA:", data);
 });
$scope.imgProfilePath="https://images.unsplash.com/photo-1535440568529-40a78746670d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80";
    });