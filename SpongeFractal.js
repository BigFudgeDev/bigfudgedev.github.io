function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
    background(51);
    orbitControl(2, 2, 2);
    fill(255);
    box();
}