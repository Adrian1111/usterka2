angular.module("usterkaAdmin")
.constant("categoryUrl", "http://localhost:2403/category/")
.config(function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
})
.controller("categoryCtrl", function ($scope, $resource, categoryUrl) {

    $scope.categoryResource = $resource(categoryUrl + ":id", { id: "@id" });

    $scope.listProducts = function () {
        $scope.category = $scope.categoryResource.query();
    }

    $scope.deleteProduct = function (product) {
        product.$delete().then(function () {
            $scope.category.splice($scope.category.indexOf(product), 1);
        });
    }

    $scope.createProduct = function (product) {
        new $scope.categoryResource(product).$save().then(function (newProduct) {
            $scope.category.push(newProduct);
            $scope.editedProduct = null;
        });
    }

    $scope.updateProduct = function (product) {
        product.$save();
        $scope.editedProduct = null;
    }

    $scope.startEdit = function (product) {
        $scope.editedProduct = product;
    }

    $scope.cancelEdit = function () {
        $scope.editedProduct = null;
    }

    $scope.listProducts();
});
