var Helper;
(function (Helper) {
    var Language = (function () {
        function Language() {
        }
        Language.Greeting = 'Bonjour';
        return Language;
    }());
    Helper.Language = Language;
})(Helper || (Helper = {}));
console.log(Helper.Language.Greeting + ' World');
//# sourceMappingURL=main.js.map