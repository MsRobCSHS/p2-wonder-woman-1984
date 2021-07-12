scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchDown, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . a a 5 a a . . . . . 
    . . . . . a a 5 2 5 a a . . . . 
    . . . . a a 2 2 2 2 2 a a . . . 
    . . . . a a 4 4 4 4 4 a a . . . 
    . . . . a a 4 e 4 e 4 a a . . . 
    . . . a a a 4 4 4 4 4 a a a . . 
    . . a a a a a 4 4 4 a a a a a . 
    . . a a a a 4 2 2 2 4 a a a a . 
    . . . . a a 5 2 5 2 5 a a . . . 
    . . . . . a 4 8 8 8 4 a . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . . 4 . 4 . . . . . . 
    . . . . . . . 2 . 2 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(7)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.greenSwitchUp)
scene.cameraFollowSprite(mySprite)
info.startCountdown(30)
