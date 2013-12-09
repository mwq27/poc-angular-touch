/**
 * Created by mwoods0 on 12/8/13.
 */
angular.module('css3ExperimentsApp')
	.controller('dragDrop',['$scope','$swipe', function($scope, $swipe){
		$scope.list1 = [{'title': 'Lolcat Shirt'},{'title': 'Cheezeburger Shirt'},{'title': 'Buckit Shirt'}];
		$scope.list2 = [{'title': 'Zebra Striped'},{'title': 'Black Leather'},{'title': 'Alligator Leather'}];
		$scope.list3 = [{'title': 'iPhone'},{'title': 'iPod'},{'title': 'iPad'}];

		$scope.list4 = [];
		$scope.hideMe = function() {
			return $scope.list4.length > 0;
		}
	}]);