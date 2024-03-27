goog.module('java.lang.InterruptedException$impl');

const Exception = goog.require('java.lang.Exception$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class InterruptedException extends Exception {
 /** @protected @nodts */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'InterruptedException()'.
 /** @nodts @return {!InterruptedException} */
 static $create__() {
  InterruptedException.$clinit();
  let $instance = new InterruptedException();
  $instance.$ctor__java_lang_InterruptedException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'InterruptedException()'.
 /** @nodts */
 $ctor__java_lang_InterruptedException__void() {
  this.$ctor__java_lang_Exception__void();
 }
 //Factory method corresponding to constructor 'InterruptedException(String)'.
 /** @nodts @return {!InterruptedException} */
 static $create__java_lang_String(/** ?string */ message) {
  InterruptedException.$clinit();
  let $instance = new InterruptedException();
  $instance.$ctor__java_lang_InterruptedException__java_lang_String__void(message);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'InterruptedException(String)'.
 /** @nodts */
 $ctor__java_lang_InterruptedException__java_lang_String__void(/** ?string */ message) {
  this.$ctor__java_lang_Exception__java_lang_String__void(message);
 }
 /** @nodts */
 static $clinit() {
  InterruptedException.$clinit = () =>{};
  InterruptedException.$loadModules();
  Exception.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InterruptedException;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(InterruptedException, 'java.lang.InterruptedException');

exports = InterruptedException;

//# sourceMappingURL=InterruptedException.js.map
