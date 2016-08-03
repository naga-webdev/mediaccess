(function(){
    angular.module("myapp").controller("DashboardController",function($scope,$http){
        $scope.name = "naga";
        $http.get("/getUser"+name)
        .success(function(r,s,x){
            $scope.name = r;
            console.log(r);
        })
        .error(()=>console.log("error"));
    });
})();