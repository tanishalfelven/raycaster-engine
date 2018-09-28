/* global window, document */
import Delta from './delta';

/**
 * Default canvas/page setup
 */
function _setupWebpage() {
    // create a canvas for rendering
    const canvas = document.createElement('canvas');

    // append to document
    document.body.appendChild(canvas);
    return canvas;
}

/**
 * Manages game loop and peripherals so main game code can be more focused
 */
export default class GameManager {
    constructor({
        init = () => null, 
        update = () => null, 
        render = () => null,
        setupWebpage = _setupWebpage
    }) {
        this.init   = init.bind(this);
        this.update = update.bind(this);
        this.render = render.bind(this);
        this.setupWebpage = setupWebpage.bind(this);

        const self = this;

        // init once window loads
        window.onload = () => self.initGame();
    }

    initGame() {
        this.canvas = this.setupWebpage();
        this.init();
        this.delta = new Delta({
            render : (...args) => this.render(...args), 
            update : (...args) => this.update(...args)
        });
        this.loop();
    }

    loop() {
        window.requestAnimationFrame(this.loop.bind(this));
        
        this.delta.handleLoop();
    }
}
