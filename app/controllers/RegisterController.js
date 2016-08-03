(function(){
    angular.module("myapp").controller("RegisterController",function($scope,$http){

        $scope.registerUser = function(user){
            var data  = user;
           console.log(data);
            $http.post("/registerUser", data)
            .success(function(r,s,x){
                console.log(r);
            })
            .error(function(){console.log("Error")});
        }

    });
})();