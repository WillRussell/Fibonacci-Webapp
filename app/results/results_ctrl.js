(function(angular, fibonacciApp) {

  'use strict';

  fibonacciApp.controller('results_ctrl', ['$stateParams', '$http', function($stateParams, $http) {

    var vm = this;
    vm.selection = $stateParams.id;
    vm.dataset = null;
    vm.dataLoaded = false;

    var api_url = 'http://localhost:8080/' + $stateParams.id;

    $http({
      method: 'GET',
      url: api_url,
    }).then(function(response) {
      vm.dataset = response.data;
      vm.dataLoaded = true;
    })


  }]);
})(window.angular, window.fibonacciApp);