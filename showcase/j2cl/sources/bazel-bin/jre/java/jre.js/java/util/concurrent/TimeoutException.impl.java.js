goog.module('java.util.concurrent.TimeoutException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class TimeoutException extends Exception {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'TimeoutException()'.
 /** @nodts @return {!TimeoutException} */
 static $create__() {
  TimeoutException.$clinit();
  let $instance = new TimeoutException();
  $instance.$ctor__java_util_concurrent_TimeoutException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'TimeoutException()'.
 /** @nodts */
 $ctor__java_util_concurrent_TimeoutException__void() {
  this.$ctor__java_lang_Exception__void();
 }
 //Factory method corresponding to constructor 'TimeoutException(String)'.
 /** @nodts @return {!TimeoutException} */
 static $create__java_lang_String(/** ?string */ message) {
  TimeoutException.$clinit();
  let $instance = new TimeoutException();
  $instance.$ctor__java_util_concurrent_TimeoutException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'TimeoutException(String)'.
 /** @nodts */
 $ctor__java_util_concurrent_TimeoutException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_Exception__java_lang_String__void(message);
 }
 /** @nodts */
 static $clinit() {
  TimeoutException.$clinit = () =>{};
  TimeoutException.$loadModules();
  Exception.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TimeoutException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(TimeoutException, 'java.util.concurrent.TimeoutException');

exports = TimeoutException;

//# sourceMappingURL=TimeoutException.js.map
