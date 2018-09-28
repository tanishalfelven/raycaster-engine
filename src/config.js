import util from './lib/util';

export default {
    width      : util.getWidth(),
    height     : util.getHeight(),
    clearColor : 'white',
    targetFps  : 60,
    scale      : 20,
    rays       : 320, // increase for higher resolution
    fov        : util.toRadians(60),

    dFontHeight    : 14,
    dMaxAlignSpace : 20
};
