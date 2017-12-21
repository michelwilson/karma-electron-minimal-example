var node_script;

// This line makes the application work
//node_script = require('electron').remote.require('./main.js');
// This line makes the test work
node_script = require('electron').remote.require('../../../main.js');

angular.module('app',
    [])
    .controller('controller', function ($scope) {
        $scope.result = node_script.fn();
    });

