goog.module('java.lang.JsException$impl');

const RuntimeException = goog.require('java.lang.RuntimeException$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class JsException extends RuntimeException {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {*} @nodts*/
  this.f_backingJsObject__java_lang_JsException_;
 }
 //Factory method corresponding to constructor 'JsException(Object)'.
 /** @nodts @return {!JsException} */
 static $create__java_lang_Object(/** * */ backingJsObject) {
  JsException.$clinit();
  let $instance = new JsException();
  $instance.$ctor__java_lang_JsException__java_lang_Object__void(backingJsObject);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'JsException(Object)'.
 /** @nodts */
 $ctor__java_lang_JsException__java_lang_Object__void(/** * */ backingJsObject) {
  this.$ctor__java_lang_RuntimeException__java_lang_Object__void(backingJsObject);
  this.$init__void_$p_java_lang_JsException();
  this.f_backingJsObject__java_lang_JsException_ = backingJsObject;
 }
 //Factory method corresponding to constructor 'JsException(String)'.
 /** @nodts @return {!JsException} */
 static $create__java_lang_String(/** ?string */ msg) {
  JsException.$clinit();
  let $instance = new JsException();
  $instance.$ctor__java_lang_JsException__java_lang_String__void(msg);
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'JsException(String)'.
 /** @nodts */
 $ctor__java_lang_JsException__java_lang_String__void(/** ?string */ msg) {
  this.$ctor__java_lang_RuntimeException__java_lang_String__void(msg);
  this.$init__void_$p_java_lang_JsException();
 }
 //Factory method corresponding to constructor 'JsException()'.
 /** @nodts @return {!JsException} */
 static $create__() {
  JsException.$clinit();
  let $instance = new JsException();
  $instance.$ctor__java_lang_JsException__void();
  $instance.m_privateInitError__java_lang_Object__void_$pp_java_lang(new Error($instance));
  return $instance;
 }
 //Initialization from constructor 'JsException()'.
 /** @nodts */
 $ctor__java_lang_JsException__void() {
  this.$ctor__java_lang_RuntimeException__void();
  this.$init__void_$p_java_lang_JsException();
 }
 /** @override @nodts */
 m_privateInitError__java_lang_Object__void_$pp_java_lang(/** * */ error) {
  super.m_privateInitError__java_lang_Object__void_$pp_java_lang($Equality.$same(this.f_backingJsObject__java_lang_JsException_, JsException.f_UNINITIALIZED__java_lang_JsException_) ? error : this.f_backingJsObject__java_lang_JsException_);
 }
 /** @private @nodts */
 $init__void_$p_java_lang_JsException() {
  this.f_backingJsObject__java_lang_JsException_ = JsException.f_UNINITIALIZED__java_lang_JsException_;
 }
 /** @nodts */
 static $clinit() {
  JsException.$clinit = () =>{};
  JsException.$loadModules();
  RuntimeException.$clinit();
  JsException.f_UNINITIALIZED__java_lang_JsException_ = '__noinit__';
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JsException;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
/**@type {*} @nodts*/
JsException.f_UNINITIALIZED__java_lang_JsException_;
$Util.$setClassMetadata(JsException, 'java.lang.JsException');

exports = JsException;

//# sourceMappingURL=JsException.js.map
