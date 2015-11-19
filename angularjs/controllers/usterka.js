/// <reference path="../angular.js" />

//angular.module("usterka")
usterka.constant("dataUrl", "http://localhost:2403/events");
usterka.constant("categoryUrl", "http://localhost:2403/category");

usterka.controller("usterkaCtrl", function ($scope, $http, $location, dataUrl, categoryUrl) {
   
    $scope.data = {};
    $http.get(dataUrl)
    .success(function (data) {
        $scope.data.task = data;
    })
    .error(function (error) {
        $scope.data.error = error;
    });

    $http.get(categoryUrl)
    .success(function (data) {
        $scope.data.category2 = data;
    })
    .error(function (error) {
        $scope.data.error = error;
    });
    
    $scope.sendTask = function (taskDetails) {
        taskDetails.visits=0;
        taskDetails.rating=[5];
       // console.log(taskDetails);
        var task = angular.copy(taskDetails);
        $http.post(dataUrl, task)
        .success(function (data) {
            $scope.data.taskId = data.id;
         //   $route.reload();
          //  console.log("dobrze!"+ JSON.stringify(error));
        })
        .error(function (error) {
            $scope.data.taskError = error;
         //   console.log("dupa!" + JSON.stringify(error));
        })
        .finally(function () {
            console.log("No i pięknie dodałeś rekord o id " + $scope.data.taskId);
            $location.path("/events");

        });
    }
/*
    $scope.add = function () {
        var f = document.getElementById('file').files[0],
            r = new FileReader();
        r.onloadend = function (e) {
            var data = e.target.result;
            //send you binary data via $http or $resource or do anything else with it
        }
        r.readAsBinaryString(f);
    }*/

    $scope.calculateAverage = function(MyData){ 
        var sum = 0; 
        for (var i = 0; i < MyData.length; i++) {
            sum += parseInt(MyData[i], 10); //don't forget to add the base }
        }
            var avg = sum/MyData.length;

            return avg; 
};


    //predicate - domyślne sortowanie
    $scope.predicate = 'rating';
    $scope.reverse = true;
    $scope.order = function (predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
        // przekazanie statusu sortowania tablicy
        // console.log('predicate: ' + $scope.predicate + ' reverse: ' + $scope.reverse);
    };

});
/*
usterka.controller('IventDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.iventId = $routeParams.iventId;
  }]);*/