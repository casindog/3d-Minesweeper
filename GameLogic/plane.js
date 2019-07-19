const Point = require('./point');

class Plane {
    // assume 4x4 w/ 4 mines for dev
    constructor(planeRow=4, planeCol=4, mines=4) {
        this.planeRow = planeRow;
        this.planeCol = planeCol;
        this.planeMines = mines;
        this.planeGrid = this.createGrid();

        // this.render();
    }

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

        let minesArray = this.generateMines(this.planeCol * this.planeRow, this.planeMines);

        let i = 0;
        for (let row = 0; row < this.planeRow; row++) {
            for (let col = 0; col < this.planeCol; col++) {
                grid[row][col] = new Point(row, col, minesArray[i])
                i++
            }
        }

        return grid
    }

    // displayNeighbors(row, col) {
    //     console.log(this.planeGrid[row][col].neighbors)
    // }

    // setNeighbors(planeIdx, lastPlaneIdx) {

    //     if (planeIdx===0) {

    //         for (let row = 0; row < this.planeRow; row++) {
    //             for (let col = 0; col < this.planeCol; col++) {
                    
    //                 // console.log(`RC: ${row}, ${col}`)
    //                 let neighbors;
    //                 if (this.setCornerNeighbors(row, col)) {
    //                     neighbors = this.setCornerNeighbors(row, col);
    //                 } else if (this.setBorderNeighbors(row, col)) {
    //                     neighbors = this.setBorderNeighbors(row, col);
    //                 } else {
    //                     // every other point
    //                     neighbors = { 
    //                         upPlane: {
    //                             "up": null,
    //                             "N": null, 
    //                             "NE": null, 
    //                             "E": null, 
    //                             "SE": null, 
    //                             "S": null, 
    //                             "SW": null, 
    //                             "W": null, 
    //                             "NW": null 
    //                         },
    //                         samePlane: {
    //                             "N": this.planeGrid[row - 1][col],
    //                             "NE": this.planeGrid[row - 1][col + 1],
    //                             "E": this.planeGrid[row][col + 1],
    //                             "SE": this.planeGrid[row + 1][col + 1],
    //                             "S": this.planeGrid[row + 1][col],
    //                             "SW": this.planeGrid[row + 1][col - 1],
    //                             "W": this.planeGrid[row][col - 1],
    //                             "NW": this.planeGrid[row - 1][col - 1]
    //                         },
    //                         downPlane: {
    //                             "down": g.planes[planeIdx+1].planeGrid[rol][col],
    //                             "N": g.planes[planeIdx+1].planeGrid[row - 1][col],
    //                             "NE": g.planes[planeIdx+1].planeGrid[row - 1][col + 1],
    //                             "E": g.planes[planeIdx+1].planeGrid[row][col + 1],
    //                             "SE": g.planes[planeIdx+1].planeGrid[row + 1][col + 1],
    //                             "S": g.planes[planeIdx+1].planeGrid[row + 1][col],
    //                             "SW": g.planes[planeIdx+1].planeGrid[row + 1][col - 1],
    //                             "W": g.planes[planeIdx+1].planeGrid[row][col - 1],
    //                             "NW": g.planes[planeIdx+1].planeGrid[row - 1][col - 1]
    //                         }
    //                     }
    //                 }
                    
    //                 this.planeGrid[row][col].neighbors = neighbors;
    //             }
    //         }

    //     } else if (planeIdx === lastPlaneIdx) {

    //         for (let row = 0; row < this.planeRow; row++) {
    //             for (let col = 0; col < this.planeCol; col++) {

    //                 // console.log(`RC: ${row}, ${col}`)
    //                 let neighbors;
    //                 if (this.setCornerNeighbors(row, col)) {
    //                     neighbors = this.setCornerNeighbors(row, col);
    //                 } else if (this.setBorderNeighbors(row, col)) {
    //                     neighbors = this.setBorderNeighbors(row, col);
    //                 } else {
    //                     // every other point
    //                     neighbors = {
    //                         upPlane: {
    //                             "up": this.plane[rol][col],
    //                             "N": this.planeGrid[row - 1][col],
    //                             "NE": this.planeGrid[row - 1][col + 1],
    //                             "E": this.planeGrid[row][col + 1],
    //                             "SE": this.planeGrid[row + 1][col + 1],
    //                             "S": this.planeGrid[row + 1][col],
    //                             "SW": this.planeGrid[row + 1][col - 1],
    //                             "W": this.planeGrid[row][col - 1],
    //                             "NW": this.planeGrid[row - 1][col - 1]
    //                         },
    //                         samePlane: {
    //                             "N": this.planeGrid[row - 1][col],
    //                             "NE": this.planeGrid[row - 1][col + 1],
    //                             "E": this.planeGrid[row][col + 1],
    //                             "SE": this.planeGrid[row + 1][col + 1],
    //                             "S": this.planeGrid[row + 1][col],
    //                             "SW": this.planeGrid[row + 1][col - 1],
    //                             "W": this.planeGrid[row][col - 1],
    //                             "NW": this.planeGrid[row - 1][col - 1]
    //                         },
    //                         downPlane: {
    //                             "down": null, 
    //                             "N": null, 
    //                             "NE": null, 
    //                             "E": null, 
    //                             "SE": null, 
    //                             "S": null, 
    //                             "SW": null, 
    //                             "W": null, 
    //                             "NW": null 
    //                         }
    //                     }
    //                 }

    //                 this.planeGrid[row][col].neighbors = neighbors;    
    //             }
    //         }

    //     } else {

    //         for (let row = 0; row < this.planeRow; row++) {
    //             for (let col = 0; col < this.planeCol; col++) {

    //                 // console.log(`RC: ${row}, ${col}`)
    //                 let neighbors;
    //                 if (this.setCornerNeighbors(row, col)) {
    //                     neighbors = this.setCornerNeighbors(row, col);
    //                 } else if (this.setBorderNeighbors(row, col)) {
    //                     neighbors = this.setBorderNeighbors(row, col);
    //                 } else {
    //                     // every other point
    //                     neighbors = {
    //                         upPlane: {
    //                             "up": null,
    //                             "N": null,
    //                             "NE": null,
    //                             "E": null,
    //                             "SE": null,
    //                             "S": null,
    //                             "SW": null,
    //                             "W": null,
    //                             "NW": null
    //                         },
    //                         samePlane: {
    //                             "N": this.planeGrid[row - 1][col],
    //                             "NE": this.planeGrid[row - 1][col + 1],
    //                             "E": this.planeGrid[row][col + 1],
    //                             "SE": this.planeGrid[row + 1][col + 1],
    //                             "S": this.planeGrid[row + 1][col],
    //                             "SW": this.planeGrid[row + 1][col - 1],
    //                             "W": this.planeGrid[row][col - 1],
    //                             "NW": this.planeGrid[row - 1][col - 1]
    //                         },
    //                         downPlane: {
    //                             "down": this.plane[rol][col],
    //                             "N": this.planeGrid[row - 1][col],
    //                             "NE": this.planeGrid[row - 1][col + 1],
    //                             "E": this.planeGrid[row][col + 1],
    //                             "SE": this.planeGrid[row + 1][col + 1],
    //                             "S": this.planeGrid[row + 1][col],
    //                             "SW": this.planeGrid[row + 1][col - 1],
    //                             "W": this.planeGrid[row][col - 1],
    //                             "NW": this.planeGrid[row - 1][col - 1]
    //                         }
    //                     }
    //                 }

    //                 this.planeGrid[row][col].neighbors = neighbors;
    //             }
    //         }
    //     }

    // }

    // setCornerNeighbors(row, col) {

    //     if (row === 0 && col === 0) {
    //         // N W corner
    //         return {
    //             "N": null,
    //             "NE": null,
    //             "E": this.planeGrid[row][col + 1],
    //             "SE": this.planeGrid[row + 1][col + 1],
    //             "S": this.planeGrid[row + 1][col],
    //             "SW": null,
    //             "W": null,
    //             "NW": null
    //         }
    //     } else if (row === 0 && col === this.planeCol - 1) {
    //         // N E corner
    //         return {
    //             "N": null,
    //             "NE": null,
    //             "E": null,
    //             "SE": null,
    //             "S": this.planeGrid[row + 1][col],
    //             "SW": this.planeGrid[row + 1][col - 1],
    //             "W": this.planeGrid[row][col - 1],
    //             "NW": null
    //         }
    //     } else if (row === this.planeRow - 1 && col === this.planeCol - 1) {
    //         // S E corner
    //         return {
    //             "N": this.planeGrid[row - 1][col],
    //             "NE": null,
    //             "E": null,
    //             "SE": null,
    //             "S": null,
    //             "SW": null,
    //             "W": this.planeGrid[row][col - 1],
    //             "NW": this.planeGrid[row - 1][col - 1]
    //         }
    //     } else if (row === this.planeRow - 1 && col === 0) {
    //         // S W corner
    //         return {
    //             "N": this.planeGrid[row - 1][col],
    //             "NE": this.planeGrid[row - 1][col + 1],
    //             "E": this.planeGrid[row][col + 1],
    //             "SE": null,
    //             "S": null,
    //             "SW": null,
    //             "W": null,
    //             "NW": null
    //         }
    //     }

    //     return false
    // }

    // setBorderNeighbors(row, col) {
    //     // borders but not corners
    //     if (row === 0 && !(col === 0 || col === this.planeCol - 1)) {
    //         // N border
    //         return {
    //             "N": null,
    //             "NE": null,
    //             "E": this.planeGrid[row][col + 1],
    //             "SE": this.planeGrid[row + 1][col + 1],
    //             "S": this.planeGrid[row + 1][col],
    //             "SW": this.planeGrid[row + 1][col - 1],
    //             "W": this.planeGrid[row][col - 1],
    //             "NW": null
    //         }
    //     } else if (col === this.planeCol - 1 && !(row === 0 || row === this.planeRow - 1)) {
    //         // E border
    //         return {
    //             "N": this.planeGrid[row - 1][col],
    //             "NE": this.planeGrid[row - 1][col + 1],
    //             "E": this.planeGrid[row][col + 1],
    //             "SE": this.planeGrid[row + 1][col + 1],
    //             "S": this.planeGrid[row + 1][col],
    //             "SW": null,
    //             "W": null,
    //             "NW": null
    //         }
    //     } else if (row === this.planeRow - 1 && !(col === 0 || col === this.planeCol - 1)) {
    //         // S border
    //         return {
    //             "N": this.planeGrid[row - 1][col],
    //             "NE": this.planeGrid[row - 1][col + 1],
    //             "E": this.planeGrid[row][col + 1],
    //             "SE": null,
    //             "S": null,
    //             "SW": null,
    //             "W": this.planeGrid[row][col - 1],
    //             "NW": this.planeGrid[row - 1][col - 1]
    //         }
    //     } else if (col === 0 && !(row === 0 || row === this.planeRow - 1)) {
    //         // W border
    //         return {
    //             "N": this.planeGrid[row - 1][col],
    //             "NE": this.planeGrid[row - 1][col + 1],
    //             "E": this.planeGrid[row][col + 1],
    //             "SE": this.planeGrid[row + 1][col + 1],
    //             "S": this.planeGrid[row + 1][col],
    //             "SW": null,
    //             "W": null,
    //             "NW": null
    //         }
    //     }

    //     return false;
    // }

    render() {
        for(let row=0; row<this.planeRow; row++) {
            console.log(this.planeGrid[row].map((point) => {return `RC:${point.pointRow},${point.pointCol}`}).join('  '))
            console.log('\n')
        }
    }

}

module.exports = Plane;

// p = new Plane();
// p.setNeighbors();