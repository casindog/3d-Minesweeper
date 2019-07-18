const Point = require('./point');

class Plane {
    // for now, lets assume 8x8 w/ 10 mines each
    constructor(planeRow=4, planeCol=4, mines=4) {
        this.planeRow = planeRow;
        this.planeCol = planeCol;
        this.planeMines = mines;
        this.minesArray = this.generateMines(this.planeCol * this.planeRow, this.planeMines);
        this.planeGrid = this.createGrid(this.planeRow, this.planeCol, this.minesArray);

        this.render();
    }

    // create arr of total points on plane
        generateMines(totalPoints, mines) {
        let arr = new Array(totalPoints);

        // generate mine values on plane
        for (let i=0; i<mines; i++) {
            arr[i] = 'M';
        }

        return this.shuffle(arr);
    }

    shuffle(arr) {
        let shuffledArray = [];

        while (arr.length > 0) {
            let randomIdx = Math.floor(Math.random() * (arr.length));

            shuffledArray.push(arr[randomIdx]);
            arr = arr.slice(0,randomIdx).concat(arr.slice(randomIdx+1));
        }
        
        shuffledArray = shuffledArray.map((ele) => {
            if (ele === 'M') {
                return ele
            } else {
                return '!m'
            }
        })

        return shuffledArray;
    }

    createGrid() {
        let grid = new Array(this.planeRow);
        
        for (let i=0; i<grid.length; i++) {
            grid[i] = new Array(this.planeCol);
        }

        let i = 0;
        for (let row = 0; row < this.planeRow; row++) {
            for (let col = 0; col < this.planeCol; col++) {
                grid[row][col] = new Point(row, col, this.minesArray[i])
                i++
            }
        }

        return grid
    }

    displayNeighbors(row, col) {
        console.log(this.planeGrid[row][col].neighbors)
    }

    setNeighbors() {
        for (let row = 0; row < this.planeRow; row++) {
            for (let col = 0; col < this.planeCol; col++) {
                
                console.log(`RC: ${row}, ${col}`)
                let neighbors;
                if (this.setCornerNeighbors(row,col)) {
                    // this seems redundant
                    this.setCornerNeighbors(row, col);
                } elseif (this.setBorderNeighbors(row, col)) {
                    (row===0 && !(col === 0 || col === this.planeCol-1)) {
                        // top border
                        neighbors = {
                            "top": null,
                            "top-right": null,
                            "right": this.planeGrid[row][col + 1],
                            "bottom-right": this.planeGrid[row + 1][col + 1],
                            "bottom": this.planeGrid[row + 1][col],
                            "bottom-left": this.planeGrid[row+1][col-1],
                            "left": this.planeGrid[row][col - 1],
                            "top-left": null
                        }
                    } else if (col===this.planeCol-1 && !(row===0 || row===this.planeRow-1)) {
                        // right border
                        neighbors = {
                            "top": this.planeGrid[row - 1][col],
                            "top-right": this.planeGrid[row - 1][col + 1],
                            "right": this.planeGrid[row][col + 1],
                            "bottom-right": this.planeGrid[row + 1][col + 1],
                            "bottom": this.planeGrid[row + 1][col],
                            "bottom-left": null,
                            "left": null,
                            "top-left": null
                        }
                    } else if (row===this.planeRow-1 && !(col===0 || col===this.planeCol-1)) {
                        // bottom border
                        neighbors = {
                            "top": this.planeGrid[row - 1][col],
                            "top-right": this.planeGrid[row-1][col+1],
                            "right": this.planeGrid[row][col+1],
                            "bottom-right": null,
                            "bottom": null,
                            "bottom-left": null,
                            "left": this.planeGrid[row][col - 1],
                            "top-left": this.planeGrid[row - 1][col - 1]
                        }
                    } else if (col===0 && !(row===0 || row===this.planeRow-1)) {
                        // left border
                        neighbors = {
                            "top": this.planeGrid[row - 1][col],
                            "top-right": this.planeGrid[row-1][col+1],
                            "right": this.planeGrid[row][col+1],
                            "bottom-right": this.planeGrid[row+1][col+1],
                            "bottom": this.planeGrid[row + 1][col],
                            "bottom-left": null,
                            "left": null,
                            "top-left": null
                        }
                    }

                // every other point
                } else {
                    "top": this.planeGrid[row - 1][col],
                    neighbors = {
                        "top-right": this.planeGrid[row - 1][col + 1],
                        "right": this.planeGrid[row][col + 1],
                        "bottom-right": this.planeGrid[row + 1][col + 1],
                        "bottom": this.planeGrid[row + 1][col],
                        "bottom-left": this.planeGrid[row + 1][col - 1],
                        "left": this.planeGrid[row][col - 1],
                        "top-left": this.planeGrid[row - 1][col - 1]
                    }
                }
                
                this.planeGrid[row][col].neighbors = neighbors;
            }
        }
    }

    setCornerNeighbors(row, col) {
        if (row === 0 && col === 0) {
            // top left corner
            return neighbors = {
                "top": null,
                "top-right": null,
                "right": this.planeGrid[row][col + 1],
                "bottom-right": this.planeGrid[row + 1][col + 1],
                "bottom": this.planeGrid[row + 1][col],
                "bottom-left": null,
                "left": null,
                "top-left": null
            }
        } else if (row === 0 && col === this.planeCol - 1) {
            // top right corner
            return neighbors = {
                "top": null,
                "top-right": null,
                "right": null,
                "bottom-right": null,
                "bottom": this.planeGrid[row + 1][col],
                "bottom-left": this.planeGrid[row + 1][col - 1],
                "left": this.planeGrid[row][col - 1],
                "top-left": null
            }
        } else if (row === this.planeRow - 1 && col === this.planeCol - 1) {
            // bottom right corner
            return neighbors = {
                "top": this.planeGrid[row - 1][col],
                "top-right": null,
                "right": null,
                "bottom-right": null,
                "bottom": null,
                "bottom-left": null,
                "left": this.planeGrid[row][col - 1],
                "top-left": this.planeGrid[row - 1][col - 1]
            }
        } else if (row === this.planeRow - 1 && col === 0) {
            // bottom left corner
            return neighbors = {
                "top": this.planeGrid[row - 1][col],
                "top-right": this.planeGrid[row - 1][col + 1],
                "right": this.planeGrid[row][col + 1],
                "bottom-right": null,
                "bottom": null,
                "bottom-left": null,
                "left": null,
                "top-left": null
            }
        }

        return false
    }

    setBorderNeighbors(row, col) {
        // borders but not corners

        if (row === 0 || row === this.planeRow-1 || 
            col === 0 || col === this.planeCol-1)  {

            return true;
        } else {
            return false;
        }
    }

    render() {
        for(let row=0; row<this.planeRow; row++) {
            console.log(this.planeGrid[row].map((point) => {return `RC:${point.pointRow},${point.pointCol}`}).join('  '))
            console.log('\n')
        }
    }

}

module.exports = Plane;

// p.render();
// p = new Plane();