
export class Enemy {
    constructor(ctx, CanvasWidth, CanvasHeight, CharacterImages = [], killed) {
        this.x = CanvasWidth
        this.y = Math.random() * CanvasHeight - 75
        this.image = new Image()
        this.spriteWidth = 520
        this.spriteHeight = 420
        this.width = this.spriteWidth / 3
        this.height = this.spriteHeight / 3
        this.ctx = ctx
        this.FrameX = 0
        this.flapSpeed = 3
        this.gameFrame = 0
        this.CharacterImages = CharacterImages
        this.CanvasWidth = CanvasWidth
        this.markedForDeletion = false
        this.MoveSpeed = Math.random() * 15
        this.health = 3
        this.CanvasHeight = CanvasHeight
        this.killed = killed
        this.DieSound = new Audio("breeze-of-blood-122253.mp3")
    }

    update() {
        if (this.killed) {
            this.y += 7
            this.DieSound.play()
            if (this.y >= this.CanvasHeight) this.markedForDeletion = true
            if (this.gameFrame % this.flapSpeed === 0) this.FrameX >= this.CharacterImages.length - 1 ? this.FrameX = this.CharacterImages.length - 1 : this.FrameX++
        } else {
            this.x -= this.MoveSpeed
            if (this.x <= 0) this.markedForDeletion = true
            if (this.gameFrame % this.flapSpeed === 0) this.FrameX >= this.CharacterImages.length - 1 ? this.FrameX = 0 : this.FrameX++
        }
        this.gameFrame++
    }

    draw() {
        this.image.src = this.CharacterImages[this.FrameX]
        this.ctx.drawImage(this.image, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    }
}