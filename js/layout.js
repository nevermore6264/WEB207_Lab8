var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "home.html"
        })
        .when("/about", {
            templateUrl: "about.html"
        })
        .when("/contact", {
            templateUrl: "contact.html"
        })
        .when("/feedback", {
            templateUrl: "feedback.html"
        })
        .when("/faq", {
            templateUrl: "faq.html"
        })
        .when("/account/login", {
            templateUrl: "account/login.html"
        })
        .when("/account/register", {
            templateUrl: "account/register.html"
        })
        .when("/account/forgot", {
            templateUrl: "account/forgot.html"
        })
        .when("/account/logoff", {
            redirectTo: "/home"
        })
        .when("/account/change", {
            templateUrl: "account/change.html"
        })
        .when("/account/profile", {
            templateUrl: "account/profile.html"
        })
        .when("/account/orders", {
            templateUrl: "account/orders.html"
        })
        .when("/account/products", {
            templateUrl: "account/products.html"
        })
        .when("/category/:id", {
            templateUrl: "ProductList.html",
            controller: "categoryCtrl"
        })
        .when("/supplier/:id", {
            templateUrl: "ProductList.html",
            controller: "supplierCtrl"
        })
        .when("/special/:id", {
            templateUrl: "ProductList.html",
            controller: "specialCtrl"
        })
        .otherwise({
            redirectTo: "/home"
        });
});
app.run(function ($rootScope) {
    $rootScope.$on('$routeChangeStart', function () {
        $rootScope.loading = true;
    });
    $rootScope.$on('$routeChangeSuccess', function () {
        $rootScope.loading = false;
    });
    $rootScope.$on('$routeChangeError', function () {
        $rootScope.loading = false;
        alert("Lỗi");
    });
});