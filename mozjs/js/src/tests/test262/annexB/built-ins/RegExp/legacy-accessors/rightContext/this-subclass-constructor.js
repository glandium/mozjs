// |reftest| skip -- legacy-regexp is not supported
// Copyright (C) 2020 ExE Boss. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: RegExp.rightContext throws a TypeError for subclass receiver
info: |
  get RegExp.rightContext

  1. Return ? GetLegacyRegExpStaticProperty(%RegExp%, this value, [[RegExpRightContext]]).

  GetLegacyRegExpStaticProperty( C, thisValue, internalSlotName ).

  1. Assert C is an object that has an internal slot named internalSlotName.
  2. If SameValue(C, thisValue) is false, throw a TypeError exception.
  3. ...
features: [legacy-regexp,class]
---*/

class MyRegExp extends RegExp {}

assert.throws(
  TypeError,
  function () {
    MyRegExp.rightContext;
  },
  "RegExp.rightContext getter throws for subclass receiver"
);

assert.throws(
  TypeError,
  function () {
    MyRegExp["$'"];
  },
  "RegExp.$' getter throws for subclass receiver"
);

reportCompare(0, 0);
