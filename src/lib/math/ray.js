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
            // negative to transform to screen
            Math.sin(-this.angle + offset) * radius
        );
    }
    

    /**
     * Check if ray intersects given line
     * @param {Line} line 
     * @return {boolean}
     */
    intersectsLine(line) {
        const directionalPoint = this.add(this.project(1)); // reference point to do line math
        const lm = line.slope();
        const tm = Line.slope(directionalPoint, this);
        r.monitor("ray slope", tm);
        let dirString = "";
        if (lm === 0) {
            if (line.a.y !== line.b.y) {
                dirString = "h";
            }
            else if (line.a.x !== line.b.x) {
                dirString = "v";
            }
        }
        r.monitor(`(${line.a.x}, ${line.a.y})(${line.b.x}, ${line.b.y})`, `${lm} ${dirString}`);
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
