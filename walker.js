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
        let choice = floor(random(4)); // 0, 1, 2, or 3

        if (choice === 0) {
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
    }
}