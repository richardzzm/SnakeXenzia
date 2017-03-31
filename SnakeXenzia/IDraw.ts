module dayi.SnakeXenzia {
    export interface IDraw {
        // 绘制游戏环境
        drawEnvirment(rowCount: number, columnCount: number);

        // 绘制食物
        drawFood(x: number, y: number);

        // 绘制蛇
        drawSnake(x: number, y: number);

        // 擦除点
        cleanPoint(x: number, y: number);
    }
}