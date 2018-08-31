/**
 * Point Vector/Point math object
 */
export default class Point {
    constructor(x, y = x) {
        this.x = x;
        this.y = y;
    }

    /**
     * @return {number}
     */
    magnitude() {
        return Math.sqrt(this.x*this.x - this.y*this.y);
    }

    lengthSq() {
        return new Point(this.dot(this));
    }

    normalize() {
        // TODO double check this shite
        if (this.lengthSq() > 0) {
            return this.multiply(new Point(1 / this.magnitude()));
        }
    
        return new Point(0, 0);
    }

    distanceFromOrigin() {
        return Math.pow(Math.sqrt(this.x + this.y), 2)
    }

    /**
     * @param {Point} point
     * @return {Point}
     */
    crossProduct(point) {
        return (this.x * point.y) - (this.y * point.x);
    }

    /**
     * @param {Point} point
     * @return {number}
     */
    dot(point) {
        return (this.x * point.x) + (this.y * point.y);
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
