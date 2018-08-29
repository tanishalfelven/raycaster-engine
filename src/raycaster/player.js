import r from "../renderer";
import inputHandler from "../inputHandler";

/**
 * Get relative coordinates from center
 * @param {number} angle
 * @param {number} radius
 * @return {Point}
 */
function projectAngleFromPoint(angle, radius) {
    const x = Math.cos(angle) * radius;
    // TODO figure out why this fixes
    // make angle negative to fix projecting error
    const y = Math.sin(-angle) * radius;

    return { x, y };
}

/**
 * @typedef {{ x : number, y : number }} Point
 * @param {Point} pos true coordinate
 * @param {number} angle in radians
 * @param {Map} map
 * @return {Point} absolute position to where line hits a wall
 */
function projectAngleToWall(pos, angle, map) {
    // angle = angle % (2 * Math.PI); // normalize angle

    const right = toRadians(270) <= angle || angle <= toRadians(90);
    const up    =              0 <= angle && angle <= toRadians(180);

    if (up) { // check from bottom of wall
        return {
            x : pos.x + ((pos.y - Math.floor(pos.y)) / Math.tan(angle)),
            y : Math.floor(pos.y) 
        };
    } else { // check from top of wall
        return {
            x : pos.x + ((pos.y - Math.ceil(pos.y)) / Math.tan(angle)),
            y : Math.ceil(pos.y) 
        }
    }

    if (right) { // check from left of wall

    } else { // check from right of wall

    }
}

/**
 * Wrap radians that are >2pi or <0 to equivalent values
 * @param {number} n radians
 * @return {number} wrapped value
 */
function wrapRadian(n) {
    const _2pi = Math.PI * 2;
    if (n > _2pi) {
        return (n % _2pi);
    } else if (n < 0) {
        return _2pi + n;
    }

    return n;
}

/**
 * @param {number} n value in degrees
 * @return {number} value in radians
 */
function toRadians(n) {
    return n * (Math.PI / 180);
}

export default class Player {
    constructor(pos, map) {
        this.x = pos.x;
        this.y = pos.y;
        this.rotation = 0;
        this.fov = toRadians(60);
        this.map = map;
    }

    rotate(distance) {
        this.rotation = wrapRadian(this.rotation + distance);
    }

    update() {
        const moveSpeed = 0.05;
        const deltaPos = projectAngleFromPoint(this.rotation, moveSpeed);
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
        // center 10x10 over current position
        const scale = 20;
        r.rect(this.x * scale - scale/4, this.y * scale - scale/4, 10, 10, "red");

        const raysToCast = 320;
        for (let i = 0; i < raysToCast; i++) {  
            let projectAngle = wrapRadian((this.rotation + this.fov / 2) - (this.fov / 320 * i));
            const angleEndPoint = projectAngleToWall(this, projectAngle, this.map);
            if (angleEndPoint) {
                r.line(this.x * scale, this.y * scale, angleEndPoint.x * scale, angleEndPoint.y * scale);
            }
        }
    }
}
