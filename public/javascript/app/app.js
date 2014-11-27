(function() {
  'use strict';
  var app = angular.module('angularIm', ['app-templates', 'ngFacebook']);

  app.config(function( $facebookProvider ) {
    $facebookProvider.setAppId('570175486446937');
  });

  app.controller('LoginController', ['$scope', '$facebook', function($scope, $facebook) {
    $scope.isLoggedIn = false;
    $scope.login = function() {
      $facebook.login().then(function() {
        refresh();
      });
    };

    function refresh() {
      $facebook.api("/me").then(
        function(response) {
          $scope.welcomeMessage = "Добро пожаловать, " + response.name + "!";
          $scope.isLoggedIn = true;
        },
        function(err) {
          $scope.welcomeMessage = "Пожалуйста,";
        });
    }

    refresh();
  }]);


  app.directive('loginWidget', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/loginWidget.html'
    }
  });


  app.directive('userListWidget', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/userListWidget.html'
    }
  });

  app.directive('chatWidget', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: 'views/chatWidget.html'
    }
  });

  app.run(function() {
    // Load the facebook SDK asynchronously
    (function(){
      // If we've already installed the SDK, we're done
      if (document.getElementById('facebook-jssdk')) {return;}

      // Get the first script element, which we'll use to find the parent node
      var firstScriptElement = document.getElementsByTagName('script')[0];

      // Create a new script element and set its id
      var facebookJS = document.createElement('script');
      facebookJS.id = 'facebook-jssdk';

      // Set the new script's source to the source of the Facebook JS SDK
      facebookJS.src = '//connect.facebook.net/en_US/all.js';

      // Insert the Facebook JS SDK into the DOM
      firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
    }());

    function resizeWidgets() {
      var bottomPadding = $('.footer').outerHeight() + 24;

      var chatWindow = $('.widget-chat .messages');
      var chatWindowHeight = $(window).height() - chatWindow.offset().top - bottomPadding;
      chatWindow.outerHeight(chatWindowHeight);

      var userListWindow = $('.widget-userlist .user-list');
      var userListHeight = $(window).height() - userListWindow.offset().top - bottomPadding;
      userListWindow.css('max-height', userListHeight);
    }

    $(window).on('load resize', resizeWidgets);
  });

})();