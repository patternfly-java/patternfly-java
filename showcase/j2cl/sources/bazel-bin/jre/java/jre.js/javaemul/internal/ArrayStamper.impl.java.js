goog.module('javaemul.internal.ArrayStamper$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsUtils = goog.forwardDeclare('javaemul.internal.JsUtils$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

class ArrayStamper extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ArrayStamper} */
 static $create__() {
  ArrayStamper.$clinit();
  let $instance = new ArrayStamper();
  $instance.$ctor__javaemul_internal_ArrayStamper__void();
  return $instance;
 }
 /** @nodts */
 $ctor__javaemul_internal_ArrayStamper__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @template T @return {Array<T>} */
 static m_stampJavaTypeInfo__java_lang_Object__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/** * */ array, /** Array<T> */ referenceType) {
  ArrayStamper.$clinit();
  let asArray = /**@type {Array<T>}*/ (JsUtils.uncheckedCast(array));
  $Arrays.$copyType(asArray, referenceType);
  return asArray;
 }
 /** @nodts @template T @return {T} */
 static m_stampJavaTypeInfo__java_lang_Object__java_lang_Object__java_lang_Object(/** T */ array, /** T */ referenceType) {
  ArrayStamper.$clinit();
  $Arrays.$copyType(/**@type {Array<*>}*/ (JsUtils.uncheckedCast(array)), /**@type {Array<*>}*/ (JsUtils.uncheckedCast(referenceType)));
  return array;
 }
 /** @nodts */
 static $clinit() {
  ArrayStamper.$clinit = () =>{};
  ArrayStamper.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ArrayStamper;
 }
 
 /** @nodts */
 static $loadModules() {
  JsUtils = goog.module.get('javaemul.internal.JsUtils$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
$Util.$setClassMetadata(ArrayStamper, 'javaemul.internal.ArrayStamper');

exports = ArrayStamper;

//# sourceMappingURL=ArrayStamper.js.map
