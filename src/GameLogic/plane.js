// const Point = require('./point');

class Plane {

    // intentionally adding 2 to 4 because it will help set neighbors. 
    constructor(row=6, col=6, mines=2) {
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
                grid[randRowIdx][randColIdx] = new Point(randRowIdx, randColIdx, 'Mine');
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

    setPointValue(plane) {
        // set value to # if mines adj
        // set value to 'v' if no bombs adjacent
        // set value to 'M' if mine
        let count;
        let neighbors;

        for (let row=1; row<plane.row-1; row++) {
            for (let col=1; col<plane.col-1; col++) {

                if (plane.grid[row][col].value === 'Mine') {
                    // do nothing
                } else {
                    count = 0;

                    neighbors = Object.values(plane.grid[row][col].neighbors.upPlane).concat(
                                Object.values(plane.grid[row][col].neighbors.samePlane)).concat(
                                Object.values(plane.grid[row][col].neighbors.downPlane))

                    neighbors.forEach((neighbor) => {
                        if (neighbor.value === 'Mine') {
                            count++
                        }
                    })

                    if (count === 0) {
                        plane.grid[row][col].value='vac';
                    } else if (count > 0) {
                        plane.grid[row][col].value=count;
                    }
                }

            }
        }

    }

    setPointsPlaneIdx(idx) {
        for (let row = 1; row < 5; row++) {
            for (let col = 1; col < 5; col++) {
                this.grid[row][col].plane = idx;
            }
        }
    }

    render() {
        for(let row=0; row<this.row; row++) {
            console.log(this.grid[row].map((point) => {return (`${point.row},${point.col}: ${point.value}`).padEnd(10, ' ')}).join('  '))
        }
    }

    renderMove() {
        for (let row = 0; row < this.row; row++) {
            if (row===0 || row===this.row-1) {
                console.log(this.grid[row].map((point) => {
                    return (`${point.row},${point.col}: ${point.value}`).padEnd(10, ' ')
                }).join('  '))
            } else {

                console.log(this.grid[row].map((point) => {
                    let display;

                    if (point.col===0 || point.col===this.col-1) {
                        display = point.value
                    } else {
                        if (point.hidden) {
                            display = 'Hide';
                        } else {
                            display = point.value;
                        }
                    }

                    return (`${point.row},${point.col}: ${display}`).padEnd(10, ' ')
                }).join('  '))

            }
        }
    }

}

// module.exports = Plane;