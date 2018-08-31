export default class RayCaster {
    /**
     * @typedef {import("./player")} {Player}
     * @typedef {import("./section")} {Section}
     * @param {Section} map
     * @param {Player} player 
     */
    constructor(map, player) {
        this.map = map;
        this.player = player;
    }

    update() {
        return 1;
    }

    render() {
        return 1;
    }
}

// const raysToCast = 320;
// for (let i = 0; i < raysToCast; i++) {  
//     let projectAngle = wrapRadian((this.rotation + this.fov / 2) - (this.fov / 320 * i));
//     const angleEndPoint = projectAngleToWall(this, projectAngle, this.map);
//     if (angleEndPoint) {
//         r.line(this.x * rc.scale, this.y * rc.scale, angleEndPoint.x * rc.scale, angleEndPoint.y * rc.scale);
//     }
// }

// /**
//  * Find distance to vertical wall
//  * @typedef {{right : boolean, up : boolean, angle : number}} Direction
//  * @param {Point} point to find distance from
//  * @param {Direction} direction angle data
//  * @param {Map} map
//  */
// function verticalDistanceToWall(point, direction, map) {
//     // if we are searching upwards, then clamp to bottom of a gridpoint. Searching downwards clamps to top of a gridpoint.
//     const clampFunction = direction.up ? Math.floor : Math.ceil;
//     const firstGridIntersection = {
//         x : 
//         y :
//     };
// }

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

    const yDistance = distToWall(pos, {right, up, angle}, map); // vertical distance to nearest wall

    if (up) { // check from bottom of wall
        const firstGridIntersection = {
            x : pos.x + ((pos.y - Math.floor(pos.y)) / Math.tan(angle)),
            y : Math.floor(pos.y) 
        };
    } else { // check from top of wall
        const firstGridIntersection = {
            x : pos.x + ((pos.y - Math.ceil(pos.y)) / Math.tan(angle)),
            y : Math.ceil(pos.y) 
        };
    }

    if (right) { // check from left of wall

    } else { // check from right of wall

    }
}
