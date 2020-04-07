/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-multi-spaces */
/* eslint-disable no-undef */

app.controller('loginController', function ($scope, $rootScope, $state, loginService) {
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
  $scope.message = 'Welcome to User details Page';
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
app.controller('AddRemProdController', function ($scope, prodService) {
  $scope.sharedData =  prodService.getData();
  console.log('aaaaa', $scope.sharedData);

  $scope.RemoveTask = function (index) {
    $scope.sharedData.splice(index, 1);
  };
});
