namespace SpriteKind {
    export const ammobox = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const finalboss = SpriteKind.create()
}
namespace StatusBarKind {
    export const health2 = StatusBarKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
})
sprites.onOverlap(SpriteKind.ammobox, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar2.value += 25
    sprites.destroy(sprite)
})
statusbars.onZero(StatusBarKind.health2, function (status) {
    sprites.destroy(asdfghjkldhg, effects.halo, 5000)
    game.splash("you freed the world!")
    game.splash("yay!")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.finalboss, function (sprite, otherSprite) {
    statusbar.value += -1
    sprites.destroy(sprite)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Noise, 2293, 1, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    if (direction == 1) {
        shot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 5 4 5 5 5 5 5 5 5 . . . . . 
            . 5 5 4 5 5 5 5 5 5 5 . . . . . 
            . 5 5 4 5 5 5 5 5 5 5 . . . . . 
            . . 5 4 5 5 5 5 5 5 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Player_gta6, -400, 0)
    }
    if (direction == 2) {
        shot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 . . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 4 4 4 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Player_gta6, 0, -400)
    }
    if (direction == 3) {
        shot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 5 5 5 5 5 5 5 4 5 . . . . 
            . . . 5 5 5 5 5 5 5 4 5 5 . . . 
            . . . 5 5 5 5 5 5 5 4 5 5 . . . 
            . . . 5 5 5 5 5 5 5 4 5 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Player_gta6, 400, 0)
    }
    if (direction == 4) {
        shot = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . . . 5 5 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Player_gta6, 0, 400)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar2.value += 5
    sprites.destroy(sprite)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ammobox, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(5)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 4
})
sprites.onOverlap(SpriteKind.finalboss, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar2.value += -10
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level18`)
    tiles.placeOnTile(Player_gta6, tiles.getTileLocation(16, 13))
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy2)
    asdfghjkldhg = sprites.create(assets.image`lil king`, SpriteKind.finalboss)
    asdfghjkldhg.follow(Player_gta6, 80)
    statusbar = statusbars.create(10, 4, StatusBarKind.health2)
    tiles.placeOnTile(asdfghjkldhg, tiles.getTileLocation(16, 3))
    statusbar.attachToSprite(asdfghjkldhg)
    statusbar.value = 100
    sprites.destroy(sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . 5 4 5 5 5 5 . 
        5 5 4 5 5 5 5 . 
        . 5 4 5 5 5 5 . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.Food))
    sprites.destroy(sprites.create(assets.image`ammobox`, SpriteKind.ammobox))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    statusbar2.value += -10
})
let shot: Sprite = null
let statusbar: StatusBarSprite = null
let asdfghjkldhg: Sprite = null
let direction = 0
let statusbar2: StatusBarSprite = null
let ammo: Sprite = null
let ammo_box: Sprite = null
let Body_guard: Sprite = null
let Player_gta6: Sprite = null
game.splash("pres a to shoot")
tiles.setCurrentTilemap(tilemap`level1`)
Player_gta6 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . f f f f 2 2 2 2 2 2 f 4 e . . 
    . f 1 f f 2 2 2 2 2 2 f d 4 . . 
    . f f 4 f 4 4 5 5 4 4 f 4 4 . . 
    . f f . . f f f f f f . . . . . 
    . f f . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Player_gta6)
scene.cameraFollowSprite(Player_gta6)
tiles.placeOnTile(Player_gta6, tiles.getTileLocation(10, 19))
for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
    Body_guard = sprites.create(img`
        . . . . . . . c c c . . . . . . 
        . . . . . . c b 1 c . . . . . . 
        . . . . c c c 1 1 c c c . . . . 
        . . c c b c 1 1 1 1 c c c c . . 
        . c b b 1 b 1 1 1 1 b 1 b b c . 
        . c b 1 1 b b 1 1 b b 1 1 b c . 
        . . 5 1 1 1 b b b b 1 1 1 c . . 
        . . 5 5 1 1 1 1 1 1 1 1 5 5 . . 
        . . 5 5 5 f f f f f f 5 5 5 . . 
        . . 5 5 5 f f d d f f 5 5 5 . . 
        . . . 5 5 d d d d d d 5 5 . . . 
        . f f f d f d d d d f d d . . . 
        . f d f c d 1 d d 1 d f d d . . 
        . f f d f 1 1 1 1 1 1 f d d . . 
        . f f . c d 1 1 1 1 d c . . . . 
        . f f . . f f f f f f . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Body_guard, value)
    tiles.setTileAt(value, sprites.dungeon.floorLight0)
    Body_guard.follow(Player_gta6, 50)
}
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    ammo_box = sprites.create(assets.image`ammobox`, SpriteKind.ammobox)
    tiles.placeOnTile(ammo_box, value)
    tiles.setTileAt(value, sprites.castle.tileDarkGrass1)
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    ammo = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . 5 4 5 5 5 5 . 
        5 5 4 5 5 5 5 . 
        . 5 4 5 5 5 5 . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.Food)
    tiles.placeOnTile(ammo, value)
    tiles.setTileAt(value, sprites.castle.tileDarkGrass1)
}
statusbar2 = statusbars.create(20, 4, StatusBarKind.Health)
statusbar2.attachToSprite(Player_gta6)
statusbar2.value = 200
