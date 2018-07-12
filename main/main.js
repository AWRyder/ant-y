var noiseVal;
var noiseScale=0.02;
var tileNumber = 40;
var debug = false;

var grassTile;
var sandTile;
var waterTile;
var rockTile;


let offset = 0;

function setup() {
    createCanvas(1024,800);
    grassTile = loadImage("assets/grass.jpg");
    sandTile = loadImage("assets/sand.jpg");
    waterTile = loadImage("assets/water.jpg");
    rockTile = loadImage("assets/rock.png");
}


function draw() {
    noiseSeed(1231241057012123);
    background(255);
    frameRate(60);
    let texture;

    var tileHeight = height/tileNumber;
    var tileWidth = width/tileNumber;
    for (var y = 0; y < tileNumber; y++) {
        for (var x = 0; x < tileNumber; x++) {
            // noiseDetail of the pixels octave count and falloff value
            //noiseDetail(3);
            noiseVal = noise(x/10+offset,y/10);
            stroke(noiseVal*255);
            fill(noiseVal*255);


            if ( noiseVal > .6 ) texture = rockTile;
            else if ( noiseVal > .35 ) texture = grassTile;
            else if ( noiseVal > .25 ) texture = sandTile;
            else texture = waterTile;

            image(texture,x*tileWidth,y*tileHeight,tileWidth,tileHeight);
            // point(x*tileSize,y*tileSize);
            if ( debug ) {
                stroke(0);
                fill(0);
                text(Math.round(noiseVal * 100) / 100, x * tileWidth + tileWidth * .2, y * tileHeight + tileHeight * .5);
            }
        }
    }
    offset += .05;

}