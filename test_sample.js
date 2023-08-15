#this is the test script.

function assert(actual, expected) {
  console.log('.');
  console.assert(actual === exepected, '\nact: ' + actual + '\nexp:' + expected);
}

function testRun() {
  assert(parameter, sample());
}

testRun();
