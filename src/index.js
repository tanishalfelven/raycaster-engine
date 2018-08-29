import Game from './game'
/* global document */

// create a canvas for rendering
const canvas = document.createElement('canvas');
// append to document
document.body.appendChild(canvas);

// let the magic happen
Game.init(canvas);
