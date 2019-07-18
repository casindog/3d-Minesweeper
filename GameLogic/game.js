const Plane = require('./plane');


class Game {
    // assume a 8x8x3 for development
    constructor() {
        this.planes = [];

        for (let i = 0; i<3; i++) {
            this.planes.push(new Plane())
        }

        this.gameSetup();
    }

    gameSetup() {
        this.planes.forEach((plane) => {
            plane.setNeighbors();
        })
    }

    gameOver() {
        if (true) {
            this.gameOver = true;
        }
    }

    reset() {
        this.gameOver = false;
    }
}

let g = new Game()
