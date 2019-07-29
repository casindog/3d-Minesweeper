// const Plane = require('./plane');

class Game {
    // assume a 4x4x4 for development
    constructor(layers=4,gameConfig = 'cube') {
        this.layers = layers;
        this.gameOver = false;
        this.planes = [];
        this.gameConfig = gameConfig; 
        
        this.gameSetup();
    }

    gameSetup() {
        let minesPerPlane = [];
        
        // USER EDIT
        // assume 8 mines in a 4x4x4
        let mineCount = 8;
        
        for (let i=0; i<this.layers+2; i++) {
            if (i===0 || i===this.layers+1) {
                minesPerPlane.push(0);
            } else {
                if (i===this.layers) {
                    minesPerPlane.push(mineCount);
                } else {
                    let mines = Math.floor(Math.random()*mineCount);
                    minesPerPlane.push(mines);
                    mineCount -= mines;
                }
            }
             
        }

        // intentionally adding 2 to 4
        for (let i=0; i<this.layers+2; i++) {
            if (i === 0 || i ===this.layers+1) {               
                this.planes.push(this.createNullPlane(6, 6, null));
            } else {
                this.planes.push(new Plane(6,6,minesPerPlane[i]));
            }
        }

        if (this.gameConfig==='cube') {
            for (let i=1; i<this.layers+1; i++) {
                this.setNeighbors(this.planes[i], i);
            } 
        } else if (this.gameConfig==='wheel') {
            for (let i = 1; i < this.layers + 1; i++) {
                this.setNeighbors(this.planes[i], i);
            } 

            this.setNeighborsWheel(this.planes[1], this.planes[this.layers])
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
        
        for (let row=1; row < plane.row-1; row++) {
            for (let col=1; col < plane.col-1; col++) { 

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

    setNeighborsWheel(topPlane, bottomPlane) {
        let neighbors = {};
        
        // topPlane
        for (let row = 1; row < this.layers+1; row++) {
            for (let col = 1; col < this.layers+1; col++) {

                topPlane.grid[row][col].idx = this.layers+1;

                topPlane.grid[row][col].neighbors['upPlane'] = {
                    "up": bottomPlane.grid[row][col],
                    "N": bottomPlane.grid[row - 1][col],
                    "NE": bottomPlane.grid[row - 1][col + 1],
                    "E": bottomPlane.grid[row][col + 1],
                    "SE": bottomPlane.grid[row + 1][col + 1],
                    "S": bottomPlane.grid[row + 1][col],
                    "SW": bottomPlane.grid[row + 1][col - 1],
                    "W": bottomPlane.grid[row][col - 1],
                    "NW": bottomPlane.grid[row - 1][col - 1]
                }
            }
        }

        // bottomPlane
        for (let row = 1; row < this.layers+1; row++) {
            for (let col = 1; col < this.layers+1; col++) {

                bottomPlane.grid[row][col].idx = 1;

                bottomPlane.grid[row][col].neighbors['downPlane'] = {
                    "down": topPlane.grid[row][col],
                    "N": topPlane.grid[row - 1][col],
                    "NE": topPlane.grid[row - 1][col + 1],
                    "E": topPlane.grid[row][col + 1],
                    "SE": topPlane.grid[row + 1][col + 1],
                    "S": topPlane.grid[row + 1][col],
                    "SW": topPlane.grid[row + 1][col - 1],
                    "W": topPlane.grid[row][col - 1],
                    "NW": topPlane.grid[row - 1][col - 1]
                }

                // plane.grid[row][col].neighbors = neighbors;
            }
        }

    }

    makeMove(row, col, idx) {
        this.planes[idx].grid[row][col].hidden = false;
        
        let value = this.planes[idx].grid[row][col].value;
        switch (value) {
            case 'Mine':
                this.gameOver = true;
                console.log('You exploded.')
                break
            case value>0:
                break;
            case 'vac':
                // trigger a recursive call to reveal other adj vacs
                let vacSet = new Set;
                this.revealVacs(row, col, idx, vacSet);

                vacSet.forEach((point) => {
                    point.hidden = false;

                    let neighborsUpPlane = Object.values(point.neighbors.upPlane);
                    let neighborsSamePlane = Object.values(point.neighbors.samePlane);
                    let neighborsDownPlane = Object.values(point.neighbors.downPlane);

                    neighborsUpPlane.forEach((point) => {
                        point.hidden = false;
                    })
                    neighborsSamePlane.forEach((point) => {
                        point.hidden = false;
                    })
                    neighborsDownPlane.forEach((point) => {
                        point.hidden = false;
                    })

                })
                break;
        }

        this.renderMove();

    }

    revealVacs(row, col, idx, vacSet) {
        let neighbors = this.planes[idx].grid[row][col].neighbors;

        let neighborsUpPlane = Object.values(neighbors.upPlane);
        let neighborsSamePlane = Object.values(neighbors.samePlane);
        let neighborsDownPlane = Object.values(neighbors.downPlane);

        this.planes[idx].grid[row][col].idx = idx;
        vacSet.add(this.planes[idx].grid[row][col])

        // iterate through the neighbors
        neighborsUpPlane.forEach((neighbor) => {
            if (vacSet.has(neighbor)) { 
                // do nothing
            } else if (neighbor.value==='vac') {
                this.revealVacs(neighbor.row, neighbor.col, idx-1, vacSet);
            }
        })

        neighborsSamePlane.forEach((neighbor) => {
            if (vacSet.has(neighbor)) {
                // do nothing
            } else if (neighbor.value==='vac') {
                this.revealVacs(neighbor.row, neighbor.col, idx, vacSet);
            }
        })
        neighborsDownPlane.forEach((neighbor) => {
            if (vacSet.has(neighbor)) {
                // do nothing
            } else if (neighbor.value==='vac') {
                this.revealVacs(neighbor.row, neighbor.col, idx+1, vacSet);
            }
        })

    }

    reset() {
        this.gameOver = false;
        g = new Game(4, 'cube');
    }

    renderCheat() {
        this.planes.forEach((plane, idx) => {
            console.log(`planeIdx: ${idx}`)
            plane.render();
            console.log('\n')
        })
    }

    renderMove() {
        this.planes.forEach((plane, idx) => {
            if (idx === 0 || idx === this.planes.length - 1) {
                console.log(`planeIdx: ${idx}`)
                plane.render();
                console.log('\n')
            } else {
                console.log(`planeIdx: ${idx}`)
                plane.renderMove();
                console.log('\n')
            }
        })  
    }

    // winOrLose() {
    //     // if all non mines hidden = false, then win
    //     if ((this.planes[1].slice(1,5).every((ele) => {
    //         return ele.value !== "Mine" && ele.hidden === false;
    //     })) && (this.planes[2].slice(1,5).every((point) => {
    //         return point.value !== 'Mine' && point.hidden === false;
    //     })) && (this.planes[3].slice(1,5).every((point) => {
    //         return point.value !== 'Mine' && point.hidden === false;
    //     })) && (this.planes[4].slice(1,5).every((point) => {
    //         return point.value !== 'Mine' && point.hidden === false;
    //     }))) {
    //         console.log('You Win!')
    //     } 

    //     // if player reveals mine, then lose
    // }
}

// development debugging
let g = new Game(4, 'cube');
