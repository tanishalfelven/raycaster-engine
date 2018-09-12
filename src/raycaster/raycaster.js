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
        const stepAngle = cfg.fov / cfg.rays;
        this.visibleWalls = [];
        let rayIndex = 0;
        let offset = -cfg.fov / 2;

        for (; rayIndex < cfg.rays; rayIndex++) {
            const wallDist = this.player.getNearestLineDistance(this.map, offset);
            
            if (wallDist) {
                this.visibleWalls.push([wallDist, offset]);
            }

            offset += stepAngle;
        }
    }

    render() {
        this.visibleWalls.forEach((wall) => {
            const int = this.player.add(this.player.project(...wall));
            r.line(this.player.x * cfg.scale, this.player.y * cfg.scale, int.x * cfg.scale, int.y * cfg.scale,  { lineWidth : "3px", strokeStyle : "blue" });
        });
    }
}
