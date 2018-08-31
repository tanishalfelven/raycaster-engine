import r from './renderer';
import raycaster from "./raycaster/raycaster";
import Delta from './delta';
import inputHandler from "./inputHandler";
import Section from "./raycaster/section";
import Player from "./raycaster/player";
/* global window */

/**
 * Main/Game is the owner of the game loop and controls sub-modules
 */
export default {    
    init(canvas) {
        r.init(canvas);
        inputHandler.init();
        this.map = Section.getSection();
        this.player = new Player({ x : 2, y : 2 });
        this.raycaster = new raycaster(this.map, this.player);

        this.delta = new Delta();
        this.loop();
    },

    loop() {
        window.requestAnimationFrame(this.loop.bind(this));
        
        if (this.delta.ready()) {
            this.update();
            this.render();
        }
    },

    update() {
        this.player.update();
        this.raycaster.update();
    },

    render() {
        this.map.render();
        this.player.render();
        this.raycaster.render();

        r.render();
    }
};
