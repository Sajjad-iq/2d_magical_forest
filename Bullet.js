/** @type {HTMLCanvasElement}*/

export class Bullet {
    constructor(ctx, y, x, CanvasWidth, CharacterImages) {
        this.x = x
        this.y = y
        this.ctx = ctx
        this.speed = 10
        this.markedForDeletion = false
        this.CanvasWidth = CanvasWidth
        this.spriteWidth = 256
        this.spriteHeight = 256
        this.width = this.spriteWidth
        this.height = this.spriteHeight
        this.FrameX = 0
        this.image = new Image()
        this.flapSpeed = 3
        this.gameFrame = 0
        this.CharacterImages = CharacterImages

    }

    update() {
        this.x += this.speed
        if (this.gameFrame % this.flapSpeed === 0) {
            if (this.FrameX >= this.CharacterImages.length - 1) {
                this.FrameX = 0
                this.markedForDeletion = true
            } else this.FrameX++
        }
        this.gameFrame++
    }

    draw() {
        this.image.src = this.CharacterImages[this.FrameX]
        this.ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }

}


