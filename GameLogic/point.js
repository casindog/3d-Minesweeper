class Point {
    constructor(row, col, value) {
        this.pointRow = row;
        this.pointCol = col;
        this.pointValue = value;

        this.neighbors;
    }

    countMines() {
        // this will be similar to the dfs algo we made for multi-go
    }
}

module.exports = Point;