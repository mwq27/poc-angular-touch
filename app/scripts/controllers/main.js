/**
 * Created by mwoods0 on 12/8/13.
 */
angular.module('css3ExperimentsApp')
	.controller('MainCtrl',['$scope','$swipe', function($scope, $swipe){
		console.log("In Main controller");
		$scope.flipped = false;


		$scope.showMove = function(){
			$scope.flipped = !$scope.flipped;
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