import cfg from "../config";

/**
    double t = 0.0;
    double dt = 0.01;

    double currentTime = hires_time_in_seconds();
    double accumulator = 0.0;

    State previous;
    State current;

    while ( !quit )
    {
        double newTime = time();
        double frameTime = newTime - currentTime;
        if ( frameTime > 0.25 )
            frameTime = 0.25;
        currentTime = newTime;

        accumulator += frameTime;

        while ( accumulator >= dt )
        {
            previousState = currentState;
            integrate( currentState, t, dt );
            t += dt;
            accumulator -= dt;
        }

        const double alpha = accumulator / dt;

        State state = currentState * alpha + 
            previousState * ( 1.0 - alpha );

        render( state );
    }
 */

/** @type {number} interval in ms */
const interval = 1000 / cfg.targetFps;

/**
 * Small delta time manager
 * TODO something isn't right here, do more research
 */
export default class Delta {
    constructor({ update, render }) {
        this.render = render;
        this.update = update;

        this.then = Date.now();
        this.acc = 0;
    }

    /**
     * Checks if enough time has passed to start next drawing frame
     */
    handleLoop() {
        this.now = Date.now();
        let frameTime = this.now - this.then;
        this.then = this.now

        this.acc += frameTime;
        
        if (0 <= this.acc && this.acc < interval) {
            this.update(this.acc / interval);
            this.render();
        } else {
            // play catch up
            while(this.acc >= interval) {
                this.previousState = this.currentState;
                this.update(this.acc / interval);
                this.then += interval;
                this.acc -= interval;
            }
            this.render();
        }
    }
}
