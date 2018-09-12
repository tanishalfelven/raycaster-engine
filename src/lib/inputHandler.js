/* global window */

/**
 * Simple input handler interface. Updates asyncronous of game animation code.
 */
export default {
    init(canvas) {
        this.canvas = canvas;
        this.initMouseLock();
        this.initKeyTracker();
    },

    capture() {
        this.canvas.requestPointerLock();
    },

    initMouseLock() {
        // register events

        // capture mouse/fullscreen
        this.capture();
    },

    initKeyTracker() {
        const keytracker = {};

        window.addEventListener("keydown", e => {
            keytracker[e.key] = true;
        });

        window.addEventListener("keyup", e => {
            keytracker[e.key] = false;
        });

        this.keytracker = keytracker;
    },

    /**
     * Returns if key is pressed (e.g. "a" to see if a key is pressed). Is asyncronous to game loop
     * @param {string} key key value to check against
     */
    isPressed(key) {
        return this.keytracker[key];
    }
};
