goog.module('java.util.logging.SimpleConsoleLogHandler$impl');

const Handler = goog.require('java.util.logging.Handler$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Level = goog.forwardDeclare('java.util.logging.Level$impl');
let LogRecord = goog.forwardDeclare('java.util.logging.LogRecord$impl');
let ConsoleLogger = goog.forwardDeclare('javaemul.internal.ConsoleLogger$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class SimpleConsoleLogHandler extends Handler {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!SimpleConsoleLogHandler} */
 static $create__() {
  SimpleConsoleLogHandler.$clinit();
  let $instance = new SimpleConsoleLogHandler();
  $instance.$ctor__java_util_logging_SimpleConsoleLogHandler__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_SimpleConsoleLogHandler__void() {
  this.$ctor__java_util_logging_Handler__void();
 }
 /** @override @nodts */
 m_publish__java_util_logging_LogRecord__void(/** LogRecord */ record) {
  let console = ConsoleLogger.m_createIfSupported__javaemul_internal_ConsoleLogger();
  if ($Equality.$same(console, null)) {
   return;
  }
  if (!this.m_isLoggable__java_util_logging_LogRecord__boolean(record)) {
   return;
  }
  let level = this.m_toConsoleLogLevel__java_util_logging_Level__java_lang_String_$p_java_util_logging_SimpleConsoleLogHandler(record.m_getLevel__java_util_logging_Level());
  console.m_log__java_lang_String__java_lang_String__void(level, record.m_getMessage__java_lang_String());
  if (!$Equality.$same(record.m_getThrown__java_lang_Throwable(), null)) {
   console.m_log__java_lang_String__java_lang_Throwable__void(level, record.m_getThrown__java_lang_Throwable());
  }
 }
 /** @nodts @return {?string} */
 m_toConsoleLogLevel__java_util_logging_Level__java_lang_String_$p_java_util_logging_SimpleConsoleLogHandler(/** Level */ level) {
  let val = level.m_intValue__int();
  if (val >= Level.f_SEVERE__java_util_logging_Level.m_intValue__int()) {
   return 'error';
  } else if (val >= Level.f_WARNING__java_util_logging_Level.m_intValue__int()) {
   return 'warn';
  } else if (val >= Level.f_INFO__java_util_logging_Level.m_intValue__int()) {
   return 'info';
  } else {
   return 'log';
  }
 }
 /** @override @nodts */
 m_close__void() {}
 /** @override @nodts */
 m_flush__void() {}
 /** @nodts */
 static $clinit() {
  SimpleConsoleLogHandler.$clinit = () =>{};
  SimpleConsoleLogHandler.$loadModules();
  Handler.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SimpleConsoleLogHandler;
 }
 
 /** @nodts */
 static $loadModules() {
  Level = goog.module.get('java.util.logging.Level$impl');
  ConsoleLogger = goog.module.get('javaemul.internal.ConsoleLogger$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
}
$Util.$setClassMetadata(SimpleConsoleLogHandler, 'java.util.logging.SimpleConsoleLogHandler');

exports = SimpleConsoleLogHandler;

//# sourceMappingURL=SimpleConsoleLogHandler.js.map
