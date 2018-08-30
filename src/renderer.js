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
     * Override current styles. If fill, replace fillStyle with style. If not fill, then attempt to overwrite lineWidth and strokeStyle
     * @typedef {string | { lineWidth : string, strokeStyle : string }} Style
     * @param {Style} style Override style
     */
    setStyle(style, fill) {
        if (style) {
            if (fill && typeof style === "string") {
                this.bc.fillStyle = style;
            } else if (typeof style === "object") {
                if (style.lineWidth)   this.bc.lineWidth   = style.lineWidth;
                if (style.strokeStyle) this.bc.strokeStyle = style.strokeStyle;
            }
        }
    },

    /**
     * Render defined rectangle
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     * @param {Style} [style] Optional style. Will only be set if not equal to current style.
     * @param {boolean} [fill]
     */
    rect(x, y, width, height, style, fill = true) {
        this.setStyle(style, fill);

        if (fill) {
            this.bc.fillRect(x, y, width, height);
        } else {
            this.bc.strokeRect(x, y, width, height);    
        }
    },

    /**
     * Draw a line from two points
     * @param {number} x1 x position for first point
     * @param {number} y1 y position for first point
     * @param {number} x2 
     * @param {number} y2 
     * @param {string} strokeStyle 
     */
    line(x1, y1, x2, y2, stroke = { lineWidth : "1px", strokeStyle : "black" }) {
        this.setStyle(stroke, false);

        this.bc.beginPath();
        this.bc.moveTo(x1, y1);
        this.bc.lineTo(x2, y2);
        this.bc.stroke();
    },

    /**
     * Given n points render a polygon by connecting given points;
     * @typedef {{x : number, y : number}} Point
     * @param {Point[]} points 
     * @param {Style} style 
     * @param {boolean} fill 
     */
    polygon(points, style, fill = true) {
        const self = this;
        this.setStyle(style, fill);

        this.bc.beginPath();
        points.forEach((p, i) => {
            if (i === 0) {
                self.bc.moveTo(p.x, p.y);
            } else {
                self.bc.lineTo(p.x, p.y);
            }
        });

        if (fill) {
            this.bc.fill();
        } else {
            this.bc.closePath();
            this.bc.stroke();
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
