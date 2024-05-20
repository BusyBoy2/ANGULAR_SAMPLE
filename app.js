angular.module('loginApp', [])
.controller('LoginController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.loginData = {
        username: '',
        password: ''
    };

    $scope.login = function() {
        AuthService.login($scope.loginData.username, $scope.loginData.password)
            .then(function(response) {
                alert('Success');
            })
            .catch(function(error) {
                alert('Failed');
            });
    };
}])
.service('AuthService', ['$q', function($q) {
    this.login = function(username, password) {
        var deferred = $q.defer();

        // Simulate a login call
        if (username === 'uppulasravanreddy@gmail.com' && password === '123') {
            deferred.resolve('Success');
        } else {
            deferred.reject('Failed');
        }

        return deferred.promise;
    };
}]);
