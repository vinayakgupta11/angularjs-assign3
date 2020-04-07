/* eslint-disable prefer-arrow-callback */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable no-undef */
app.service('loginService', function () {
  // const admin = 'capgemini@gmail.com';
  // const pass = 'Capgemini123#';
  const obj = {
    Email: 'capgemini@gmail.com',
    Pass: 'Capgemini123#',
    Username: 'Capgemini',
    Contact: '1234567891'
  };
  this.login = function (InputData) {
    if (InputData.email === obj.Email && InputData.password === obj.Pass) {
      console.log('inputData', obj);
      localStorage.setItem('UserData', JSON.stringify(obj));
      return true;
    }
    return false;
  };
});


app.service('prodService', function ($http) {
  const myData = [];

  this.addData = function (newObj) {
    myData.push(newObj);
  };
  this.getData = function () {
    return myData;
  };

  this.getjsondata = function (dataobj, callback) {
    $http({
      method: 'GET',
      url: '../json-files/cars.json',
    }).then(
      function (success) {
        callback(null, success.data);
      },
      function (error) {
        callback(error, null);
        console.log('data after api call', error);
      }
    );
  };
});
