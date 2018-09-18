import Point from "./point";
import util from "../util";
import Line from "./line";
import r from "../renderer";

export default class Ray extends Point {
    constructor(x, y, angle) {
        super(x, y);
        this.angle = angle;
    }

    toString() {
        return `${super.toString()}(a = ${util.roundNumToPlace(this.angle, 2)}rad)`;
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
     * 
     * Diagonal line solve done through wolfram alpha
     * y-solve = {@link http://m.wolframalpha.com/input/?i=%28%28m1*x1+%2B+y+-+y1%29%2Fm1%29+%3D+%28%28m2*x2+%2B+y+-+y2%29%2Fm2%29 }
     * x-solve = {@link http://m.wolframalpha.com/input/?i=m1*x+-+m*x1+%2B+y1+%3D+m2*x+-+m2*x2+%2B+y2 }
     * @param {Line} line 
     * @param {number} offset radian offset to use
     * @return {number} distance to intersect
     */
    getIntersect(line, offset = 0) {
        const m = Line.slope(this.add(this.project(1, offset)), this);
        const m1 = line.slope();

        let x = line.a.x;
        let y = line.a.y;
        
        if (m1 === 0) {
            if (line.a.y !== line.b.y) {
                // line is horizontal
                y = m*x + m*-this.x + this.y;
            } else if (line.a.x !== line.b.x) {
                // line is vertical
                x = (-y - m*this.x + this.y)/-m;
            }
        } else {
            // line is diagonal
            y = (m*m1*this.x - m*m1*line.a.x + m*line.a.y - m1*this.y)/(m - m1);
            x = (m*this.x - m1*line.a.x - this.y + line.a.y)/(m - m1);
        }

        return line.xInside(x) && line.yInside(y) && this.isInDirection(x, y, offset) && this.distanceFrom(new Point(x, y));
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

        // TODO return metadata (height, y) of section that intersection was found at
        return Math.min(...intersections); // fix for fishbowl effect
    }
}
