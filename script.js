function generator(matLen, gr, grEat, pred, grP,sp) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    
    for (let i = 0; i < grP; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for (let i = 0; i < sp; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    }
    return matrix;
}

let side = 20;

let matrix = generator(30, 100, 80, 40, 10,5);

let grassArr = []
let grassEaterArr = []
let PredatorArr = []
let grassSpavnArr = []
let GrassEaterSpavnArr = []

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(3)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y)
                grassEaterArr.push(grE)
            }
            else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y)
                PredatorArr.push(pred)
            }
            else if (matrix[y][x] == 4) {
                let sp = new GrassSpavn(x, y)
                grassSpavnArr.push(sp)
            }
            else if (matrix[y][x] == 5) {
                let sp = new GrassEaterSpavn(x, y)
                GrassEaterSpavnArr.push(sp)
            }
        }
    }
}
function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green')
            } else if (matrix[y][x] == 0) {
                fill('#acacac')
            } else if (matrix[y][x] == 2) {
                fill('yellow')
            } else if (matrix[y][x] == 3) {
                fill('black')
            }
            else if (matrix[y][x] == 4) {
                fill('red')
            }
            else if (matrix[y][x] == 5) {
                fill('blue')
            }
            rect(x * side, y * side, side, side)
        }
    }
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }
    for (let i in PredatorArr) {
        PredatorArr[i].mul()
        PredatorArr[i].eat()
    }
    for (let i in grassSpavnArr) {
        grassSpavnArr[i].move()
        if(grassArr.length < 15) {
            grassSpavnArr[i].mul()
        }
    }
    for (let i in  GrassEaterSpavnArr) {
        GrassEaterSpavnArr[i].move()
        if(grassEaterArr.length < 20) {
            GrassEaterSpavnArr[i].mul()
        }
    }
}