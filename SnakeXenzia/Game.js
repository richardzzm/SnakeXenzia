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
                this.snake = new SnakeXenzia.Snake();
                // 随机生成方向
                this.direction = Math.floor(Math.random() * 4);
                // 生成食物
                // 绘制游戏
                this.draw = new SnakeXenzia.Draw();
                this.draw.drawEnvirment(this.rowCount, this.columnCount);
            }
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