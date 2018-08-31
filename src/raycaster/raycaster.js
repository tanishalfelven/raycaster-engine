import r from "../lib/renderer";
import cfg from "../config";
import Player from "./player";

export default class RayCaster {
    /**
     * @param {Section} map
     * @param {Player} player 
     */
    constructor(map, player) {
        this.map = map;
        this.player = player;
        this.visibleWalls = [];
    }

    update() {
        this.visibleWalls = this.player.findIntersectingLines(this.map);
    }

    render() {
        this.visibleWalls.forEach((wall) => {
            r.line(wall.a.x * cfg.scale, wall.a.y * cfg.scale, wall.b.x * cfg.scale, wall.b.y * cfg.scale, { lineWidth : "3px", strokeStyle : "blue" });
        });
    }
}
