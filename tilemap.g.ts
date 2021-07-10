// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`11000900010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000101010001010100010101000101010002010101000101010001010100010101020001010100010101000101010001010100000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
. 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 . 
. 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 . 
. 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 . 
. . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.swamp.swampTile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTileBoo":
            case "tile2":return tile2;
            case "BlackTilwe":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
