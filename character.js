
export class Character {
    constructor(ctx, x, y, CharacterImages = []) {
        this.x = x
        this.y = y
        this.image = new Image()
        this.spriteWidth = 128
        this.spriteHeight = 128
        this.width = this.spriteWidth * 1.1
        this.height = this.spriteHeight * 1.1
        this.ctx = ctx
        this.FrameX = 0
        this.flapSpeed = 5
        this.gameFrame = 0
        this.CharacterImages = CharacterImages
    }

    update() {
        if (this.gameFrame % this.flapSpeed === 0) {
            this.FrameX >= this.CharacterImages.length - 1 ? this.FrameX = 0 : this.FrameX++
        }
        this.gameFrame++
    }

    draw() {
        this.image.src = this.CharacterImages[this.FrameX]
        this.ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}