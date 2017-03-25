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
            // 坐标是否在蛇身体上
            Snake.prototype.isOnSnake = function (x, y) {
                return this.bodys.filter(function (o) { return o.x == x && o.y == y; }).length > 0;
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
            // 预测下一次蛇头的位置
            Snake.prototype.nextStep = function () {
                var point;
                switch (this.Direction) {
                    case 0 /* Up */:
                        point = new SnakeXenzia.Point(this.bodys[0].x, this.bodys[0].y - 1);
                        break;
                    case 1 /* Down */:
                        point = new SnakeXenzia.Point(this.bodys[0].x, this.bodys[0].y + 1);
                        break;
                    case 2 /* Left */:
                        point = new SnakeXenzia.Point(this.bodys[0].x - 1, this.bodys[0].y);
                        break;
                    case 3 /* Right */:
                        point = new SnakeXenzia.Point(this.bodys[0].x + 1, this.bodys[0].y);
                        break;
                }
                ;
                return point;
            };
            ;
            // 吃食物
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