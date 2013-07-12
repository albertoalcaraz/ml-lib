'use strict';

angular.module('pitApp')
  .directive('menu', function () {
    return {
      templateUrl: 'menu/menu.tpl.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
          var snapper = new Snap({
              element: document.getElementById(attrs.content),
  			tapToClose: false,
  			disable: 'right'
          });

  		document.getElementById(attrs.closeButton).addEventListener("click", function(){
  			if (snapper.state().state == 'left')
  				snapper.close();
  			else
  				snapper.open('left');
  		});
      }
    };
  });
