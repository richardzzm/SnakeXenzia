var dayi;
(function (dayi) {
    var SnakeXenzia;
    (function (SnakeXenzia) {
        var Snake = (function () {
            function Snake(x, y) {
                this.bodys = new Array();
                this.bodys.push(new SnakeXenzia.Point(x, y));
            }
            Object.defineProperty(Snake.prototype, "Direction", {
                get: function () {
                    return this.direction;
                },
                set: function (direction) {
                    this.direction = direction;
                },
                enumerable: true,
                configurable: true
            });
            ;
            ;
            Snake.prototype.isOnSnake = function (x, y) {
                return this.bodys.filter(function (o) { return o.x == x && o.y == y; }).length > 0;
            };
            ;
            Snake.prototype.move = function () {
                var newHead = this.nextStep();
                this.bodys.unshift(newHead);
                this.bodys.pop();
            };
            ;
            Snake.prototype.nextStep = function () {
                var point;
                switch (this.Direction) {
                    case 0:
                        point = new SnakeXenzia.Point(this.bodys[0].x, this.bodys[0].y - 1);
                        break;
                    case 1:
                        point = new SnakeXenzia.Point(this.bodys[0].x, this.bodys[0].y + 1);
                        break;
                    case 2:
                        point = new SnakeXenzia.Point(this.bodys[0].x - 1, this.bodys[0].y);
                        break;
                    case 3:
                        point = new SnakeXenzia.Point(this.bodys[0].x + 1, this.bodys[0].y);
                        break;
                }
                ;
                return point;
            };
            ;
            Snake.prototype.eat = function (food) {
                var newHead = this.nextStep();
                this.bodys.unshift(newHead);
            };
            ;
            return Snake;
        }());
        SnakeXenzia.Snake = Snake;
        ;
    })(SnakeXenzia = dayi.SnakeXenzia || (dayi.SnakeXenzia = {}));
})(dayi || (dayi = {}));
