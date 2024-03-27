goog.module('java.lang.invoke.CallSite$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class CallSite extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!CallSite} */
 static $create__() {
  CallSite.$clinit();
  let $instance = new CallSite();
  $instance.$ctor__java_lang_invoke_CallSite__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_lang_invoke_CallSite__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  CallSite.$clinit = () =>{};
  CallSite.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CallSite;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(CallSite, 'java.lang.invoke.CallSite');

exports = CallSite;

//# sourceMappingURL=CallSite.js.map
