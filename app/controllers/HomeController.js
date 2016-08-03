(function(){
    angular.module("myapp").controller("HomeController",function($scope,$http,$location){

        $scope.submit = function(user){
           
            $http.get("/validUser/"+user.name)
            .success(function(r,s,x){
                if(r=='ok'){
                    $location.path("/dashboard")
                }
            })
            .error(function(){console.log("Error")});
        }

    });
})();