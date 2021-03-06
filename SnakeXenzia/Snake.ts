﻿module dayi.SnakeXenzia {
    export class Snake {
        // 蛇身
        bodys: Array<Point>;
        // 蛇头方向
        private direction: MoveDirection;

        constructor(x: number, y: number) {
            this.bodys = new Array<Point>();
            this.bodys.push(new Point(x, y));
        }

        get Direction() {
            return this.direction;
        };
        set Direction(direction: MoveDirection) {
            this.direction = direction;
        };

        // 坐标是否在蛇身体上
        isOnSnake(x: number, y: number): boolean {
            return this.bodys.some(o => o.x == x && o.y == y);
        };

        // 移动到下一个位置
        // 返回两个位置：第一个位置是蛇头的新位置，第二个是原蛇尾的位置
        move() {
            let newHead: Point = this.nextStep();
            this.bodys.unshift(newHead);
            this.bodys.pop();
        };

        // 预测下一次蛇头的位置
        nextStep(): Point {
            let point: Point;
            switch (this.Direction) {
                case MoveDirection.Up:
                    point = new Point(this.bodys[0].x, this.bodys[0].y - 1);
                    break;
                case MoveDirection.Down:
                    point = new Point(this.bodys[0].x, this.bodys[0].y + 1);
                    break;
                case MoveDirection.Left:
                    point = new Point(this.bodys[0].x - 1, this.bodys[0].y);
                    break;
                case MoveDirection.Right:
                    point = new Point(this.bodys[0].x + 1, this.bodys[0].y);
                    break;
            };
            return point;
        };

        // 吃食物
        eat(food: Food) {
            // TODO:检查是否能吃到

            let newHead: Point = this.nextStep();
            this.bodys.unshift(newHead);
        };
    };
}