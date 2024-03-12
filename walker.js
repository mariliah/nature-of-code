class Walker {
    constructor() {
        this.x = width / 2;
        this.y = height / 2;
    }

    // includes code to draw the object (as a black dot)
    show() {
        stroke(0);
        point(this.x, this.y);
    }

    // directs the Walker object to take a step.
    step() {
        // let choice = floor(random(4)); // 0, 1, 2, or 3

        // if (choice === 0) {
        //     this.x++;
        // } else if (choice === 1) {
        //     this.x--;
        // } else if (choice === 2) {
        //     this.y++;
        // } else {
        //     this.y--;
        // }
        let r = random(1);

        if (r < 0.4) { // a 40% chance of moving to the right
            this.x++;
        } else if (r < 0.6) {
            this.x--;
        } else if (r < 0.8) {
            this.y++;
        } else {
            this.y--;
        }
    }
}