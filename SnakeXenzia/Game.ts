module dayi.SnakeXenzia {
    export class Game {
        // 蛇
        snake: Snake;
        // 食物
        foods: Array<Food>;

        // 移动方向
        direction: MoveDirection;

        // 游戏的行数、列数
        rowCount: number = 30;
        columnCount: number = 30;

        constructor() {
        }
    };
}