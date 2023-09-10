

class User{

    constructor (_posX, _posY, _speed, _direction) {
        this.posX = _posX
        this.posY = _posY
        this.speed = _speed
        this.score = 1
        this.direction = _direction
        this.length = 1
    }

    updatePosition() {
        switch (this.direction) { // add bounds checking in here
            case "up":
                this.posY += speed
                break
            case "down":
                this.posY -= speed
                break
            case "left":
                this.posX -= speed
                break
            case "right":
                this.posX += speed
        }
    }

    getPosX() {
        return this.posX
    }

    setPosX(_posX) {
        this.posX = _posX
    }

    getPosY() {
        return this.posY
    }

    setPosY(_posY) {
        this.posY = _posY
    }

    getSpeed() {
        return this.speed
    }

    setSpeed(_speed) {
        this.speed = _speed
    }

    getScore() {
        return this.score
    }

    setScore(_score) {
        this.score = _score
    }

    getDirection() {
        return this.direction
    }

    setDirection(_direction) {
        this.direction = _direction
    }

    getLength() {
        return this.length
    }

    setLength(_length) {
        this.length = _length
    }

}