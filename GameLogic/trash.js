//     if (planeIdx === 0) {
    //         // top plane
    //         for (let row = 0; row < plane.planeRow; row++) {
    //             for (let col = 0; col < plane.planeCol; col++) {

    //                 // console.log(`RC: ${row}, ${col}`)
    //                 let neighbors;

    //                 if (this.setCornerNeighbors(row, col, planeIdx)) {
    //                     neighbors = this.setCornerNeighbors(row, col, planeIdx);
    //                 } else if (this.setBorderNeighbors(row, col, planeIdx)) {
    //                     neighbors = this.setBorderNeighbors(row, col, planeIdx);
    //                 } else {
    //                     // every other point on top plane
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
    //                             "N": this.planes[planeIdx].planeGrid[row - 1][col],
    //                             "NE": this.planes[planeIdx].planeGrid[row - 1][col + 1],
    //                             "E": this.planes[planeIdx].planeGrid[row][col + 1],
    //                             "SE": this.planes[planeIdx].planeGrid[row + 1][col + 1],
    //                             "S": this.planes[planeIdx].planeGrid[row + 1][col],
    //                             "SW": this.planes[planeIdx].planeGrid[row + 1][col - 1],
    //                             "W": this.planes[planeIdx].planeGrid[row][col - 1],
    //                             "NW": this.planes[planeIdx].planeGrid[row - 1][col - 1]
    //                         },
    //                         downPlane: {
    //                             "down": this.planes[idx+1].planeGrid[rol][col],
    //                             "N": this.planes[idx+1].planeGrid[row - 1][col],
    //                             "NE": this.planes[idx+1].planeGrid[row - 1][col + 1],
    //                             "E": this.planes[idx+1].planeGrid[row][col + 1],
    //                             "SE": this.planes[idx+1].planeGrid[row + 1][col + 1],
    //                             "S": this.planes[idx+1].planeGrid[row + 1][col],
    //                             "SW": this.planes[idx+1].planeGrid[row + 1][col - 1],
    //                             "W": this.planes[idx+1].planeGrid[row][col - 1],
    //                             "NW": this.planes[idx+1].planeGrid[row - 1][col - 1]
    //                         }
    //                     }
    //                 }

    //                 plane.planeGrid[row][col].neighbors = neighbors;
    //             }
    //         }

    //     } else if (planeIdx === this.planes.length) {
    //         // bottom plane
    //         for (let row = 0; row < plane.planeRow; row++) {
    //             for (let col = 0; col < plane.planeCol; col++) {

    //                 // console.log(`RC: ${row}, ${col}`)
    //                 let neighbors;

    //                 if (this.setCornerNeighbors(row, col,planeIdx)) {
    //                     neighbors = this.setCornerNeighbors(row, col,planeIdx);
    //                 } else if (this.setBorderNeighbors(row, col, planeIdx)) {
    //                     neighbors = this.setBorderNeighbors(row, col, planeIdx);
    //                 } else {
    //                     // every other point on bottom plane
    //                     neighbors = {
    //                         upPlane: {
    //                             "up": this.planes[idx-1].planeGrid[rol][col],
    //                             "N": this.planes[idx-1].planeGrid[row - 1][col],
    //                             "NE": this.planes[idx-1].planeGrid[row - 1][col + 1],
    //                             "E": this.planes[idx-1].planeGrid[row][col + 1],
    //                             "SE": this.planes[idx-1].planeGrid[row + 1][col + 1],
    //                             "S": this.planes[idx-1].planeGrid[row + 1][col],
    //                             "SW": this.planes[idx-1].planeGrid[row + 1][col - 1],
    //                             "W": this.planes[idx-1].planeGrid[row][col - 1],
    //                             "NW": this.planes[idx-1].planeGrid[row - 1][col - 1]
    //                         },
    //                         samePlane: {
    //                             "N": this.planes[planeIdx].planeGrid[row - 1][col],
    //                             "NE": this.planes[planeIdx].planeGrid[row - 1][col + 1],
    //                             "E": this.planes[planeIdx].planeGrid[row][col + 1],
    //                             "SE": this.planes[planeIdx].planeGrid[row + 1][col + 1],
    //                             "S": this.planes[planeIdx].planeGrid[row + 1][col],
    //                             "SW": this.planes[planeIdx].planeGrid[row + 1][col - 1],
    //                             "W": this.planes[planeIdx].planeGrid[row][col - 1],
    //                             "NW": this.planes[planeIdx].planeGrid[row - 1][col - 1]
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

    //                 plane.planeGrid[row][col].neighbors = neighbors;
    //             }
    //         }

    //     } else {

    //         for (let row = 0; row < this.planeRow; row++) {
    //             for (let col = 0; col < this.planeCol; col++) {

    //                 // console.log(`RC: ${row}, ${col}`)
    //                 let neighbors;

    //                 if (this.setCornerNeighbors(row, col,planeIdx)) {
    //                     neighbors = this.setCornerNeighbors(row, col, planeIdx);
    //                 } else if (this.setBorderNeighbors(row, col, planeIdx)) {
    //                     neighbors = this.setBorderNeighbors(row, col, planeIdx);
    //                 } else {
    //                     // every other point
    //                     neighbors = {
    //                         upPlane: {
    //                             "up": this.planes[idx - 1].planeGrid[rol][col],
    //                             "N": this.planes[idx - 1].planeGrid[row - 1][col],
    //                             "NE": this.planes[idx - 1].planeGrid[row - 1][col + 1],
    //                             "E": this.planes[idx - 1].planeGrid[row][col + 1],
    //                             "SE": this.planes[idx - 1].planeGrid[row + 1][col + 1],
    //                             "S": this.planes[idx - 1].planeGrid[row + 1][col],
    //                             "SW": this.planes[idx - 1].planeGrid[row + 1][col - 1],
    //                             "W": this.planes[idx - 1].planeGrid[row][col - 1],
    //                             "NW": this.planes[idx - 1].planeGrid[row - 1][col - 1]
    //                         },
    //                         samePlane: {
    //                             "N": this.planes[idx].planeGrid[row - 1][col],
    //                             "NE": this.planes[idx].planeGrid[row - 1][col + 1],
    //                             "E": this.planes[idx].planeGrid[row][col + 1],
    //                             "SE": this.planes[idx].planeGrid[row + 1][col + 1],
    //                             "S": this.planes[idx].planeGrid[row + 1][col],
    //                             "SW": this.planes[idx].planeGrid[row + 1][col - 1],
    //                             "W": this.planes[idx].planeGrid[row][col - 1],
    //                             "NW": this.planes[idx].planeGrid[row - 1][col - 1]
    //                         },
    //                         downPlane: {
    //                             "down": this.planes[idx+1].plane[rol][col],
    //                             "N": this.planes[idx+1].planeGrid[row - 1][col],
    //                             "NE": this.planes[idx+1].planeGrid[row - 1][col + 1],
    //                             "E": this.planes[idx+1].planeGrid[row][col + 1],
    //                             "SE": this.planes[idx+1].planeGrid[row + 1][col + 1],
    //                             "S": this.planes[idx+1].planeGrid[row + 1][col],
    //                             "SW": this.planes[idx+1].planeGrid[row + 1][col - 1],
    //                             "W": this.planes[idx+1].planeGrid[row][col - 1],
    //                             "NW": this.planes[idx+1].planeGrid[row - 1][col - 1]
    //                         }
    //                     }
    //                 }

    //                 plane.planeGrid[row][col].neighbors = neighbors;
    //             }
    //         }
    //     }

    // }

    // setCornerNeighbors(row, col, planeIdx) {

    //     if (planeIdx===0) {
    //         if (row === 0 && col === 0) {
    //             // N W Top corner
    //             return {
    //                 upPlane: {
    //                     "up": null,
    //                     "N": null,
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 },
    //                 samePlane: {
    //                     "N": null,
    //                     "NE": null,
    //                     "E": this.planes[planeIdx].planeGrid[row][col + 1],
    //                     "SE": this.planes[planeIdx].planeGrid[row + 1][col + 1],
    //                     "S": this.planes[planeIdx].planeGrid[row + 1][col],
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                     },
    //                 downPlane: {
    //                     "down": this.planes[planeIdx+1].planeGrid[rol][col],
    //                     "N": null,
    //                     "NE": null,
    //                     "E": this.planes[planeIdx+1].planeGrid[row][col + 1],
    //                     "SE": this.planes[planeIdx+1].planeGrid[row + 1][col + 1],
    //                     "S": this.planes[planeIdx+1].planeGrid[row + 1][col],
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 }
    //             }
    //         } else if (row === 0 && col === this.planeCol - 1) {
    //             // N E Top corner
    //             return {
    //                 upPlane: {
    //                     "up": null,
    //                     "N": null,
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 },
    //                 samePlane: {
    //                     "N": null,
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": this.planes[planeIdx].planeGrid[row + 1][col],
    //                     "SW": this.planes[planeIdx].planeGrid[row + 1][col - 1],
    //                     "W": this.planes[planeIdx].planeGrid[row][col - 1],
    //                     "NW": null
    //                 },
    //                 downPlane: {
    //                     "down": this.planes[planeIdx+1].planeGrid[rol][col],
    //                     "N": null,
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": this.planes[planeIdx+1].planeGrid[row + 1][col],
    //                     "SW": this.planes[planeIdx+1].planeGrid[row + 1][col - 1],
    //                     "W": this.planes[planeIdx+1].planeGrid[row][col - 1],
    //                     "NW": null 
    //                 }
    //             }
    //         } else if (row === this.planeRow - 1 && col === this.planeCol - 1) {
    //             // S E Top corner
    //             return {
    //                 upPlane: {
    //                     "up": null,
    //                     "N": null,
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 },
    //                 samePlane: {
    //                     "N": this.planes[planeIdx].planeGrid[row - 1][col],
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": this.planes[planeIdx].planeGrid[row][col - 1],
    //                     "NW": this.planes[planeIdx].planeGrid[row - 1][col - 1]
    //                 },
    //                 downPlane: {
    //                     "down": this.planes[planeIdx+1].planeGrid[rol][col],
    //                     "N": this.planes[planeIdx+1].planeGrid[row-1][col],
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": this.planes[planeIdx+1].planeGrid[row][col-1],
    //                     "NW": this.planes[planeIdx+1].planeGrid[row-1][col-1]
    //                 }
    //             }
    //         } else if (row === this.planeRow - 1 && col === 0) {
    //             // S W Top corner
    //             return {
    //                 upPlane: {
    //                     "up": null,
    //                     "N": null,
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 },
    //                 samePlane: {
    //                     "N": this.planes[planeIdx].planeGrid[row - 1][col],
    //                     "NE": this.planes[planeIdx].planeGrid[row - 1][col + 1],
    //                     "E": this.planes[planeIdx].planeGrid[row][col + 1],
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 },
    //                 downPlane: {
    //                     "down": this.planes[planeIdx+1].planeGrid[rol][col],
    //                     "N": this.planes[planeIdx+1].planeGrid[row-1][col],
    //                     "NE": this.planes[planeIdx+1].planeGrid[row-1][col+1],
    //                     "E": this.planes[planeIdx+1].planeGrid[row][col+1],
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 }
    //             }

    //         } else if (planeIdx = this.planes.length-1) {

    //             if (row === 0 && col === 0) {
    //                 // N W Bottom corner
    //                 return {
    //                     upPlane: {
    //                         "up": this.planes[planeIdx-1].planeGrid[rol][col],
    //                         "N": null,
    //                         "NE": null,
    //                         "E": this.planes[planeIdx-1].planeGrid[row][col + 1],
    //                         "SE": this.planes[planeIdx-1].planeGrid[row + 1][col + 1],
    //                         "S": this.planes[planeIdx-1].planeGrid[row + 1][col],
    //                         "SW": null,
    //                         "W": null,
    //                         "NW": null
    //                     },
    //                     samePlane: {
    //                         "N": null,
    //                         "NE": null,
    //                         "E": this.planes[planeIdx].planeGrid[row][col + 1],
    //                         "SE": this.planes[planeIdx].planeGrid[row + 1][col + 1],
    //                         "S": this.planes[planeIdx].planeGrid[row + 1][col],
    //                         "SW": null,
    //                         "W": null,
    //                         "NW": null
    //                     },
    //                     downPlane: {
    //                         "down": null,
    //                         "N": null,
    //                         "NE": null,
    //                         "E": null,
    //                         "SE": null,
    //                         "S": null,
    //                         "SW": null,
    //                         "W": null,
    //                         "NW": null
    //                     }
    //                 }
    //             } else if (row === 0 && col === this.planeCol - 1) {
    //                 // N E Bottom corner
    //                 return {
    //                     upPlane: {
    //                         "up": this.planes[planeIdx-1].planeGrid[rol][col],
    //                         "N": null,
    //                         "NE": null,
    //                         "E": null,
    //                         "SE": null,
    //                         "S": this.planes[planeIdx-1].planeGrid[row + 1][col],
    //                         "SW": this.planes[planeIdx-1].planeGrid[row + 1][col - 1],
    //                         "W": this.planes[planeIdx-1].planeGrid[row][col - 1],
    //                         "NW": null
    //                     },
    //                     samePlane: {
    //                         "N": null,
    //                         "NE": null,
    //                         "E": null,
    //                         "SE": null,
    //                         "S": this.planes[planeIdx].planeGrid[row + 1][col],
    //                         "SW": this.planes[planeIdx].planeGrid[row + 1][col - 1],
    //                         "W": this.planes[planeIdx].planeGrid[row][col - 1],
    //                         "NW": null
    //                     },
    //                     downPlane: {
    //                         "down": null,
    //                         "N": null,
    //                         "NE": null,
    //                         "E": null,
    //                         "SE": null,
    //                         "S": null,
    //                         "SW": null,
    //                         "W": null,
    //                         "NW": null
    //                     }
    //                 }
    //             } else if (row === this.planeRow - 1 && col === this.planeCol - 1) {
    //                 // S E Bottom corner
    //                 return {
    //                     upPlane: {
    //                         "up": this.planes[planeIdx-1].planeGrid[rol][col],
    //                         "N": this.planes[planeIdx-1].planeGrid[row - 1][col],
    //                         "NE": null,
    //                         "E": null,
    //                         "SE": null,
    //                         "S": null,
    //                         "SW": null,
    //                         "W": this.planes[planeIdx-1].planeGrid[row][col - 1],
    //                         "NW": this.planes[planeIdx-1].planeGrid[row - 1][col - 1]
    //                     },
    //                     samePlane: {
    //                         "N": this.planes[planeIdx].planeGrid[row - 1][col],
    //                         "NE": null,
    //                         "E": null,
    //                         "SE": null,
    //                         "S": null,
    //                         "SW": null,
    //                         "W": this.planes[planeIdx].planeGrid[row][col - 1],
    //                         "NW": this.planes[planeIdx].planeGrid[row - 1][col - 1]
    //                     },
    //                     downPlane: {
    //                         "down": null,
    //                         "N": null,
    //                         "NE": null,
    //                         "E": null,
    //                         "SE": null,
    //                         "S": null,
    //                         "SW": null,
    //                         "W": null,
    //                         "NW": null
    //                     }
    //                 }
    //             } else if (row === this.planeRow - 1 && col === 0) {
    //                 // S W Bottom corner
    //                 return {
    //                     upPlane: {
    //                         "up": this.planes[planeIdx-1].planeGrid[rol][col],
    //                         "N": this.planes[planeIdx-1].planeGrid[row - 1][col],
    //                         "NE": this.planes[planeIdx-1].planeGrid[row - 1][col + 1],
    //                         "E": this.planes[planeIdx-1].planeGrid[row][col + 1],
    //                         "SE": null,
    //                         "S": null,
    //                         "SW": null,
    //                         "W": null,
    //                         "NW": null
    //                     },
    //                     samePlane: {
    //                         "N": this.planes[planeIdx].planeGrid[row - 1][col],
    //                         "NE": this.planes[planeIdx].planeGrid[row - 1][col + 1],
    //                         "E": this.planes[planeIdx].planeGrid[row][col + 1],
    //                         "SE": null,
    //                         "S": null,
    //                         "SW": null,
    //                         "W": null,
    //                         "NW": null
    //                     },
    //                     downPlane: {
    //                         "down": null,
    //                         "N": null,
    //                         "NE": null,
    //                         "E": null,
    //                         "SE": null,
    //                         "S": null,
    //                         "SW": null,
    //                         "W": null,
    //                         "NW": null
    //                     }
    //                 }
    //             }   
    //         }

    //     return false
    // }

    // setBorderNeighbors(row, col, planeIdx) 

    //     if (planeIdx === 0) {
    //         // Top borders but not corners
    //         if (row === 0 && !(col === 0 || col === this.planeCol - 1)) {
    //             // N border
    //             return {
    //                 upPlane: {
    //                     "up": null,
    //                     "N": null,
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 },
    //                 samePlane: {
    //                     "N": null,
    //                     "NE": null,
    //                     "E": this.planes[planeIdx].planeGrid[row][col + 1],
    //                     "SE": this.planes[planeIdx].planeGrid[row + 1][col + 1],
    //                     "S": this.planes[planeIdx].planeGrid[row + 1][col],
    //                     "SW": this.planes[planeIdx].planeGrid[row + 1][col-1],
    //                     "W": this.planes[planeIdx].planeGrid[row - 1][col],
    //                     "NW": null
    //                 },
    //                 downPlane: {
    //                     "down": this.planes[planeIdx+1].planeGrid[rol][col],
    //                     "N": null,
    //                     "NE": null,
    //                     "E": this.planes[planeIdx+1].planeGrid[row][col + 1],
    //                     "SE": this.planes[planeIdx+1].planeGrid[row + 1][col + 1],
    //                     "S": this.planes[planeIdx+1].planeGrid[row + 1][col],
    //                     "SW": this.planes[planeIdx+1].planeGrid[row + 1][col - 1],
    //                     "W": this.planes[planeIdx+1].planeGrid[row - 1][col],
    //                     "NW": null
    //                 }
    //             }
    //         } else if (col === this.planeCol - 1 && !(row === 0 || row === this.planeRow - 1)) {
    //             // E border
    //             return {
    //                 upPlane: {
    //                     "up": null,
    //                     "N": null,
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 },
    //                 samePlane: {
    //                     "N": this.planes[planeIdx].planeGrid[row - 1][col],
    //                     "NE": this.planes[planeIdx].planeGrid[row - 1][col + 1],
    //                     "E": this.planes[planeIdx].planeGrid[row][col + 1],
    //                     "SE": this.planes[planeIdx].planeGrid[row + 1][col + 1],
    //                     "S": this.planes[planeIdx].planeGrid[row + 1][col],
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 },
    //                 downPlane: {
    //                     "down": this.planes[planeIdx+1].planeGrid[rol][col],
    //                     "N": this.planes[planeIdx+1].planeGrid[row - 1][col],
    //                     "NE": this.planes[planeIdx+1].planeGrid[row - 1][col + 1],
    //                     "E": this.planes[planeIdx+1].planeGrid[row][col + 1],
    //                     "SE": this.planes[planeIdx+1].planeGrid[row + 1][col + 1],
    //                     "S": this.planes[planeIdx+1].planeGrid[row + 1][col],
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 }
    //             }
    //         } else if (row === this.planeRow - 1 && !(col === 0 || col === this.planeCol - 1)) {
    //             // S border
    //             return {
    //                 upPlane: {
    //                     "up": null,
    //                     "N": null,
    //                     "NE": null,
    //                     "E": null,
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": null,
    //                     "NW": null
    //                 },
    //                 samePlane: {
    //                     "N": this.planes[planeIdx].planeGrid[row - 1][col],
    //                     "NE": this.planes[planeIdx].planeGrid[row - 1][col + 1],
    //                     "E": this.planes[planeIdx].planeGrid[row][col + 1],
    //                     "SE": null,
    //                     "S": null,
    //                     "SW": null,
    //                     "W": this.planes[planeIdx].planeGrid[row][col - 1],
    //                     "NW": this.planes[planeIdx].planeGrid[row - 1][col - 1]
    //                 }
    //             }
    //         } else if (col === 0 && !(row === 0 || row === this.planeRow - 1)) {
    //             // W border
    //             return {
    //                 "N": this.planeGrid[row - 1][col],
    //                 "NE": this.planeGrid[row - 1][col + 1],
    //                 "E": this.planeGrid[row][col + 1],
    //                 "SE": this.planeGrid[row + 1][col + 1],
    //                 "S": this.planeGrid[row + 1][col],
    //                 "SW": null,
    //                 "W": null,
    //                 "NW": null
    //             }
    //         }
    //      } else if (planeIdx === this.planes.length-1) {
    //         // Bottom borders but not corners
    //         } else {
    //             return {
    //                 upPlane: {
    //                     "up": this.planes[idx - 1].planeGrid[rol][col],
    //                     "N": this.planes[idx - 1].planeGrid[row - 1][col],
    //                     "NE": this.planes[idx - 1].planeGrid[row - 1][col + 1],
    //                     "E": this.planes[idx - 1].planeGrid[row][col + 1],
    //                     "SE": this.planes[idx - 1].planeGrid[row + 1][col + 1],
    //                     "S": this.planes[idx - 1].planeGrid[row + 1][col],
    //                     "SW": this.planes[idx - 1].planeGrid[row + 1][col - 1],
    //                     "W": this.planes[idx - 1].planeGrid[row][col - 1],
    //                     "NW": this.planes[idx - 1].planeGrid[row - 1][col - 1]
    //                 },
    //                 samePlane: {
    //                     "N": this.planes[idx].planeGrid[row - 1][col],
    //                     "NE": this.planes[idx].planeGrid[row - 1][col + 1],
    //                     "E": this.planes[idx].planeGrid[row][col + 1],
    //                     "SE": this.planes[idx].planeGrid[row + 1][col + 1],
    //                     "S": this.planes[idx].planeGrid[row + 1][col],
    //                     "SW": this.planes[idx].planeGrid[row + 1][col - 1],
    //                     "W": this.planes[idx].planeGrid[row][col - 1],
    //                     "NW": this.planes[idx].planeGrid[row - 1][col - 1]
    //                 },
    //                 downPlane: {
    //                     "down": this.planes[idx+1].plane[rol][col],
    //                     "N": this.planes[idx+1].planeGrid[row - 1][col],
    //                     "NE": this.planes[idx+1].planeGrid[row - 1][col + 1],
    //                     "E": this.planes[idx+1].planeGrid[row][col + 1],
    //                     "SE": this.planes[idx+1].planeGrid[row + 1][col + 1],
    //                     "S": this.planes[idx+1].planeGrid[row + 1][col],
    //                     "SW": this.planes[idx+1].planeGrid[row + 1][col - 1],
    //                     "W": this.planes[idx+1].planeGrid[row][col - 1],
    //                     "NW": this.planes[idx+1].planeGrid[row - 1][col - 1]
    //                 }
    //             }
    //         }

    //     }

    //     return false;
    // }