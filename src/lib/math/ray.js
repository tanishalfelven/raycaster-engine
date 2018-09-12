import Point from "./point";
import util from "../util";
import Line from "./line";
import r from "../renderer";

export default class Ray extends Point {
    constructor(x, y, angle) {
        super(x, y);
        this.angle = angle;
    }
    
    rotate(distance) {
        this.angle = util.wrapRadian(this.angle + distance);
    }

    /**
     * Project point @radius distance from center
     * ! RELATIVE COORDINATES TO SELF
     * @param {number} radius distance to project
     * @param {number} offset radians offset for angle
     * @return {Point}
     */ 
    project(radius, offset = 0) {
        return new Point( 
            Math.cos(util.wrapRadian(this.angle + offset)) * radius, 
            // negative to transform to screen
            Math.sin(util.wrapRadian(-this.angle - offset)) * radius
        );
    }

    /**
     * Given a point, return true if the point is in the general direction of the current angle
     * @param {number} x 
     * @param {number} y 
     */
    isInDirection(x, y, offset = 0) {
        const a = util.wrapRadian(this.angle + offset);
        const left = util._piOver2 <= a && a <= util._3piOver2;
        const up = 0 <= a && a <= Math.PI;

        let isInHorizontal = false;
        let isInVertical = false;

        if (left  && x <= this.x) isInHorizontal = true;
        if (!left && x >= this.x) isInHorizontal = true;
        if (up    && y <= this.y) isInVertical = true;
        if (!up   && y >= this.y) isInVertical = true;

        return isInHorizontal && isInVertical;
    }

    /**
     * Check if ray intersects given line
     * @param {Line} line 
     * @param {number} offset radian offset to use
     * @return {number} distance to intersect
     */
    getIntersect(line, offset = 0) {
        const directionalPoint = this.add(this.project(1, offset)); // reference point to do line math
        const m = Line.slope(directionalPoint, this);
        
        if (line.slope() === 0) {
            if (line.a.y !== line.b.y) {
                // line is horizontal
                const lineX = line.a.x;
                const pY = m*lineX + m*-this.x + this.y;
                const yInLine = (line.a.y <= pY && pY <= line.b.y || line.b.y <= pY && pY <= line.a.y);

                return yInLine && this.isInDirection(lineX, pY, offset) && this.distanceFrom(new Point(lineX, pY));
            } else if (line.a.x !== line.b.x) {
                // line is vertical
                const lineY = line.a.y;
                const pX = (-lineY - m*this.x + this.y)/-m;
                const xInLine = (line.a.x <= pX && pX <= line.b.x || line.b.x <= pX && pX <= line.a.x);

                return xInLine && this.isInDirection(pX, lineY, offset) && this.distanceFrom(new Point(pX, lineY));
            }
        }

        // TODO handle diagonal lines

        return false;
    }

    /**
     * @param {Section} section 
     * @param {number} offset radian offset of ray to cast
     */
    getNearestLineDistance(section, offset = 0) {
        const self = this;
        let intersections = [];

        section.lines.forEach((line) => {
            const intersect = self.getIntersect(line, offset);
            if (intersect) {
                intersections.push(intersect);
            }
        });

        section.children.forEach((childSection) => {
            const childIntersections = self.getNearestLineDistance(childSection, offset);
            if (childIntersections) {
                intersections = intersections.concat(childIntersections);
            }
        });

        return Math.min(...intersections);
    }
}
