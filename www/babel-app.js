'use strict';

angular.module('babel', []);

(function () {
    "use strict";

    function View1DirectiveFactory(es5) {
        return {
            restrict: 'AE',
            scope: {},
            controller: ['$scope', function ($scope) {
                $scope.inputs = {
                    first: "Alexis",
                    last: "Altizer"
                };
                $scope.data = {
                    fullname: function fullname() {
                        return $scope.inputs.last + ', ' + $scope.inputs.first;
                    },
                    callES5Service: function callES5Service() {
                        return es5.get();
                    }
                };
            }],
            template: '\n                <label>First name</label>\n                <input type="text" ng-model="inputs.first"/><br/>\n                <label>Last name</label>\n                <input type="text" ng-model="inputs.last"/>\n                <p><span>{{data.fullname()}}</span></p>\n                <p><span>{{data.callES5Service()}}</p>'
        };
    }
    View1DirectiveFactory.$inject = ['es5Service'];

    angular.module('babel').directive('view', View1DirectiveFactory);
})();
"use strict";

;(function () {
    "use strict";

    function ES5ServiceFactory() {
        function ES5Service() {
            var self = this;

            this.get = function () {
                return "I came from an ES5 service build with Babel";
            };
        }

        return new ES5Service();
    }
    ES5ServiceFactory.$inject = [];

    angular.module('babel').factory('es5Service', ES5ServiceFactory);
})();