/* global window */

export default {
    init() {
        const keytracker = {};

        window.addEventListener("keydown", e => {
            keytracker[e.key] = true;
        });

        window.addEventListener("keyup", e => {
            keytracker[e.key] = false;
        });

        this.keytracker = keytracker;
    },

    isPressed(key) {
        return this.keytracker[key];
    }
};
