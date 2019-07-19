class Point {
    constructor(row, col, value) {
        this.row = row;
        this.col = col;
        this.value = value;

        this.neighbors;
    }

    countMines() {
        // this will be similar to the dfs algo we made for multi-go
    }
}

module.exports = Point;