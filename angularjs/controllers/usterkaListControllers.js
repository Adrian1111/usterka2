// JavaScript source code
// rozszerzenie kontrolera usterka o modu³ logów
(function (angular) {
    /*    <div ng-controller="LogController">
          <p>Reload this page with open console, enter text and hit the log button...</p>
          <label>
Message:
                <input type="text" ng-model="message" />
            </label>
            <button ng-click="$log.log(message)">log</button>
            <button ng-click="$log.warn(message)">warn</button>
            <button ng-click="$log.info(message)">info</button>
            <button ng-click="$log.error(message)">error</button>
            <button ng-click="$log.debug(message)">debug</button>
        </div>
*/
    'use strict';
    angular.module('usterka')
      .controller('LogController', ['$scope', '$log', function ($scope, $log) {
          $scope.$log = $log;
          $scope.message = '';
  }]);
})(window.angular);


angular.module("usterka")
    .constant("productListActiveClass", "btn-primary")
    .constant("productListPageCount", 6)
    .controller("usterkaListCtrl", function ($scope, $filter,

        productListActiveClass, productListPageCount) {

        var selectedCategory = null;

        $scope.selectedPage = 1;
        $scope.pageSize = productListPageCount;

        $scope.selectCategory = function (newCategory) {
            selectedCategory = newCategory;
            $scope.selectedPage = 1;
        }

        $scope.selectPage = function (newPage) {
            $scope.selectedPage = newPage;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null ||
                product.category == selectedCategory;
        }

        $scope.getCategoryClass = function (category) {
            return selectedCategory == category ? productListActiveClass : "";
        }

        $scope.getPageClass = function (page) {
            return $scope.selectedPage == page ? productListActiveClass : "";
        }
    });
