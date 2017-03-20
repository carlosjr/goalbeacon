var app = angular.module('cmsGoal',["ngRoute"]);


app.config(function($routeProvider) {
    $routeProvider
      .when('/offers', {
        templateUrl: 'partial/offers.html',
        controller: 'OffersCtrl'
      })
      .when('/beacons', {
        templateUrl: 'partial/beacons.html',
        controller: 'BeaconsCtrl'
      })
      .when('/',{
        templateUrl: 'partial/users.html',
        controller: 'CustomersCtrl'
      });

    //$locationProvider.html5Mode(true);
})
.controller('OffersCtrl', ['$scope','$route', '$routeParams', '$location',
  function OffersCtrl($scope, $route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
    alert("oferta");

    $scope.listarOfertas = function(){
      $http({
        method: 'GET',
        url: '/someUrl'
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.ofertas = response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("Erro:"+response);
      });

    };



}])
.controller('BeaconsCtrl', ['$scope','$routeParams', function BeaconsCtrl($scope,$routeParams) {
  this.name = 'BeaconsCtrl';
  this.params = $routeParams;
  alert("beacon");
  $scope.listarBeacons = function(){
    $http({
      method: 'GET',
      url: 'http://localhost:3000/api/beacons'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.beacons = response.data;
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert("Erro:"+response);
    });

  };
}])
.controller('CustomersCtrl', ['$scope','$routeParams', '$http',function CustomersCtrl($scope,$routeParams,$http){

  $scope.salvarCliente = function(){
    var customer = {
      name:"Lorrana Ellen",
      email:"lo-ellen@hotmail.com",
      mobile:"34988361052"
    };

    $http({
      method: 'POST',
      data: customer,
      url: 'http://localhost:3000/api/customers'
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.customer = response.data;
      alert(response);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      if(response.error != false){
        alert("Erro do rest:"+response.message);
      }
      alert("Erro:"+response);
    });
  }
}])
;
