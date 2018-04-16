(function(angular, fibonacciApp) {

  'use strict';

  fibonacciApp.controller('main_ctrl', ['$http', '$state', '$stateParams', function($http, $state, $stateParams) {

    var vm = this;
    vm.has_selection = $state.includes('results');


    vm.generate = function() {
      vm.has_selection = true;
      $state.go('results', {
        id: vm.numberInput
      });
    };


    if ($state.includes('results')) {
      vm.numberInput = parseInt($stateParams.id);
    }

  }]);
})(window.angular, window.fibonacciApp);