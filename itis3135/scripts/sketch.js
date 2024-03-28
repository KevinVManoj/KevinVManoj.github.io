let drawing;

function setup() {
    createCanvas(1200, 400);
    drawing = createGraphics(1200, 400); 
    drawing.background(255); 
    background(255);
}

function draw() {
    image(drawing, 0, 0);

    displayTimeAndDate();
    
    if (mouseIsPressed) {
        drawing.stroke(0); 
        drawing.line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function displayTimeAndDate() {
    fill(0);
    noStroke();
    
    let d = day();
    let m = month();
    let y = year();
    let h = hour();
    let mi = minute();
    let s = second();

    let dateString = 'Current Date: ' + m + '/' + d + '/' + y;
    let timeString = 'Current Time: ' + h + ':' + mi + ':' + s;

    text(dateString, 50, 50);
    text(timeString, 50, 70);
}
