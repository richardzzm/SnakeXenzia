var dayi;
(function (dayi) {
    var SnakeXenzia;
    (function (SnakeXenzia) {
        var Draw = (function () {
            function Draw() {
                this.container = document.getElementById("tblContainer");
            }
            ;
            Draw.prototype.drawEnvirment = function (rowCount, columnCount) {
                for (var i = 0; i < rowCount; i++) {
                    var row = this.container.insertRow(-1);
                    for (var j = 0; j < columnCount; j++)
                        row.insertCell(-1);
                }
            };
            ;
            Draw.prototype.drawFood = function (x, y) {
                this.container.rows[y].cells[x].style.backgroundColor = "#ff0";
            };
            Draw.prototype.drawSnake = function (x, y) {
                this.container.rows[y].cells[x].style.backgroundColor = "#999";
            };
            return Draw;
        }());
        SnakeXenzia.Draw = Draw;
        ;
    })(SnakeXenzia = dayi.SnakeXenzia || (dayi.SnakeXenzia = {}));
})(dayi || (dayi = {}));
//# sourceMappingURL=Draw.js.map