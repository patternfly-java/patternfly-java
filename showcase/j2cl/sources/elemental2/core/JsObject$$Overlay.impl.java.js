goog.module('elemental2.core.JsObject.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {Object} */
 static m_assign__java_lang_Object__arrayOf_java_lang_Object__elemental2_core_JsObject(/** * */ target, /** Array<*> */ var_args) {
  $Overlay.$clinit();
  return Object.assign(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)), ...InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(/**@type {Array<Object>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(var_args))));
 }
 /** @final @nodts @return {Object} */
 static m_create__java_lang_Object__jsinterop_base_JsPropertyMap__elemental2_core_JsObject(/** * */ proto, /** Object<string, ObjectPropertyDescriptor<*>> */ properties) {
  $Overlay.$clinit();
  return Object.create(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(proto)), properties);
 }
 /** @final @nodts @return {Object} */
 static m_create__java_lang_Object__elemental2_core_JsObject(/** * */ proto) {
  $Overlay.$clinit();
  return Object.create(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(proto)));
 }
 /** @final @nodts @template T @return {T} */
 static m_defineProperty__java_lang_Object__java_lang_Object__elemental2_core_ObjectPropertyDescriptor__java_lang_Object(/** T */ obj, /** * */ prop, /** ObjectPropertyDescriptor<T> */ descriptor) {
  $Overlay.$clinit();
  return Object.defineProperty(obj, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(prop)), descriptor);
 }
 /** @final @nodts @template T @return {T} */
 static m_defineProperty__java_lang_Object__java_lang_String__elemental2_core_ObjectPropertyDescriptor__java_lang_Object(/** T */ obj, /** ?string */ prop, /** ObjectPropertyDescriptor<T> */ descriptor) {
  $Overlay.$clinit();
  return Object.defineProperty(obj, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(prop)), descriptor);
 }
 /** @final @nodts @template T @return {ObjectPropertyDescriptor<T>} */
 static m_getOwnPropertyDescriptor__java_lang_Object__java_lang_Object__elemental2_core_ObjectPropertyDescriptor(/** T */ obj, /** * */ prop) {
  $Overlay.$clinit();
  return /**@type {ObjectPropertyDescriptor<T>}*/ (Object.getOwnPropertyDescriptor(obj, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(prop))));
 }
 /** @final @nodts @template T @return {ObjectPropertyDescriptor<T>} */
 static m_getOwnPropertyDescriptor__java_lang_Object__java_lang_String__elemental2_core_ObjectPropertyDescriptor(/** T */ obj, /** ?string */ prop) {
  $Overlay.$clinit();
  return /**@type {ObjectPropertyDescriptor<T>}*/ (Object.getOwnPropertyDescriptor(obj, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(prop))));
 }
 /** @final @nodts @return {Object<string, ObjectPropertyDescriptor>} */
 static m_getOwnPropertyDescriptors__java_lang_Object__jsinterop_base_JsPropertyMap(/** * */ obj) {
  $Overlay.$clinit();
  return Object.getOwnPropertyDescriptors(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {Array<?string>} */
 static m_getOwnPropertyNames__java_lang_Object__elemental2_core_JsArray(/** * */ obj) {
  $Overlay.$clinit();
  return Object.getOwnPropertyNames(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {Array<*>} */
 static m_getOwnPropertySymbols__java_lang_Object__elemental2_core_JsArray(/** * */ obj) {
  $Overlay.$clinit();
  return Object.getOwnPropertySymbols(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {Object} */
 static m_getPrototypeOf__java_lang_Object__elemental2_core_JsObject(/** * */ obj) {
  $Overlay.$clinit();
  return Object.getPrototypeOf(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {boolean} */
 static m_hasOwn__elemental2_core_JsObject__java_lang_Object__boolean(/** Object */ obj, /** * */ propertyName) {
  $Overlay.$clinit();
  return Object.hasOwn(obj, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(propertyName)));
 }
 /** @final @nodts @return {boolean} */
 static m_hasOwn__elemental2_core_JsObject__java_lang_String__boolean(/** Object */ obj, /** ?string */ propertyName) {
  $Overlay.$clinit();
  return Object.hasOwn(obj, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(propertyName)));
 }
 /** @final @nodts @return {boolean} */
 static m_hasOwn__java_lang_Object__elemental2_core_JsObject_HasOwnPropertyNameUnionType__boolean(/** * */ obj, /** ? */ propertyName) {
  $Overlay.$clinit();
  return Object.hasOwn(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)), propertyName);
 }
 /** @final @nodts @return {boolean} */
 static m_hasOwn__java_lang_Object__java_lang_Object__boolean(/** * */ obj, /** * */ propertyName) {
  $Overlay.$clinit();
  return $Overlay.m_hasOwn__elemental2_core_JsObject__java_lang_Object__boolean(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)), propertyName);
 }
 /** @final @nodts @return {boolean} */
 static m_hasOwn__java_lang_Object__java_lang_String__boolean(/** * */ obj, /** ?string */ propertyName) {
  $Overlay.$clinit();
  return $Overlay.m_hasOwn__elemental2_core_JsObject__java_lang_String__boolean(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)), propertyName);
 }
 /** @final @nodts @return {boolean} */
 static m_isExtensible__java_lang_Object__boolean(/** * */ obj) {
  $Overlay.$clinit();
  return Object.isExtensible(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {boolean} */
 static m_isFrozen__java_lang_Object__boolean(/** * */ obj) {
  $Overlay.$clinit();
  return Object.isFrozen(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {boolean} */
 static m_isSealed__java_lang_Object__boolean(/** * */ obj) {
  $Overlay.$clinit();
  return Object.isSealed(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {Array<?string>} */
 static m_keys__java_lang_Object__elemental2_core_JsArray(/** * */ obj) {
  $Overlay.$clinit();
  return Object.keys(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)));
 }
 /** @final @nodts @return {Object} */
 static m_setPrototypeOf__java_lang_Object__java_lang_Object__elemental2_core_JsObject(/** * */ obj, /** * */ proto) {
  $Overlay.$clinit();
  return Object.setPrototypeOf(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(obj)), proto);
 }
 /** @final @nodts @return {boolean} */
 static m_isPrototypeOf__$devirt__elemental2_core_JsObject__java_lang_Object__boolean(/** !Object */ $thisArg, /** * */ other) {
  $Overlay.$clinit();
  return $thisArg.isPrototypeOf(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(other)));
 }
 /** @final @nodts @return {boolean} */
 static m_propertyIsEnumerable__$devirt__elemental2_core_JsObject__java_lang_Object__boolean(/** !Object */ $thisArg, /** * */ propertyName) {
  $Overlay.$clinit();
  return $thisArg.propertyIsEnumerable(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(propertyName)));
 }
 /** @final @nodts @return {boolean} */
 static m_propertyIsEnumerable__$devirt__elemental2_core_JsObject__java_lang_String__boolean(/** !Object */ $thisArg, /** ?string */ propertyName) {
  $Overlay.$clinit();
  return $thisArg.propertyIsEnumerable(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(propertyName)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 /** @nodts */
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Object');

exports = $Overlay;

//# sourceMappingURL=JsObject$$Overlay.js.map
