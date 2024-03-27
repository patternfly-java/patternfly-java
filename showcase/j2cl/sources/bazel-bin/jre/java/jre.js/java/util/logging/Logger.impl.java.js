goog.module('java.util.logging.Logger$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AssertionError = goog.forwardDeclare('java.lang.AssertionError$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Throwable = goog.forwardDeclare('java.lang.Throwable$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let Handler = goog.forwardDeclare('java.util.logging.Handler$impl');
let Level = goog.forwardDeclare('java.util.logging.Level$impl');
let LogManager = goog.forwardDeclare('java.util.logging.LogManager$impl');
let LogRecord = goog.forwardDeclare('java.util.logging.LogRecord$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class Logger extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {List<Handler>} @nodts*/
  this.f_handlers__java_util_logging_Logger_;
  /**@type {Level} @nodts*/
  this.f_level__java_util_logging_Logger_;
  /**@type {?string} @nodts*/
  this.f_name__java_util_logging_Logger_;
  /**@type {Logger} @nodts*/
  this.f_parent__java_util_logging_Logger_;
  /**@type {boolean} @nodts*/
  this.f_useParentHandlers__java_util_logging_Logger_ = false;
 }
 /** @nodts @return {Logger} */
 static m_getGlobal__java_util_logging_Logger() {
  Logger.$clinit();
  return Logger.m_getLogger__java_lang_String__java_util_logging_Logger(Logger.f_GLOBAL_LOGGER_NAME__java_util_logging_Logger);
 }
 /** @nodts @return {Logger} */
 static m_getLogger__java_lang_String__java_util_logging_Logger(/** ?string */ name) {
  Logger.$clinit();
  if (Logger.f_LOGGING_OFF__java_util_logging_Logger_) {
   return Logger.$create__java_lang_String__java_lang_String(null, null);
  }
  return LogManager.m_getLogManager__java_util_logging_LogManager().m_ensureLogger__java_lang_String__java_util_logging_Logger_$pp_java_util_logging(name);
 }
 /** @nodts @return {!Logger} */
 static $create__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ resourceName) {
  Logger.$clinit();
  let $instance = new Logger();
  $instance.$ctor__java_util_logging_Logger__java_lang_String__java_lang_String__void(name, resourceName);
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Logger__java_lang_String__java_lang_String__void(/** ?string */ name, /** ?string */ resourceName) {
  this.$ctor__java_lang_Object__void();
  if (Logger.f_LOGGING_OFF__java_util_logging_Logger_) {
   return;
  }
  this.f_name__java_util_logging_Logger_ = name;
  this.f_useParentHandlers__java_util_logging_Logger_ = true;
  this.f_handlers__java_util_logging_Logger_ = /**@type {!ArrayList<Handler>}*/ (ArrayList.$create__());
 }
 /** @nodts */
 m_addHandler__java_util_logging_Handler__void(/** Handler */ handler) {
  if (Logger.f_LOGGING_OFF__java_util_logging_Logger_) {
   return;
  }
  this.f_handlers__java_util_logging_Logger_.add(handler);
 }
 /** @nodts */
 m_config__java_lang_String__void(/** ?string */ msg) {
  if (!Logger.f_ALL_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_lang_String__void(Level.f_CONFIG__java_util_logging_Level, msg);
 }
 /** @nodts */
 m_config__java_util_function_Supplier__void(/** Supplier<?string> */ msgSupplier) {
  if (!Logger.f_ALL_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_util_function_Supplier__void(Level.f_CONFIG__java_util_logging_Level, msgSupplier);
 }
 /** @nodts */
 m_fine__java_lang_String__void(/** ?string */ msg) {
  if (!Logger.f_ALL_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_lang_String__void(Level.f_FINE__java_util_logging_Level, msg);
 }
 /** @nodts */
 m_fine__java_util_function_Supplier__void(/** Supplier<?string> */ msgSupplier) {
  if (!Logger.f_ALL_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_util_function_Supplier__void(Level.f_FINE__java_util_logging_Level, msgSupplier);
 }
 /** @nodts */
 m_finer__java_lang_String__void(/** ?string */ msg) {
  if (!Logger.f_ALL_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_lang_String__void(Level.f_FINER__java_util_logging_Level, msg);
 }
 /** @nodts */
 m_finer__java_util_function_Supplier__void(/** Supplier<?string> */ msgSupplier) {
  if (!Logger.f_ALL_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_util_function_Supplier__void(Level.f_FINER__java_util_logging_Level, msgSupplier);
 }
 /** @nodts */
 m_finest__java_lang_String__void(/** ?string */ msg) {
  if (!Logger.f_ALL_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_lang_String__void(Level.f_FINEST__java_util_logging_Level, msg);
 }
 /** @nodts */
 m_finest__java_util_function_Supplier__void(/** Supplier<?string> */ msgSupplier) {
  if (!Logger.f_ALL_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_util_function_Supplier__void(Level.f_FINEST__java_util_logging_Level, msgSupplier);
 }
 /** @nodts */
 m_info__java_lang_String__void(/** ?string */ msg) {
  if (!Logger.f_INFO_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_lang_String__void(Level.f_INFO__java_util_logging_Level, msg);
 }
 /** @nodts */
 m_info__java_util_function_Supplier__void(/** Supplier<?string> */ msgSupplier) {
  if (!Logger.f_INFO_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_util_function_Supplier__void(Level.f_INFO__java_util_logging_Level, msgSupplier);
 }
 /** @nodts */
 m_warning__java_lang_String__void(/** ?string */ msg) {
  if (!Logger.f_WARNING_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_lang_String__void(Level.f_WARNING__java_util_logging_Level, msg);
 }
 /** @nodts */
 m_warning__java_util_function_Supplier__void(/** Supplier<?string> */ msgSupplier) {
  if (!Logger.f_WARNING_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_util_function_Supplier__void(Level.f_WARNING__java_util_logging_Level, msgSupplier);
 }
 /** @nodts */
 m_severe__java_lang_String__void(/** ?string */ msg) {
  if (!Logger.f_SEVERE_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_lang_String__void(Level.f_SEVERE__java_util_logging_Level, msg);
 }
 /** @nodts */
 m_severe__java_util_function_Supplier__void(/** Supplier<?string> */ msgSupplier) {
  if (!Logger.f_SEVERE_ENABLED__java_util_logging_Logger_) {
   return;
  }
  this.m_log__java_util_logging_Level__java_util_function_Supplier__void(Level.f_SEVERE__java_util_logging_Level, msgSupplier);
 }
 /** @nodts @return {Array<Handler>} */
 m_getHandlers__arrayOf_java_util_logging_Handler() {
  if (Logger.f_LOGGING_OFF__java_util_logging_Logger_) {
   return /**@type {!Array<Handler>}*/ ($Arrays.$create([0], Handler));
  }
  return /**@type {Array<Handler>}*/ ($Arrays.$castTo(this.f_handlers__java_util_logging_Logger_.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/**@type {!Array<Handler>}*/ ($Arrays.$create([this.f_handlers__java_util_logging_Logger_.size()], Handler))), Handler, 1));
 }
 /** @nodts @return {Level} */
 m_getLevel__java_util_logging_Level() {
  return Logger.f_LOGGING_OFF__java_util_logging_Logger_ ? null : this.f_level__java_util_logging_Logger_;
 }
 /** @nodts @return {?string} */
 m_getName__java_lang_String() {
  return Logger.f_LOGGING_OFF__java_util_logging_Logger_ ? null : this.f_name__java_util_logging_Logger_;
 }
 /** @nodts @return {Logger} */
 m_getParent__java_util_logging_Logger() {
  return Logger.f_LOGGING_OFF__java_util_logging_Logger_ ? null : this.f_parent__java_util_logging_Logger_;
 }
 /** @nodts @return {boolean} */
 m_getUseParentHandlers__boolean() {
  return Logger.f_LOGGING_OFF__java_util_logging_Logger_ ? false : this.f_useParentHandlers__java_util_logging_Logger_;
 }
 /** @nodts @return {boolean} */
 m_isLoggable__java_util_logging_Level__boolean(/** Level */ messageLevel) {
  if (Logger.f_ALL_ENABLED__java_util_logging_Logger_) {
   return messageLevel.m_intValue__int() >= this.m_getEffectiveLevel__java_util_logging_Level_$p_java_util_logging_Logger().m_intValue__int();
  } else if (Logger.f_INFO_ENABLED__java_util_logging_Logger_) {
   return messageLevel.m_intValue__int() >= Level.f_INFO__java_util_logging_Level.m_intValue__int();
  } else if (Logger.f_WARNING_ENABLED__java_util_logging_Logger_) {
   return messageLevel.m_intValue__int() >= Level.f_WARNING__java_util_logging_Level.m_intValue__int();
  } else if (Logger.f_SEVERE_ENABLED__java_util_logging_Logger_) {
   return messageLevel.m_intValue__int() >= Level.f_SEVERE__java_util_logging_Level.m_intValue__int();
  } else {
   return false;
  }
 }
 /** @nodts */
 m_log__java_util_logging_Level__java_lang_String__void(/** Level */ level, /** ?string */ msg) {
  this.m_log__java_util_logging_Level__java_lang_String__java_lang_Throwable__void(level, msg, null);
 }
 /** @nodts */
 m_log__java_util_logging_Level__java_util_function_Supplier__void(/** Level */ level, /** Supplier<?string> */ msgSupplier) {
  this.m_log__java_util_logging_Level__java_lang_Throwable__java_util_function_Supplier__void(level, null, msgSupplier);
 }
 /** @nodts */
 m_log__java_util_logging_Level__java_lang_String__java_lang_Throwable__void(/** Level */ level, /** ?string */ msg, /** Throwable */ thrown) {
  if (this.m_isLoggable__java_util_logging_Level__boolean(level)) {
   this.m_actuallyLog__java_util_logging_Level__java_lang_String__java_lang_Throwable__void_$p_java_util_logging_Logger(level, msg, thrown);
  }
 }
 /** @nodts */
 m_log__java_util_logging_Level__java_lang_Throwable__java_util_function_Supplier__void(/** Level */ level, /** Throwable */ thrown, /** Supplier<?string> */ msgSupplier) {
  if (this.m_isLoggable__java_util_logging_Level__boolean(level)) {
   this.m_actuallyLog__java_util_logging_Level__java_lang_String__java_lang_Throwable__void_$p_java_util_logging_Logger(level, /**@type {?string}*/ ($Casts.$to(msgSupplier.m_get__java_lang_Object(), j_l_String)), thrown);
  }
 }
 /** @nodts */
 m_log__java_util_logging_LogRecord__void(/** LogRecord */ record) {
  if (this.m_isLoggable__java_util_logging_Level__boolean(record.m_getLevel__java_util_logging_Level())) {
   this.m_actuallyLog__java_util_logging_LogRecord__void_$p_java_util_logging_Logger(record);
  }
 }
 /** @nodts */
 m_removeHandler__java_util_logging_Handler__void(/** Handler */ handler) {
  if (Logger.f_LOGGING_OFF__java_util_logging_Logger_) {
   return;
  }
  this.f_handlers__java_util_logging_Logger_.remove(handler);
 }
 /** @nodts */
 m_setLevel__java_util_logging_Level__void(/** Level */ newLevel) {
  if (Logger.f_LOGGING_OFF__java_util_logging_Logger_) {
   return;
  }
  this.f_level__java_util_logging_Logger_ = newLevel;
 }
 /** @nodts */
 m_setParent__java_util_logging_Logger__void(/** Logger */ newParent) {
  if (Logger.f_LOGGING_OFF__java_util_logging_Logger_) {
   return;
  }
  if (!$Equality.$same(newParent, null)) {
   this.f_parent__java_util_logging_Logger_ = newParent;
  }
 }
 /** @nodts */
 m_setUseParentHandlers__boolean__void(/** boolean */ newUseParentHandlers) {
  if (Logger.f_LOGGING_OFF__java_util_logging_Logger_) {
   return;
  }
  this.f_useParentHandlers__java_util_logging_Logger_ = newUseParentHandlers;
 }
 /** @nodts @return {Level} */
 m_getEffectiveLevel__java_util_logging_Level_$p_java_util_logging_Logger() {
  if (!$Equality.$same(this.f_level__java_util_logging_Logger_, null)) {
   return this.f_level__java_util_logging_Logger_;
  }
  let logger = this.m_getParent__java_util_logging_Logger();
  while (!$Equality.$same(logger, null)) {
   let effectiveLevel = logger.m_getLevel__java_util_logging_Level();
   if (!$Equality.$same(effectiveLevel, null)) {
    return effectiveLevel;
   }
   logger = logger.m_getParent__java_util_logging_Logger();
  }
  return Level.f_INFO__java_util_logging_Level;
 }
 /** @nodts */
 m_actuallyLog__java_util_logging_Level__java_lang_String__java_lang_Throwable__void_$p_java_util_logging_Logger(/** Level */ level, /** ?string */ msg, /** Throwable */ thrown) {
  let record = LogRecord.$create__java_util_logging_Level__java_lang_String(level, msg);
  record.m_setThrown__java_lang_Throwable__void(thrown);
  record.m_setLoggerName__java_lang_String__void(this.m_getName__java_lang_String());
  this.m_actuallyLog__java_util_logging_LogRecord__void_$p_java_util_logging_Logger(record);
 }
 /** @nodts */
 m_actuallyLog__java_util_logging_LogRecord__void_$p_java_util_logging_Logger(/** LogRecord */ record) {
  for (let $array = this.m_getHandlers__arrayOf_java_util_logging_Handler(), $index = 0; $index < $array.length; $index++) {
   let handler = $array[$index];
   {
    handler.m_publish__java_util_logging_LogRecord__void(record);
   }
  }
  let logger = this.m_getUseParentHandlers__boolean() ? this.m_getParent__java_util_logging_Logger() : null;
  while (!$Equality.$same(logger, null)) {
   for (let $array_1 = logger.m_getHandlers__arrayOf_java_util_logging_Handler(), $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
    let handler_1 = $array_1[$index_1];
    {
     handler_1.m_publish__java_util_logging_LogRecord__void(record);
    }
   }
   logger = logger.m_getUseParentHandlers__boolean() ? logger.m_getParent__java_util_logging_Logger() : null;
  }
 }
 /** @nodts */
 static $clinit() {
  Logger.$clinit = () =>{};
  Logger.$loadModules();
  j_l_Object.$clinit();
  let level = $Util.$getDefine('jre.logging.logLevel');
  if (!$Equality.$same(level, 'ALL') && !$Equality.$same(level, 'INFO') && !$Equality.$same(level, 'WARNING') && !$Equality.$same(level, 'SEVERE') && !$Equality.$same(level, 'OFF')) {
   throw $Exceptions.toJs(AssertionError.$create__java_lang_Object('Undefined value for jre.logging.logLevel: \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(level) + '\''));
  }
  Logger.f_LOGGING_OFF__java_util_logging_Logger_ = $Equality.$same(level, 'OFF');
  Logger.f_ALL_ENABLED__java_util_logging_Logger_ = $Equality.$same(level, 'ALL');
  Logger.f_INFO_ENABLED__java_util_logging_Logger_ = $Equality.$same(level, 'ALL') || $Equality.$same(level, 'INFO');
  Logger.f_WARNING_ENABLED__java_util_logging_Logger_ = $Equality.$same(level, 'ALL') || $Equality.$same(level, 'INFO') || $Equality.$same(level, 'WARNING');
  Logger.f_SEVERE_ENABLED__java_util_logging_Logger_ = $Equality.$same(level, 'ALL') || $Equality.$same(level, 'INFO') || $Equality.$same(level, 'WARNING') || $Equality.$same(level, 'SEVERE');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Logger;
 }
 
 /** @nodts */
 static $loadModules() {
  AssertionError = goog.module.get('java.lang.AssertionError$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Handler = goog.module.get('java.util.logging.Handler$impl');
  Level = goog.module.get('java.util.logging.Level$impl');
  LogManager = goog.module.get('java.util.logging.LogManager$impl');
  LogRecord = goog.module.get('java.util.logging.LogRecord$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@const {string} @nodts*/
Logger.f_GLOBAL_LOGGER_NAME__java_util_logging_Logger = 'global';
/**@type {boolean} @nodts*/
Logger.f_LOGGING_OFF__java_util_logging_Logger_ = false;
/**@type {boolean} @nodts*/
Logger.f_ALL_ENABLED__java_util_logging_Logger_ = false;
/**@type {boolean} @nodts*/
Logger.f_INFO_ENABLED__java_util_logging_Logger_ = false;
/**@type {boolean} @nodts*/
Logger.f_WARNING_ENABLED__java_util_logging_Logger_ = false;
/**@type {boolean} @nodts*/
Logger.f_SEVERE_ENABLED__java_util_logging_Logger_ = false;
$Util.$setClassMetadata(Logger, 'java.util.logging.Logger');

exports = Logger;

//# sourceMappingURL=Logger.js.map
