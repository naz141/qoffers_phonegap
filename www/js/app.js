// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab", 
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'storeCntrl'
      }
    }
  })
  .state('tab.store-detail', {
    url: '/dash/:outletId',
    views: {
      'tab-dash': {
        templateUrl: 'templates/store-detail.html',
        controller: 'storeDetailsCtrl'
      }
    }
  })
   .state('tab.store-deals', {
    url: '/dash/store-detail/:branch_id',
    views: {
      'tab-dash': {
        templateUrl: 'templates/store-deals.html',
        controller: 'storeDealsCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/promotion.html',
          controller: 'sampleCtrl'
        }
      }
    })
   .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'DocDetailCtrl'
        }
      }
    }) 
	.state('tab.clinic-detail', {
      url: '/clinic/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/clinic-detail.html',
          controller: 'ClininDetailCtrl'
        }
      }
    }) 
 /* 	.state('tab.chat-detail', {
    url: '/chats/:chatId',
    templateUrl: 'templates/chat-detail.html',
    controller : "DocDetailCtrl"
  })*/
	
	 .state('tab.tab-welcome', {
      url: '/welcome',
      views: {
        'tab-welcome': {
          templateUrl: 'templates/tab-welcome.html',
          controller: 'WelcomeCtrl'
        }
      }
    })
	.state('welcomebtn', {
    url: '/3',
    templateUrl: 'templates/tab-welcome.html',
    controller : "WelcomeCtrl"
  })
  
  .state('channel', {
	  url :'/channel',
	  templateUrl: 'templates/channel-doctor.html',
	  controller: "SearchCntrl" 
  })
  .state('signup', {
	  url :'/signup',
	  templateUrl: 'templates/signup.html',
	  controller: "SignupCntrl" 
  })
  .state('myprofile', {
	  url :'/myprofile',
	  templateUrl: 'templates/my-profile.html',
	  controller: "MyprofileCtrl"
  })
  .state('form', {
	  url :'/form',
	  templateUrl: 'templates/form.html',
	  controller: "customersController" 
  })  
  .state('mystatus', {
	  url :'/mystatus',
	  templateUrl: 'templates/my-status.html',
	  controller: "MystatusCtrl" 
  })
   .state('clstatus', {
	  url :'/clstatus',
	  templateUrl: 'templates/cl-status.html',
	  controller: "MyClstatusCtrl" 
  })
.state('docdetails', {
	  url :'/docdetails',
	  templateUrl: 'templates/doctor-details.html',
	  controller: "DocdetailsCtrl" 
  })
 .state('store-detail', {
	 url :'/store-detail',
	 templateUrl: 'templates/store-detail.html',
	 controller: "ClinicsCtrl" 	 
 })
  .state('store-deals', {
	 url :'/store-deals',
	 templateUrl: 'templates/store-deals.html',
	 controller: "ClinicsCtrl" 	 
 })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
