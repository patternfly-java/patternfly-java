goog.module('java.util.logging.LogManager$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let Enumeration = goog.forwardDeclare('java.util.Enumeration$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Level = goog.forwardDeclare('java.util.logging.Level$impl');
let Logger = goog.forwardDeclare('java.util.logging.Logger$impl');
let SimpleConsoleLogHandler = goog.forwardDeclare('java.util.logging.SimpleConsoleLogHandler$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class LogManager extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HashMap<?string, Logger>} @nodts*/
  this.f_loggerMap__java_util_logging_LogManager_;
 }
 /** @nodts @return {LogManager} */
 static m_getLogManager__java_util_logging_LogManager() {
  LogManager.$clinit();
  if ($Equality.$same(LogManager.f_singleton__java_util_logging_LogManager_, null)) {
   LogManager.f_singleton__java_util_logging_LogManager_ = LogManager.$create__();
   let rootLogger = Logger.$create__java_lang_String__java_lang_String('', null);
   rootLogger.m_setLevel__java_util_logging_Level__void(Level.f_INFO__java_util_logging_Level);
   LogManager.f_singleton__java_util_logging_LogManager_.m_addLoggerImpl__java_util_logging_Logger__void_$p_java_util_logging_LogManager(rootLogger);
  }
  return LogManager.f_singleton__java_util_logging_LogManager_;
 }
 /** @nodts @return {!LogManager} */
 static $create__() {
  LogManager.$clinit();
  let $instance = new LogManager();
  $instance.$ctor__java_util_logging_LogManager__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_LogManager__void() {
  this.$ctor__java_lang_Object__void();
  this.$init__void_$p_java_util_logging_LogManager();
 }
 /** @nodts @return {boolean} */
 m_addLogger__java_util_logging_Logger__boolean(/** Logger */ logger) {
  if (!$Equality.$same(this.m_getLogger__java_lang_String__java_util_logging_Logger(logger.m_getName__java_lang_String()), null)) {
   return false;
  }
  this.m_addLoggerAndEnsureParents__java_util_logging_Logger__void_$p_java_util_logging_LogManager(logger);
  return true;
 }
 /** @nodts @return {Logger} */
 m_getLogger__java_lang_String__java_util_logging_Logger(/** ?string */ name) {
  return /**@type {Logger}*/ ($Casts.$to(this.f_loggerMap__java_util_logging_LogManager_.get(name), Logger));
 }
 /** @nodts @return {Enumeration<?string>} */
 m_getLoggerNames__java_util_Enumeration() {
  return /**@type {Enumeration<?string>}*/ (Collections.m_enumeration__java_util_Collection__java_util_Enumeration(this.f_loggerMap__java_util_logging_LogManager_.keySet()));
 }
 /** @nodts */
 m_addLoggerAndEnsureParents__java_util_logging_Logger__void_$p_java_util_logging_LogManager(/** Logger */ logger) {
  let name = logger.m_getName__java_lang_String();
  let parentName = j_l_String.m_substring__java_lang_String__int__int__java_lang_String(name, 0, Math.max(0, j_l_String.m_lastIndexOf__java_lang_String__int__int(name, 46 /* '.' */)));
  logger.m_setParent__java_util_logging_Logger__void(this.m_ensureLogger__java_lang_String__java_util_logging_Logger_$pp_java_util_logging(parentName));
  this.m_addLoggerImpl__java_util_logging_Logger__void_$p_java_util_logging_LogManager(logger);
 }
 /** @nodts */
 m_addLoggerImpl__java_util_logging_Logger__void_$p_java_util_logging_LogManager(/** Logger */ logger) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object__boolean($Util.$getDefine('jre.logging.simpleConsoleHandler'), 'ENABLED')) {
   if (j_l_String.m_isEmpty__java_lang_String__boolean(logger.m_getName__java_lang_String())) {
    logger.m_addHandler__java_util_logging_Handler__void(SimpleConsoleLogHandler.$create__());
   }
  }
  this.f_loggerMap__java_util_logging_LogManager_.put(logger.m_getName__java_lang_String(), logger);
 }
 /** @nodts @return {Logger} */
 m_ensureLogger__java_lang_String__java_util_logging_Logger_$pp_java_util_logging(/** ?string */ name) {
  let logger = this.m_getLogger__java_lang_String__java_util_logging_Logger(name);
  if ($Equality.$same(logger, null)) {
   let newLogger = Logger.$create__java_lang_String__java_lang_String(name, null);
   this.m_addLoggerAndEnsureParents__java_util_logging_Logger__void_$p_java_util_logging_LogManager(newLogger);
   return newLogger;
  }
  return logger;
 }
 /** @private @nodts */
 $init__void_$p_java_util_logging_LogManager() {
  this.f_loggerMap__java_util_logging_LogManager_ = /**@type {!HashMap<?string, Logger>}*/ (HashMap.$create__());
 }
 /** @nodts */
 static $clinit() {
  LogManager.$clinit = () =>{};
  LogManager.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LogManager;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Level = goog.module.get('java.util.logging.Level$impl');
  Logger = goog.module.get('java.util.logging.Logger$impl');
  SimpleConsoleLogHandler = goog.module.get('java.util.logging.SimpleConsoleLogHandler$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@type {LogManager} @nodts*/
LogManager.f_singleton__java_util_logging_LogManager_;
$Util.$setClassMetadata(LogManager, 'java.util.logging.LogManager');

exports = LogManager;

//# sourceMappingURL=LogManager.js.map
