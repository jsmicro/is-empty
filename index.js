(function() {
    'use strict';

    if (!window.hasOwnProperty('isEmpty')) window.isEmpty = isEmpty;
    if (!window.hasOwnProperty('isNotEmpty')) window.isNotEmpty = isNotEmpty;

    function isEmpty(object) {
        var type = toString.call(object).replace(/(\[object\s+)|(\])/g, '').toLowerCase();

        switch (type) {
            case 'object':
            case 'array':
            case 'arguments':
            case 'string':
            case 'nodelist':
                if (type === 'object') object = Object.keys(object);

                return object.length < 1;
            default:
                return true;
        }
    }

    function isNotEmpty(object) {
        return !isEmpty(object);
    }
})();
