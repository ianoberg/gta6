// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level10":
            case "level9":return tiles.createTilemap(hex`200010000405050505050505050505050505050510110505050505050505050505050502070b070b070b090b070b090b070b0b0b0b120b0a0c060c0a0c060c0a0c060c06070e070e070b070b070b070b070b0b0b0b0b0b060b060b060b060b060e060e06070b090b070b070b070b070e01080808080808030e060b060b060b060b060b06070b070b070b070b070f070b0f0b0b0b0b0b0b0b0b060b060b060b060b060b06070f070f070f070f070e0108080808080808080808030e060b060b060b060b06070b070b070b070b070b0b0b0b0b0b0b0b0b0b0b0b0b0b060b060b060b060b06070b070b070b070e010808080808080808080808080808030e060b060b060b06070b070b070b070b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b060b060b060b06070b070b070e01080808080808080808080808080808080808030e060b060b06070b070b070b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b060b060b06070b070e0108080808080808080808080808080808080808080808030e060b06070b070b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b060b06070e010808080808080808080808080808080808080808080808080808030e06070b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0d060108080808080808080808080808080808080808080808080808080808080803`, img`
22222222222222222222222222222222
2.2.2...2...2........2.........2
2.2.2.2.2.2.2......2.2.2.2.2.2.2
2...2.2.2.2.22222222.2.2.2.2.2.2
2.2.2.2.2.2..........2.2.2.2.2.2
2.2.2.2.2.222222222222.2.2.2.2.2
2.2.2.2.2..............2.2.2.2.2
2.2.2.2.2222222222222222.2.2.2.2
2.2.2.2..................2.2.2.2
2.2.2.22222222222222222222.2.2.2
2.2.2......................2.2.2
2.2.222222222222222222222222.2.2
2.2..........................2.2
2.2222222222222222222222222222.2
2..............................2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.dungeon.darkGroundCenter,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile9,sprites.dungeon.doorLockedNorth,sprites.dungeon.greenSwitchUp,myTiles.tile8], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`140014001203080808080808080d080808080808080802141209030808080808080808080d08080808020714120909131313131313131313131313131307101412090905030808080806060d08080802051007141209090509050511111111111111050705070714120909050e05030d0808080808020507050707141209090509050905050515050507050705071014120e09050905090503080802050705100507101412090e0509050905010a0a0405100507050707141209090509050905111111110507050705100714120e09050905010a0c06060c0a04051005070714120909050913131313131313131313070507071412090913010a0f0a0c0a0a0c0f0a0a041307071412090913050505051305051305050505130707141209010a0a0f0a0a0a06060a0a0a0f0a0a04071412010a0f0a0a0a0a0c06060c0f0a0a0a0a0a04141212121212121212120b0b0b0b0b0b0b0b0b14141212121212121212120b0b0b0b0b0b0b0b0b14141212121212121212120b0b0b0b0b0b0b0b0b14141212121212121212120b0b0b0b0b0b0b0b0b1414`, img`
.222222222222222222.
.222222222222222222.
.22..............22.
.22.22222..22222.22.
.22.2..........2.22.
.22.2.22222222.2.22.
.22.2.2......2.2.22.
.22.2.2.2222.2.2.22.
.22.2.2.2222.2.2.22.
.22.2.2......2.2.22.
.22.2.222..222.2.22.
.22.2..........2.22.
.22.222222222222.22.
.22..............22.
.22222222..22222222.
.22222222..22222222.
....................
....................
....................
....................
`, [myTiles.transparency16,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorLight0,sprites.dungeon.stairNorth,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.castle.tileDarkGrass1,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterWest1,myTiles.tile1,myTiles.tile5,myTiles.tile9,myTiles.tile2,sprites.dungeon.doorOpenNorth], TileScale.Sixteen);
            case "level18":
            case "level18":return tiles.createTilemap(hex`200020000302020202020202020202020202020202020202020202020202020202020203030101010101010101010101010101010101010101010101010101010101010303010101010101010101010101010101010101010101010101010101010101030301010101010101010101010101010101010101010101010101010101010103030101010101010101010101010101010101010101010101010101010101010303010101010101010101010101010101010101010101010101010101010101030301010101010101010101010101010101010101010101010101010101010103030101010101010101010101010101010101010101010101010101010101010303010101010101010101010101010101010101010101010101010101010101030301010101010101010101010101010101010101010101010101010101010103030101010101010101010101010101010101010101010101010101010101010303010101010101010101010101010101010101010101010101010101010101030301010101010101010101010101010101010101010101010101010101010103030101010101010101010101010101050b0401010101010101010101010101030301010101010101010101010101010a0c09010101010101010101010101010303010101010101010101010101010106080701010101010101010101010101030301010101010101010101010101010101010101010101010101010101010103030101010101010101010101010101010101010101010101010101010101010303010101010101010101010101010101010101010101010101010101010101030301010101010101010101010101010101010101010101010101010101010103030101010101010101010101010101010101010101010101010101010101010303010101010101010101010101010101010101010101010101010101010101030301010101010101010101010101010101010101010101010101010101010103030101010101010101010101010101010101010101010101010101010101010303010101010101010101010101010101010101010101010101010101010101030301010101010101010101010101010101010101010101010101010101010103030101010101010101010101010101010101010101010101010101010101010303010101010101010101010101010101010101010101010101010101010101030301010101010101010101010101010101010101010101010101010101010103030101010101010101010101010101010101010101010101010101010101010303010101010101010101010101010101010101010101010101010101010101030302020202020202020202020202020202020202020202020202020202020203`, img`
22222222222222222222222222222222
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............2.2.............2
2..............222.............2
2..............222.............2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
2..............................2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.castle.rock0,sprites.castle.rock1,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.doorOpenSouth,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile7":
            case "tile9":return tile9;
            case "mohameinteligence":
            case "tile8":return tile8;
            case "myTile8":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
