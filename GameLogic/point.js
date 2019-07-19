class Point {
    constructor(row, col, value) {
        this.row = row;
        this.col = col;
        this.value = value;
        this.hidden = true;
        this.neighbors;
    }

}


module.exports = Point;