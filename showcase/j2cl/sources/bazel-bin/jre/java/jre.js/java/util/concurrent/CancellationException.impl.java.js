goog.module('java.util.concurrent.CancellationException$impl');

const IllegalStateException = goog.require('java.lang.IllegalStateException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class CancellationException extends IllegalStateException {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'CancellationException()'.
 /** @nodts @return {!CancellationException} */
 static $create__() {
  CancellationException.$clinit();
  let $instance = new CancellationException();
  $instance.$ctor__java_util_concurrent_CancellationException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'CancellationException()'.
 /** @nodts */
 $ctor__java_util_concurrent_CancellationException__void() {
  this.$ctor__java_lang_IllegalStateException__void();
 }
 //Factory method corresponding to constructor 'CancellationException(String)'.
 /** @nodts @return {!CancellationException} */
 static $create__java_lang_String(/** ?string */ message) {
  CancellationException.$clinit();
  let $instance = new CancellationException();
  $instance.$ctor__java_util_concurrent_CancellationException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'CancellationException(String)'.
 /** @nodts */
 $ctor__java_util_concurrent_CancellationException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_IllegalStateException__java_lang_String__void(message);
 }
 /** @nodts */
 static $clinit() {
  CancellationException.$clinit = () =>{};
  CancellationException.$loadModules();
  IllegalStateException.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CancellationException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(CancellationException, 'java.util.concurrent.CancellationException');

exports = CancellationException;

//# sourceMappingURL=CancellationException.js.map
