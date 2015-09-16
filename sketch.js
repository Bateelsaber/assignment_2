var ballerina;
var ballerina1;

function setup() {
	// create a place to draw
	createCanvas(640, 460);
  ballerina = loadImage("imagecopy.png");
	ballerina1 = loadImage("baimage.png")
	noStroke();
		noLoop();

}

function draw() {
	var wallfloor = random(1);
	// draw background
	if (wallfloor < 0.5) {
		// purple background
		background(81, 54, 111);
		fill(41, 17, 68);
		rect(0, 280, 640, 200);
		fill(61, 68, 110);
		triangle(0, 280, 0, 0, 280, 280);
		fill(55, 38, 97);
		quad(0, 280, 280, 280, 30, 610, -50, 676);


	} else {
		// blue background
		background(59, 55, 111);
		fill(11, 13, 85);
		rect(0, 280, 640, 200);
		fill(61, 68, 110);
		triangle(0, 280, 0, 0, 280, 280);
		fill(38, 38, 94);
		quad(0, 280, 280, 280, 30, 610, -50, 676);


	}


	if (wallfloor > 0) {
		fill(250);
		var dots;
		dots = random(1, 3);

		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
		ellipse(random(0, 640), random(0, 278), dots, dots);
	}


}
