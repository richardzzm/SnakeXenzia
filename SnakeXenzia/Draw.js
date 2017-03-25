var dayi;
(function (dayi) {
    var SnakeXenzia;
    (function (SnakeXenzia) {
        var Draw = (function () {
            function Draw() {
                this.drawEnvirment = function (rowCount, columnCount) {
                    for (var i = 0; i < rowCount; i++) {
                        var row = this.container.insertRow(-1);
                        for (var j = 0; j < columnCount; j++)
                            row.insertCell(-1);
                    }
                };
                this.container = document.getElementById("tblContainer");
            }
            ;
            return Draw;
        }());
        SnakeXenzia.Draw = Draw;
        ;
    })(SnakeXenzia = dayi.SnakeXenzia || (dayi.SnakeXenzia = {}));
})(dayi || (dayi = {}));
//# sourceMappingURL=Draw.js.map