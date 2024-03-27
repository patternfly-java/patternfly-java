goog.module('elemental2.core.Reflect.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @template THIS, RESULT @return {RESULT} */
 static m_apply__elemental2_core_Reflect_ApplyTargetFn__java_lang_Object__arrayOf_java_lang_Object__java_lang_Object(/** ?function(...*):? */ targetFn, /** THIS */ thisArg, /** Array<*> */ argList) {
  $Overlay.$clinit();
  return Reflect.apply(targetFn, thisArg, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(argList)));
 }
 /** @final @nodts @template TARGET @return {TARGET} */
 static m_construct__java_lang_Class__elemental2_core_JsArray__java_lang_Class__java_lang_Object(/** Class<?> */ targetConstructorFn, /** Array<*> */ argList, /** Class<?> */ newTargetConstructorFn) {
  $Overlay.$clinit();
  return Reflect.construct(/**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class__jsinterop_base_JsConstructorFn(targetConstructorFn)), argList, /**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class__jsinterop_base_JsConstructorFn(newTargetConstructorFn)));
 }
 /** @final @nodts @template TARGET @return {TARGET} */
 static m_construct__java_lang_Class__elemental2_core_JsArray__java_lang_Object(/** Class<?> */ targetConstructorFn, /** Array<*> */ argList) {
  $Overlay.$clinit();
  return Reflect.construct(/**@type {?function(...*):void}*/ (Js.m_asConstructorFn__java_lang_Class__jsinterop_base_JsConstructorFn(targetConstructorFn)), argList);
 }
 /** @final @nodts @template TARGET @return {TARGET} */
 static m_construct__java_lang_Class__arrayOf_java_lang_Object__java_lang_Class__java_lang_Object(/** Class<?> */ targetConstructorFn, /** Array<*> */ argList, /** Class<?> */ newTargetConstructorFn) {
  $Overlay.$clinit();
  return $Overlay.m_construct__java_lang_Class__elemental2_core_JsArray__java_lang_Class__java_lang_Object(targetConstructorFn, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(argList)), newTargetConstructorFn);
 }
 /** @final @nodts @template TARGET @return {TARGET} */
 static m_construct__java_lang_Class__arrayOf_java_lang_Object__java_lang_Object(/** Class<?> */ targetConstructorFn, /** Array<*> */ argList) {
  $Overlay.$clinit();
  return $Overlay.m_construct__java_lang_Class__elemental2_core_JsArray__java_lang_Object(targetConstructorFn, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(argList)));
 }
 /** @final @nodts @template TARGET @return {TARGET} */
 static m_construct__jsinterop_base_JsConstructorFn__arrayOf_java_lang_Object__jsinterop_base_JsConstructorFn__java_lang_Object(/** ?function(...*):void */ targetConstructorFn, /** Array<*> */ argList, /** ?function(...*):void */ newTargetConstructorFn) {
  $Overlay.$clinit();
  return Reflect.construct(targetConstructorFn, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(argList)), newTargetConstructorFn);
 }
 /** @final @nodts @template TARGET @return {TARGET} */
 static m_construct__jsinterop_base_JsConstructorFn__arrayOf_java_lang_Object__java_lang_Object(/** ?function(...*):void */ targetConstructorFn, /** Array<*> */ argList) {
  $Overlay.$clinit();
  return Reflect.construct(targetConstructorFn, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(argList)));
 }
 /** @final @nodts @return {boolean} */
 static m_defineProperty__java_lang_Object__java_lang_String__elemental2_core_ObjectPropertyDescriptor__boolean(/** * */ target, /** ?string */ propertyKey, /** ObjectPropertyDescriptor */ attributes) {
  $Overlay.$clinit();
  return Reflect.defineProperty(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)), propertyKey, attributes);
 }
 /** @final @nodts @return {boolean} */
 static m_deleteProperty__java_lang_Object__java_lang_String__boolean(/** * */ target, /** ?string */ propertyKey) {
  $Overlay.$clinit();
  return Reflect.deleteProperty(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)), propertyKey);
 }
 /** @final @nodts @return {*} */
 static m_get__java_lang_Object__java_lang_String__java_lang_Object__java_lang_Object(/** * */ target, /** ?string */ propertyKey, /** * */ receiver) {
  $Overlay.$clinit();
  return Reflect.get(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)), propertyKey, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(receiver)));
 }
 /** @final @nodts @return {*} */
 static m_get__java_lang_Object__java_lang_String__java_lang_Object(/** * */ target, /** ?string */ propertyKey) {
  $Overlay.$clinit();
  return Reflect.get(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)), propertyKey);
 }
 /** @final @nodts @return {ObjectPropertyDescriptor} */
 static m_getOwnPropertyDescriptor__java_lang_Object__java_lang_String__elemental2_core_ObjectPropertyDescriptor(/** * */ target, /** ?string */ propertyKey) {
  $Overlay.$clinit();
  return Reflect.getOwnPropertyDescriptor(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)), propertyKey);
 }
 /** @final @nodts @return {Object} */
 static m_getPrototypeOf__java_lang_Object__elemental2_core_JsObject(/** * */ target) {
  $Overlay.$clinit();
  return Reflect.getPrototypeOf(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)));
 }
 /** @final @nodts @return {boolean} */
 static m_has__java_lang_Object__java_lang_String__boolean(/** * */ target, /** ?string */ propertyKey) {
  $Overlay.$clinit();
  return Reflect.has(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)), propertyKey);
 }
 /** @final @nodts @return {boolean} */
 static m_isExtensible__java_lang_Object__boolean(/** * */ target) {
  $Overlay.$clinit();
  return Reflect.isExtensible(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)));
 }
 /** @final @nodts @return {Array<?>} */
 static m_ownKeys__java_lang_Object__elemental2_core_JsArray(/** * */ target) {
  $Overlay.$clinit();
  return Reflect.ownKeys(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)));
 }
 /** @final @nodts @return {boolean} */
 static m_preventExtensions__java_lang_Object__boolean(/** * */ target) {
  $Overlay.$clinit();
  return Reflect.preventExtensions(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)));
 }
 /** @final @nodts @return {boolean} */
 static m_set__java_lang_Object__java_lang_String__java_lang_Object__java_lang_Object__boolean(/** * */ target, /** ?string */ propertyKey, /** * */ value, /** * */ receiver) {
  $Overlay.$clinit();
  return Reflect.set(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)), propertyKey, value, /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(receiver)));
 }
 /** @final @nodts @return {boolean} */
 static m_set__java_lang_Object__java_lang_String__java_lang_Object__boolean(/** * */ target, /** ?string */ propertyKey, /** * */ value) {
  $Overlay.$clinit();
  return Reflect.set(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)), propertyKey, value);
 }
 /** @final @nodts @return {boolean} */
 static m_setPrototypeOf__java_lang_Object__java_lang_Object__boolean(/** * */ target, /** * */ proto) {
  $Overlay.$clinit();
  return Reflect.setPrototypeOf(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(target)), /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(proto)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Reflect;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Reflect');

exports = $Overlay;

//# sourceMappingURL=Reflect$$Overlay.js.map
