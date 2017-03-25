module dayi.SnakeXenzia {
    export class Draw {
        // 容器
        container: HTMLTableElement;

        constructor() {
            this.container = <HTMLTableElement>document.getElementById("tblContainer");
        };

        drawEnvirment = function (rowCount: number, columnCount: number) {
            for (var i = 0; i < rowCount; i++) {
                var row = <HTMLTableRowElement>this.container.insertRow(-1);
                for (var j = 0; j < columnCount; j++)
                    row.insertCell(-1);
            }
        };
    };
}