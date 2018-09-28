import r from "../lib/renderer";
import inputHandler from "../lib/inputHandler";
import cfg from "../config";
import util from "../lib/util";
import Ray from "../lib/math/ray";

export default class Player extends Ray {
    constructor(x, y) {
        super(x, y, 0);
        this.fov = util.toRadians(60);
        this.moveSpeed = 60 / 1000;  // point/msec
        this.rotateSpeed = 10 * Math.PI / 1000; // rad/sec
    }

    /**
     * 
     * @param {number} delta timestep relative to current frame
     */
    update(delta) {
        const deltaPos = this.project(this.moveSpeed * delta);

        if (inputHandler.isPressed("w")) { // forwards
            this.x += deltaPos.x;
            this.y += deltaPos.y;
        } else if (inputHandler.isPressed("s")) { // backwards
            this.x -= deltaPos.x;
            this.y -= deltaPos.y;
        }

        // TODO handle rotation with mouse movements
        const rotateSpeed = this.rotateSpeed * delta;
        if (inputHandler.isPressed("a")) { // left
            this.rotate(rotateSpeed)
        } else if (inputHandler.isPressed("d")) { // right
            this.rotate(-rotateSpeed)
        }
    }

    render() {
        const scaledX = this.x * cfg.scale;
        const scaledY = this.y * cfg.scale;
        r.rect(
            scaledX - cfg.scale/4, 
            scaledY - cfg.scale/4, 
            cfg.scale/2, 
            cfg.scale/2, 
            "red"
        );
        
        // get projected point to visually track rotation
        const rotPoint = this.project(1);
        r.line(
            scaledX,
            scaledY,
            scaledX + rotPoint.x * cfg.scale,
            scaledY + rotPoint.y * cfg.scale
        );
    }
}
