var dayi;
(function (dayi) {
    var SnakeXenzia;
    (function (SnakeXenzia) {
        var Snake = (function () {
            function Snake(x, y) {
                this.bodys = new Array();
                this.bodys.push(new SnakeXenzia.Point(x, y));
            }
            // 坐标是否在蛇身体上
            Snake.prototype.isOnSnake = function (x, y) {
                return this.bodys.length > 0 && this.bodys.every(function (o) { return o.x == x && o.y == y; });
            };
            ;
            // 移动到下一个位置
            // 返回两个位置：第一个位置是蛇头的新位置，第二个是原蛇尾的位置
            Snake.prototype.move = function () {
                var newHead = this.nextStep();
                this.bodys.unshift(newHead);
                this.bodys.pop();
            };
            ;
            Snake.prototype.nextStep = function () {
                var point;
                switch (this.direction) {
                    case SnakeXenzia.MoveDirection.Up:
                        point = new SnakeXenzia.Point(this.bodys[0].x, this.bodys[0].y - 1);
                        break;
                    case SnakeXenzia.MoveDirection.Down:
                        point = new SnakeXenzia.Point(this.bodys[0].x, this.bodys[0].y + 1);
                        break;
                    case SnakeXenzia.MoveDirection.Left:
                        point = new SnakeXenzia.Point(this.bodys[0].x - 1, this.bodys[0].y);
                        break;
                    case SnakeXenzia.MoveDirection.Right:
                        point = new SnakeXenzia.Point(this.bodys[0].x + 1, this.bodys[0].y);
                        break;
                }
                ;
                return point;
            };
            ;
            Snake.prototype.eat = function (food) {
                // TODO:检查是否能吃到
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
//# sourceMappingURL=Snake.js.map