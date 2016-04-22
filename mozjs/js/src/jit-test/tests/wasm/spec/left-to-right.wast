(module
  (memory 1)

  (type $i32_T (func (param i32 i32) (result i32)))
  (type $i64_T (func (param i64 i64) (result i32)))
  (type $f32_T (func (param f32 f32) (result i32)))
  (type $f64_T (func (param f64 f64) (result i32)))
  (table $i32_t0 $i32_t1 $i64_t0 $i64_t1 $f32_t0 $f32_t1 $f64_t0 $f64_t1)

  (func $i32_t0 (type $i32_T) (i32.const -1))
  (func $i32_t1 (type $i32_T) (i32.const -2))
  (func $i64_t0 (type $i64_T) (i32.const -1))
  (func $i64_t1 (type $i64_T) (i32.const -2))
  (func $f32_t0 (type $f32_T) (i32.const -1))
  (func $f32_t1 (type $f32_T) (i32.const -2))
  (func $f64_t0 (type $f64_T) (i32.const -1))
  (func $f64_t1 (type $f64_T) (i32.const -2))

  ;; The idea is: We reset the memory, then the instruction call $*_left,
  ;; $*_right, $*_another, $*_callee (for indirect calls), and $*_bool (when a
  ;; boolean value is needed). These functions all call bump, which shifts the
  ;; memory starting at address 8 up a byte, and then store a unique value at
  ;; address 8. Then we read the 4-byte value at address 8. It should contain
  ;; the correct sequence of unique values if the calls were evaluated in the
  ;; correct order.

  (func $reset (i32.store (i32.const 8) (i32.const 0)))

  (func $bump
    (i32.store8 (i32.const 11) (i32.load8_u (i32.const 10)))
    (i32.store8 (i32.const 10) (i32.load8_u (i32.const 9)))
    (i32.store8 (i32.const 9) (i32.load8_u (i32.const 8)))
    (i32.store8 (i32.const 8) (i32.const -3)))

  (func $get (result i32) (i32.load (i32.const 8)))

  (func $i32_left (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 1)) (i32.const 0))
  (func $i32_right (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 2)) (i32.const 1))
  (func $i32_another (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 3)) (i32.const 1))
  (func $i32_callee (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 4)) (i32.const 0))
  (func $i32_bool (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 5)) (i32.const 0))
  (func $i64_left (result i64) (call $bump) (i32.store8 (i32.const 8) (i32.const 1)) (i64.const 0))
  (func $i64_right (result i64) (call $bump) (i32.store8 (i32.const 8) (i32.const 2)) (i64.const 1))
  (func $i64_another (result i64) (call $bump) (i32.store8 (i32.const 8) (i32.const 3)) (i64.const 1))
  (func $i64_callee (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 4)) (i32.const 2))
  (func $i64_bool (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 5)) (i32.const 0))
  (func $f32_left (result f32) (call $bump) (i32.store8 (i32.const 8) (i32.const 1)) (f32.const 0))
  (func $f32_right (result f32) (call $bump) (i32.store8 (i32.const 8) (i32.const 2)) (f32.const 1))
  (func $f32_another (result f32) (call $bump) (i32.store8 (i32.const 8) (i32.const 3)) (f32.const 1))
  (func $f32_callee (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 4)) (i32.const 4))
  (func $f32_bool (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 5)) (i32.const 0))
  (func $f64_left (result f64) (call $bump) (i32.store8 (i32.const 8) (i32.const 1)) (f64.const 0))
  (func $f64_right (result f64) (call $bump) (i32.store8 (i32.const 8) (i32.const 2)) (f64.const 1))
  (func $f64_another (result f64) (call $bump) (i32.store8 (i32.const 8) (i32.const 3)) (f64.const 1))
  (func $f64_callee (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 4)) (i32.const 6))
  (func $f64_bool (result i32) (call $bump) (i32.store8 (i32.const 8) (i32.const 5)) (i32.const 0))
  (func $i32_dummy (param i32 i32))                  (func $i64_dummy (param i64 i64))
  (func $f32_dummy (param f32 f32))                  (func $f64_dummy (param f64 f64))


  (func $i32_add (result i32) (call $reset) (i32.add (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_sub (result i32) (call $reset) (i32.sub (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_mul (result i32) (call $reset) (i32.mul (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_div_s (result i32) (call $reset) (i32.div_s (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_div_u (result i32) (call $reset) (i32.div_u (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_rem_s (result i32) (call $reset) (i32.rem_s (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_rem_u (result i32) (call $reset) (i32.rem_u (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_and (result i32) (call $reset) (i32.and (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_or (result i32) (call $reset) (i32.or (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_xor (result i32) (call $reset) (i32.xor (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_shl (result i32) (call $reset) (i32.shl (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_shr_u (result i32) (call $reset) (i32.shr_u (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_shr_s (result i32) (call $reset) (i32.shr_s (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_eq (result i32) (call $reset) (i32.eq (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_ne (result i32) (call $reset) (i32.ne (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_lt_s (result i32) (call $reset) (i32.lt_s (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_le_s (result i32) (call $reset) (i32.le_s (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_lt_u (result i32) (call $reset) (i32.lt_u (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_le_u (result i32) (call $reset) (i32.le_u (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_gt_s (result i32) (call $reset) (i32.gt_s (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_ge_s (result i32) (call $reset) (i32.ge_s (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_gt_u (result i32) (call $reset) (i32.gt_u (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_ge_u (result i32) (call $reset) (i32.ge_u (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_store (result i32) (call $reset) (i32.store (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_store8 (result i32) (call $reset) (i32.store8 (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_store16 (result i32) (call $reset) (i32.store16 (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_call (result i32) (call $reset) (call $i32_dummy (call $i32_left) (call $i32_right)) (call $get))
  (func $i32_call_indirect (result i32) (call $reset) (call_indirect $i32_T (call $i32_callee) (call $i32_right) (call $i32_another)) (call $get))
  (func $i32_select (result i32) (call $reset) (select (call $i32_left) (call $i32_right) (call $i32_bool)) (call $get))

  (func $i64_add (result i32) (call $reset) (i64.add (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_sub (result i32) (call $reset) (i64.sub (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_mul (result i32) (call $reset) (i64.mul (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_div_s (result i32) (call $reset) (i64.div_s (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_div_u (result i32) (call $reset) (i64.div_u (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_rem_s (result i32) (call $reset) (i64.rem_s (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_rem_u (result i32) (call $reset) (i64.rem_u (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_and (result i32) (call $reset) (i64.and (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_or (result i32) (call $reset) (i64.or (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_xor (result i32) (call $reset) (i64.xor (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_shl (result i32) (call $reset) (i64.shl (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_shr_u (result i32) (call $reset) (i64.shr_u (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_shr_s (result i32) (call $reset) (i64.shr_s (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_eq (result i32) (call $reset) (i64.eq (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_ne (result i32) (call $reset) (i64.ne (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_lt_s (result i32) (call $reset) (i64.lt_s (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_le_s (result i32) (call $reset) (i64.le_s (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_lt_u (result i32) (call $reset) (i64.lt_u (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_le_u (result i32) (call $reset) (i64.le_u (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_gt_s (result i32) (call $reset) (i64.gt_s (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_ge_s (result i32) (call $reset) (i64.ge_s (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_gt_u (result i32) (call $reset) (i64.gt_u (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_ge_u (result i32) (call $reset) (i64.ge_u (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_store (result i32) (call $reset) (i64.store (call $i32_left) (call $i64_right)) (call $get))
  (func $i64_store8 (result i32) (call $reset) (i64.store8 (call $i32_left) (call $i64_right)) (call $get))
  (func $i64_store16 (result i32) (call $reset) (i64.store16 (call $i32_left) (call $i64_right)) (call $get))
  (func $i64_store32 (result i32) (call $reset) (i64.store32 (call $i32_left) (call $i64_right)) (call $get))
  (func $i64_call (result i32) (call $reset) (call $i64_dummy (call $i64_left) (call $i64_right)) (call $get))
  (func $i64_call_indirect (result i32) (call $reset) (call_indirect $i64_T (call $i64_callee) (call $i64_right) (call $i64_another)) (call $get))
  (func $i64_select (result i32) (call $reset) (select (call $i64_left) (call $i64_right) (call $i64_bool)) (call $get))


  (func $f32_add (result i32) (call $reset) (f32.add (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_sub (result i32) (call $reset) (f32.sub (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_mul (result i32) (call $reset) (f32.mul (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_div (result i32) (call $reset) (f32.div (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_copysign (result i32) (call $reset) (f32.copysign (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_eq (result i32) (call $reset) (f32.eq (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_ne (result i32) (call $reset) (f32.ne (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_lt (result i32) (call $reset) (f32.lt (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_le (result i32) (call $reset) (f32.le (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_gt (result i32) (call $reset) (f32.gt (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_ge (result i32) (call $reset) (f32.ge (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_min (result i32) (call $reset) (f32.min (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_max (result i32) (call $reset) (f32.max (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_store (result i32) (call $reset) (f32.store (call $i32_left) (call $f32_right)) (call $get))
  (func $f32_call (result i32) (call $reset) (call $f32_dummy (call $f32_left) (call $f32_right)) (call $get))
  (func $f32_call_indirect (result i32) (call $reset) (call_indirect $f32_T (call $f32_callee) (call $f32_right) (call $f32_another)) (call $get))
  (func $f32_select (result i32) (call $reset) (select (call $f32_left) (call $f32_right) (call $f32_bool)) (call $get))

  (func $f64_add (result i32) (call $reset) (f64.add (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_sub (result i32) (call $reset) (f64.sub (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_mul (result i32) (call $reset) (f64.mul (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_div (result i32) (call $reset) (f64.div (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_copysign (result i32) (call $reset) (f64.copysign (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_eq (result i32) (call $reset) (f64.eq (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_ne (result i32) (call $reset) (f64.ne (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_lt (result i32) (call $reset) (f64.lt (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_le (result i32) (call $reset) (f64.le (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_gt (result i32) (call $reset) (f64.gt (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_ge (result i32) (call $reset) (f64.ge (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_min (result i32) (call $reset) (f64.min (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_max (result i32) (call $reset) (f64.max (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_store (result i32) (call $reset) (f64.store (call $i32_left) (call $f64_right)) (call $get))
  (func $f64_call (result i32) (call $reset) (call $f64_dummy (call $f64_left) (call $f64_right)) (call $get))
  (func $f64_call_indirect (result i32) (call $reset) (call_indirect $f64_T (call $f64_callee) (call $f64_right) (call $f64_another)) (call $get))
  (func $f64_select (result i32) (call $reset) (select (call $f64_left) (call $f64_right) (call $f64_bool)) (call $get))

  (func $br_if (result i32)
    (block
      (call $reset)
      (br_if 0 (call $i32_left) (i32.and (call $i32_right) (i32.const 0)))
      (call $get)
    )
  )
  (func $br_table (result i32)
    (block $a
      (call $reset)
      (block $b
        (br_table $a $b (call $i32_left) (call $i32_right))
      )
      (call $get)
    )
  )

  (export "i32_add" $i32_add)                        (export "i64_add" $i64_add)
  (export "i32_sub" $i32_sub)                        (export "i64_sub" $i64_sub)
  (export "i32_mul" $i32_mul)                        (export "i64_mul" $i64_mul)
  (export "i32_div_s" $i32_div_s)                    (export "i64_div_s" $i64_div_s)
  (export "i32_div_u" $i32_div_u)                    (export "i64_div_u" $i64_div_u)
  (export "i32_rem_s" $i32_rem_s)                    (export "i64_rem_s" $i64_rem_s)
  (export "i32_rem_u" $i32_rem_u)                    (export "i64_rem_u" $i64_rem_u)
  (export "i32_and" $i32_and)                        (export "i64_and" $i64_and)
  (export "i32_or" $i32_or)                          (export "i64_or" $i64_or)
  (export "i32_xor" $i32_xor)                        (export "i64_xor" $i64_xor)
  (export "i32_shl" $i32_shl)                        (export "i64_shl" $i64_shl)
  (export "i32_shr_u" $i32_shr_u)                    (export "i64_shr_u" $i64_shr_u)
  (export "i32_shr_s" $i32_shr_s)                    (export "i64_shr_s" $i64_shr_s)
  (export "i32_eq" $i32_eq)                          (export "i64_eq" $i64_eq)
  (export "i32_ne" $i32_ne)                          (export "i64_ne" $i64_ne)
  (export "i32_lt_s" $i32_lt_s)                      (export "i64_lt_s" $i64_lt_s)
  (export "i32_le_s" $i32_le_s)                      (export "i64_le_s" $i64_le_s)
  (export "i32_lt_u" $i32_lt_u)                      (export "i64_lt_u" $i64_lt_u)
  (export "i32_le_u" $i32_le_u)                      (export "i64_le_u" $i64_le_u)
  (export "i32_gt_s" $i32_gt_s)                      (export "i64_gt_s" $i64_gt_s)
  (export "i32_ge_s" $i32_ge_s)                      (export "i64_ge_s" $i64_ge_s)
  (export "i32_gt_u" $i32_gt_u)                      (export "i64_gt_u" $i64_gt_u)
  (export "i32_ge_u" $i32_ge_u)                      (export "i64_ge_u" $i64_ge_u)
  (export "i32_store" $i32_store)                    (export "i64_store" $i64_store)
  (export "i32_store8" $i32_store8)                  (export "i64_store8" $i64_store8)
  (export "i32_store16" $i32_store16)                (export "i64_store16" $i64_store16)
  (export "i64_store32" $i64_store32)
  (export "i32_call" $i32_call)                      (export "i64_call" $i64_call)
  (export "i32_call_indirect" $i32_call_indirect)    (export "i64_call_indirect" $i64_call_indirect)
  (export "i32_select" $i32_select)                  (export "i64_select" $i64_select)

  (export "f32_add" $f32_add)                        (export "f64_add" $f64_add)
  (export "f32_sub" $f32_sub)                        (export "f64_sub" $f64_sub)
  (export "f32_mul" $f32_mul)                        (export "f64_mul" $f64_mul)
  (export "f32_div" $f32_div)                        (export "f64_div" $f64_div)
  (export "f32_copysign" $f32_copysign)              (export "f64_copysign" $f64_copysign)
  (export "f32_eq" $f32_eq)                          (export "f64_eq" $f64_eq)
  (export "f32_ne" $f32_ne)                          (export "f64_ne" $f64_ne)
  (export "f32_lt" $f32_lt)                          (export "f64_lt" $f64_lt)
  (export "f32_le" $f32_le)                          (export "f64_le" $f64_le)
  (export "f32_gt" $f32_gt)                          (export "f64_gt" $f64_gt)
  (export "f32_ge" $f32_ge)                          (export "f64_ge" $f64_ge)
  (export "f32_min" $f32_min)                        (export "f64_min" $f64_min)
  (export "f32_max" $f32_max)                        (export "f64_max" $f64_max)
  (export "f32_store" $f32_store)                    (export "f64_store" $f64_store)
  (export "f32_call" $f32_call)                      (export "f64_call" $f64_call)
  (export "f32_call_indirect" $f32_call_indirect)    (export "f64_call_indirect" $f64_call_indirect)
  (export "f32_select" $f32_select)                  (export "f64_select" $f64_select)
  
  (export "br_if" $br_if)
  (export "br_table" $br_table)
)

(assert_return (invoke "i32_add") (i32.const 0x0102))     (assert_return (invoke "i64_add") (i32.const 0x0102))
(assert_return (invoke "i32_sub") (i32.const 0x0102))     (assert_return (invoke "i64_sub") (i32.const 0x0102))
(assert_return (invoke "i32_mul") (i32.const 0x0102))     (assert_return (invoke "i64_mul") (i32.const 0x0102))
(assert_return (invoke "i32_div_s") (i32.const 0x0102))   (assert_return (invoke "i64_div_s") (i32.const 0x0102))
(assert_return (invoke "i32_div_u") (i32.const 0x0102))   (assert_return (invoke "i64_div_u") (i32.const 0x0102))
(assert_return (invoke "i32_rem_s") (i32.const 0x0102))   (assert_return (invoke "i64_rem_s") (i32.const 0x0102))
(assert_return (invoke "i32_rem_u") (i32.const 0x0102))   (assert_return (invoke "i64_rem_u") (i32.const 0x0102))
(assert_return (invoke "i32_and") (i32.const 0x0102))     (assert_return (invoke "i64_and") (i32.const 0x0102))
(assert_return (invoke "i32_or") (i32.const 0x0102))      (assert_return (invoke "i64_or") (i32.const 0x0102))
(assert_return (invoke "i32_xor") (i32.const 0x0102))     (assert_return (invoke "i64_xor") (i32.const 0x0102))
(assert_return (invoke "i32_shl") (i32.const 0x0102))     (assert_return (invoke "i64_shl") (i32.const 0x0102))
(assert_return (invoke "i32_shr_u") (i32.const 0x0102))   (assert_return (invoke "i64_shr_u") (i32.const 0x0102))
(assert_return (invoke "i32_shr_s") (i32.const 0x0102))   (assert_return (invoke "i64_shr_s") (i32.const 0x0102))
(assert_return (invoke "i32_eq") (i32.const 0x0102))      (assert_return (invoke "i64_eq") (i32.const 0x0102))
(assert_return (invoke "i32_ne") (i32.const 0x0102))      (assert_return (invoke "i64_ne") (i32.const 0x0102))
(assert_return (invoke "i32_lt_s") (i32.const 0x0102))    (assert_return (invoke "i64_lt_s") (i32.const 0x0102))
(assert_return (invoke "i32_le_s") (i32.const 0x0102))    (assert_return (invoke "i64_le_s") (i32.const 0x0102))
(assert_return (invoke "i32_lt_u") (i32.const 0x0102))    (assert_return (invoke "i64_lt_u") (i32.const 0x0102))
(assert_return (invoke "i32_le_u") (i32.const 0x0102))    (assert_return (invoke "i64_le_u") (i32.const 0x0102))
(assert_return (invoke "i32_gt_s") (i32.const 0x0102))    (assert_return (invoke "i64_gt_s") (i32.const 0x0102))
(assert_return (invoke "i32_ge_s") (i32.const 0x0102))    (assert_return (invoke "i64_ge_s") (i32.const 0x0102))
(assert_return (invoke "i32_gt_u") (i32.const 0x0102))    (assert_return (invoke "i64_gt_u") (i32.const 0x0102))
(assert_return (invoke "i32_ge_u") (i32.const 0x0102))    (assert_return (invoke "i64_ge_u") (i32.const 0x0102))
(assert_return (invoke "i32_store") (i32.const 0x0102))   (assert_return (invoke "i64_store") (i32.const 0x0102))
(assert_return (invoke "i32_store8") (i32.const 0x0102))  (assert_return (invoke "i64_store8") (i32.const 0x0102))
(assert_return (invoke "i32_store16") (i32.const 0x0102)) (assert_return (invoke "i64_store16") (i32.const 0x0102))
(assert_return (invoke "i64_store32") (i32.const 0x0102))
(assert_return (invoke "i32_call") (i32.const 0x0102))    (assert_return (invoke "i64_call") (i32.const 0x0102))
(assert_return (invoke "i32_call_indirect") (i32.const 0x040203))
(assert_return (invoke "i64_call_indirect") (i32.const 0x040203))
(assert_return (invoke "i32_select") (i32.const 0x010205))  (assert_return (invoke "i64_select") (i32.const 0x010205))

(assert_return (invoke "f32_add") (i32.const 0x0102))     (assert_return (invoke "f64_add") (i32.const 0x0102))
(assert_return (invoke "f32_sub") (i32.const 0x0102))     (assert_return (invoke "f64_sub") (i32.const 0x0102))
(assert_return (invoke "f32_mul") (i32.const 0x0102))     (assert_return (invoke "f64_mul") (i32.const 0x0102))
(assert_return (invoke "f32_div") (i32.const 0x0102))     (assert_return (invoke "f64_div") (i32.const 0x0102))
(assert_return (invoke "f32_copysign") (i32.const 0x0102))(assert_return (invoke "f64_copysign") (i32.const 0x0102))
(assert_return (invoke "f32_eq") (i32.const 0x0102))      (assert_return (invoke "f64_eq") (i32.const 0x0102))
(assert_return (invoke "f32_ne") (i32.const 0x0102))      (assert_return (invoke "f64_ne") (i32.const 0x0102))
(assert_return (invoke "f32_lt") (i32.const 0x0102))      (assert_return (invoke "f64_lt") (i32.const 0x0102))
(assert_return (invoke "f32_le") (i32.const 0x0102))      (assert_return (invoke "f64_le") (i32.const 0x0102))
(assert_return (invoke "f32_gt") (i32.const 0x0102))      (assert_return (invoke "f64_gt") (i32.const 0x0102))
(assert_return (invoke "f32_ge") (i32.const 0x0102))      (assert_return (invoke "f64_ge") (i32.const 0x0102))
(assert_return (invoke "f32_min") (i32.const 0x0102))     (assert_return (invoke "f64_min") (i32.const 0x0102))
(assert_return (invoke "f32_max") (i32.const 0x0102))     (assert_return (invoke "f64_max") (i32.const 0x0102))
(assert_return (invoke "f32_store") (i32.const 0x0102))   (assert_return (invoke "f64_store") (i32.const 0x0102))
(assert_return (invoke "f32_call") (i32.const 0x0102))    (assert_return (invoke "f64_call") (i32.const 0x0102))
(assert_return (invoke "f32_call_indirect") (i32.const 0x040203))
(assert_return (invoke "f64_call_indirect") (i32.const 0x040203))
(assert_return (invoke "f32_select") (i32.const 0x010205))  (assert_return (invoke "f64_select") (i32.const 0x010205))

(assert_return (invoke "br_if") (i32.const 0x0102))
(assert_return (invoke "br_table") (i32.const 0x0102))