var dayi;
(function (dayi) {
    var SnakeXenzia;
    (function (SnakeXenzia) {
        var Game = (function () {
            function Game() {
                var _this = this;
                this.foodsCount = 10;
                // 游戏的行数、列数
                this.rowCount = 30;
                this.columnCount = 30;
                //
                // 游戏控制
                //
                this.isPaused = true;
                this.speed = 250;
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
                this.snake.Direction = 0 /* Up */;
                this.snake.Direction = Math.floor(Math.random() * 4);
                // 生成食物
                this.foods = new Array();
                for (var i = 0; i < this.foodsCount; i++) {
                    var food = this.generateFood();
                    this.draw.drawFood(food.x, food.y);
                }
                document.onkeydown = function (e) {
                    switch (e.keyCode | e.which | e.charCode) {
                        case 13:
                            if (_this.isPaused) {
                                _this.run();
                                _this.isPaused = false;
                            }
                            else {
                                _this.isPaused = true;
                                _this.pause();
                            }
                            break;
                        case 37:
                            if (_this.snake.Direction == 3 /* Right */)
                                break;
                            _this.snake.Direction = 2 /* Left */;
                            break;
                        case 38:
                            if (_this.snake.Direction == 1 /* Down */)
                                break;
                            _this.snake.Direction = 0 /* Up */;
                            break;
                        case 39:
                            if (_this.snake.Direction == 2 /* Left */)
                                break;
                            _this.snake.Direction = 3 /* Right */;
                            break;
                        case 40:
                            if (_this.snake.Direction == 0 /* Up */)
                                break;
                            _this.snake.Direction = 1 /* Down */;
                            break;
                    }
                };
            }
            ;
            Game.prototype.generateFood = function () {
                var x;
                var y;
                do {
                    x = Math.floor(Math.random() * this.columnCount);
                    y = Math.floor(Math.random() * this.rowCount);
                } while (this.getFood(x, y) != null || this.snake.isOnSnake(x, y));
                var food = new SnakeXenzia.Food(x, y);
                this.foods.push(food);
                return food;
            };
            ;
            Game.prototype.getFood = function (x, y) {
                if (this.foods.length == 0)
                    return null;
                else {
                    var foods = this.foods.filter(function (o) { return o.x == x && o.y == y; });
                    if (foods.length > 0)
                        return foods[0];
                    else
                        return null;
                }
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
                    this.pause();
                    alert("游戏结束");
                }
                else {
                    var food = this.getFood(nextPoint.x, nextPoint.y);
                    if (food != null) {
                        // 吃食物
                        this.snake.eat(food);
                        this.draw.drawSnake(nextPoint.x, nextPoint.y);
                        // 将该食物删除
                        var index = this.foods.indexOf(food);
                        this.foods.splice(index, 1);
                        // 产生一个新的食物
                        food = this.generateFood();
                        this.draw.drawFood(food.x, food.y);
                    }
                    else {
                        var snakeTail = this.snake.bodys[this.snake.bodys.length - 1];
                        this.snake.move();
                        // 绘制蛇头，擦除蛇尾
                        var snakeHead = this.snake.bodys[0];
                        this.draw.drawSnake(snakeHead.x, snakeHead.y);
                        this.draw.cleanPoint(snakeTail.x, snakeTail.y);
                    }
                }
                ;
            };
            ;
            // 暂停
            Game.prototype.pause = function () {
                clearInterval(this.timer);
                this.isPaused = true;
            };
            ;
            // 运行
            Game.prototype.run = function () {
                var snake = this;
                this.timer = setInterval(function () { return snake.moveNext(); }, this.speed);
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