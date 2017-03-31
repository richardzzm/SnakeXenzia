module dayi.SnakeXenzia {
    export class Draw implements IDraw {
        // 容器
        container: HTMLTableElement;

        constructor() {
            this.container = <HTMLTableElement>document.getElementById("tblContainer");
        };

        drawEnvirment(rowCount: number, columnCount: number) {
            for (let i = 0; i < rowCount; i++) {
                let row = <HTMLTableRowElement>this.container.insertRow(-1);
                for (let j = 0; j < columnCount; j++)
                    row.insertCell(-1);
            }
        };

        drawFood(x: number, y: number) {
            (<HTMLTableCellElement>(<HTMLTableRowElement>this.container.rows[y]).cells[x]).style.backgroundColor = "#ff0";
        }

        drawSnake(x: number, y: number) {
            (<HTMLTableCellElement>(<HTMLTableRowElement>this.container.rows[y]).cells[x]).style.backgroundColor = "#999";
        }

        cleanPoint(x: number, y: number) {
            (<HTMLTableCellElement>(<HTMLTableRowElement>this.container.rows[y]).cells[x]).style.backgroundColor = "#fff";
        }
    };
}