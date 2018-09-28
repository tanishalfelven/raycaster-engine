import r from "../lib/renderer";
import cfg from "../config";
import Section from "../lib/math/section";
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
        // TODO fix different viewport sizes having walls with weird height
        const projectionPlayDist = 100;
        this.visibleWalls.forEach((distance, i) => {
            const height = wallHeight / distance * projectionPlayDist;
            
            r.rect(
                (cfg.rays - 1 - i)/cfg.rays * cfg.width, 
                cfg.height/2 - height/2, 
                cfg.width/cfg.rays, 
                height, 
                // "green"
                // dummy lighting, makes 3d projections look cooler
                `hsl(120, 100%, ${100 - ((distance + 8) / 20) * 100}%)`
            );
        });
    }
}
