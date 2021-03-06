// |reftest| skip-if(!this.hasOwnProperty('SharedArrayBuffer')) -- SharedArrayBuffer is not enabled unconditionally
// Copyright (C) 2016 the V8 project authors. All rights reserved.
// Copyright (C) 2017 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Throws a TypeError exception when invoked as a function
features: [SharedArrayBuffer]
---*/

var getter = Object.getOwnPropertyDescriptor(
  SharedArrayBuffer.prototype, "byteLength"
).get;

assert.throws(TypeError, function() {
  getter();
});

reportCompare(0, 0);
