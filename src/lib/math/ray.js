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
            Math.cos(this.angle + offset) * radius, 
            Math.sin(-this.angle + offset) * radius
        );
    }
    

    /**
     * Check if ray intersects given line
     * @param {Line} line 
     * @return {boolean}
     */
    intersectsLine(line) {
        const rayDirection = this.add(this.project(5));
        const p1 = this; 
        // const p2 = this.add(rayDirection); 
        const d = rayDirection;

        const e = line.b.subtract(line.a);
        let normal = new Point(e.y, -e.x);
        normal = this.normalize();

        // q = p1 + t * d
        // dot(normal, q - v1) = 0
        // dot(normal, p1 - v1) + t * dot(normal, d) = 0
        const numerator = normal.dot(line.a.subtract(p1));
        const denominator = normal.dot(d);

        if (denominator === 0) return false;

        const t = numerator.divide(denominator);

        if (t < 0 /* || input.maxFraction < t*/) return false;

        // TODO double check this
        const q = p1.add(new Point(d.dot(new Point(t))));

        // q = v1 + s * r
        // s = dot(q - v1, r) / dot(r, r)
        const r = line.b.minus(line.a);
        const rr = r.dot(r);
        if (rr === 0) return false;

        const s = q.minus(line.a).dot(r) / rr;
        if (s < 0 || 1 < s) return false;

        return true;
    
        // * leftover from previous
        // const ortho = new Point(-rayDirection.y, rayDirection.x);
        // const aToO = this.subtract(line.a);
        // const aToB = line.b.subtract(line.a);

        // const denom = aToB.dot(ortho);

        // const t1 = Math.abs(aToB.crossProduct(aToO)) / denom;
        // const t2 = aToO.dot(ortho) / denom;
        // return 0 <= t2 && t2 <= 1 && t1 >= 0;
    }

    /**
     * @param {Section} section 
     */
    findIntersectingLines(section) {
        const self = this;
        let lines = section.lines.filter((line) => self.intersectsLine(line));

        section.children.forEach((section) => {
            lines = lines.concat(self.findIntersectingLines(section));
        });

        return lines;
    }
}
