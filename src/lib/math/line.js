import Point from "./point";

export default class Line {
    /**
     * @param {Point} a 
     * @param {Point} b 
     */
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    /**
     * Test if given x value is inside of line
     * @param {number} x 
     */
    xInside(x) {
        return this.a.x <= x && x <= this.b.x || this.b.x <= x && x <= this.a.x;
    }
    
    /**
     * Test if given y value is inside of line
     * @param {number} y 
     */
    yInside(y) {
        return this.a.y <= y && y <= this.b.y || this.b.y <= y && y <= this.a.y;
    }

    slope() {
        return Line.slope(this.a, this.b);
    }

    static slope(a, b) {
        if (a.x === b.x) return 0;
        // negative to transform to screen
        return (a.y - b.y) / (a.x - b.x);
    }

    toString() {
        return `${this.a}${this.b}`;
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
