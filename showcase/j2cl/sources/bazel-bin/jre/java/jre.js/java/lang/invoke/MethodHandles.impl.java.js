goog.module('java.lang.invoke.MethodHandles$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class MethodHandles extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!MethodHandles} */
 static $create__() {
  MethodHandles.$clinit();
  let $instance = new MethodHandles();
  $instance.$ctor__java_lang_invoke_MethodHandles__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_invoke_MethodHandles__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  MethodHandles.$clinit = () =>{};
  MethodHandles.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MethodHandles;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(MethodHandles, 'java.lang.invoke.MethodHandles');

exports = MethodHandles;

//# sourceMappingURL=MethodHandles.js.map
