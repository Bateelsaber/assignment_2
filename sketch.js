function setup() {
	// create a place to draw

	createCanvas(640, 460);
	noLoop();


}

function draw() {
	noStroke();
	var wallfloor = random(1);
	// draw background
	if (wallfloor < 0.5) {
		// purple background
		background(0, 170, 211);
	} else {
		// blue background
		background(10, 55, 111);
		fill(250);
		fill(250);
		var dots;
		dots = random(1, 3);
		for (var i = 0; i < 100; i++) {
			ellipse(random(0, 640), random(0, 278), dots, dots);
		}

	}

	var x = random(30, 290);
	// insert 2 images that change when the program is run
	if (wallfloor < 0.5) {
		fill(10, 70, 150);
		rect(0, 278, 640, 110);
		fill(150, 150, 150);
		rect(0, 340, 640, 250);
		fill(218, 204, 187);
		rect(100, 100, 150, 250);
		rect(250, 150, 120, 220);
		rect(440, 95, 100, 270);

		for (var i = 0; i < 6; i++) {
			fill(150, 150, 150);
			// left building windows
			rect(120, 120 + i * 40, 15, 15);
			rect(150, 120 + i * 40, 15, 15);
			rect(180, 120 + i * 40, 15, 15);
			rect(210, 120 + i * 40, 15, 15);
			// middle building windows
			rect(260, 170 + i * 40, 10, 10);
			rect(280, 170 + i * 40, 10, 10);
			rect(300, 170 + i * 40, 10, 10);
			rect(320, 170 + i * 40, 10, 10);
			rect(340, 170 + i * 40, 10, 10);
			// right building windows
			rect(450, 110 + i * 50, 15, 15);
			rect(470, 110 + i * 50, 15, 15);
			rect(490, 110 + i * 50, 15, 15);
			rect(510, 110 + i * 50, 15, 15);


		}
		for (var i = 0; i < 1000; i++) {
			fill(10, random(120, 170), 40);
			ellipse(random(0, 640), random(340, 460), 25, 25);
		}
	} else {
		fill(0)
		rect(0, 278, 640, 200);
		rect(100, 100, 150, 200);
		rect(250, 150, 120, 200);
		rect(440, 95, 100, 200);
		for (var i = 0; i < 10; i++) {
			fill(200, 150, 40);
			rect(random(105, 230), random(110, 270), 15, 15);

		}
		for (var i = 0; i < 8; i++) {
			fill(200, 150, 40);
			rect(random(255, 350), random(160, 270), 10, 10);

		}
		for (var i = 0; i < 10; i++) {
			fill(200, 150, 40);
			rect(random(450, 520), random(110, 270), 12, 12);

		}
	}
}
