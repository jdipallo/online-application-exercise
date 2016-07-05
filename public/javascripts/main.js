angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantsController', applicantsController)

applicantsController.$inject = ['$http']

function applicantsController($http) {
	var ctrl = this;

	// make ajax request for getting all applicants
	$http.get('/getApplicants')
		.then(function(response) {
			ctrl.applicants = response.data;
		})
}
