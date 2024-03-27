goog.module('java.lang.invoke.LambdaMetafactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let CallSite = goog.forwardDeclare('java.lang.invoke.CallSite$impl');
let MethodHandle = goog.forwardDeclare('java.lang.invoke.MethodHandle$impl');
let Lookup = goog.forwardDeclare('java.lang.invoke.MethodHandles.Lookup$impl');
let MethodType = goog.forwardDeclare('java.lang.invoke.MethodType$impl');

class LambdaMetafactory extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LambdaMetafactory} */
 static $create__() {
  LambdaMetafactory.$clinit();
  let $instance = new LambdaMetafactory();
  $instance.$ctor__java_lang_invoke_LambdaMetafactory__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_invoke_LambdaMetafactory__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {CallSite} */
 static m_metafactory__java_lang_invoke_MethodHandles_Lookup__java_lang_String__java_lang_invoke_MethodType__java_lang_invoke_MethodType__java_lang_invoke_MethodHandle__java_lang_invoke_MethodType__java_lang_invoke_CallSite(/** Lookup */ caller, /** ?string */ interfaceMethodName, /** MethodType */ factoryType, /** MethodType */ interfaceMethodType, /** MethodHandle */ implementation, /** MethodType */ dynamicMethodType) {
  LambdaMetafactory.$clinit();
  return null;
 }
 /** @nodts @return {CallSite} */
 static m_altMetafactory__java_lang_invoke_MethodHandles_Lookup__java_lang_String__java_lang_invoke_MethodType__arrayOf_java_lang_Object__java_lang_invoke_CallSite(/** Lookup */ caller, /** ?string */ interfaceMethodName, /** MethodType */ factoryType, /** Array<*> */ a) {
  LambdaMetafactory.$clinit();
  return null;
 }
 /** @nodts */
 static $clinit() {
  LambdaMetafactory.$clinit = () =>{};
  LambdaMetafactory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LambdaMetafactory;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(LambdaMetafactory, 'java.lang.invoke.LambdaMetafactory');

exports = LambdaMetafactory;

//# sourceMappingURL=LambdaMetafactory.js.map
