import r from "../renderer";
import inputHandler from "../inputHandler";
import cfg from "../config";
import util from "../util";

export default class Player {
    constructor(pos, map) {
        this.x = pos.x;
        this.y = pos.y;
        this.rotation = 0;
        this.fov = util.toRadians(60);
        this.map = map;
    }

    rotate(distance) {
        this.rotation = util.wrapRadian(this.rotation + distance);
    }

    update() {
        const moveSpeed = 0.05;
        const deltaPos = util.projectAngleFromPoint(this.rotation, moveSpeed);
        // TODO account for lag with rendering

        if (inputHandler.isPressed("w")) { // forwards
            this.x += deltaPos.x;
            this.y += deltaPos.y;
        } else if (inputHandler.isPressed("s")) { // backwards
            this.x -= deltaPos.x;
            this.y -= deltaPos.y;
        }

        // TODO handle rotation with mouse movements
        const rotateSpeed = 0.02;
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
        const rotPoint = util.projectAngleFromPoint(this.rotation, 1);
        r.line(
            scaledX,
            scaledY,
            scaledX + (rotPoint.x * cfg.scale),
            scaledY + (rotPoint.y * cfg.scale)
        );
    }
}
