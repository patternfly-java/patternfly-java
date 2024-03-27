goog.module('javaemul.internal.ValueType$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let reflect = goog.forwardDeclare('goog.reflect');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let StringJoiner = goog.forwardDeclare('java.util.StringJoiner$impl');
let Constructor = goog.forwardDeclare('javaemul.internal.Constructor');
let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

/**
 * @abstract
 */
class ValueType extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__javaemul_internal_ValueType__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @override @return {boolean} */
 equals(/** * */ o) {
  return ValueType.m_equals__javaemul_internal_ValueType__java_lang_Object__boolean(this, o);
 }
 /** @override @return {number} */
 hashCode() {
  return ValueType.m_hashCode__javaemul_internal_ValueType__int(this);
 }
 /** @override @return {?string} */
 toString() {
  return ValueType.m_toString__javaemul_internal_ValueType__java_lang_String(this);
 }
 /** @nodts @return {boolean} */
 static m_equals__javaemul_internal_ValueType__java_lang_Object__boolean(/** ValueType */ thisObject, /** * */ o) {
  ValueType.$clinit();
  if ($Equality.$same(o, null) || !$Equality.$same($Objects.m_getClass__java_lang_Object__java_lang_Class(o), $Objects.m_getClass__java_lang_Object__java_lang_Class(thisObject))) {
   return false;
  }
  let thatObject = /**@type {ValueType}*/ (JsUtils.uncheckedCast(o));
  let thisKeys = ValueType.filteredkeys(thisObject);
  if (thisKeys.length != ValueType.filteredkeys(thatObject).length) {
   return false;
  }
  for (let $array = thisKeys, $index = 0; $index < $array.length; $index++) {
   let p = $array[$index];
   {
    let p1 = JsUtils.getProperty(thisObject, p);
    let p2 = JsUtils.getProperty(thatObject, p);
    if (!ValueType.m_isAutoValueEqual__java_lang_Object__java_lang_Object__boolean(p1, p2)) {
     return false;
    }
   }
  }
  return true;
 }
 /** @nodts @return {boolean} */
 static m_isAutoValueEqual__java_lang_Object__java_lang_Object__boolean(/** * */ a, /** * */ b) {
  if ($Equality.$same(a, b)) {
   return true;
  }
  if ($Equality.$same(a, null) || $Equality.$same(b, null)) {
   return false;
  }
  if ($Arrays.$isStamped(a) && $Arrays.$isStamped(b)) {
   return $Equality.$same($Objects.m_getClass__java_lang_Object__java_lang_Class(a), $Objects.m_getClass__java_lang_Object__java_lang_Class(b)) && Arrays.m_equals__arrayOf_java_lang_Object__arrayOf_java_lang_Object__boolean(/**@type {Array<*>}*/ (JsUtils.uncheckedCast(a)), /**@type {Array<*>}*/ (JsUtils.uncheckedCast(b)));
  }
  return $Objects.m_equals__java_lang_Object__java_lang_Object__boolean(a, b);
 }
 /** @nodts @return {number} */
 static m_hashCode__javaemul_internal_ValueType__int(/** ValueType */ thisObject) {
  ValueType.$clinit();
  let hashCode = 1;
  for (let $array = ValueType.filteredkeys(thisObject), $index = 0; $index < $array.length; $index++) {
   let key = $array[$index];
   {
    let value = JsUtils.getProperty(thisObject, key);
    if ($Equality.$same(value, null)) {
     continue;
    }
    let h = $Arrays.$isStamped(value) ? Arrays.m_hashCode__arrayOf_java_lang_Object__int(/**@type {Array<*>}*/ (JsUtils.uncheckedCast(value))) : $Objects.m_hashCode__java_lang_Object__int(value);
    hashCode = Math.imul(1000003, hashCode) ^ h;
   }
  }
  return hashCode;
 }
 /** @nodts @return {?string} */
 static m_toString__javaemul_internal_ValueType__java_lang_String(/** ValueType */ thisObject) {
  ValueType.$clinit();
  let className = $Objects.m_getClass__java_lang_Object__java_lang_Class(thisObject).m_getSimpleName__java_lang_String();
  className = j_l_String.m_substring__java_lang_String__int__java_lang_String(className, j_l_String.m_lastIndexOf__java_lang_String__java_lang_String__int(className, 'AutoValue_') + 1 | 0);
  let joiner = StringJoiner.$create__java_lang_CharSequence__java_lang_CharSequence__java_lang_CharSequence(', ', j_l_String.m_valueOf__java_lang_Object__java_lang_String(className) + '{', '}');
  for (let $array = ValueType.filteredkeys(thisObject), $index = 0; $index < $array.length; $index++) {
   let p = $array[$index];
   {
    let value = JsUtils.getProperty(thisObject, p);
    if (Array.isArray(value)) {
     value = '[' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value) + ']';
    }
    p = ValueType.m_cleanMangledPropertyName__java_lang_String__java_lang_String(p);
    joiner.m_add__java_lang_CharSequence__java_util_StringJoiner(j_l_String.m_valueOf__java_lang_Object__java_lang_String(p) + '=' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value));
   }
  }
  return joiner.toString();
 }
 /** @nodts @return {?string} */
 static m_cleanMangledPropertyName__java_lang_String__java_lang_String(/** ?string */ name) {
  if (ValueType.f_COMPILED__javaemul_internal_ValueType_) {
   return name;
  }
  let index = j_l_String.m_startsWith__java_lang_String__java_lang_String__boolean(name, 'f_') ? j_l_String.m_indexOf__java_lang_String__java_lang_String__int__int(name, '__', 2) : - 1 | 0;
  if (index != (- 1 | 0)) {
   return j_l_String.m_substring__java_lang_String__int__int__java_lang_String(name, 2, index);
  }
  index = j_l_String.m_lastIndexOf__java_lang_String__java_lang_String__int(name, '_$');
  return index == (- 1 | 0) ? name : j_l_String.m_substring__java_lang_String__int__int__java_lang_String(name, 0, index);
 }
 // /** @return {Array<?string>} */
 // native static filteredkeys(/** ValueType */ type) 
 // 
 // native static mixin(/** Constructor */ target, /** Constructor */ source, /** number */ mask, .../** ...?string */ excludes) 
 /** @nodts */
 static $clinit() {
  ValueType.$clinit = () =>{};
  ValueType.$loadModules();
  j_l_Object.$clinit();
  ValueType.f_COMPILED__javaemul_internal_ValueType_ = j_l_String.m_equals__java_lang_String__java_lang_Object__boolean('true', $Util.$getDefine('COMPILED', 'false'));
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ValueType;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  StringJoiner = goog.module.get('java.util.StringJoiner$impl');
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
}
/**@type {boolean} @nodts*/
ValueType.f_COMPILED__javaemul_internal_ValueType_ = false;
$Util.$setClassMetadata(ValueType, 'javaemul.internal.ValueType');

/* NATIVE.JS EPILOG */

const javaemul_internal_ValueType = ValueType;

/** @const {!Array<string>|undefined} */
ValueType.prototype.$excluded_fields;

/**
 * @param {!ValueType} type
 * @return {!Array<string>}
 */
ValueType.filteredkeys = function(type) {
  const keys = Object.keys(type);
  const excludedFields = type.$excluded_fields;
  return excludedFields ? keys.filter(x => !excludedFields.includes(x)) : keys;
};

/**
 * @param {!Constructor} target Target.
 * @param {!Constructor} source Source.
 * @param {number} flags
 * @param {...string} excluded_fields
 */
ValueType.mixin = function(target, source, flags, ...excluded_fields) {
  if (flags & 1) target.prototype.equals = source.prototype.equals;
  if (flags & 2) target.prototype.hashCode = source.prototype.hashCode;
  if (flags & 4) target.prototype.toString = source.prototype.toString;
  if (excluded_fields) {
    target.prototype.$excluded_fields = excluded_fields;
  }
};


exports = ValueType;

//# sourceMappingURL=ValueType.js.map
