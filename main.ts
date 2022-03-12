namespace SpriteKind {
    export const Shield = SpriteKind.create()
    export const Powerup_kind = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Enemy, sprites.swamp.swampTile9, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Energy > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Hero, 50, 0)
        Energy += -10
    }
    Hero.say(Energy, 500)
})
info.onCountdownEnd(function () {
    GotShields = 0
    PowerUp.destroy()
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Shield, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.ashes, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shield, function (sprite, otherSprite) {
    GotShields = 1
    Energy += 50
    info.startCountdown(3)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 . . . 3 . . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . 3 . . . . . . 3 3 . . . 
        . . . . . . . . . . . . 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . 3 . . 
        . . 3 . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 . . . . . . . . . . . . 
        . . . 3 3 . . . . . . 3 . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . . . . . . 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    50,
    false
    )
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . b d b c . . . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . d d 5 1 1 1 1 1 1 1 5 d d . 
        . . b b 5 5 5 1 1 1 5 5 5 b b . 
        . . . c c 5 5 5 1 5 5 5 c c . . 
        . . . . b 5 5 5 1 5 5 5 b . . . 
        . . . . b b c 5 5 5 c b b . . . 
        . . . . . . c b d b c . . . . . 
        . . . . . . . b d b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . b d b . . . . . b b b b . . 
        . c b d d b . . . b b d d d b . 
        . b c c b . . . b c d d d d b . 
        . . . . . . b b c c b d b b b . 
        . . . . . b d d b c c b b b c . 
        . . b b b c d d b b c c c c . . 
        . b d d d b c b b c . . . . . . 
        c b d d d d c c c c . b b b . . 
        c c b b b b c c c . b d d d b . 
        . c c c b b . . b c b b d d b b 
        . b b . . . . . b c c b b b b . 
        b d d b b . . . . . c c c b . . 
        b b d d b c . . b b b b b b b . 
        . b c c c b . b d d d b b c b . 
        . . . . . . b d d d b c c b . . 
        . . . . . . b b b c c c b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    50,
    false
    )
    info.changeScoreBy(1)
    max_speed += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeLifeBy(-1)
})
let Asteroids: Sprite = null
let PowerUp: Sprite = null
let projectile: Sprite = null
let GotShields = 0
let Energy = 0
let Hero: Sprite = null
let spawn_time = 0
tiles.setTilemap(tilemap`level1`)
if (game.ask("Press A for Normal Mode", "Press B for Expert")) {
    spawn_time = 2000
} else {
    spawn_time = 1000
}
Hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 8 . . . . . . . . . . . . . . 
    . 8 8 . . . . . . . . . . . . . 
    . . 8 8 . . . . . . . . . . . . 
    . 2 8 8 8 . . . . . . . . . . . 
    . 2 2 4 8 8 . . 6 6 6 6 6 . . . 
    2 2 4 5 5 8 8 . 6 9 9 9 9 6 . . 
    . 2 2 4 8 8 8 8 8 8 8 8 8 8 . . 
    . . 2 8 8 8 8 8 8 . . . . . . . 
    . . 8 8 8 8 8 8 . . . . . . . . 
    . 8 8 8 8 8 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
