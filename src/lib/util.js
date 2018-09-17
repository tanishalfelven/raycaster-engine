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

    _2pi       : Math.PI * 2,
    _piOver2   : Math.PI / 2,
    _3piOver2  : Math.PI*3 / 2,
    _piOver180 : Math.PI / 180,
    /**
     * Wrap radians that are >2pi or <0 to equivalent values
     * @param {number} n radians
     * @return {number} wrapped value
     */
    wrapRadian(n) {
        if (n > this._2pi) {
            return (n % this._2pi);
        } else if (n < 0) {
            return this._2pi + n;
        }

        return n;
    },

    /**
     * @param {number} n value in degrees
     * @return {number} value in radians
     */
    toRadians(n) {
        return n * this._piOver180;
    },

    /**
     * Round number to decimal places, `roundNumToPlace(5.1234, 2) => 5.12`
     * Only used for interface facing numbers
     * @param {number} num float to round
     * @param {number} decimalPlaces places to round > after decimal
     */
    roundNumToPlace(num, decimalPlaces) {
        const throttle = Math.pow(10, decimalPlaces);
        return Math.round(num * throttle) / throttle;
    }
}