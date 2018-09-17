import cfg from "../config";

/** @type {number} interval in ms */
const interval = 1000 / cfg.targetFps;

/**
 * Small delta time manager
 * TODO something isn't right here, do more research
 */
export default class Delta {
    constructor() {
        this.then = Date.now(); 
    }

    /**
     * Checks if enough time has passed to start next drawing frame
     */
    ready() {
        this.now = Date.now();
        this.delta = this.now - this.then;

        const isReady = this.delta > interval;

        if (isReady) {
            /** modulo clears delta overflow, more info {@link http://codetheory.in/controlling-the-frame-rate-with-requestanimationframe/ } */
            this.then = this.now - (this.delta % this.now);
        }

        return isReady;
    }
};
