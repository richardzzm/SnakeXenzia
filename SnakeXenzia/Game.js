var dayi;
(function (dayi) {
    var SnakeXenzia;
    (function (SnakeXenzia) {
        var Game = (function () {
            function Game() {
                this.foodsCount = 10;
                // 游戏的行数、列数
                this.rowCount = 30;
                this.columnCount = 30;
                //
                // 游戏控制
                //
                this.isPause = false;
                // 绘制游戏背景
                this.draw = new SnakeXenzia.Draw();
                this.draw.drawEnvirment(this.rowCount, this.columnCount);
                // 生成贪食蛇
                var x = Math.floor(Math.random() * this.columnCount);
                ;
                var y = Math.floor(Math.random() * this.rowCount);
                this.snake = new SnakeXenzia.Snake(x, y);
                this.drawSnake();
                // 随机生成方向
                this.direction = Math.floor(Math.random() * 4);
                // 生成食物
                this.foods = new Array();
                for (var i = 0; i < this.foodsCount; i++) {
                    var food = this.generateFood();
                    this.foods.push(food);
                    this.draw.drawFood(food.x, food.y);
                }
            }
            ;
            Game.prototype.generateFood = function () {
                var x;
                var y;
                do {
                    x = Math.floor(Math.random() * this.columnCount);
                    y = Math.floor(Math.random() * this.rowCount);
                } while (this.isHasFood(x, y) || this.snake.isOnSnake(x, y));
                return new SnakeXenzia.Food(x, y);
            };
            ;
            Game.prototype.isHasFood = function (x, y) {
                if (this.foods.length == 0)
                    return false;
                else
                    return this.foods.every(function (o) { return o.x == x && o.y == y; });
            };
            ;
            Game.prototype.drawSnake = function () {
                var _this = this;
                this.snake.bodys.forEach(function (b) { return _this.draw.drawSnake(b.x, b.y); });
            };
            ;
            Game.prototype.moveNext = function () {
                // 蛇下一步的位置
                var nextPoint = this.snake.nextStep();
                // 如果蛇移出边界，或蛇头吃到自己身体，则游戏结束
                if (nextPoint.x < 0 || nextPoint.x >= this.columnCount
                    || nextPoint.y < 0 || nextPoint.y >= this.rowCount ||
                    this.snake.isOnSnake(nextPoint.x, nextPoint.y)) {
                    alert("游戏结束");
                }
                else if (this.isHasFood(nextPoint.x, nextPoint.y)) {
                }
                else {
                }
            };
            ;
            return Game;
        }());
        ;
        window.onload = function () {
            var game = new Game();
        };
    })(SnakeXenzia = dayi.SnakeXenzia || (dayi.SnakeXenzia = {}));
})(dayi || (dayi = {}));
//# sourceMappingURL=Game.js.map