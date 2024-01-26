# modify by kanoloa, 23 May 2023
# do not use this script in production code.
# addtional lise.

let cb = 2212;
let factor = 3.1415623589;
let version = "2.1.0.0";

function sample() {
  for (let i = 0; i < cb; i++) {
    logger.debug("counter = " + i + ", powered = " + (i * factor));
  }
  logger.debug("this code was executed using " + version);
}

### end of javascript code.
