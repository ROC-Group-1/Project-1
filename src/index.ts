import { background } from "./assets/background"
import { beeProj } from "./assets/beeProj"
import { flowerProj } from "./assets/flowerProj"
import { player } from "./assets/player"

background
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.rings, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    music.zapped.play()
    info.changeLifeBy(-1)
})
let bee: Sprite = null
let projectile: Sprite = null
let mySprite = player
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(3)
game.onUpdateInterval(5000, function () {
    projectile = flowerProj()
    bee = beeProj()
    bee.setKind(SpriteKind.Enemy)
})