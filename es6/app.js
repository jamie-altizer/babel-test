angular.module('babel', []);

(function () {
    "use strict";

    function View1DirectiveFactory() {
        return {
            restrict: 'AE',
            scope: {},
            controller: ['$scope', ($scope) => {
                $scope.inputs = {
                    first: "Alexis",
                    last: "Altizer"
                };
                $scope.data = {
                    fullname: () => { return `${$scope.inputs.last}, ${$scope.inputs.first}`; }
                };
            }],
            template: `
                <label>First name</label>
                <input type="text" ng-model="inputs.first"/><br/>
                <label>Last name</label>
                <input type="text" ng-model="inputs.last"/>
                <p><span>{{data.fullname()}}</span></p>`
        };
    }
    View1DirectiveFactory.$inject = [];

    angular.module('babel')
        .directive('view', View1DirectiveFactory);
})();
