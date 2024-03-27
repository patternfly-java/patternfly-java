goog.module('java.lang.invoke.MethodHandle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class MethodHandle extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!MethodHandle} */
 static $create__() {
  MethodHandle.$clinit();
  let $instance = new MethodHandle();
  $instance.$ctor__java_lang_invoke_MethodHandle__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_invoke_MethodHandle__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  MethodHandle.$clinit = () =>{};
  MethodHandle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MethodHandle;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(MethodHandle, 'java.lang.invoke.MethodHandle');

exports = MethodHandle;

//# sourceMappingURL=MethodHandle.js.map
