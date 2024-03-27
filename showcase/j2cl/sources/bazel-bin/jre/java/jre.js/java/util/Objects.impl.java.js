goog.module('java.util.Objects$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Comparator = goog.forwardDeclare('java.util.Comparator$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Platform = goog.forwardDeclare('javaemul.internal.Platform$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');
let $$boolean = goog.forwardDeclare('vmbootstrap.primitives.$boolean$impl');
let $$byte = goog.forwardDeclare('vmbootstrap.primitives.$byte$impl');
let $$char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');
let $$double = goog.forwardDeclare('vmbootstrap.primitives.$double$impl');
let $$float = goog.forwardDeclare('vmbootstrap.primitives.$float$impl');
let $$int = goog.forwardDeclare('vmbootstrap.primitives.$int$impl');
let $$long = goog.forwardDeclare('vmbootstrap.primitives.$long$impl');
let $$short = goog.forwardDeclare('vmbootstrap.primitives.$short$impl');

/**
 * @final
 */
class Objects extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Objects} */
 static $create__() {
  let $instance = new Objects();
  $instance.$ctor__java_util_Objects__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_Objects__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @template T @return {number} */
 static m_compare__java_lang_Object__java_lang_Object__java_util_Comparator__int(/** T */ a, /** T */ b, /** Comparator<?> */ c) {
  Objects.$clinit();
  return $Equality.$same(a, b) ? 0 : c.m_compare__java_lang_Object__java_lang_Object__int(a, b);
 }
 /** @nodts @return {boolean} */
 static m_deepEquals__java_lang_Object__java_lang_Object__boolean(/** * */ a, /** * */ b) {
  Objects.$clinit();
  if ($Equality.$same(a, b)) {
   return true;
  }
  if ($Equality.$same(a, null) || $Equality.$same(b, null)) {
   return false;
  }
  let class1 = $Objects.m_getClass__java_lang_Object__java_lang_Class(a);
  let class2 = $Objects.m_getClass__java_lang_Object__java_lang_Class(b);
  if (!class1.m_isArray__boolean() || !class2.m_isArray__boolean()) {
   return $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(a, b);
  }
  let isObjectArray1 = $Arrays.$instanceIsOfType(a, j_l_Object, 1);
  let isObjectArray2 = $Arrays.$instanceIsOfType(b, j_l_Object, 1);
  if (isObjectArray1 || isObjectArray2) {
   return isObjectArray1 && isObjectArray2 && Arrays.m_deepEquals__arrayOf_java_lang_Object__arrayOf_java_lang_Object__boolean(/**@type {Array<*>}*/ ($Arrays.$castTo(a, j_l_Object, 1)), /**@type {Array<*>}*/ ($Arrays.$castTo(b, j_l_Object, 1)));
  }
  if (!$Objects.m_equals__java_lang_Object__java_lang_Object__boolean(class1, class2)) {
   return false;
  }
  if ($Arrays.$instanceIsOfType(a, $$boolean, 1)) {
   return Arrays.m_equals__arrayOf_boolean__arrayOf_boolean__boolean(/**@type {Array<boolean>}*/ ($Arrays.$castTo(a, $$boolean, 1)), /**@type {Array<boolean>}*/ ($Arrays.$castTo(b, $$boolean, 1)));
  }
  if ($Arrays.$instanceIsOfType(a, $$byte, 1)) {
   return Arrays.m_equals__arrayOf_byte__arrayOf_byte__boolean(/**@type {Array<number>}*/ ($Arrays.$castTo(a, $$byte, 1)), /**@type {Array<number>}*/ ($Arrays.$castTo(b, $$byte, 1)));
  }
  if ($Arrays.$instanceIsOfType(a, $$char, 1)) {
   return Arrays.m_equals__arrayOf_char__arrayOf_char__boolean(/**@type {Array<number>}*/ ($Arrays.$castTo(a, $$char, 1)), /**@type {Array<number>}*/ ($Arrays.$castTo(b, $$char, 1)));
  }
  if ($Arrays.$instanceIsOfType(a, $$short, 1)) {
   return Arrays.m_equals__arrayOf_short__arrayOf_short__boolean(/**@type {Array<number>}*/ ($Arrays.$castTo(a, $$short, 1)), /**@type {Array<number>}*/ ($Arrays.$castTo(b, $$short, 1)));
  }
  if ($Arrays.$instanceIsOfType(a, $$int, 1)) {
   return Arrays.m_equals__arrayOf_int__arrayOf_int__boolean(/**@type {Array<number>}*/ ($Arrays.$castTo(a, $$int, 1)), /**@type {Array<number>}*/ ($Arrays.$castTo(b, $$int, 1)));
  }
  if ($Arrays.$instanceIsOfType(a, $$long, 1)) {
   return Arrays.m_equals__arrayOf_long__arrayOf_long__boolean(/**@type {Array<!$Long>}*/ ($Arrays.$castTo(a, $$long, 1)), /**@type {Array<!$Long>}*/ ($Arrays.$castTo(b, $$long, 1)));
  }
  if ($Arrays.$instanceIsOfType(a, $$float, 1)) {
   return Arrays.m_equals__arrayOf_float__arrayOf_float__boolean(/**@type {Array<number>}*/ ($Arrays.$castTo(a, $$float, 1)), /**@type {Array<number>}*/ ($Arrays.$castTo(b, $$float, 1)));
  }
  return Arrays.m_equals__arrayOf_double__arrayOf_double__boolean(/**@type {Array<number>}*/ ($Arrays.$castTo(a, $$double, 1)), /**@type {Array<number>}*/ ($Arrays.$castTo(b, $$double, 1)));
 }
 /** @nodts @return {boolean} */
 static m_equals__java_lang_Object__java_lang_Object__boolean(/** * */ a, /** * */ b) {
  Objects.$clinit();
  return $Equality.$same(a, b) || !$Equality.$same(a, null) && $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(a, b);
 }
 /** @nodts @return {boolean} */
 static m_equals__java_lang_String__java_lang_String__boolean(/** ?string */ a, /** ?string */ b) {
  Objects.$clinit();
  return Platform.m_objectsStringEquals__java_lang_String__java_lang_String__boolean(a, b);
 }
 /** @nodts @return {number} */
 static m_hashCode__java_lang_Object__int(/** * */ o) {
  Objects.$clinit();
  return !$Equality.$same(o, null) ? $Objects.m_hashCode__java_lang_Object__int(o) : 0;
 }
 /** @nodts @return {number} */
 static m_hash__arrayOf_java_lang_Object__int(/** Array<*> */ values) {
  Objects.$clinit();
  return Arrays.m_hashCode__arrayOf_java_lang_Object__int(values);
 }
 /** @nodts @return {boolean} */
 static m_isNull__java_lang_Object__boolean(/** * */ obj) {
  Objects.$clinit();
  return $Equality.$same(obj, null);
 }
 /** @nodts @return {boolean} */
 static m_nonNull__java_lang_Object__boolean(/** * */ obj) {
  Objects.$clinit();
  return !$Equality.$same(obj, null);
 }
 /** @nodts @template T @return {T} */
 static m_requireNonNull__java_lang_Object__java_lang_Object(/** T */ obj) {
  Objects.$clinit();
  if ($Equality.$same(obj, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__());
  }
  return obj;
 }
 /** @nodts @template T @return {T} */
 static m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(/** T */ obj, /** ?string */ message) {
  Objects.$clinit();
  if ($Equality.$same(obj, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String(message));
  }
  return obj;
 }
 /** @nodts @template T @return {T} */
 static m_requireNonNull__java_lang_Object__java_util_function_Supplier__java_lang_Object(/** T */ obj, /** Supplier<?string> */ messageSupplier) {
  Objects.$clinit();
  if ($Equality.$same(obj, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String(/**@type {?string}*/ ($Casts.$to(messageSupplier.m_get__java_lang_Object(), j_l_String))));
  }
  return obj;
 }
 /** @nodts @return {?string} */
 static m_toString__java_lang_Object__java_lang_String(/** * */ o) {
  Objects.$clinit();
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(o);
 }
 /** @nodts @return {?string} */
 static m_toString__java_lang_Object__java_lang_String__java_lang_String(/** * */ o, /** ?string */ nullDefault) {
  Objects.$clinit();
  return !$Equality.$same(o, null) ? $Objects.m_toString__java_lang_Object__java_lang_String(o) : nullDefault;
 }
 /** @nodts */
 static $clinit() {
  Objects.$clinit = () =>{};
  Objects.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Objects;
 }
 
 /** @nodts */
 static $loadModules() {
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Platform = goog.module.get('javaemul.internal.Platform$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
  $$boolean = goog.module.get('vmbootstrap.primitives.$boolean$impl');
  $$byte = goog.module.get('vmbootstrap.primitives.$byte$impl');
  $$char = goog.module.get('vmbootstrap.primitives.$char$impl');
  $$double = goog.module.get('vmbootstrap.primitives.$double$impl');
  $$float = goog.module.get('vmbootstrap.primitives.$float$impl');
  $$int = goog.module.get('vmbootstrap.primitives.$int$impl');
  $$long = goog.module.get('vmbootstrap.primitives.$long$impl');
  $$short = goog.module.get('vmbootstrap.primitives.$short$impl');
 }
}
$Util.$setClassMetadata(Objects, 'java.util.Objects');

exports = Objects;

//# sourceMappingURL=Objects.js.map
