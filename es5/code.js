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

    angular.module('babel')
        .factory('es5Service', ES5ServiceFactory);
})();
