goog.module('java.lang.invoke.MethodType$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class MethodType extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!MethodType} */
 static $create__() {
  MethodType.$clinit();
  let $instance = new MethodType();
  $instance.$ctor__java_lang_invoke_MethodType__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_invoke_MethodType__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  MethodType.$clinit = () =>{};
  MethodType.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MethodType;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(MethodType, 'java.lang.invoke.MethodType');

exports = MethodType;

//# sourceMappingURL=MethodType.js.map
