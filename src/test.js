import Point from "./lib/math/point";
import Section from "./lib/math/section";
import Line from "./lib/math/line";
import Ray from "./lib/math/ray";
import util from "./lib/util";

const csl = {
    bgWhite : "\x1b[47m",
    bgBlack : "\x1b[40m",

    fgBlack : "\x1b[30m",
    fgWhite : "\x1b[37m",
    fgGreen : "\x1b[32m",
    fgRed   : "\x1b[31m"
};

// TODO add test dependency
const test = {
    add(tests) {
        this.tests = tests;
        this.output();
    },

    output() {
        let passed = 0, failed = 0, grp = "", offset = 0;
        console.log(`\n${csl.bgWhite + csl.fgBlack}--Running tests--${csl.bgBlack + csl.fgWhite}`);
        this.tests.forEach((test, i) => {
            if (typeof test !== "string" && test.length === 2) {
                grp = test[1];
                test = test[0];
                offset = i;
            }
            console.log(`  [${test ? csl.fgGreen + "PASS" : csl.fgRed + "FAIL"}${csl.fgWhite}] : ${grp}-${i - offset + 1}`);
            if (test) passed++;
            else failed++;
        });

        console.log(`finished: ${csl.fgRed + failed} failed${csl.fgWhite}, ${csl.fgGreen + passed} passed${csl.fgWhite}, ${this.tests.length} ran`);
    }
}

function intersect(rayx, rayy, rayrot, lax, lay, lbx, lby) {
    return new Ray(rayx, rayy, rayrot).intersectsLine(new Line(new Point(lax, lay), new Point(lbx, lby)));
}

test.add([
    [intersect(0, 0, 0, 1, 5, 1, -5), "a"],
    intersect(0, 0, util.toRadians(180), 1, 5, 1, -5),
    intersect(0, 0, util.toRadians(90), 1, 5, 1, -5),
    intersect(0, 0, util.toRadians(270), 1, 5, 1, -5),
    
    [intersect(0, 0, 0, 1,-5, 1, 5), "b"],
    [intersect(0, 0, util.toRadians(90), -5, 5, 5, 5), "c"],
]);
