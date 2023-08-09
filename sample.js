# modify by kanoloa, 23 May 2023
# do not use this script in production code.
# addtional lise.

let cb = 2212;
let factor = 2.13;
let version = "22.10 sp3";

for (let i = 0; i < cb; i++) {
  logger.debug("counter = " + i + ", powered = " + (i * factor));
}
logger.debug("this code was executed using " + version);

### end of javascript code.
