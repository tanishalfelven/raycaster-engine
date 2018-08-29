import r from "../renderer";

/**
 * Map is an interface to the underlying data structure that represents maps (right now), a 2d array.
 * @typedef {{ x : number, y : number }} Point
 */
export default class Map {
    constructor(map, cfg) {
        this.map = map;
        this.startPos = cfg.startPos;
    }

    /**
     * 
     * @return {Point} get starting position
     */
    getStartPos() {
        return this.startPos;
    }

    render() {
        /** @type {number} pixel scale */
        const scale = 20;
        this.map.forEach((row, y) => {
            row.forEach((point, x) => {
                r.rect(x * scale, y * scale, scale, scale, point ? "gray" : "white");
            })
        })
    }

    static getMap() {
        return new Map([
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ], {
            // coordinates are defined from top left of the map to the bottom right
            startPos : {
                x : 1.5,
                y : 1.5
            }
        });
    }
}
