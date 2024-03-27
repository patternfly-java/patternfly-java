goog.module('java.util.logging.LogRecord$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Long = goog.require('nativebootstrap.Long$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let System = goog.forwardDeclare('java.lang.System$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let Level = goog.forwardDeclare('java.util.logging.Level$impl');

/**
 * @implements {Serializable}
 */
class LogRecord extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {Level} @nodts*/
  this.f_level__java_util_logging_LogRecord_;
  /**@type {?string} @nodts*/
  this.f_loggerName__java_util_logging_LogRecord_;
  /**@type {?string} @nodts*/
  this.f_msg__java_util_logging_LogRecord_;
  /**@type {Throwable} @nodts*/
  this.f_thrown__java_util_logging_LogRecord_;
  /**@type {!$Long} @nodts*/
  this.f_millis__java_util_logging_LogRecord_ = $Long.fromInt(0);
 }
 //Factory method corresponding to constructor 'LogRecord(Level, String)'.
 /** @nodts @return {!LogRecord} */
 static $create__java_util_logging_Level__java_lang_String(/** Level */ level, /** ?string */ msg) {
  LogRecord.$clinit();
  let $instance = new LogRecord();
  $instance.$ctor__java_util_logging_LogRecord__java_util_logging_Level__java_lang_String__void(level, msg);
  return $instance;
 }
 //Initialization from constructor 'LogRecord(Level, String)'.
 /** @nodts */
 $ctor__java_util_logging_LogRecord__java_util_logging_Level__java_lang_String__void(/** Level */ level, /** ?string */ msg) {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_logging_LogRecord();
  this.f_level__java_util_logging_LogRecord_ = level;
  this.f_msg__java_util_logging_LogRecord_ = msg;
  this.f_millis__java_util_logging_LogRecord_ = System.m_currentTimeMillis__long();
 }
 //Factory method corresponding to constructor 'LogRecord()'.
 /** @nodts @return {!LogRecord} */
 static $create__() {
  LogRecord.$clinit();
  let $instance = new LogRecord();
  $instance.$ctor__java_util_logging_LogRecord__void();
  return $instance;
 }
 //Initialization from constructor 'LogRecord()'.
 /** @nodts */
 $ctor__java_util_logging_LogRecord__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_logging_LogRecord();
 }
 /** @nodts @return {Level} */
 m_getLevel__java_util_logging_Level() {
  return this.f_level__java_util_logging_LogRecord_;
 }
 /** @nodts @return {?string} */
 m_getLoggerName__java_lang_String() {
  return this.f_loggerName__java_util_logging_LogRecord_;
 }
 /** @nodts @return {?string} */
 m_getMessage__java_lang_String() {
  return this.f_msg__java_util_logging_LogRecord_;
 }
 /** @nodts @return {!$Long} */
 m_getMillis__long() {
  return this.f_millis__java_util_logging_LogRecord_;
 }
 /** @nodts @return {Throwable} */
 m_getThrown__java_lang_Throwable() {
  return this.f_thrown__java_util_logging_LogRecord_;
 }
 /** @nodts */
 m_setLevel__java_util_logging_Level__void(/** Level */ newLevel) {
  this.f_level__java_util_logging_LogRecord_ = newLevel;
 }
 /** @nodts */
 m_setLoggerName__java_lang_String__void(/** ?string */ newName) {
  this.f_loggerName__java_util_logging_LogRecord_ = newName;
 }
 /** @nodts */
 m_setMessage__java_lang_String__void(/** ?string */ newMessage) {
  this.f_msg__java_util_logging_LogRecord_ = newMessage;
 }
 /** @nodts */
 m_setMillis__long__void(/** !$Long */ newMillis) {
  this.f_millis__java_util_logging_LogRecord_ = newMillis;
 }
 /** @nodts */
 m_setThrown__java_lang_Throwable__void(/** Throwable */ newThrown) {
  this.f_thrown__java_util_logging_LogRecord_ = newThrown;
 }
 /** @private @nodts */
 $init__void_$p_java_util_logging_LogRecord() {
  this.f_loggerName__java_util_logging_LogRecord_ = '';
  this.f_thrown__java_util_logging_LogRecord_ = null;
 }
 /** @nodts */
 static $clinit() {
  LogRecord.$clinit = () =>{};
  LogRecord.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LogRecord;
 }
 
 /** @nodts */
 static $loadModules() {
  System = goog.module.get('java.lang.System$impl');
 }
}
Serializable.$markImplementor(LogRecord);
$Util.$setClassMetadata(LogRecord, 'java.util.logging.LogRecord');

exports = LogRecord;

//# sourceMappingURL=LogRecord.js.map
