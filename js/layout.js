var app = angular.module("myapp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "WEB2017_Lab8/home.html"
        })
        .when("/about", {
            templateUrl: "WEB2017_Lab8/about.html"
        })
        .when("/contact", {
            templateUrl: "WEB2017_Lab8/contact.html"
        })
        .when("/feedback", {
            templateUrl: "WEB2017_Lab8/feedback.html"
        })
        .when("/faq", {
            templateUrl: "WEB2017_Lab8/faq.html"
        })
        .when("/account/login", {
            templateUrl: "WEB2017_Lab8/account/login.html"
        })
        .when("/account/register", {
            templateUrl: "WEB2017_Lab8/account/register.html"
        })
        .when("/account/forgot", {
            templateUrl: "WEB2017_Lab8/account/forgot.html"
        })
        .when("/account/logoff", {
            redirectTo: "/home"
        })
        .when("/account/change", {
            templateUrl: "WEB2017_Lab8/account/change.html"
        })
        .when("/account/profile", {
            templateUrl: "WEB2017_Lab8/account/profile.html"
        })
        .when("/account/orders", {
            templateUrl: "WEB2017_Lab8/account/orders.html"
        })
        .when("/account/products", {
            templateUrl: "WEB2017_Lab8/account/products.html"
        })
        .when("/category/:id", {
            templateUrl: "WEB2017_Lab8/ProductList.html",
            controller: "categoryCtrl"
        })
        .when("/supplier/:id", {
            templateUrl: "WEB2017_Lab8/ProductList.html",
            controller: "supplierCtrl"
        })
        .when("/special/:id", {
            templateUrl: "WEB2017_Lab8/ProductList.html",
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