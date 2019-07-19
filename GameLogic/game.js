const Plane = require('./plane');
// const Player = require('./player');

class Game {
    // assume a 4x4x4 for development
    constructor(layers=4) {
        this.layers = layers;
        this.gameOver = false;
        this.planes = [];
        this.gameSetup();
    }

    gameSetup() {
        let minesPerPlane = [];
        
        // assume 8 mines in a 4x4x4
        let mineCount = 8;
        
        for (let i=0; i<this.layers+2; i++) {
            if (i===0 || i===this.layers+1) {
                minesPerPlane.push(0);
            } else {
                if (i===this.layers) {
                    minesPerPlane.push(mineCount);
                } else {
                    // console.log(mineCount)
                    let mines = Math.floor(Math.random()*mineCount);
                    minesPerPlane.push(mines);
                    mineCount -= mines;
                }
            }
             
        }

        // console.log(minesPerPlane)

        // intentionally adding 2 to 4
        for (let i=0; i<this.layers+2; i++) {
            if (i === 0 || i ===this.layers+1) {               
                this.planes.push(this.createNullPlane(6, 6, null));
            } else {
                this.planes.push(new Plane(6,6,minesPerPlane[i]));
            }
        }

        for (let i=1; i<this.layers+1; i++) {
            this.setNeighbors(this.planes[i], i);
        }

        for (let i=1; i<this.layers+1; i++) {
            this.planes[i].setPointValue(this.planes[i]);
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
                // console.log(`RC: ${row},${col}`)

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

    makeMove(row, col, idx) {
        this.planes[idx].grid[row][col].hidden = false;
        
        let value = this.planes[idx].grid[row][col].value;
        switch (value) {
            case 'Mine':
                this.gameOver = true;
                // render mine explosion
                console.log('You exploded.')
                break
            case value>0:
                break;
            case 'vac':
                // trigger a recursive call to reveal other adj vacs
                this.revealVacs();
                break;
        }

    }

    revealVacs() {
        // iterate through the neighbors
        // if neighbor value is an int then break
        // if the neighbor value is vac, create new stack.

        // will want to use a set again to prevent infinite loop in stacks.
    }

    reset() {
        this.gameOver = false;
    }

    renderCheat() {
        this.planes.forEach((plane, idx) => {
            plane.render();
            console.log('\n')
        })
    }

    renderMove() {
        this.planes.forEach((plane, idx) => {
            if (idx === 0 || idx === this.planes.length - 1) {
                plane.render();
                console.log('\n')
            } else {
                plane.renderMove();
                console.log('\n')
            }
        })
            
    }
}

// development debugging
let g = new Game();

// g.player.makeMove(x,y,planeIdx);
// g.renderCheat();
g.renderMove()
