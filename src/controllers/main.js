/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-undef */

app.controller('loginController', function ($scope, $state, loginService) {
  $scope.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
  $scope.passFormat = /^(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
  $scope.loginUser = function () {
    const data = {};
    data.email = $scope.email;
    data.password = $scope.password;
    if (loginService.login(data)) {
      console.log('printing scope', data);
      $state.transitionTo('home');
    } else {
      $scope.error = 'Incorrect username/password !';
    }
  };
});

app.controller('homeController', function ($scope) {
  $scope.message = 'Welcome to Home Page';
});

app.controller('userDetailController', function ($scope) {
  let Udata = localStorage.getItem('UserData');
  Udata = JSON.parse(Udata);
  $scope.data = Udata;
  console.log('dadssdsdsd', $scope.data);
});

app.controller('productDetailController', function ($scope, prodService) {
  $scope.AddTask = function (InputData) {
    prodService.addData(InputData);
  };

  prodService.getjsondata($scope, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      $scope.data = data;
      console.log('data', data);
    }
  });
});
app.controller('AddRemProdController', function ($scope,  $rootScope, prodService) {
  $scope.sharedData =  prodService.getData();
  $rootScope.CartVal = $scope.sharedData.length;
  console.log('aaaaa', $rootScope.CartVal);

  $scope.RemoveTask = function (index) {
    $scope.sharedData.splice(index, 1);
  };
});
