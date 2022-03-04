class bomb extends LivingCreature {

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(ch) {
        this.getNewCoordinates();
        return super.chooseCell(ch);
    }

    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 1) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 8;

            var newBomb= new Bomb(newX, newY);
            bombArr.push(newBomb);
            this.multiply = 4;
        }
    }


    eat() {
        var emptyCells = this.chooseCell(1);
        var newCell = random(emptyCells);
        var emptyCells1 = this.chooseCell(2);
        var newCell1 = random(emptyCells1);
        var emptyCells2 = this.chooseCell(3);
        var newCell2 = random(emptyCells2);
        var emptyCells3 = this.chooseCell(4);
        var newCell3 = random(emptyCells3);
        var emptyCells4 = this.chooseCell(5);
        var newCell4 = random(emptyCells4);
        var emptyCells5 = this.chooseCell(6);
        var newCell5 = random(emptyCells5);
        var emptyCells6 = this.chooseCell(7);
        var newCell6 = random(emptyCells6);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        } 
        else if (newCell1) {
            var newX = newCell1[0];
            var newY = newCell1[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

        } 
        else if (newCell2) {
            var newX = newCell2[0];
            var newY = newCell2[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }

        } 
        else if (newCell3) {
            var newX = newCell3[0];
            var newY = newCell3[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in virusArr) {
                if (newX == virusArr[i].x && newY == virusArr[i].y) {
                    virusArr.splice(i, 1);
                    break;
                }
            }

        } 
        else if (newCell4) {
            var newX = newCell4[0];
            var newY = newCell4[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in energyArr) {
                if (newX == energyArr[i].x && newY == energyArr[i].y) {
                    energyArr.splice(i, 1);
                    break;
                }
            }

        } 
        else if (newCell5) {
            var newX = newCell5[0];
            var newY = newCell5[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in zombieArr) {
                if (newX == zombieArr[i].x && newY == zombieArr[i].y) {
                    zombieArr.splice(i, 1);
                    break;
                }
            }

        }
        else if (newCell6) {
            var newX = newCell6[0];
            var newY = newCell6[1];
            matrix[newY][newX] = matrix[this.y][this.x]
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in omnivorousArr) {
                if (newX == omnivorousArr[i].x && newY == omnivorousArr[i].y) {
                    omnivorousArr.splice(i, 1);
                    break;
                }
            }

        }
    }
}
