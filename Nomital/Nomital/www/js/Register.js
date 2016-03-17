angular.module('ionicApp', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('signin', {
          url: '/sign-in',
          templateUrl: 'templates/sign-in.html',
          controller: 'SignInCtrl'
      })
      .state('sign', {
          url: '/sign.html',
          templateUrl: 'templates/sign.html',
          controller: 'RegisterCtrl'
      })
      .state('MenuPrincipalCobranza', {
          url: '/MenuPrincipalCobranza.html',
          templateUrl: 'templates/MenuPrincipalCobranza.html',
          controller: 'MenuPrincipalCobranzaCtrl'
      });


    $urlRouterProvider.otherwise('/sign-in');

})

.controller('SignInCtrl', function ($scope, $state) {

    $scope.signIn = function (user) {
        console.log('Sign-In', user);
        $state.go('sign');
    };

})


.controller('RegisterCtrl', function ($scope, $state) {

    $scope.register = function (user) {
        

        
        window.location.href = "MenuPrincipal.html";
    };

})



