(function(){
    angular.module("myapp").config(function($routeProvider){
        $routeProvider
        .when("/",{
            templateUrl : 'app/views/homepage.html',
            controller: 'HomeController'
        })
        .when("/register",{
            templateUrl : 'app/views/register.html',
            controller : 'RegisterController'
        })
        .when("/dashboard",{
            templateUrl : 'app/views/dashboard.html',
            controller : 'DashboardController'
        })
        .when("/naga",{
            redirectTo : '/'
        })
        .otherwise({
            template : '<h1>404 not found </h1>click <a href="#/">here</a>',
        })
    })
})();