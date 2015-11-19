
angular.module("usterkaAdmin")
.constant("authUrl", "http://localhost:2403/users/login")
.constant("eventsUrl","http://localhost:2403/events")
.controller("authCtrl", function ($scope, $http, $location, authUrl) {

    $scope.authenticate = function (user, pass) {
        $http.post(authUrl, {
            username: user,
            password: pass
        }, {
            withCredentials: true
        }).success(function (data) {
            $location.path("/main");
        }).error(function (error) {
            $scope.authenticationError = error;
        });
    }
})
.controller("mainCtrl", function($scope){
    $scope.screens = ["Wydarzenia","Kategorie"];
    $scope.current = $scope.screens[0];

    $scope.setScreen = function (index) {
        $scope.current = $scope.screens[index];
    };

    $scope.getScreen = function() {
        return $scope.current == "Wydarzenia" ? "/views/adminOrders.html" : "/views/adminProducts.html";
    };
})

.controller("eventsCtrl",function ($scope, $http, eventsUrl) {
    $http.get(eventsUrl,{withCredentials:true})
    .success(function(data){
        $scope.events = data;
       // console.log("mam te dane :D");
    })
    .error(function(error){
        $scope.error=error;
       // console.log("nie mam danych");
    });
    $scope.selectedEvent;

    $scope.selectEvent = function(event){
        $scope.selectedEvent = event;
    };

});
