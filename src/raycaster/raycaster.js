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
                this.visibleWalls.push(wallDist * Math.cos(offset));
            }

            offset += stepAngle;
        }
    }

    render() {
        const wallHeight = 10;
        const projectionPlayDist = 100;
        this.visibleWalls.forEach((distance, i) => {
            const height = wallHeight / distance * projectionPlayDist;

            r.rect(
                (319 - i)/320 * cfg.width, 
                cfg.height/2 - height/2, 
                cfg.width/320, 
                height, 
                "green"
            );

            // const int = this.player.add(this.player.project(...wall));
            // r.line(this.player.x * cfg.scale, this.player.y * cfg.scale, int.x * cfg.scale, int.y * cfg.scale,  { lineWidth : "3px", strokeStyle : "blue" });
        });
    }
}
