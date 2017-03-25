module dayi.SnakeXenzia {
    class Game {
        // 蛇
        snake: Snake;

        // 食物
        foods: Array<Food>;
        foodsCount: number = 10;

        // 移动方向
        direction: MoveDirection;

        // 游戏的行数、列数
        rowCount: number = 30;
        columnCount: number = 30;

        // 游戏的绘制对象
        draw: Draw;

        constructor() {
            this.snake = new Snake();
            // 随机生成方向
            this.direction = Math.floor(Math.random() * 4);

            // 生成食物

            // 绘制游戏
            this.draw = new Draw();
            this.draw.drawEnvirment(this.rowCount, this.columnCount);

        };
    };

window.onload = () => {
    var game = new Game();
};
}