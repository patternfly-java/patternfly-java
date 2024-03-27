goog.module('java.lang.invoke.SerializedLambda$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

/**
 * @final
 * @implements {Serializable}
 */
class SerializedLambda extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SerializedLambda} */
 static $create__() {
  SerializedLambda.$clinit();
  let $instance = new SerializedLambda();
  $instance.$ctor__java_lang_invoke_SerializedLambda__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_invoke_SerializedLambda__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {*} */
 m_getCapturedArg__int__java_lang_Object(/** number */ i) {
  return null;
 }
 /** @nodts @return {?string} */
 m_getFunctionalInterfaceClass__java_lang_String() {
  return null;
 }
 /** @nodts @return {?string} */
 m_getFunctionalInterfaceMethodName__java_lang_String() {
  return null;
 }
 /** @nodts @return {?string} */
 m_getFunctionalInterfaceMethodSignature__java_lang_String() {
  return null;
 }
 /** @nodts @return {?string} */
 m_getImplClass__java_lang_String() {
  return null;
 }
 /** @nodts @return {number} */
 m_getImplMethodKind__int() {
  return 0;
 }
 /** @nodts @return {?string} */
 m_getImplMethodName__java_lang_String() {
  return null;
 }
 /** @nodts @return {?string} */
 m_getImplMethodSignature__java_lang_String() {
  return null;
 }
 /** @nodts */
 static $clinit() {
  SerializedLambda.$clinit = () =>{};
  SerializedLambda.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SerializedLambda;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Serializable.$markImplementor(SerializedLambda);
$Util.$setClassMetadata(SerializedLambda, 'java.lang.invoke.SerializedLambda');

exports = SerializedLambda;

//# sourceMappingURL=SerializedLambda.js.map
