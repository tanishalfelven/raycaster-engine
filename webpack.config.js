"use strict";
const path = require('path');

module.exports = {
    mode   : 'development',
    entry  : {
        raycaster : './src/raycaster/game.js',
        editor    : './src/editor/editor.js'
    },
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'gen-[name].js'
    }
}
