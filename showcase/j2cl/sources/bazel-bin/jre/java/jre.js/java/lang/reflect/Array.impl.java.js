goog.module('java.lang.reflect.Array$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Byte = goog.forwardDeclare('java.lang.Byte$impl');
let Character = goog.forwardDeclare('java.lang.Character$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Float = goog.forwardDeclare('java.lang.Float$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let Long = goog.forwardDeclare('java.lang.Long$impl');
let Short = goog.forwardDeclare('java.lang.Short$impl');
let ArrayHelper = goog.forwardDeclare('javaemul.internal.ArrayHelper$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
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
class j_l_reflect_Array extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {*} */
 static m_get__java_lang_Object__int__java_lang_Object(/** * */ array, /** number */ index) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$boolean, 1)) {
   return j_l_reflect_Array.m_getBooleanImpl__java_lang_Object__int__boolean(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$byte, 1)) {
   return Byte.m_valueOf__byte__java_lang_Byte(j_l_reflect_Array.m_getByteImpl__java_lang_Object__int__byte(array, index));
  } else if ($Arrays.$instanceIsOfType(array, $$char, 1)) {
   return Character.m_valueOf__char__java_lang_Character(j_l_reflect_Array.m_getCharImpl__java_lang_Object__int__char(array, index));
  } else if ($Arrays.$instanceIsOfType(array, $$double, 1)) {
   return j_l_reflect_Array.m_getDoubleImpl__java_lang_Object__int__double(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$float, 1)) {
   return Float.m_valueOf__float__java_lang_Float(j_l_reflect_Array.m_getFloatImpl__java_lang_Object__int__float(array, index));
  } else if ($Arrays.$instanceIsOfType(array, $$int, 1)) {
   return Integer.m_valueOf__int__java_lang_Integer(j_l_reflect_Array.m_getIntImpl__java_lang_Object__int__int(array, index));
  } else if ($Arrays.$instanceIsOfType(array, $$long, 1)) {
   return Long.m_valueOf__long__java_lang_Long(j_l_reflect_Array.m_getLongImpl__java_lang_Object__int__long(array, index));
  } else if ($Arrays.$instanceIsOfType(array, $$short, 1)) {
   return Short.m_valueOf__short__java_lang_Short(j_l_reflect_Array.m_getShortImpl__java_lang_Object__int__short(array, index));
  } else {
   InternalPreconditions.m_checkArgument__boolean__void($Arrays.$instanceIsOfType(array, j_l_Object, 1));
   let typedArray = /**@type {Array<*>}*/ ($Arrays.$castTo(array, j_l_Object, 1));
   return typedArray[index];
  }
 }
 /** @nodts @return {boolean} */
 static m_getBoolean__java_lang_Object__int__boolean(/** * */ array, /** number */ index) {
  j_l_reflect_Array.$clinit();
  InternalPreconditions.m_checkArgument__boolean__void($Arrays.$instanceIsOfType(array, $$boolean, 1));
  return j_l_reflect_Array.m_getBooleanImpl__java_lang_Object__int__boolean(array, index);
 }
 /** @nodts @return {boolean} */
 static m_getBooleanImpl__java_lang_Object__int__boolean(/** * */ array, /** number */ index) {
  let typedArray = /**@type {Array<boolean>}*/ ($Arrays.$castTo(array, $$boolean, 1));
  return typedArray[index];
 }
 /** @nodts @return {number} */
 static m_getByte__java_lang_Object__int__byte(/** * */ array, /** number */ index) {
  j_l_reflect_Array.$clinit();
  InternalPreconditions.m_checkArgument__boolean__void($Arrays.$instanceIsOfType(array, $$byte, 1));
  return j_l_reflect_Array.m_getByteImpl__java_lang_Object__int__byte(array, index);
 }
 /** @nodts @return {number} */
 static m_getByteImpl__java_lang_Object__int__byte(/** * */ array, /** number */ index) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$byte, 1));
  return typedArray[index];
 }
 /** @nodts @return {number} */
 static m_getChar__java_lang_Object__int__char(/** * */ array, /** number */ index) {
  j_l_reflect_Array.$clinit();
  InternalPreconditions.m_checkArgument__boolean__void($Arrays.$instanceIsOfType(array, $$char, 1));
  return j_l_reflect_Array.m_getCharImpl__java_lang_Object__int__char(array, index);
 }
 /** @nodts @return {number} */
 static m_getCharImpl__java_lang_Object__int__char(/** * */ array, /** number */ index) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$char, 1));
  return typedArray[index];
 }
 /** @nodts @return {number} */
 static m_getDouble__java_lang_Object__int__double(/** * */ array, /** number */ index) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$double, 1)) {
   return j_l_reflect_Array.m_getDoubleImpl__java_lang_Object__int__double(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$byte, 1)) {
   return j_l_reflect_Array.m_getByteImpl__java_lang_Object__int__byte(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$char, 1)) {
   return j_l_reflect_Array.m_getCharImpl__java_lang_Object__int__char(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$float, 1)) {
   return j_l_reflect_Array.m_getFloatImpl__java_lang_Object__int__float(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$int, 1)) {
   return j_l_reflect_Array.m_getIntImpl__java_lang_Object__int__int(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$long, 1)) {
   return $Primitives.widenLongToDouble(j_l_reflect_Array.m_getLongImpl__java_lang_Object__int__long(array, index));
  } else if ($Arrays.$instanceIsOfType(array, $$short, 1)) {
   return j_l_reflect_Array.m_getShortImpl__java_lang_Object__int__short(array, index);
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
   return 0;
  }
 }
 /** @nodts @return {number} */
 static m_getDoubleImpl__java_lang_Object__int__double(/** * */ array, /** number */ index) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$double, 1));
  return typedArray[index];
 }
 /** @nodts @return {number} */
 static m_getFloat__java_lang_Object__int__float(/** * */ array, /** number */ index) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$float, 1)) {
   return j_l_reflect_Array.m_getFloatImpl__java_lang_Object__int__float(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$byte, 1)) {
   return j_l_reflect_Array.m_getByteImpl__java_lang_Object__int__byte(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$char, 1)) {
   return j_l_reflect_Array.m_getCharImpl__java_lang_Object__int__char(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$int, 1)) {
   return j_l_reflect_Array.m_getIntImpl__java_lang_Object__int__int(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$long, 1)) {
   return $Primitives.widenLongToFloat(j_l_reflect_Array.m_getLongImpl__java_lang_Object__int__long(array, index));
  } else if ($Arrays.$instanceIsOfType(array, $$short, 1)) {
   return j_l_reflect_Array.m_getShortImpl__java_lang_Object__int__short(array, index);
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
   return 0;
  }
 }
 /** @nodts @return {number} */
 static m_getFloatImpl__java_lang_Object__int__float(/** * */ array, /** number */ index) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$float, 1));
  return typedArray[index];
 }
 /** @nodts @return {number} */
 static m_getInt__java_lang_Object__int__int(/** * */ array, /** number */ index) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$int, 1)) {
   return j_l_reflect_Array.m_getIntImpl__java_lang_Object__int__int(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$byte, 1)) {
   return j_l_reflect_Array.m_getByteImpl__java_lang_Object__int__byte(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$char, 1)) {
   return j_l_reflect_Array.m_getCharImpl__java_lang_Object__int__char(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$short, 1)) {
   return j_l_reflect_Array.m_getShortImpl__java_lang_Object__int__short(array, index);
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
   return 0;
  }
 }
 /** @nodts @return {number} */
 static m_getIntImpl__java_lang_Object__int__int(/** * */ array, /** number */ index) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$int, 1));
  return typedArray[index];
 }
 /** @nodts @return {number} */
 static m_getLength__java_lang_Object__int(/** * */ array) {
  j_l_reflect_Array.$clinit();
  InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(array);
  return ArrayHelper.m_getLength__java_lang_Object__int(array);
 }
 /** @nodts @return {!$Long} */
 static m_getLong__java_lang_Object__int__long(/** * */ array, /** number */ index) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$long, 1)) {
   return j_l_reflect_Array.m_getLongImpl__java_lang_Object__int__long(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$byte, 1)) {
   return $Primitives.widenByteToLong(j_l_reflect_Array.m_getByteImpl__java_lang_Object__int__byte(array, index));
  } else if ($Arrays.$instanceIsOfType(array, $$char, 1)) {
   return $Primitives.widenCharToLong(j_l_reflect_Array.m_getCharImpl__java_lang_Object__int__char(array, index));
  } else if ($Arrays.$instanceIsOfType(array, $$int, 1)) {
   return $Primitives.widenIntToLong(j_l_reflect_Array.m_getIntImpl__java_lang_Object__int__int(array, index));
  } else if ($Arrays.$instanceIsOfType(array, $$short, 1)) {
   return $Primitives.widenShortToLong(j_l_reflect_Array.m_getShortImpl__java_lang_Object__int__short(array, index));
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
   return $Long.fromInt(0);
  }
 }
 /** @nodts @return {!$Long} */
 static m_getLongImpl__java_lang_Object__int__long(/** * */ array, /** number */ index) {
  let typedArray = /**@type {Array<!$Long>}*/ ($Arrays.$castTo(array, $$long, 1));
  return typedArray[index];
 }
 /** @nodts @return {number} */
 static m_getShort__java_lang_Object__int__short(/** * */ array, /** number */ index) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$short, 1)) {
   return j_l_reflect_Array.m_getShortImpl__java_lang_Object__int__short(array, index);
  } else if ($Arrays.$instanceIsOfType(array, $$byte, 1)) {
   return j_l_reflect_Array.m_getByteImpl__java_lang_Object__int__byte(array, index);
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
   return 0;
  }
 }
 /** @nodts @return {number} */
 static m_getShortImpl__java_lang_Object__int__short(/** * */ array, /** number */ index) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$short, 1));
  return typedArray[index];
 }
 /** @nodts */
 static m_set__java_lang_Object__int__java_lang_Object__void(/** * */ array, /** number */ index, /** * */ value) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, j_l_Object, 1)) {
   let typedArray = /**@type {Array<*>}*/ (array);
   $Arrays.$set(typedArray, index, value);
  } else {
   if (Boolean.$isInstance(value)) {
    j_l_reflect_Array.m_setBoolean__java_lang_Object__int__boolean__void(array, index, Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(value, Boolean))));
   } else if (Byte.$isInstance(value)) {
    j_l_reflect_Array.m_setByte__java_lang_Object__int__byte__void(array, index, /**@type {Byte}*/ ($Casts.$to(value, Byte)).m_byteValue__byte());
   } else if (Character.$isInstance(value)) {
    j_l_reflect_Array.m_setChar__java_lang_Object__int__char__void(array, index, /**@type {Character}*/ ($Casts.$to(value, Character)).m_charValue__char());
   } else if (Short.$isInstance(value)) {
    j_l_reflect_Array.m_setShort__java_lang_Object__int__short__void(array, index, /**@type {Short}*/ ($Casts.$to(value, Short)).m_shortValue__short());
   } else if (Integer.$isInstance(value)) {
    j_l_reflect_Array.m_setInt__java_lang_Object__int__int__void(array, index, /**@type {Integer}*/ ($Casts.$to(value, Integer)).m_intValue__int());
   } else if (Long.$isInstance(value)) {
    j_l_reflect_Array.m_setLong__java_lang_Object__int__long__void(array, index, /**@type {Long}*/ ($Casts.$to(value, Long)).m_longValue__long());
   } else if (Float.$isInstance(value)) {
    j_l_reflect_Array.m_setFloat__java_lang_Object__int__float__void(array, index, /**@type {Float}*/ ($Casts.$to(value, Float)).m_floatValue__float());
   } else if (Double.$isInstance(value)) {
    j_l_reflect_Array.m_setDouble__java_lang_Object__int__double__void(array, index, Double.m_doubleValue__java_lang_Double__double(/**@type {?number}*/ ($Casts.$to(value, Double))));
   } else {
    InternalPreconditions.m_checkArgument__boolean__void(false);
   }
  }
 }
 /** @nodts */
 static m_setBoolean__java_lang_Object__int__boolean__void(/** * */ array, /** number */ index, /** boolean */ value) {
  j_l_reflect_Array.$clinit();
  InternalPreconditions.m_checkArgument__boolean__void($Arrays.$instanceIsOfType(array, $$boolean, 1));
  j_l_reflect_Array.m_setBooleanImpl__java_lang_Object__int__boolean__void(array, index, value);
 }
 /** @nodts */
 static m_setBooleanImpl__java_lang_Object__int__boolean__void(/** * */ array, /** number */ index, /** boolean */ value) {
  let typedArray = /**@type {Array<boolean>}*/ ($Arrays.$castTo(array, $$boolean, 1));
  $Arrays.$set(typedArray, index, value);
 }
 /** @nodts */
 static m_setByte__java_lang_Object__int__byte__void(/** * */ array, /** number */ index, /** number */ value) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$byte, 1)) {
   j_l_reflect_Array.m_setByteImpl__java_lang_Object__int__byte__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$double, 1)) {
   j_l_reflect_Array.m_setDoubleImpl__java_lang_Object__int__double__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$float, 1)) {
   j_l_reflect_Array.m_setFloatImpl__java_lang_Object__int__float__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$int, 1)) {
   j_l_reflect_Array.m_setIntImpl__java_lang_Object__int__int__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$long, 1)) {
   j_l_reflect_Array.m_setLongImpl__java_lang_Object__int__long__void(array, index, $Primitives.widenByteToLong(value));
  } else if ($Arrays.$instanceIsOfType(array, $$short, 1)) {
   j_l_reflect_Array.m_setShortImpl__java_lang_Object__int__short__void(array, index, value);
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
  }
 }
 /** @nodts */
 static m_setByteImpl__java_lang_Object__int__byte__void(/** * */ array, /** number */ index, /** number */ value) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$byte, 1));
  $Arrays.$set(typedArray, index, value);
 }
 /** @nodts */
 static m_setChar__java_lang_Object__int__char__void(/** * */ array, /** number */ index, /** number */ value) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$char, 1)) {
   j_l_reflect_Array.m_setCharImpl__java_lang_Object__int__char__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$double, 1)) {
   j_l_reflect_Array.m_setDoubleImpl__java_lang_Object__int__double__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$float, 1)) {
   j_l_reflect_Array.m_setFloatImpl__java_lang_Object__int__float__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$int, 1)) {
   j_l_reflect_Array.m_setIntImpl__java_lang_Object__int__int__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$long, 1)) {
   j_l_reflect_Array.m_setLongImpl__java_lang_Object__int__long__void(array, index, $Primitives.widenCharToLong(value));
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
  }
 }
 /** @nodts */
 static m_setCharImpl__java_lang_Object__int__char__void(/** * */ array, /** number */ index, /** number */ value) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$char, 1));
  $Arrays.$set(typedArray, index, value);
 }
 /** @nodts */
 static m_setDouble__java_lang_Object__int__double__void(/** * */ array, /** number */ index, /** number */ value) {
  j_l_reflect_Array.$clinit();
  InternalPreconditions.m_checkArgument__boolean__void($Arrays.$instanceIsOfType(array, $$double, 1));
  j_l_reflect_Array.m_setDoubleImpl__java_lang_Object__int__double__void(array, index, value);
 }
 /** @nodts */
 static m_setDoubleImpl__java_lang_Object__int__double__void(/** * */ array, /** number */ index, /** number */ value) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$double, 1));
  $Arrays.$set(typedArray, index, value);
 }
 /** @nodts */
 static m_setFloat__java_lang_Object__int__float__void(/** * */ array, /** number */ index, /** number */ value) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$float, 1)) {
   j_l_reflect_Array.m_setFloatImpl__java_lang_Object__int__float__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$double, 1)) {
   j_l_reflect_Array.m_setDoubleImpl__java_lang_Object__int__double__void(array, index, value);
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
  }
 }
 /** @nodts */
 static m_setFloatImpl__java_lang_Object__int__float__void(/** * */ array, /** number */ index, /** number */ value) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$float, 1));
  $Arrays.$set(typedArray, index, value);
 }
 /** @nodts */
 static m_setInt__java_lang_Object__int__int__void(/** * */ array, /** number */ index, /** number */ value) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$int, 1)) {
   j_l_reflect_Array.m_setIntImpl__java_lang_Object__int__int__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$double, 1)) {
   j_l_reflect_Array.m_setDoubleImpl__java_lang_Object__int__double__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$float, 1)) {
   j_l_reflect_Array.m_setFloatImpl__java_lang_Object__int__float__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$long, 1)) {
   j_l_reflect_Array.m_setLongImpl__java_lang_Object__int__long__void(array, index, $Primitives.widenIntToLong(value));
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
  }
 }
 /** @nodts */
 static m_setIntImpl__java_lang_Object__int__int__void(/** * */ array, /** number */ index, /** number */ value) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$int, 1));
  $Arrays.$set(typedArray, index, value);
 }
 /** @nodts */
 static m_setLong__java_lang_Object__int__long__void(/** * */ array, /** number */ index, /** !$Long */ value) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$long, 1)) {
   j_l_reflect_Array.m_setLongImpl__java_lang_Object__int__long__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$double, 1)) {
   j_l_reflect_Array.m_setDoubleImpl__java_lang_Object__int__double__void(array, index, $Primitives.widenLongToDouble(value));
  } else if ($Arrays.$instanceIsOfType(array, $$float, 1)) {
   j_l_reflect_Array.m_setFloatImpl__java_lang_Object__int__float__void(array, index, $Primitives.widenLongToFloat(value));
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
  }
 }
 /** @nodts */
 static m_setLongImpl__java_lang_Object__int__long__void(/** * */ array, /** number */ index, /** !$Long */ value) {
  let typedArray = /**@type {Array<!$Long>}*/ ($Arrays.$castTo(array, $$long, 1));
  $Arrays.$set(typedArray, index, value);
 }
 /** @nodts */
 static m_setShort__java_lang_Object__int__short__void(/** * */ array, /** number */ index, /** number */ value) {
  j_l_reflect_Array.$clinit();
  if ($Arrays.$instanceIsOfType(array, $$short, 1)) {
   j_l_reflect_Array.m_setShortImpl__java_lang_Object__int__short__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$double, 1)) {
   j_l_reflect_Array.m_setDoubleImpl__java_lang_Object__int__double__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$float, 1)) {
   j_l_reflect_Array.m_setFloatImpl__java_lang_Object__int__float__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$int, 1)) {
   j_l_reflect_Array.m_setIntImpl__java_lang_Object__int__int__void(array, index, value);
  } else if ($Arrays.$instanceIsOfType(array, $$long, 1)) {
   j_l_reflect_Array.m_setLongImpl__java_lang_Object__int__long__void(array, index, $Primitives.widenShortToLong(value));
  } else {
   InternalPreconditions.m_checkArgument__boolean__void(false);
  }
 }
 /** @nodts */
 static m_setShortImpl__java_lang_Object__int__short__void(/** * */ array, /** number */ index, /** number */ value) {
  let typedArray = /**@type {Array<number>}*/ ($Arrays.$castTo(array, $$short, 1));
  $Arrays.$set(typedArray, index, value);
 }
 /** @nodts @return {!j_l_reflect_Array} */
 static $create__() {
  let $instance = new j_l_reflect_Array();
  $instance.$ctor__java_lang_reflect_Array__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_reflect_Array__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  j_l_reflect_Array.$clinit = () =>{};
  j_l_reflect_Array.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof j_l_reflect_Array;
 }
 
 /** @nodts */
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Byte = goog.module.get('java.lang.Byte$impl');
  Character = goog.module.get('java.lang.Character$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Float = goog.module.get('java.lang.Float$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  Long = goog.module.get('java.lang.Long$impl');
  Short = goog.module.get('java.lang.Short$impl');
  ArrayHelper = goog.module.get('javaemul.internal.ArrayHelper$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Long = goog.module.get('nativebootstrap.Long$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
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
$Util.$setClassMetadata(j_l_reflect_Array, 'java.lang.reflect.Array');

exports = j_l_reflect_Array;

//# sourceMappingURL=Array.js.map
