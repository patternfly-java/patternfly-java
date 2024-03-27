goog.module('javaemul.internal.Constructor.$Overlay$impl');

const Constructor = goog.require('javaemul.internal.Constructor');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Constructor_Util = goog.forwardDeclare('nativebootstrap.Util');

/** @nodts */
class $Overlay {
 /** @nodts @return {Constructor} */
 static m_of__java_lang_Object__javaemul_internal_Constructor(/** * */ obj) {
  $Overlay.$clinit();
  return /**@type {Constructor}*/ (JsUtils.getProperty(obj, 'constructor'));
 }
 /** @final @nodts @return {Constructor} */
 static m_getSuperConstructor__$devirt__javaemul_internal_Constructor__javaemul_internal_Constructor(/** !Constructor */ $thisArg) {
  $Overlay.$clinit();
  let parentCtor = $Overlay.m_of__java_lang_Object__javaemul_internal_Constructor(Object.getPrototypeOf($thisArg.prototype));
  return $Equality.$same(parentCtor, Object) ? null : parentCtor;
 }
 /** @final @nodts @return {boolean} */
 static m_isInterface__$devirt__javaemul_internal_Constructor__boolean(/** !Constructor */ $thisArg) {
  $Overlay.$clinit();
  return $Constructor_Util.$extractClassType($thisArg) == $Constructor_Util.TYPE_INTERFACE;
 }
 /** @final @nodts @return {boolean} */
 static m_isEnum__$devirt__javaemul_internal_Constructor__boolean(/** !Constructor */ $thisArg) {
  $Overlay.$clinit();
  return $Constructor_Util.$extractClassType($thisArg) == $Constructor_Util.TYPE_ENUM;
 }
 /** @final @nodts @return {boolean} */
 static m_isPrimitive__$devirt__javaemul_internal_Constructor__boolean(/** !Constructor */ $thisArg) {
  $Overlay.$clinit();
  return $Constructor_Util.$extractClassType($thisArg) == $Constructor_Util.TYPE_PRIMITIVE;
 }
 /** @final @nodts @return {?string} */
 static m_getPrimitiveShortName__$devirt__javaemul_internal_Constructor__java_lang_String(/** !Constructor */ $thisArg) {
  $Overlay.$clinit();
  return $Constructor_Util.$extractPrimitiveShortName($thisArg);
 }
 /** @final @nodts @return {?string} */
 static m_getClassName__$devirt__javaemul_internal_Constructor__java_lang_String(/** !Constructor */ $thisArg) {
  $Overlay.$clinit();
  return $Constructor_Util.$extractClassName($thisArg);
 }
 /** @final @nodts @return {boolean} */
 static m_isPrimitiveType__$devirt__javaemul_internal_Constructor__boolean(/** !Constructor */ $thisArg) {
  $Overlay.$clinit();
  return $Constructor_Util.$isPrimitiveType($thisArg);
 }
 /** @final @nodts @return {Constructor} */
 static m_getBoxedConstructor__$devirt__javaemul_internal_Constructor__javaemul_internal_Constructor(/** !Constructor */ $thisArg) {
  $Overlay.$clinit();
  return $Constructor_Util.$getBoxedConstructor($thisArg);
 }
 /** @final @nodts @return {Constructor} */
 static m_getPrimitiveConstructor__$devirt__javaemul_internal_Constructor__javaemul_internal_Constructor(/** !Constructor */ $thisArg) {
  $Overlay.$clinit();
  return $Constructor_Util.$getPrimitiveConstructor($thisArg);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Constructor;
 }
 
 /** @nodts */
 static $loadModules() {
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Constructor_Util = goog.module.get('nativebootstrap.Util');
 }
}
$Util.$setClassMetadata($Overlay, 'javaemul.internal.Constructor');

exports = $Overlay;

//# sourceMappingURL=Constructor$$Overlay.js.map
