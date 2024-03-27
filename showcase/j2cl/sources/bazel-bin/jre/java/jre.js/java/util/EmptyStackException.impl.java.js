goog.module('java.util.EmptyStackException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class EmptyStackException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!EmptyStackException} */
 static $create__() {
  EmptyStackException.$clinit();
  let $instance = new EmptyStackException();
  $instance.$ctor__java_util_EmptyStackException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_EmptyStackException__void() {
  this.$ctor__java_lang_RuntimeException__void();
 }
 /** @nodts */
 static $clinit() {
  EmptyStackException.$clinit = () =>{};
  EmptyStackException.$loadModules();
  RuntimeException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EmptyStackException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(EmptyStackException, 'java.util.EmptyStackException');

exports = EmptyStackException;

//# sourceMappingURL=EmptyStackException.js.map
