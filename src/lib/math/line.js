import Point from "./point";

export default class Line {
    /**
     * @param {Point} a 
     * @param {Point} b 
     */
    constructor(a, b) {
        if (b.distanceFromOrigin() < a.distanceFromOrigin()) {
            this.b = a;
            this.a = b;
        } else {
            this.a = a;
            this.b = b;
        }
    }

    // TODO implement
    // /**
    //  * Get distance to point from line
    //  * @param {Point} point
    //  * @return {number}
    //  */
    // distanceFrom(point) {

    // }

    // /**
    //  * Is point on line?
    //  * @param {Point} point 
    //  * @return {boolean}
    //  */
    // onLine(point) {

    // }
}
