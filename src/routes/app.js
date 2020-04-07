// eslint-disable-next-line no-undef
const app = angular.module('App', ['ui.router', 'ngMaterial', 'ngMessages']);
app.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '../templates/login.html',
      controller: 'loginController',
    })

    .state('home', {
      url: '/home',
      templateUrl: '../templates/home-page.html',
      controller: 'homeController',
    })
    .state('userDetails', {
      url: '/UserDetails',
      templateUrl: '../templates/user-details.html',
      controller: 'userDetailController',
    })
    .state('productDetails', {
      url: '/productDetails',
      templateUrl: '../templates/products-details.html',
      controller: 'productDetailController',
    })
    .state('AddRemProd', {
      url: '/AddRemProd',
      templateUrl: '../templates/add-rem-prod.html',
      controller: 'AddRemProdController',
    });
});
