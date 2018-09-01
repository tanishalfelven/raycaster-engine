// import Section from '../src/lib/math/section'
import Point from '../src/lib/math/point';
import Ray from '../src/lib/math/ray';
import Line from '../src/lib/math/line';
import util from '../src/lib/util';
import assert from 'assert';
const r = util.toRadians;
/* global describe, it */

function intersect(ray, ax, ay, bx, by) {
    return ray.intersectsLine(new Line(new Point(ax, ay), new Point(bx, by)));
}

describe('Ray', () => {
    describe('#intersectsLine', () => {
        it('should return true when ray intersects line', () => {
            assert.equal(intersect(new Ray(0, 0,     0 ), 1,  5, 1, -5), true);
            assert.equal(intersect(new Ray(0, 0,     0 ), 1, -5, 1,  5), true);
            assert.equal(intersect(new Ray(0, 0, r(180)), 1,  5, 1, -5), false);
            assert.equal(intersect(new Ray(0, 0, r( 90)), 1,  5, 1, -5), false);
            assert.equal(intersect(new Ray(0, 0, r(270)), 1,  5, 1, -5), false);
        })
    });
});
