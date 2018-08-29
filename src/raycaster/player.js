import r from "../renderer";
import inputHandler from "../inputHandler";

export default class Player {
    constructor(pos) {
        this.x = pos.x;
        this.y = pos.y;
        this.rotation = 0;
    }

    update() {
        const speed = 0.1;

        if (inputHandler.isPressed("w")) {
            this.y -= speed;
        } else if (inputHandler.isPressed("s")) {
            this.y += speed;
        }

        if (inputHandler.isPressed("a")) {
            this.x -= speed;
        } else if (inputHandler.isPressed("d")) {
            this.x += speed;
        }
    }

    render() {
        // center 10x10 over current position
        r.rect(this.x * 20, this.y * 20, 10, 10, "red");
    }
}
