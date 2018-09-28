import r from '../lib/renderer';
import raycaster from "./raycaster";
import InputHandler from "../lib/inputHandler";
import Section from "../lib/math/section";
import Player from "./player";
import GameManager from "../lib/gameManager";
import cfg from "../config";

new GameManager({
    init() {
        r.init(this.canvas, cfg);
        InputHandler.init(this.canvas);
        
        this.map = Section.getSection();
        this.player = new Player(2, 2);
        this.raycaster = new raycaster(this.map, this.player);
    },

    update(delta) {
        this.player.update(delta);
        this.raycaster.update();
    },

    render() {
        this.raycaster.render();
        this.map.render();
        this.player.render();

        r.render();
    }
});
