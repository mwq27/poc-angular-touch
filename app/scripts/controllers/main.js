/**
 * Created by mwoods0 on 12/8/13.
 */
angular.module('css3ExperimentsApp')
	.controller('MainCtrl',['$scope','$swipe', function($scope, $swipe){
		$scope.flipped = false;
		$scope.list1 = [{'title': 'Lolcat Shirt'},{'title': 'Cheezeburger Shirt'},{'title': 'Buckit Shirt'}];
		$scope.list2 = [{'title': 'Zebra Striped'},{'title': 'Black Leather'},{'title': 'Alligator Leather'}];
		$scope.list3 = [{'title': 'iPhone'},{'title': 'iPod'},{'title': 'iPad'}];

		$scope.list4 = [];
		$scope.showMove = function($event){
			$scope.flipped = !$scope.flipped;
			$scope.message = $event.type;
			return $scope.flipped;
		}
	}])
	.directive('tileDir', function($animate, $swipe){
		return {
			link : function(scope, elem, attrs){
				$swipe.bind(elem, {
					start: function(coords){
						scope.message = "Starting touch at " + coords.x;
					},
					move : function(){

					},
					end : function(){

					},
					cancel: function(){

					}
				});
			}
		};
	});