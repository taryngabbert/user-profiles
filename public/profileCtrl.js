angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService) {
	function getProfile() {
		friendService.getFriends().then( (response)=>{
		$scope.currentUser = response.data.currentUser ;
		$scope.friends=response.data.friends;
		})
	} getProfile();
	$scope.deleteFriend=(friend)=> {
		let friendObj = {friend: friend};
		if (confirm(`Are you sure you want to delete ${friend}?`)) {
    	friendService.deleteFriend(friendObj);
			// getProfile();
		} else {
    // Do nothing!
		}

	}
});
