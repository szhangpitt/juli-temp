angular.module('ttt', [])

.factory('Placement', [function () {
    function Placement () {
        this.xos = [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1],
        ];
    }

    Placement.prototype.place =
    function place (x, y, val) {
        this.xos[x][y] = val;

        return winningAtRow.bind(this)(x) ||
            winningAtCol.bind(this)(y) ||
            winningAtDiag.bind(this)();
    };

    Placement.prototype.x =
    function x (x, y) {
        return this.place(x, y, 1);
    };

    Placement.prototype.o =
    function o (x, y) {
        return this.place(x, y, 0);
    };

    function winningAtRow(x) {
        var winningX = true;
        var winningO = true;

        for (var y = 0; y < 3; y += 1) {
            winningX = winningX && (this.xos[x][y] === 1);
            winningO = winningO && (this.xos[x][y] === 0);
        }

        return winningX ? 'X' :
            winningO ? 'O' : false;
    }

    function winningAtCol(y) {
        var winningX = true;
        var winningO = true;

        for (var x = 0; x < 3; x += 1) {
            winningX = winningX && (this.xos[x][y] === 1);
            winningO = winningO && (this.xos[x][y] === 0);
        }

        return winningX ? 'X' :
            winningO ? 'O' : false;
    }

    function winningAtDiag () {
        var winningX1 = true;
        var winningO1 = true;
        var winningX2 = true;
        var winningO2 = true;

        for (var x = 0; x < 3; x += 1) {
            winningX1 = winningX1 && (this.xos[x][x] === 1);
            winningO1 = winningO1 && (this.xos[x][x] === 0);
        }

        for (var x = 0; x < 3; x += 1) {
            winningX2 = winningX2 && (this.xos[x][2 - x] === 1);
            winningO2 = winningO2 && (this.xos[x][2 - x] === 0);
        }

        return (winningX1 || winningX2) ? 'X' :
            (winningO1 || winningO2) ? 'O' : false;
    }

    return Placement
}])

.controller('BoardController', [
    'Placement',
    '$scope',
    function BC (
        Placement,
        $scope) {
        $scope.message = 'Hello';

        var pl = new Placement();
        $scope.pl = pl;

        var current = 1;

        $scope.place = function place (row, col) {
            var placeXO = current === 1 ?
                pl.x.bind(pl, row, col) :
                pl.o.bind(pl, row, col);

            $scope.winning = placeXO.call();

            current = 1 - current;
        };

        $scope.clear = function clear () {
            pl = new Placement();
            $scope.pl = pl;
            $scope.winning = false;
            current = 1;
        };
    }
])

.filter('toXO', [function () {
    return function (input) {
        if (input === 1) {
            return 'X';
        } else if (input === 0) {
            return 'O';
        }

        return '';
    }
}])