const $ = require('../main');

const test = require('jsmicro-test');

// Call function to give arguments
StartTest('first', 2, ['thrid']);

function StartTest() {
    // Run the isEmpty() Test.
    test($.isEmpty)
        .accept({})
        .accept([])
        .accept('')
        .reject(test.args(arguments))
        .reject({a: 1})
        .reject([1])
        .reject(' ')
        .queue(true);

    // Run the isNotEmpty() Test.
    test(isNotEmpty)
        .accept({a: 1})
        .accept([1])
        .accept(' ')
        .accept(test.args(arguments))
        .reject([])
        .reject({})
        .queue(true);
}
