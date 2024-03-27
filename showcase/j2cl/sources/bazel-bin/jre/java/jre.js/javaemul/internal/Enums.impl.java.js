goog.module('vmbootstrap.Enums$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let reflect = goog.forwardDeclare('goog.reflect');
let Enum = goog.forwardDeclare('java.lang.Enum$impl');
let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Constructor = goog.forwardDeclare('javaemul.internal.Constructor');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums_BoxedComparableLightEnum = goog.forwardDeclare('vmbootstrap.Enums.BoxedComparableLightEnum$impl');
let $Enums_BoxedLightEnum = goog.forwardDeclare('vmbootstrap.Enums.BoxedLightEnum$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class $Enums extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!$Enums} */
 static $create__() {
  $Enums.$clinit();
  let $instance = new $Enums();
  $instance.$ctor__javaemul_internal_Enums__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_Enums__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @template T @return {Map<?string, T>} */
 static createMapFromValues(/** Array<T> */ values) {
  $Enums.$clinit();
  let map = /**@type {!Map<?string, T>}*/ (new Map());
  for (let i = 0; i < values.length; i = i + 1 | 0) {
   let name = /**@type {!Enum<T>}*/ (values[i]).name();
   map.set(name, values[i]);
  }
  return map;
 }
 /** @template V @return {V} */
 static getValueFromNameAndMap(/** ?string */ name, /** Map<?string, V> */ map) {
  $Enums.$clinit();
  InternalPreconditions.m_checkCriticalNotNull__java_lang_Object__java_lang_Object(name);
  let enumValue = map.get(name);
  if ($Equality.$same(enumValue, null)) {
   throw $Exceptions.toJs(IllegalArgumentException.$create__());
  }
  return enumValue;
 }
 /** @template T @return {$Enums_BoxedLightEnum<T>} */
 static box(/** T */ value, /** Constructor */ ctor) {
  $Enums.$clinit();
  if ($Equality.$same(value, null)) {
   return null;
  }
  InternalPreconditions.m_checkArgument__boolean__void(!$Enums_BoxedLightEnum.$isInstance(value));
  return /**@type {$Enums_BoxedLightEnum<T>}*/ ($Casts.$to(reflect.cache(ctor, '$$enumValues/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value), () =>{
   return /**@type {!$Enums_BoxedLightEnum<T>}*/ (new $Enums_BoxedLightEnum(value, ctor));
  }), $Enums_BoxedLightEnum));
 }
 /** @template T @return {$Enums_BoxedComparableLightEnum<T>} */
 static boxComparable(/** T */ value, /** Constructor */ ctor) {
  $Enums.$clinit();
  if ($Equality.$same(value, null)) {
   return null;
  }
  InternalPreconditions.m_checkArgument__boolean__void(!$Enums_BoxedLightEnum.$isInstance(value));
  return /**@type {$Enums_BoxedComparableLightEnum<T>}*/ ($Casts.$to(reflect.cache(ctor, '$$enumValues/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(value), () =>{
   return /**@type {!$Enums_BoxedComparableLightEnum<T>}*/ (new $Enums_BoxedComparableLightEnum(value, ctor));
  }), $Enums_BoxedComparableLightEnum));
 }
 /** @return {*} */
 static unbox(/** * */ object) {
  $Enums.$clinit();
  if ($Equality.$same(object, null)) {
   return null;
  }
  let boxedEnum = /**@type {$Enums_BoxedLightEnum<*>}*/ ($Casts.$to(object, $Enums_BoxedLightEnum));
  return boxedEnum.f_value__javaemul_internal_Enums_BoxedLightEnum;
 }
 /** @return {boolean} */
 static isInstanceOf(/** * */ instance, /** Constructor */ ctor) {
  $Enums.$clinit();
  return $Enums_BoxedLightEnum.$isInstance(instance) && $Equality.$same(/**@type {$Enums_BoxedLightEnum}*/ ($Casts.$to(instance, $Enums_BoxedLightEnum)).constructor, ctor);
 }
 /** @nodts */
 static $clinit() {
  $Enums.$clinit = () =>{};
  $Enums.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $Enums;
 }
 
 /** @nodts */
 static $loadModules() {
  reflect = goog.module.get('goog.reflect');
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums_BoxedComparableLightEnum = goog.module.get('vmbootstrap.Enums.BoxedComparableLightEnum$impl');
  $Enums_BoxedLightEnum = goog.module.get('vmbootstrap.Enums.BoxedLightEnum$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
$Util.$setClassMetadata($Enums, 'javaemul.internal.Enums');

exports = $Enums;

//# sourceMappingURL=Enums.js.map
