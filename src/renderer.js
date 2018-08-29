import cfg from './config.js';
/* global document */

/**
 * Render layer. Handles all drawing magic.
 * TODO dynamically resize canvases on window resize
 */
export default {
    /**
     * Init all needed renderer variables
     * @param {HTMLElement} documentCanvas document canvas
     */
    init(documentCanvas) {  
        this.documentCtx = this.initCanvas(documentCanvas);
        // @type {CanvasRenderingContext2D} shorthand for BufferContext, this is where all rendering calls are rendered to until `this.render` is called
        this.bc = this.initCanvas(document.createElement('canvas'));
    },

    /**
     * Initiates canvas to standard config values, then request the context
     * @param {HTMLElement} canvas canvas to init
     * @return {CanvasRenderingContext2D}
     */
    initCanvas(canvas) {
        if (document.body.contains(canvas)) {
            // if canvas exists on the page, make sure it is aligned to the edge of the page
            canvas.style.position = 'absolute';
            canvas.style.top      = '0'
            canvas.style.left     = '0';
        }

        // canvas settings
        canvas.width  = cfg.width;
        canvas.height = cfg.height;

        // context settings
        const ctx = canvas.getContext('2d');
        ctx.width = cfg.width;
        ctx.height = cfg.height;

        return ctx;
    },

    /**
     * Render defined rectangle
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @param {string | object} [style] Optional style. Will only be set if not equal to current style.
     * @param {boolean} [fill]
     */
    rect(x, y, width, height, style, fill = true) {
        if (style) {
            if (fill) {
                this.bc.fillStyle = style;
            } else {
                if (style.lineWidth)   this.bc.lineWidth   = style.lineWidth;
                if (style.strokeStyle) this.bc.strokeStyle = style.strokeStyle;
            }
        }

        if (fill) {
            this.bc.fillRect(x, y, width, height);
        } else {
            this.bc.strokeRect(x, y, width, height);    
        }
    },

    /**
     * Clears buffer context to `cfg.clearColor`
     */
    clear() {
        this.rect(0, 0, cfg.width, cfg.height, 'black');
    },

    /**
     * Renders buffer context to document canvas, then clears buffer context for new frame.
     */
    render() {
        this.documentCtx.drawImage(this.bc.canvas, 0, 0);
        this.clear();
    }
};
