module dayi.SnakeXenzia {
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
        private draw: Draw;

        //
        // 游戏控制
        //
        private isPause: boolean = false;
        private Timer: number;

        // 移动方向
        private direction: MoveDirection;

        constructor() {
            // 绘制游戏背景
            this.draw = new Draw();
            this.draw.drawEnvirment(this.rowCount, this.columnCount);

            // 生成贪食蛇
            var x = Math.floor(Math.random() * this.columnCount);;
            var y = Math.floor(Math.random() * this.rowCount);
            this.snake = new Snake(x, y);
            this.drawSnake();

            // 随机生成方向
            this.direction = Math.floor(Math.random() * 4);

            // 生成食物
            this.foods = new Array<Food>();
            for (var i = 0; i < this.foodsCount; i++) {
                var food = this.generateFood();
                this.foods.push(food);
                this.draw.drawFood(food.x, food.y);
            }


        };

        generateFood (): Food {
            var x: number;
            var y: number;
            do {
                x = Math.floor(Math.random() * this.columnCount);
                y = Math.floor(Math.random() * this.rowCount);
            } while (this.isHasFood(x, y) || this.snake.isOnSnake(x, y));
            return new Food(x, y);
        };

        isHasFood(x: number, y: number): boolean {
            if (this.foods.length == 0) return false;
            else return this.foods.every(o => o.x == x && o.y == y);
        };

        drawSnake() {
            this.snake.bodys.forEach(b => this.draw.drawSnake(b.x, b.y));
        };

        moveNext() {
            // 蛇下一步的位置
            var nextPoint: Point = this.snake.nextStep();

            // 如果蛇移出边界，或蛇头吃到自己身体，则游戏结束
            if (nextPoint.x < 0 || nextPoint.x >= this.columnCount
                || nextPoint.y < 0 || nextPoint.y >= this.rowCount ||
                this.snake.isOnSnake(nextPoint.x, nextPoint.y)) {
                alert("游戏结束");
            }
            else if (this.isHasFood(nextPoint.x, nextPoint.y)) {
                //this.snake.eat();
            }
            else {
            }
        };
    };

window.onload = () => {
    var game = new Game();
};
}