// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001020202020202020202020401020204080303030303030303030305080303050d0b0b0b0c060202020403050803030f100303030d0b0c0e0e0503060703090a090b0c0303030801040503030303050e01020d0b0c030808060202020403050e080301020703080d0b0b0b0b0a0306040803080303030803030303030303030508030803010201020403090b0b0c0305080303030803080e050306040e0803050d0c03090803080e050303050e0803050107030508030102020202040e0803050803030508030803030303050e0803050803020207030803090c030602070305080303030303030305080303030303050d0b0b0b0b0b0b0b0a0d0b0b0b0b0b0a`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . 2 2 . . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 . . . 
. . . . 2 2 2 . . 2 . 2 2 . 2 2 
2 2 2 . . . 2 2 2 2 . . . . 2 . 
2 2 2 2 2 . 2 2 2 2 2 2 2 . 2 . 
2 . 2 2 2 . 2 2 2 2 2 2 2 . 2 2 
2 . 2 . . . 2 . . . . . . . . 2 
2 . 2 . 2 2 2 2 2 . 2 2 2 2 . 2 
2 . . . 2 . 2 . 2 . 2 2 . 2 . 2 
2 2 . 2 2 . 2 . 2 . . 2 . 2 . 2 
2 2 . 2 2 . 2 2 2 2 2 2 . 2 . 2 
2 . . 2 2 . 2 . . . . 2 . 2 . 2 
2 . 2 2 2 . 2 . 2 2 . 2 2 2 . 2 
2 . . . . . . . 2 2 . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.floorDark0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleInnerSouthWest,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleOuterSouthEast,myTiles.tile1,sprites.dungeon.stairEast,sprites.dungeon.stairWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
