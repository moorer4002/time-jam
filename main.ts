let mySprite = sprites.create(img`
    . . . . . . f f f f . f f f . . . . 
    . . f f f f d d d d f b b d f . . . 
    . f d d d d f d d d f d d d f . . . 
    . f d f f f d f d d f d 3 3 f . . . 
    . f b f b f 3 f d d f f 3 3 d f . . 
    . f b f f d f 3 f d d d d d d f . . 
    . f b b b d d f f f d f f d d f . . 
    . . f f f d d d d d d f 3 3 d f . . 
    . . . f b b d d d d d f d 3 f . . . 
    . . . . f b d d d d d f d d f . . . 
    . . . . . f b d d d f f b d f . . . 
    . . . . . . f f f f . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairEast)
game.onUpdate(function () {
    if (controller.left.isPressed()) {
        mySprite.setImage(img`
            . . . . . f f f f . f f f f . . . . . 
            . . . . . f d b b f d d d d f f f f . 
            . . . f f f d d d f d d d f d d d d f 
            . f f d d f 3 3 d f d d f d f f f d f 
            f d d d d d 3 3 f f d d f 3 f b f b f 
            f d d d d d d d d d d f 3 f d f f b f 
            f d d d d d d f f d f f f d d b b b f 
            f d d d d d 3 3 f d d d d d d f f f . 
            . f f d d f 3 d f d d d d d b b f . . 
            . . . f f f d d f d d d d d b f . . . 
            . . . . . f d b f f d d d b f . . . . 
            . . . . . f f f f . f f f f . . . . . 
            `)
    } else if (controller.up.isPressed()) {
        mySprite.setImage(img`
            . . . . f f f f . . . . 
            . . . f d d d d f . . . 
            . . . f d d d d f . . . 
            . . f d d d d d d f . . 
            . . f d d d d d d f . . 
            f f f f d d d d f f f f 
            f d d 3 3 d d 3 3 d d f 
            f b d d 3 f d 3 3 d b f 
            f f f f f f d f d d b f 
            . f d d d d d f f f f . 
            f d d d d f d d d d d f 
            f d d d d f f d d d d f 
            f d d d d f 3 f f d d f 
            f b d d d d f 3 d f d f 
            . f b b d d d f f d f . 
            . . f b f b f b f d f . 
            . . . f f b f f f d f . 
            . . . . f b b b d d f . 
            . . . . . f f f f f . . 
            `)
    } else if (controller.down.isPressed()) {
        mySprite.setImage(img`
            . . . . . f f f f f . . 
            . . . . f b b b d d f . 
            . . . f f b f f f d f . 
            . . f b f b f b f d f . 
            . f b b d d d f f d f . 
            f b d d d d f 3 d f d f 
            f d d d d f 3 f f d d f 
            f d d d d f f d d d d f 
            f d d d d f d d d d d f 
            . f d d d d d f f f f . 
            f f f f f f d f d d b f 
            f b d d 3 f d 3 3 d b f 
            f d d 3 3 d d 3 3 d d f 
            f f f f d d d d f f f f 
            . . f d d d d d d f . . 
            . . f d d d d d d f . . 
            . . . f d d d d f . . . 
            . . . f d d d d f . . . 
            . . . . f f f f . . . . 
            `)
    } else {
        mySprite.setImage(img`
            . . . . . f f f f . f f f f . . . . . 
            . f f f f d d d d f b b d f . . . . . 
            f d d d d f d d d f d d d f f f . . . 
            f d f f f d f d d f d 3 3 f d d f f . 
            f b f b f 3 f d d f f 3 3 d d d d d f 
            f b f f d f 3 f d d d d d d d d d d f 
            f b b b d d f f f d f f d d d d d d f 
            . f f f d d d d d d f 3 3 d d d d d f 
            . . f b b d d d d d f d 3 f d d f f . 
            . . . f b d d d d d f d d f f f . . . 
            . . . . f b d d d f f b d f . . . . . 
            . . . . . f f f f . f f f f . . . . . 
            `)
    }
})
