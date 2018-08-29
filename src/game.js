import r from './renderer';
import raycaster from "./raycaster/index";
import Delta from './delta';
/* global window */

/**
 * Main/Game is the owner of the game loop and controls sub-modules
 */
export default {    
    init(canvas) {
        r.init(canvas);
        raycaster.init();

        this.delta = new Delta();
        this.loop();
    },

    loop() {
        window.requestAnimationFrame(this.loop.bind(this));
        
        if (this.delta.ready()) {
            raycaster.render();

            r.render();
        }
    },

    update() {
        // TODO update game objects 
        raycaster.update();
    }
};
