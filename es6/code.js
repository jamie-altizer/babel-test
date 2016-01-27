angular.module('babel', []);

(function () {
    "use strict";

    function View1DirectiveFactory(es5) {
        return {
            restrict: 'AE',
            scope: {},
            controller: ['$scope', ($scope) => {
                $scope.inputs = {
                    first: "Alexis",
                    last: "Altizer"
                };
                $scope.data = {
                    fullname: () => { return `${$scope.inputs.last}, ${$scope.inputs.first}`; },
                    callES5Service: () => { return es5.get(); }
                };
            }],
            template: `
                <label>First name</label>
                <input type="text" ng-model="inputs.first"/><br/>
                <label>Last name</label>
                <input type="text" ng-model="inputs.last"/>
                <p><span>{{data.fullname()}}</span></p>
                <p><span>{{data.callES5Service()}}</p>`
        };
    }
    View1DirectiveFactory.$inject = ['es5Service'];

    angular.module('babel')
        .directive('view', View1DirectiveFactory);
})();
