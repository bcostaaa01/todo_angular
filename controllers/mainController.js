app.controller('mainController', ['$scope', function($scope) {
    $scope.list = [];
    $scope.addItem = function() {
        $scope.list.push($scope.addToDo);
    }
    $scope.removeItem = function() {
        $scope.list.pop();
    }
}])