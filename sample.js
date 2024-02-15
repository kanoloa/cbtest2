# modify by kanoloa, 23 May 2023
# do not use this script in production code.
# addtional lise.

const cb = 2212;
const factor = 3.1415623589;
const version = "2.1.0.0";

function sample() {
  for (let i = 0; i < cb; i++) {
    logger.debug("counter = " + i + ", powered = " + (i * factor));
  }
  logger.debug("this code was executed using " + version);
}

### end of javascript code.
