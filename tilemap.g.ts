// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020202020202020202020200000204060102020202020202020202020004050d000000000000000000000000000505060a0a0002020002020200020400050506000000010300030303000405050505060a000a0a0100030000000000050505060a000a0a0a000300040b0500050505060a000a00000001000b000500050505060a000a000a0a07000b000500050505060a000a000a07080009000000050505060a000a00000808000c090505050505060a000a07000008000000090500000e060a0000000800080800000809000505060a00080008000008000808080005050607000800080800080000000000090507080808000000000808080808080809`, img`
. . . . . . . . . . . 2 . . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
. . . . . . . . . . . . . . 2 . 
2 2 2 . 2 2 . 2 2 2 . 2 2 . 2 . 
2 . . . 2 2 . 2 2 2 . 2 2 2 2 . 
2 2 . 2 2 2 . 2 . . . . . 2 . . 
. 2 . 2 2 2 . 2 . 2 2 2 . 2 . . 
. 2 . 2 . . . 2 . 2 . 2 . 2 . . 
. 2 . 2 . 2 2 2 . 2 . 2 . 2 . . 
. 2 . 2 . 2 2 2 . 2 . . . 2 . . 
. 2 . 2 . . 2 2 . 2 2 2 2 2 2 2 
. 2 . 2 2 . . 2 . . . 2 2 . . . 
. 2 . . . 2 . 2 2 . . 2 2 . 2 2 
. 2 . 2 . 2 . . 2 . 2 2 2 . 2 2 
. 2 . 2 . 2 2 . 2 . . . . . 2 2 
. 2 2 2 . . . . 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenSwitchUp,sprites.dungeon.greenSwitchDown], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
