// Split from simd_f32x4_cmp.js because we OOM on 32-bit systems, bug 1645638
var ins = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`
( module ( func ( export "eq" ) ( param $x v128 ) ( param $y v128 ) ( result v128 ) ( f32x4.eq ( local.get $x ) ( local.get $y ) ) ) ( func ( export "ne" ) ( param $x v128 ) ( param $y v128 ) ( result v128 ) ( f32x4.ne ( local.get $x ) ( local.get $y ) ) ) ( func ( export "lt" ) ( param $x v128 ) ( param $y v128 ) ( result v128 ) ( f32x4.lt ( local.get $x ) ( local.get $y ) ) ) ( func ( export "le" ) ( param $x v128 ) ( param $y v128 ) ( result v128 ) ( f32x4.le ( local.get $x ) ( local.get $y ) ) ) ( func ( export "gt" ) ( param $x v128 ) ( param $y v128 ) ( result v128 ) ( f32x4.gt ( local.get $x ) ( local.get $y ) ) ) ( func ( export "ge" ) ( param $x v128 ) ( param $y v128 ) ( result v128 ) ( f32x4.ge ( local.get $x ) ( local.get $y ) ) ) )
`)));
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 ) ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 ) ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 ) ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 ) ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 ) ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 ) ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 ) ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 ) ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 ) ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 ) ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 ) ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 ) ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 ) ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 ) ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 ) ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 ) ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 ) ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 ) ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 ) ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 ) ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 ) ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 ) ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 ) ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 ) ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 ) ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -inf -inf -inf -inf ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -nan -nan -nan -nan ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 nan nan nan nan ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 inf inf inf inf ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1p-149 0x1p-149 0x1p-149 0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -inf -inf -inf -inf )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1p+0 0x1p+0 0x1p+0 0x1p+0 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 -0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x0p+0 -0x0p+0 -0x0p+0 -0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1p-1 -0x1p-1 -0x1p-1 -0x1p-1 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 0x1.fffffep+127 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -nan -nan -nan -nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1p-149 -0x1p-149 -0x1p-149 -0x1p-149 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1p-126 -0x1p-126 -0x1p-126 -0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1p-1 0x1p-1 0x1p-1 0x1p-1 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 -0x1.921fb6p+2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 nan nan nan nan )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x0p+0 0x0p+0 0x0p+0 0x0p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 inf inf inf inf )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 -0x1p+0 -0x1p+0 -0x1p+0 -0x1p+0 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 ) ( v128.const f32x4 0x1p-126 0x1p-126 0x1p-126 0x1p-126 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 ) ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 ) ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 ) ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 ) ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 ) ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 ) ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 ) ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 ) ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 ) ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 ) ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 ) ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 ) ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 ) ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 ) ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 ) ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 ) ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 ) ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 ) ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 ) ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 ) ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 ) ( v128.const f32x4 0123456789e019 0123456789e019 0123456789e019 0123456789e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 ) ( v128.const f32x4 0123456789e-019 0123456789e-019 0123456789e-019 0123456789e-019 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 ) ( v128.const f32x4 0123456789.e019 0123456789.e019 0123456789.e019 0123456789.e019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 ) ( v128.const f32x4 0123456789.e+019 0123456789.e+019 0123456789.e+019 0123456789.e+019 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 ) ( v128.const f32x4 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 0123456789.0123456789 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "eq" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i8x16 -1 -1 -1 -1 0 0 0 0 1 1 1 1 2 2 2 2 )))
(local.set $expected ( v128.const i32x4 0 -1 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "eq" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i16x8 -1 -1 0 0 1 1 2 2 )))
(local.set $expected ( v128.const i32x4 0 -1 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "eq" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i32x4 3212836864 0 1 2 )))
(local.set $expected ( v128.const i32x4 -1 -1 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ne" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i8x16 -1 -1 -1 -1 0 0 0 0 1 1 1 1 2 2 2 2 )))
(local.set $expected ( v128.const i32x4 -1 0 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ne" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i16x8 -1 -1 0 0 1 1 2 2 )))
(local.set $expected ( v128.const i32x4 -1 0 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ne" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i32x4 3212836864 0 1 2 )))
(local.set $expected ( v128.const i32x4 0 0 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "lt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i8x16 -1 -1 -1 -1 0 0 0 0 1 1 1 1 2 2 2 2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "lt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i16x8 -1 -1 0 0 1 1 2 2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "lt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i32x4 3212836864 0 1 2 )))
(local.set $expected ( v128.const i32x4 0 0 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "le" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i8x16 -1 -1 -1 -1 0 0 0 0 1 1 1 1 2 2 2 2 )))
(local.set $expected ( v128.const i32x4 0 -1 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "le" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i16x8 -1 -1 0 0 1 1 2 2 )))
(local.set $expected ( v128.const i32x4 0 -1 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "le" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i32x4 3212836864 0 1 2 )))
(local.set $expected ( v128.const i32x4 -1 -1 0 0 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i8x16 -1 -1 -1 -1 0 0 0 0 1 1 1 1 2 2 2 2 )))
(local.set $expected ( v128.const i32x4 0 0 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i16x8 -1 -1 0 0 1 1 2 2 )))
(local.set $expected ( v128.const i32x4 0 0 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i32x4 3212836864 0 1 2 )))
(local.set $expected ( v128.const i32x4 0 0 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i8x16 -1 -1 -1 -1 0 0 0 0 1 1 1 1 2 2 2 2 )))
(local.set $expected ( v128.const i32x4 0 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i16x8 -1 -1 0 0 1 1 2 2 )))
(local.set $expected ( v128.const i32x4 0 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge" (func $f (param v128 v128) (result v128)))
  (func (export "run") (result i32) 
(local $result v128)
(local $expected v128)
(local $cmpresult v128)

(local.set $result (call $f ( v128.const f32x4 -1 0 1 2.0 ) ( v128.const i32x4 3212836864 0 1 2 )))
(local.set $expected ( v128.const i32x4 -1 -1 -1 -1 ))

(local.set $cmpresult (i32x4.eq (local.get $result) (local.get $expected)))
(i8x16.all_true (local.get $cmpresult))))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func ( result v128 ) ( f32x4.eq ( i64.const 0 ) ( f64.const 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func ( result v128 ) ( f32x4.ge ( i64.const 0 ) ( f64.const 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func ( result v128 ) ( f32x4.gt ( i64.const 0 ) ( f64.const 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func ( result v128 ) ( f32x4.le ( i64.const 0 ) ( f64.const 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func ( result v128 ) ( f32x4.lt ( i64.const 0 ) ( f64.const 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func ( result v128 ) ( f32x4.ne ( i64.const 0 ) ( f64.const 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
try { wasmTextToBinary(`
(module 
(memory 1) (func (param $x v128) (param $y v128) (result v128) (f4x32.eq (local.get $x) (local.get $y))))
`) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof SyntaxError, true)
var thrown = false;
var saved;
try { wasmTextToBinary(`
(module 
(memory 1) (func (param $x v128) (param $y v128) (result v128) (f4x32.ge (local.get $x) (local.get $y))))
`) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof SyntaxError, true)
var thrown = false;
var saved;
try { wasmTextToBinary(`
(module 
(memory 1) (func (param $x v128) (param $y v128) (result v128) (f4x32.gt (local.get $x) (local.get $y))))
`) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof SyntaxError, true)
var thrown = false;
var saved;
try { wasmTextToBinary(`
(module 
(memory 1) (func (param $x v128) (param $y v128) (result v128) (f4x32.le (local.get $x) (local.get $y))))
`) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof SyntaxError, true)
var thrown = false;
var saved;
try { wasmTextToBinary(`
(module 
(memory 1) (func (param $x v128) (param $y v128) (result v128) (f4x32.lt (local.get $x) (local.get $y))))
`) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof SyntaxError, true)
var thrown = false;
var saved;
try { wasmTextToBinary(`
(module 
(memory 1) (func (param $x v128) (param $y v128) (result v128) (f4x32.ne (local.get $x) (local.get $y))))
`) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof SyntaxError, true)
var ins = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`
( module ( memory 1 ) ( func ( export "eq-in-block" ) ( block ( drop ( block ( result v128 ) ( f32x4.eq ( block ( result v128 ) ( v128.load ( i32.const 0 ) ) ) ( block ( result v128 ) ( v128.load ( i32.const 1 ) ) ) ) ) ) ) ) ( func ( export "ne-in-block" ) ( block ( drop ( block ( result v128 ) ( f32x4.ne ( block ( result v128 ) ( v128.load ( i32.const 0 ) ) ) ( block ( result v128 ) ( v128.load ( i32.const 1 ) ) ) ) ) ) ) ) ( func ( export "lt-in-block" ) ( block ( drop ( block ( result v128 ) ( f32x4.lt ( block ( result v128 ) ( v128.load ( i32.const 0 ) ) ) ( block ( result v128 ) ( v128.load ( i32.const 1 ) ) ) ) ) ) ) ) ( func ( export "le-in-block" ) ( block ( drop ( block ( result v128 ) ( f32x4.le ( block ( result v128 ) ( v128.load ( i32.const 0 ) ) ) ( block ( result v128 ) ( v128.load ( i32.const 1 ) ) ) ) ) ) ) ) ( func ( export "gt-in-block" ) ( block ( drop ( block ( result v128 ) ( f32x4.gt ( block ( result v128 ) ( v128.load ( i32.const 0 ) ) ) ( block ( result v128 ) ( v128.load ( i32.const 1 ) ) ) ) ) ) ) ) ( func ( export "ge-in-block" ) ( block ( drop ( block ( result v128 ) ( f32x4.ge ( block ( result v128 ) ( v128.load ( i32.const 0 ) ) ) ( block ( result v128 ) ( v128.load ( i32.const 1 ) ) ) ) ) ) ) ) ( func ( export "nested-eq" ) ( drop ( f32x4.eq ( f32x4.eq ( f32x4.eq ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.eq ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ( f32x4.eq ( f32x4.eq ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.eq ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ) ) ) ( func ( export "nested-ne" ) ( drop ( f32x4.ne ( f32x4.ne ( f32x4.ne ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.ne ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ( f32x4.ne ( f32x4.ne ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.ne ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ) ) ) ( func ( export "nested-lt" ) ( drop ( f32x4.lt ( f32x4.lt ( f32x4.lt ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.lt ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ( f32x4.lt ( f32x4.lt ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.lt ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ) ) ) ( func ( export "nested-le" ) ( drop ( f32x4.le ( f32x4.le ( f32x4.le ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.le ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ( f32x4.le ( f32x4.le ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.le ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ) ) ) ( func ( export "nested-gt" ) ( drop ( f32x4.gt ( f32x4.gt ( f32x4.gt ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.gt ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ( f32x4.gt ( f32x4.gt ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.gt ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ) ) ) ( func ( export "nested-ge" ) ( drop ( f32x4.ge ( f32x4.ge ( f32x4.ge ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.ge ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ( f32x4.ge ( f32x4.ge ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.ge ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ) ) ) ( func ( export "as-param" ) ( drop ( f32x4.ge ( f32x4.eq ( f32x4.lt ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.le ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ( f32x4.ne ( f32x4.gt ( v128.load ( i32.const 0 ) ) ( v128.load ( i32.const 1 ) ) ) ( f32x4.lt ( v128.load ( i32.const 2 ) ) ( v128.load ( i32.const 3 ) ) ) ) ) ) ) )
`)));
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "eq-in-block" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ne-in-block" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "lt-in-block" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "le-in-block" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "gt-in-block" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "ge-in-block" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "nested-eq" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "nested-ne" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "nested-lt" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "nested-le" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "nested-gt" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "nested-ge" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var run = new WebAssembly.Instance(new WebAssembly.Module(wasmTextToBinary(`

(module
  (import "" "as-param" (func $f (param )))
  (func (export "run") (result i32)
    (call $f )
    (i32.const 1)))

`)), {'':ins.exports});
assertEq(run.exports.run(), 1)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.eq-1st-arg-empty ( result v128 ) ( f32x4.eq ( v128.const f32x4 0 0 0 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.eq-arg-empty ( result v128 ) ( f32x4.eq ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.ne-1st-arg-empty ( result v128 ) ( f32x4.ne ( v128.const f32x4 0 0 0 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.ne-arg-empty ( result v128 ) ( f32x4.ne ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.lt-1st-arg-empty ( result v128 ) ( f32x4.lt ( v128.const f32x4 0 0 0 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.lt-arg-empty ( result v128 ) ( f32x4.lt ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.le-1st-arg-empty ( result v128 ) ( f32x4.le ( v128.const f32x4 0 0 0 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.le-arg-empty ( result v128 ) ( f32x4.le ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.gt-1st-arg-empty ( result v128 ) ( f32x4.gt ( v128.const f32x4 0 0 0 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.gt-arg-empty ( result v128 ) ( f32x4.gt ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.ge-1st-arg-empty ( result v128 ) ( f32x4.ge ( v128.const f32x4 0 0 0 0 ) ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)
var thrown = false;
var saved;
var bin = wasmTextToBinary(`
( module ( func $f32x4.ge-arg-empty ( result v128 ) ( f32x4.ge ) ) )
`);
assertEq(WebAssembly.validate(bin), false);
try { new WebAssembly.Module(bin) } catch (e) { thrown = true; saved = e; }
assertEq(thrown, true)
assertEq(saved instanceof WebAssembly.CompileError, true)

