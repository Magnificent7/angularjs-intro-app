(function() {
  "use strict";

  angular.module("app").controller("stuffCtrl", function($scope){
    $scope.message = "Hello World!";

    $scope.reviews = ["AngularJS is the best thing since sliced bread", "I love AngularJS, I couldn't possibly breathe without it", "AngularJS rocks my socks off", "AngularJS syntax suxxxxxx!!"];

    window.$scope = $scope;
  });
})();