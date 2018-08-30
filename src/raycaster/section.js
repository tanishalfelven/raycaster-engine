import r from "../renderer";
import cfg from "../config";

/**
 * Data structure to represent map data.
 * Each section serves metadata, and a series of boundaries
 */
export default class Section {
    /**
     * @typedef {{x : number, y : number}} Point
     * @param {Point[]} boundaries 
     * @param {object} metadata
     * @param {Section | Section[]} [children]
     */
    constructor(boundaries, metadata, children = null) {
        // combine metadata to self
        Object.assign(this, metadata);
        this.boundaries = boundaries;
        this.children = [];

        if (children) {
            this.addChild(children);
        }
    }

    /**
     * Add children to section
     * @param {Section | Section[]} child 
     * @return {Section} this, for function chaining
     */
    addChild(child) {
        this.children = this.children.concat(child);
        return this;
    }

    render() {
        const transform = this.boundaries.map(p => { 
            // transform by scale
            return { x : p.x * cfg.scale, y : p.y * cfg.scale };
        });

        r.polygon(transform, "white");
        r.polygon(transform, { lineWidth : "5px", strokeStyle : "red" }, false)

        this.children.forEach(section => section.render());
    }

    /**
     * Helper method to define section boxes
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     */
    static box(x, y, width, height) {
        return [
            { x : x, y : y },
            { x : x, y : y + height },
            { x : x + width, y : y + height },
            { x : x + width, y : y },
        ]
    }

    /**
     * test function, get test section data
     * TODO create a map creator
     */
    static getSection() {
        return new Section(
            Section.box(1, 1, 11, 11),
            {
                y      : 0,
                height : 1
            },
            new Section(
                Section.box(5, 5, 3, 3),
                {
                    y      : 0,
                    height : 1
                }
            )
        );
    }
}
