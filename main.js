'use strict';

if (!global.hasOwnProperty('isEmpty')) global.isEmpty = isEmpty;
if (!global.hasOwnProperty('isNotEmpty')) global.isNotEmpty = isNotEmpty;

/**
 * Check does the given javascript object is a Empty.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isEmpty(object) {
    var type = toString.call(object).replace(/(\[object\s+)|(\])/g, '').toLowerCase();

    switch (type) {
        case 'object':
        case 'array':
        case 'arguments':
        case 'string':
            if (type === 'object') object = Object.keys(object);

            return object.length < 1;
        default:
            return true;
    }
}

/**
 * Check does the given javascript object is not a Empty.
 *
 * @param {*} object - Javascript object (array, object, string, etc) to check the type from.
 * @returns {boolean}
 */
function isNotEmpty(object) {
    return !isEmpty(object);
}

module.exports = {isEmpty, isNotEmpty};
