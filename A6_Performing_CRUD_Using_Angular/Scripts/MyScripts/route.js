app.config(function ($routeProvider) {

    $routeProvider.when("/Admin", {
        templateUrl: "/Employee/Index",
        controller: "crudController"
    }
    )
    $routeProvider.when("/User", {
        templateUrl: "/Employee/User",
        controller: "crudController"
    }
)
        .otherwise("/Admin");

    

});