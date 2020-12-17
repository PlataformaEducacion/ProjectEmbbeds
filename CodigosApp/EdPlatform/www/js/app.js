( function(){
    var app = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
    app.run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.InAppBrowser){
            window.open= window.cordova.InAppBrowser.open;
        }
        if (window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    })

    app.config(function($stateProvider, $urlRouterProvider){
      $stateProvider.state('login', {
        url: '/login',
        controller: 'LogCtrl',
        templateUrl: 'templates/log-temp.html'
      });
      $stateProvider.state('register', {
        url: '/login/register',
        controller: 'RegisterCtrl',
        templateUrl: 'templates/reg-temp.html'
      });
      $stateProvider.state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      });
      // Each tab has its own nav history stack:
      $stateProvider.state('tab.webview', {
        url: '/webview',
        views: {
          'tab-webview': {
            templateUrl: 'templates/tab-webview.html',
            controller: 'WebViewCtrl'
          }
        }
      });

      $stateProvider.state('tab.labs', {
          url: '/labs',
          views: {
            'tab-labs': {
              templateUrl: 'templates/tab-labs.html',
              controller: 'LabsCtrl'
            }
          }
        });
        $stateProvider.state('tab.lab-detail', {
          url: '/labs/:labId',
          views: {
            'tab-labs': {
              templateUrl: 'templates/lab-detail.html',
              controller: 'LabDetailCtrl'
            }
          }
        });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/login');
    });
}());
