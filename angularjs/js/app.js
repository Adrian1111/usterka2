           
            var usterka = angular.module("usterka", ["ngRoute", "ngResource","customFilters","eventControllers"]);

            usterka.config(function ($routeProvider){
                $routeProvider.when("/events2", {
                    templateUrl: "/views/usterkaList.html"
                });
                $routeProvider.when("/events", {
                    templateUrl: "/views/hEventList.html",
                 //   controller: 'EventListCtrl'
                });
                $routeProvider.when("/login", {
                    templateUrl: "/views/login2.html"
                });
                $routeProvider.when("/addEvent", {
                    templateUrl: "/views/addEvent.html"
                });
                $routeProvider.when("/events/:eventId",{
                    templateUrl: "/views/event.html",
                    controller: 'EventDetailCtrl'
                });
                $routeProvider.otherwise({
                     templateUrl: "/views/hEventList.html"
                    //redirectTo: "/login"
                });                
            });