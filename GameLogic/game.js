const Plane = require('./plane');

class Game {
    // assume a 4x4x4 for development
    constructor(layers=4) {
        this.layers = layers;
        this.planes = [];

        this.gameSetup();
    }

    gameSetup() {
        // intentionally adding 2 to 4
        for (let i=0; i<this.layers+2; i++) {
            if (i === 0 || i ===this.layers+1) {               
                this.planes.push(this.createNullPlane(6, 6, null));
            } else {
                this.planes.push(new Plane());
            }
        }

        for (let i=1; i<this.layers+1; i++) {
            this.setNeighbors(this.planes[i], i);
        }
    }

    createNullPlane(row, col, val) {
        let nullPlane = new Plane(row, col, 0);

        for (let i=0; i < row-1; i++) {
            for (let j=0; j < col-1; j++) {
                nullPlane.grid[i][j].value = null;
            }
        }

        return nullPlane
    }

    displayNeighbors(row, col, idx) {
        console.log(this.planes[idx].grid[row][col].neighbors)
    }

    setNeighbors(plane, idx) {
        let neighbors;
        // console.log(`plane: ${plane.grid}`)
        // console.log(`idx: ${idx}`)
        
        for (let row=1; row < plane.row-1; row++) {
            for (let col=1; col < plane.col-1; col++) { 
                console.log(`RC: ${row},${col}`)

                neighbors = {
                    upPlane: {
                        "up": this.planes[idx - 1].grid[row][col],
                        "N": this.planes[idx - 1].grid[row - 1][col],
                        "NE": this.planes[idx - 1].grid[row - 1][col + 1],
                        "E": this.planes[idx - 1].grid[row][col + 1],
                        "SE": this.planes[idx - 1].grid[row + 1][col + 1],
                        "S": this.planes[idx - 1].grid[row + 1][col],
                        "SW": this.planes[idx - 1].grid[row + 1][col - 1],
                        "W": this.planes[idx - 1].grid[row][col - 1],
                        "NW": this.planes[idx - 1].grid[row - 1][col - 1]
                    },
                    samePlane: {
                        "N": plane.grid[row - 1][col],
                        "NE": plane.grid[row - 1][col + 1],
                        "E": plane.grid[row][col + 1],
                        "SE": plane.grid[row + 1][col + 1],
                        "S": plane.grid[row + 1][col],
                        "SW": plane.grid[row + 1][col - 1],
                        "W": plane.grid[row][col - 1],
                        "NW": plane.grid[row - 1][col - 1]
                    },
                    downPlane: {
                        "down": this.planes[idx+1].grid[row][col],
                        "N": this.planes[idx+1].grid[row - 1][col],
                        "NE": this.planes[idx+1].grid[row - 1][col + 1],
                        "E": this.planes[idx+1].grid[row][col + 1],
                        "SE": this.planes[idx+1].grid[row + 1][col + 1],
                        "S": this.planes[idx+1].grid[row + 1][col],
                        "SW": this.planes[idx+1].grid[row + 1][col - 1],
                        "W": this.planes[idx+1].grid[row][col - 1],
                        "NW": this.planes[idx+1].grid[row - 1][col - 1]
                    }
                }
                
                plane.grid[row][col].neighbors = neighbors;
            }
        }
    }

    gameOver() {
        if (true) {
            this.gameOver = true;
        }
    }

    reset() {
        this.gameOver = false;
    }

    render() {
        this.planes.forEach((plane, idx) => {
            plane.render();
            console.log('\n')
        })
    }
}

// development debugging
let g = new Game();
g.render();
