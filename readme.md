# JSMicro - Is Empty

### **`isEmpty(object)`**

Check does the given Javascript Object (array, object, string, etc) is empty.

### **`isNotEmpty(object)`**

Check does the given Javascript Empty (array, object, string, etc) is not empty.

## Browser Usage

```bash
bower install --save jsmicro-is-empty
```

```html
<script type="text/javascript" src="bower_components/jsmicro-is-empty/index.js">
<script type="text/javascript">
    var obj = {};
    var nbr = [1];

    // Available in the window object.
    isEmpty(obj);      // true
    isEmpty(nbr);      // false
    isNotEmpty(nbr);   // true
</script>
```

## NodeJS Usage

```bash
npm install --save @jsmicro/is-empty
```

```js
const obj = require('@jsmicro/is-empty');

// Available in the global object.
isEmpty([]); // true
isEmpty({a: 1}); // false
isNotEmpty('a'); // true

// Also available in the export object.
obj.isEmpty([]); // true
obj.isEmpty('a'); // false
obj.isNotEmpty([1]); // true
```

## Changelogs

#### **`v1.0.1 - May 21, 2016`**

* Added .npmignore

#### **`v1.0.0 - May 21, 2016`**

* Initial release.

### [The MIT License (MIT)](https://mahdaen.mit-license.org/)
