const Point = require('./point');

class Plane {
    // assume 4x4 w/ 4 mines for dev
    // intentionally adding 2 to 4 because it will help set neighbors. 
    constructor(row=6, col=6, mines=4) {
        this.row = row;
        this.col = col;
        this.mines = mines;
        this.grid = this.createGrid();
    }

    createGrid() {
        let grid = new Array(this.row);

        for (let i=0; i<this.col; i++) {
            grid[i] = new Array(this.col);
        }

        let mines = this.mines;

        while (mines > 0) {
            let randRowIdx = Math.floor(Math.random() * (grid.length));
            let randColIdx = Math.floor(Math.random() * (grid[0].length));
            
            if (randRowIdx===0 || randRowIdx===this.row-1 ||
                randColIdx===0 || randColIdx===this.col-1) {

                // do nothing
            } else if (grid[randRowIdx][randColIdx] instanceof Point) {
                // do nothing
            } else {
                grid[randRowIdx][randColIdx] = new Point(randRowIdx, randColIdx, 'M');
                mines-- 
            }

        }

        for (let row=0; row<this.col; row++) {
            for (let col=0; col<this.col; col++) {
                if (row===0 || row===this.row-1 ||
                    col===0 || col===this.col-1) {
                    
                    grid[row][col] = new Point(row, col, null);
                } else if (grid[row][col] === undefined) {
                    grid[row][col] = new Point(row,col,'!m');
                }
            }
        }

        return grid
    }


    render() {
        for(let row=0; row<this.row; row++) {
            console.log(this.grid[row].map((point) => {return `(${point.row},${point.col}): ${point.value}`}).join('  '))
            // console.log('\n')
        }
    }

}

module.exports = Plane;

// p = new Plane();
// p.render();
// p.setNeighbors();