describe('The minimal example', function () {
    var tester;

    beforeAll(function () {
        tester = ngMidwayTester('app');
    });

    afterEach(function () {
        tester.destroy();
        tester = null;
    });

    it('sets a value on the scope', function () {
        tester.visit('/', function () {
            var current, scope;

            current = tester.inject('$route').current;
            scope = current.scope;

            expect(scope.result).toEqual(42);
        });
    });
});
