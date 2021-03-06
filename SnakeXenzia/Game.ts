﻿module dayi.SnakeXenzia {
    class Game {
        // 蛇
        private snake: Snake;

        // 食物
        private foods: Array<Food>;
        private foodsCount: number = 10;

        // 游戏的行数、列数
        private rowCount: number = 30;
        private columnCount: number = 30;

        // 游戏的绘制对象
        private draw: IDraw;

        //
        // 游戏控制
        //
        private isPaused: boolean = true;
        private timer: number;
        private speed: number = 250;

        constructor() {
            // 绘制游戏背景
            this.draw = new Draw();
            this.draw.drawEnvirment(this.rowCount, this.columnCount);

            // 生成贪食蛇
            let x = Math.floor(Math.random() * this.columnCount);;
            let y = Math.floor(Math.random() * this.rowCount);
            this.snake = new Snake(x, y);
            this.drawSnake();

            // 随机生成方向
            this.snake.Direction = MoveDirection.Up;
            this.snake.Direction = Math.floor(Math.random() * 4);

            // 生成食物
            this.foods = new Array<Food>();
            for (let i = 0; i < this.foodsCount; i++) {
                let food = this.generateFood();
                this.draw.drawFood(food.x, food.y);
            }

            document.onkeydown = (e) => {
                switch (e.keyCode | e.which | e.charCode) {
                    case 13: // 回车
                        if (this.isPaused) {
                            this.run();
                            this.isPaused = false;
                        }
                        else {
                            this.isPaused = true;
                            this.pause();
                        }
                        break;
                    case 37:    // 左键
                        if (this.snake.Direction == MoveDirection.Right) break;
                        this.snake.Direction = MoveDirection.Left;
                        break;
                    case 38:    // 上键
                        if (this.snake.Direction == MoveDirection.Down) break;
                        this.snake.Direction = MoveDirection.Up;
                        break;
                    case 39:    // 右键
                        if (this.snake.Direction == MoveDirection.Left) break;
                        this.snake.Direction = MoveDirection.Right;
                        break;
                    case 40:    // 下键
                        if (this.snake.Direction == MoveDirection.Up) break;
                        this.snake.Direction = MoveDirection.Down;
                        break;
                }
            };
        };

        generateFood (): Food {
            let x: number;
            let y: number;
            do {
                x = Math.floor(Math.random() * this.columnCount);
                y = Math.floor(Math.random() * this.rowCount);
            } while (this.getFood(x, y) != null || this.snake.isOnSnake(x, y));

            let food: Food = new Food(x, y);
            this.foods.push(food);

            return food;
        };

        getFood(x: number, y: number): Food {
            if (this.foods.length == 0) return null;
            else {
                let foods = this.foods.filter(o => o.x == x && o.y == y);
                if (foods.length > 0)
                    return foods[0];
                else
                    return null;
            }
        };

        drawSnake() {
            this.snake.bodys.forEach(b => this.draw.drawSnake(b.x, b.y));
        };

        moveNext() {
            // 蛇下一步的位置
            let nextPoint: Point = this.snake.nextStep();

            // 如果蛇移出边界，或蛇头吃到自己身体，则游戏结束
            if (nextPoint.x < 0 || nextPoint.x >= this.columnCount
                || nextPoint.y < 0 || nextPoint.y >= this.rowCount ||
                this.snake.isOnSnake(nextPoint.x, nextPoint.y)) {
                this.pause();
                alert("游戏结束");
            }
            else {
                let food: Food = this.getFood(nextPoint.x, nextPoint.y)

                if (food != null) {
                    // 吃食物
                    this.snake.eat(food);
                    this.draw.drawSnake(nextPoint.x, nextPoint.y);

                    // 将该食物删除
                    let index = this.foods.indexOf(food);
                    this.foods.splice(index, 1);

                    // 产生一个新的食物
                    food = this.generateFood();
                    this.draw.drawFood(food.x, food.y);
                }
                else {
                    let snakeTail = this.snake.bodys[this.snake.bodys.length - 1];
                    this.snake.move();
                    // 绘制蛇头，擦除蛇尾
                    let snakeHead = this.snake.bodys[0];
                    this.draw.drawSnake(snakeHead.x, snakeHead.y);
                    this.draw.cleanPoint(snakeTail.x, snakeTail.y);
                }
            };
        };

        // 暂停
        pause() {
            clearInterval(this.timer);
            this.isPaused = true;
        };

        // 运行
        run() {
            let snake = this;
            this.timer = setInterval(() =>snake.moveNext(), this.speed);
        };
    };

window.onload = () => {
    let game = new Game();
};
}