animation.runImageAnimation(
Hero,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 8 . . . . . . . . . . . . . 
    . . 8 8 . . . . . . . . . . . . 
    . . . 8 8 . . . . . . . . . . . 
    . . . 4 8 8 . . . . 6 6 6 6 . . 
    . . 2 2 5 8 8 . . 6 9 9 9 9 6 . 
    . 2 2 2 5 8 8 8 . 6 9 9 9 9 9 6 
    . . 2 4 5 8 8 8 8 8 8 8 8 8 8 8 
    . . . 4 8 8 8 8 8 . . . . 8 8 8 
    . . 8 8 8 8 8 . . . . . . . . . 
    . 8 8 8 . . . . . . . . . . . . 
    . 8 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 8 . . . . . . . . . . . . . 
    . . 8 8 . . . . . . . . . . . . 
    . . 4 8 8 . . . . . . . . . . . 
    . . 4 4 8 8 . . . . 6 6 6 6 . . 
    . 2 2 5 5 8 8 . . 6 9 9 9 9 6 . 
    2 2 2 5 5 8 8 8 . 6 9 9 9 9 9 6 
    . 2 2 5 5 8 8 8 8 8 8 8 8 8 8 8 
    . . 4 4 8 8 8 8 8 . . . . 8 8 8 
    . . 8 8 8 8 8 . . . . . . . . . 
    . 8 8 8 . . . . . . . . . . . . 
    . 8 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 8 . . . . . . . . . . . . . 
    . . 8 8 . . . . . . . . . . . . 
    . . 4 8 8 . . . . . . . . . . . 
    . . 5 4 8 8 . . . . 6 6 6 6 . . 
    . . 5 5 5 8 8 . . 6 9 9 9 9 6 . 
    . 2 2 2 5 8 8 8 . 6 9 9 9 9 9 6 
    . . 5 5 5 8 8 8 8 8 8 8 8 8 8 8 
    . . 4 4 8 8 8 8 8 . . . . 8 8 8 
    . . 8 8 8 8 8 . . . . . . . . . 
    . 8 8 8 . . . . . . . . . . . . 
    . 8 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
200,
true
)
Hero.x = 20
controller.moveSprite(Hero)
Energy = 100
info.setLife(3)
GotShields = 0
let max_speed = -40
game.onUpdate(function () {
    if (GotShields == 1) {
        PowerUp.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 9 9 9 9 . . . 
            . . . . . . . . . . . . . 9 . . 
            . . . . . . . . . . . . . . 9 . 
            . . . . . . . . . . . . . . . 9 
            . . . . . . . . . . . . . . . 9 
            . . . . . . . . . . . . . . . 9 
            . . . . . . . . . . . . . . . 9 
            . . . . . . . . . . . . . . . 9 
            . . . . . . . . . . . . . . . 9 
            . . . . . . . . . . . . . . 9 . 
            . . . . . . . . . . . . . 9 . . 
            . . . . . . . . . 9 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        PowerUp.setPosition(Hero.x + 10, Hero.y)
    }
})
game.onUpdateInterval(spawn_time, function () {
    Asteroids = sprites.create(img`
        . . . . . c c b b b . . . . . . 
        . . . . c b d d d d b . . . . . 
        . . . . c d d d d d d b b . . . 
        . . . . c d d d d d d d d b . . 
        . . . c b b d d d d d d d b . . 
        . . . c b b d d d d d d d b . . 
        . c c c c b b b b d d d b b b . 
        . c d d b c b b b b b b b b d b 
        c b b d d d b b b b b d d b d b 
        c c b b d d d d d d d b b b d c 
        c b c c c b b b b b b b d d c c 
        c c b b c c c c b d d d b c c b 
        . c c c c c c c c c c c b b b b 
        . . c c c c c b b b b b b b c . 
        . . . . . . c c b b b b c c . . 
        . . . . . . . . c c c c . . . . 
        `, SpriteKind.Enemy)
    Asteroids.setPosition(150, randint(10, 110))
    Asteroids.vx = randint(-20, max_speed)
    animation.runImageAnimation(
    Asteroids,
    [img`
        . . . . . c c b b b . . . . . . 
        . . . . c b d d d d b . . . . . 
        . . . . c d d d d d d b b . . . 
        . . . . c d d d d d d d d b . . 
        . . . c b b d d d d d d d b . . 
        . . . c b b d d d d d d d b . . 
        . c c c c b b b b d d d b b b . 
        . c d d b c b b b b b b b b d b 
        c b b d d d b b b b b d d b d b 
        c c b b d d d d d d d b b b d c 
        c b c c c b b b b b b b d d c c 
        c c b b c c c c b d d d b c c b 
        . c c c c c c c c c c c b b b b 
        . . c c c c c b b b b b b b c . 
        . . . . . . c c b b b b c c . . 
        . . . . . . . . c c c c . . . . 
        `,img`
        . . . . . . . . . b b b b . . . 
        . . . . . . b b b d d d d b . . 
        . . . . . . b d d d d d d b . . 
        . . . . b b d d d d d b b d . . 
        . . . . b d d d d d d b b d b . 
        . . . . c d d d d d b b d b c . 
        . . . b c c b b b b d d b c c . 
        . . b b c c c b d d b c c c c . 
        . b b d d d b b b b b b c c c c 
        . c d d d d d d b d b c c c b c 
        . c b d d d b b d b c c c b b c 
        c b c c c c b d d b b b b b c c 
        c c b b b d d b c c b b b b c c 
        c c c c c c c c c b b b b c c . 
        . c c c c b b b b b b b c c . . 
        . . . . c c c c c c c c . . . . 
        `],
    200,
    true
    )
})
game.onUpdateInterval(10000, function () {
    PowerUp = sprites.create(img`
        . . b b b b . . 
        . b f f f b b . 
        b 5 f 3 3 f 5 b 
        b 5 f 5 5 f 5 b 
        c 5 f f f 1 d c 
        c d f 1 1 d d c 
        . f f d d d f . 
        . . f f f f . . 
        `, SpriteKind.Shield)
    PowerUp.setPosition(150, randint(10, 110))
    PowerUp.vx = randint(-20, -40)
})
