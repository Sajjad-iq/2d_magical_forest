import { layer } from "./utils/layer"
import { Character } from "./character"
import { Bullet } from "./Bullet"
import { options } from './utils/constants'
import { Enemy } from './enemy'

import { backGroundLayer1, backGroundLayer2, backGroundLayer3, backGroundLayer4, backGroundLayer5, backGroundLayer6, backGroundLayer7, backGroundLayer8 } from "./utils/Background"

const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
const CANVAS_WIDTH = canvas.width = 2400
const CANVAS_HEIGHT = canvas.height = 700
const canvasPosition = canvas.getBoundingClientRect()


let backgroundSpeed = 2
const layer1 = new layer(backGroundLayer1, 0, ctx, backgroundSpeed) // sky
const layer2 = new layer(backGroundLayer2, 0, ctx, backgroundSpeed) //rocks
const layer3 = new layer(backGroundLayer3, 0, ctx, backgroundSpeed) // planet
const layer4 = new layer(backGroundLayer4, 0.6, ctx, backgroundSpeed) // ground 3
const layer5 = new layer(backGroundLayer5, 0.4, ctx, backgroundSpeed) // ground 2
const layer6 = new layer(backGroundLayer6, 0.1, ctx, backgroundSpeed) // ground 1
const layer7 = new layer(backGroundLayer7, 0.8, ctx, backgroundSpeed) // clouds 2
const layer8 = new layer(backGroundLayer8, 0.4, ctx, backgroundSpeed) // clouds 1

let character = new Character(ctx, 0, 0, options["idle"].ImagesArr, false)
let lose = character.lose

//for mouse
window.addEventListener("mousemove", function (e) {
  if (!character.lose) character = new Character(ctx, e.x - canvasPosition.left - character.width / 2, e.y - canvasPosition.top - character.height / 2, options["idle"].ImagesArr, lose)
})
//for touch screen
window.addEventListener("touchmove", function (e) {
  if (!character.lose) character = new Character(ctx, e.x - canvasPosition.left - character.width / 2, e.y - canvasPosition.top - character.height / 2, options["idle"].ImagesArr, lose)

})


// for magic spell

let BulletsArr = []
window.addEventListener("click", async function (e) {
  lose = false
  let MagicAttackSound = new Audio("Fireball-Magic-Attack-A-www.fesliyanstudios.com.mp3")
  character = new Character(ctx, e.x - canvasPosition.left - character.width / 2, e.y - canvasPosition.top - character.height / 2, options["attack"].ImagesArr, lose)
  BulletsArr.push(new Bullet(ctx, e.y - canvasPosition.top - 256 / 2, e.x - canvasPosition.left + character.width / 4, canvas.width, options["magAttack"].ImagesArr))
  MagicAttackSound.play()
})



let EnemiesArr = []
let TimeToNextEnemy = 500
let EnemyInterval = 500
let LastTime = 0
let score = 0
const ScoreFlag = document.getElementById("score")
const loseWindow = document.getElementById("lose-window")

function animate(timestamp) {


  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

  let deltaTime = timestamp - LastTime || 0
  LastTime = timestamp
  TimeToNextEnemy += deltaTime

  if (TimeToNextEnemy > EnemyInterval) {
    EnemiesArr.push(new Enemy(ctx, CANVAS_WIDTH, CANVAS_HEIGHT, options["enemies"].ImagesArr, false))
    TimeToNextEnemy = 0
  }

  // background layer
  layer1.draw()
  layer8.update()
  layer8.draw()
  layer2.draw()
  layer3.draw()
  layer7.update()
  layer7.draw()
  layer5.update()
  layer5.draw()
  layer6.update()
  layer6.draw()
  layer4.update()
  layer4.draw()




  // character layer
  character.update()
  character.draw()

  if (!character.lose) {
    loseWindow.style.display = "none"
    // bullets
    BulletsArr.forEach(e => {
      e.update()
      e.draw()
    })
    EnemiesArr.forEach(enemy => {
      enemy.update()
      enemy.draw()
    })

  }
  else {
    loseWindow.style.display = "flex"
    score = 0
  }




  EnemiesArr.forEach(enemy => {
    BulletsArr.forEach(bullet => {
      if (bullet.x < enemy.x + enemy.width / 2 &&
        bullet.x + bullet.width / 2 > enemy.x &&
        bullet.y < enemy.y + enemy.height / 2 &&
        bullet.y + bullet.height / 2 > enemy.y) {
        enemy.killed = true
        enemy.CharacterImages = options["enemyDies"].ImagesArr
        score++
        ScoreFlag.innerText = score
      }
    })


    if (character.x < enemy.x + enemy.width / 2 &&
      character.x + character.width / 2 > enemy.x &&
      character.y < enemy.y + enemy.height / 2 &&
      character.y + character.height / 2 > enemy.y) {

      character.lose = true
      character.CharacterImages = options["characterDies"].ImagesArr
    }


  })


  BulletsArr = BulletsArr.filter(e => !e.markedForDeletion)
  EnemiesArr = EnemiesArr.filter(e => !e.markedForDeletion)


  requestAnimationFrame(animate)
}


animate()

