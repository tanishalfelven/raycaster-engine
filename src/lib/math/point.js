import util from "../util";

/**
 * Point Vector/Point math object
 */
export default class Point {
    constructor(x, y = x) {
        this.x = x;
        this.y = y;
    }

    /**
     * Return distance to given point, assuming it is in ray
     * @param {Point} point 
     */
    distanceFrom(point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2));
    }

    toString() {
        return `(${util.roundNumToPlace(this.x, 2)}, ${util.roundNumToPlace(this.y, 2)})`;
    }

    /**
     * @param {Point} point 
     * @return {Point}
     */
    add(point) {
        return new Point(this.x + point.x, this.y + point.y);
    }
    
    /**
     * @param {Point} point 
     * @return {Point}
     */
    subtract(point) {
        return new Point(this.x - point.x, this.y - point.y);
    }

    /**
     * @param {Point} point 
     * @return {Point}
     */
    multiply(point) {
        return new Point(this.x * point.x, this.y * point.y);
    }
    
    /**
     * @param {Point} point 
     * @return {Point}
     */
    divide(point) {
        return new Point(this.x * point.x, this.y * point.y);
    }
}
