goog.module('javaemul.internal.Platform$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let Float = goog.forwardDeclare('java.lang.Float$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $LongUtils = goog.forwardDeclare('vmbootstrap.LongUtils$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @final
 */
class Platform extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {number} */
 static m_floatToRawIntBits__float__int(/** number */ value) {
  Platform.$clinit();
  let buf = new ArrayBuffer(4);
  $Arrays.$set(/**@type {!Array<number>}*/ (JsUtils.uncheckedCast(new Float32Array(buf))), 0, value);
  return /**@type {!Array<number>}*/ (JsUtils.uncheckedCast(new Uint32Array(buf)))[0] | 0;
 }
 /** @nodts @return {number} */
 static m_intBitsToFloat__int__float(/** number */ value) {
  Platform.$clinit();
  let buf = new ArrayBuffer(4);
  $Arrays.$set(/**@type {!Array<number>}*/ (JsUtils.uncheckedCast(new Uint32Array(buf))), 0, value);
  return /**@type {!Array<number>}*/ (JsUtils.uncheckedCast(new Float32Array(buf)))[0];
 }
 /** @nodts @return {!$Long} */
 static m_doubleToRawLongBits__double__long(/** number */ value) {
  Platform.$clinit();
  let buf = new ArrayBuffer(8);
  $Arrays.$set(/**@type {!Array<number>}*/ (JsUtils.uncheckedCast(new Float64Array(buf))), 0, value);
  let intBits = /**@type {Array<number>}*/ (JsUtils.uncheckedCast(new Uint32Array(buf)));
  return $LongUtils.fromBits(intBits[0] | 0, intBits[1] | 0);
 }
 /** @nodts @return {number} */
 static m_longBitsToDouble__long__double(/** !$Long */ value) {
  Platform.$clinit();
  let buf = new ArrayBuffer(8);
  let intBits = /**@type {Array<number>}*/ (JsUtils.uncheckedCast(new Uint32Array(buf)));
  $Arrays.$set(intBits, 0, $Primitives.narrowLongToInt(value));
  $Arrays.$set(intBits, 1, $LongUtils.getHighBits(value));
  return /**@type {!Array<number>}*/ (JsUtils.uncheckedCast(new Float64Array(buf)))[0];
 }
 /** @nodts @return {number} */
 static m_compareDouble__double__double__int(/** number */ x, /** number */ y) {
  Platform.$clinit();
  if (x < y) {
   return - 1 | 0;
  }
  if (x > y) {
   return 1;
  }
  if (x == y) {
   if (x != 0) {
    return 0;
   }
   x = 1 / x;
   y = 1 / y;
   return x == y ? 0 : x < y ? - 1 | 0 : 1;
  }
  if (isNaN(x)) {
   if (isNaN(y)) {
    return 0;
   } else {
    return 1;
   }
  } else {
   return - 1 | 0;
  }
 }
 /** @nodts @return {boolean} */
 static m_objectsStringEquals__java_lang_String__java_lang_String__boolean(/** ?string */ x, /** ?string */ y) {
  Platform.$clinit();
  return $Equality.$same(x, y);
 }
 /** @nodts @return {boolean} */
 static m_isEqual__java_lang_Object__java_lang_Object__boolean(/** * */ x, /** * */ y) {
  Platform.$clinit();
  return $Equality.$same(InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(x), y);
 }
 /** @nodts @return {boolean} */
 static m_isEqual__java_lang_Float__java_lang_Object__boolean(/** Float */ x, /** * */ y) {
  Platform.$clinit();
  return Float.$isInstance(y) && Double.m_equals__java_lang_Double__java_lang_Object__boolean(Double.m_valueOf__double__java_lang_Double(x.m_doubleValue__double()), /**@type {Float}*/ ($Casts.$to(y, Float)).m_doubleValue__double());
 }
 /** @nodts @return {number} */
 static m_hashCode__double__int(/** number */ x) {
  Platform.$clinit();
  return $Primitives.narrowDoubleToInt(x);
 }
 /** @nodts @return {number} */
 static m_hashCode__float__int(/** number */ x) {
  Platform.$clinit();
  return $Primitives.narrowFloatToInt(x);
 }
 /** @nodts @return {!Platform} */
 static $create__() {
  let $instance = new Platform();
  $instance.$ctor__javaemul_internal_Platform__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Platform__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  Platform.$clinit = () =>{};
  Platform.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Platform;
 }
 
 /** @nodts */
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Float = goog.module.get('java.lang.Float$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $LongUtils = goog.module.get('vmbootstrap.LongUtils$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
}
$Util.$setClassMetadata(Platform, 'javaemul.internal.Platform');

exports = Platform;

//# sourceMappingURL=Platform.js.map
