goog.module('java.util.logging.Handler$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Formatter = goog.forwardDeclare('java.util.logging.Formatter$impl');
let Level = goog.forwardDeclare('java.util.logging.Level$impl');
let LogRecord = goog.forwardDeclare('java.util.logging.LogRecord$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

/**
 * @abstract
 */
class Handler extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Formatter} @nodts*/
  this.f_formatter__java_util_logging_Handler_;
  /**@type {Level} @nodts*/
  this.f_level__java_util_logging_Handler_;
 }
 /** @nodts */
 $ctor__java_util_logging_Handler__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @abstract @nodts */
 m_close__void() {}
 /** @abstract @nodts */
 m_flush__void() {}
 /** @nodts @return {Formatter} */
 m_getFormatter__java_util_logging_Formatter() {
  return this.f_formatter__java_util_logging_Handler_;
 }
 /** @nodts @return {Level} */
 m_getLevel__java_util_logging_Level() {
  if (!$Equality.$same(this.f_level__java_util_logging_Handler_, null)) {
   return this.f_level__java_util_logging_Handler_;
  }
  return Level.f_ALL__java_util_logging_Level;
 }
 /** @nodts @return {boolean} */
 m_isLoggable__java_util_logging_LogRecord__boolean(/** LogRecord */ record) {
  return this.m_getLevel__java_util_logging_Level().m_intValue__int() <= record.m_getLevel__java_util_logging_Level().m_intValue__int();
 }
 /** @abstract @nodts */
 m_publish__java_util_logging_LogRecord__void(/** LogRecord */ record) {}
 /** @nodts */
 m_setFormatter__java_util_logging_Formatter__void(/** Formatter */ newFormatter) {
  this.f_formatter__java_util_logging_Handler_ = newFormatter;
 }
 /** @nodts */
 m_setLevel__java_util_logging_Level__void(/** Level */ newLevel) {
  this.f_level__java_util_logging_Handler_ = newLevel;
 }
 /** @nodts */
 static $clinit() {
  Handler.$clinit = () =>{};
  Handler.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Handler;
 }
 
 /** @nodts */
 static $loadModules() {
  Level = goog.module.get('java.util.logging.Level$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(Handler, 'java.util.logging.Handler');

exports = Handler;

//# sourceMappingURL=Handler.js.map
