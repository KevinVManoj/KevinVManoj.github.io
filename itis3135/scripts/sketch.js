let drawing;

function setup() {
    createCanvas(1200, 400);
    drawing = createGraphics(1200, 400); // Create a separate graphics buffer for drawing
    drawing.background(255); // Initially set the drawing buffer's background

    // Prepare the main canvas
    background(255); // Set the main canvas background
}

function draw() {
    // First, display the drawing buffer
    image(drawing, 0, 0);

    // Then, overlay the time and date on the main canvas
    displayTimeAndDate();
    
    // Update the drawing buffer when the mouse is pressed
    if (mouseIsPressed) {
        drawing.stroke(0); // Set drawing color
        drawing.line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function displayTimeAndDate() {
    // Ensure the text is visible against the background
    fill(0); // Text color
    noStroke(); // No border around the text
    
    // Get current date and time
    let d = day();
    let m = month();
    let y = year();
    let h = hour();
    let mi = minute();
    let s = second();

    // Format the date and time strings
    let dateString = 'Current Date: ' + m + '/' + d + '/' + y;
    let timeString = 'Current Time: ' + h + ':' + nf(mi, 2) + ':' + nf(s, 2);

    // Display the date and time strings on the main canvas
    text(dateString, 50, 50);
    text(timeString, 50, 70);
}
