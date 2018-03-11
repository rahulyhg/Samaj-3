'use strict';

/**
 * @ngdoc function
 * @name samajPortalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the samajPortalApp
 */
angular.module('samajPortalApp')
  .controller('LoginCtrl', function () {
      var vm=this;
      vm.isEmailEmpty=false;
      vm.validate=function(){
           if(vm.email.length==0){
             vm.isEmailEmpty=true;
           }
      };
  });
/*

vm={
  validate:function(){},
  isEmailEmpty:true
}
*/