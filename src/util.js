/* global document */

export default {
    /**
     * Browsers are stupid. This is a safe way to get the browser window height/width.
     * This is take from {@link https://stackoverflow.com/a/1038781 }
     */
    getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    },
    getHeight() {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
        );
    },
    
    /**
     * Get relative coordinates from center
     * @param {number} angle
     * @param {number} radius
     * @return {Point}
     */
    projectAngleFromPoint(angle, radius) {
        const x = Math.cos(angle) * radius;
        // TODO figure out why this fixes
        // make angle negative to fix projecting error
        const y = Math.sin(-angle) * radius;

        return { x, y };
    },

    /**
     * Wrap radians that are >2pi or <0 to equivalent values
     * @param {number} n radians
     * @return {number} wrapped value
     */
    wrapRadian(n) {
        const _2pi = Math.PI * 2;
        if (n > _2pi) {
            return (n % _2pi);
        } else if (n < 0) {
            return _2pi + n;
        }

        return n;
    },

    /**
     * @param {number} n value in degrees
     * @return {number} value in radians
     */
    toRadians(n) {
        return n * (Math.PI / 180);
    }
}