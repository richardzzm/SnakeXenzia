var dayi;
(function (dayi) {
    var SnakeXenzia;
    (function (SnakeXenzia) {
        var Game = (function () {
            function Game() {
                var _this = this;
                this.foodsCount = 10;
                this.rowCount = 30;
                this.columnCount = 30;
                this.isPaused = true;
                this.speed = 250;
                this.draw = new SnakeXenzia.Draw();
                this.draw.drawEnvirment(this.rowCount, this.columnCount);
                var x = Math.floor(Math.random() * this.columnCount);
                ;
                var y = Math.floor(Math.random() * this.rowCount);
                this.snake = new SnakeXenzia.Snake(x, y);
                this.drawSnake();
                this.snake.Direction = 0;
                this.snake.Direction = Math.floor(Math.random() * 4);
                this.foods = new Array();
                for (var i = 0; i < this.foodsCount; i++) {
                    var food = this.generateFood();
                    this.draw.drawFood(food.x, food.y);
                }
                document.onkeydown = function (e) {
                    var snake = _this;
                    switch (e.keyCode | e.which | e.charCode) {
                        case 13:
                            if (snake.isPaused) {
                                snake.run();
                                snake.isPaused = false;
                            }
                            else {
                                snake.isPaused = true;
                                _this.pause();
                            }
                            break;
                        case 37:
                            if (snake.snake.Direction == 3)
                                break;
                            snake.snake.Direction = 2;
                            break;
                        case 38:
                            if (snake.snake.Direction == 1)
                                break;
                            snake.snake.Direction = 0;
                            break;
                        case 39:
                            if (snake.snake.Direction == 2)
                                break;
                            snake.snake.Direction = 3;
                            break;
                        case 40:
                            if (snake.snake.Direction == 0)
                                break;
                            snake.snake.Direction = 1;
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
                var nextPoint = this.snake.nextStep();
                if (nextPoint.x < 0 || nextPoint.x >= this.columnCount
                    || nextPoint.y < 0 || nextPoint.y >= this.rowCount ||
                    this.snake.isOnSnake(nextPoint.x, nextPoint.y)) {
                    this.pause();
                    alert("游戏结束");
                }
                else {
                    var food = this.getFood(nextPoint.x, nextPoint.y);
                    if (food != null) {
                        this.snake.eat(food);
                        this.draw.drawSnake(nextPoint.x, nextPoint.y);
                        var index = this.foods.indexOf(food);
                        this.foods.splice(index, 1);
                        var food = this.generateFood();
                        this.draw.drawFood(food.x, food.y);
                    }
                    else {
                        var snakeTail = this.snake.bodys[this.snake.bodys.length - 1];
                        this.snake.move();
                        var snakeHead = this.snake.bodys[0];
                        this.draw.drawSnake(snakeHead.x, snakeHead.y);
                        this.draw.cleanPoint(snakeTail.x, snakeTail.y);
                    }
                }
                ;
            };
            ;
            Game.prototype.pause = function () {
                clearInterval(this.timer);
                this.isPaused = true;
            };
            ;
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
