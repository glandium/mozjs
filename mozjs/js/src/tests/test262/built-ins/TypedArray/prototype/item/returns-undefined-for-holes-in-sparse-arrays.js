// |reftest| skip -- TypedArray.prototype.item is not supported
// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.item
description: >
  Returns the item value at the specified index, holes are filled in sparse arrays.
info: |
  %TypedArray%.prototype.item( index )

  Let O be the this value.
  Perform ? ValidateTypedArray(O).
  Let len be O.[[ArrayLength]].
  Let relativeIndex be ? ToInteger(index).
  If relativeIndex ≥ 0, then
    Let k be relativeIndex.
  Else,
    Let k be len + relativeIndex.
  If k < 0 or k ≥ len, then return undefined.
  Return ? Get(O, ! ToString(k)).

includes: [testTypedArray.js]
features: [TypedArray, TypedArray.prototype.item]
---*/
assert.sameValue(
  typeof TypedArray.prototype.item,
  'function',
  'The value of `typeof TypedArray.prototype.item` is "function"'
);

testWithTypedArrayConstructors(TA => {
  let a = new TA([0, 1, , 3, 4, , 6]);
  let filler = 0;
  if (TA.name.startsWith('Float')) {
    filler = NaN;
  }
  assert.sameValue(a.item(0), 0, 'a.item(0) must return 0');
  assert.sameValue(a.item(1), 1, 'a.item(1) must return 1');
  assert.sameValue(a.item(2), filler, 'a.item(2) must return the value of filler');
  assert.sameValue(a.item(3), 3, 'a.item(3) must return 3');
  assert.sameValue(a.item(4), 4, 'a.item(4) must return 4');
  assert.sameValue(a.item(5), filler, 'a.item(5) must return the value of filler');
  assert.sameValue(a.item(6), 6, 'a.item(6) must return 6');
  assert.sameValue(a.item(-0), 0, 'a.item(-0) must return 0');
  assert.sameValue(a.item(-1), 6, 'a.item(-1) must return 6');
  assert.sameValue(a.item(-2), filler, 'a.item(-2) must return the value of filler');
  assert.sameValue(a.item(-3), 4, 'a.item(-3) must return 4');
  assert.sameValue(a.item(-4), 3, 'a.item(-4) must return 3');
  assert.sameValue(a.item(-5), filler, 'a.item(-5) must return the value of filler');
  assert.sameValue(a.item(-6), 1, 'a.item(-6) must return 1');
});

reportCompare(0, 0);
