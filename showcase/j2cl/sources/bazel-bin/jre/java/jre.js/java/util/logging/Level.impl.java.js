goog.module('java.util.logging.Level$impl');

const Serializable = goog.require('java.io.Serializable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let IllegalArgumentException = goog.forwardDeclare('java.lang.IllegalArgumentException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let LevelAll = goog.forwardDeclare('java.util.logging.Level.LevelAll$impl');
let LevelConfig = goog.forwardDeclare('java.util.logging.Level.LevelConfig$impl');
let LevelFine = goog.forwardDeclare('java.util.logging.Level.LevelFine$impl');
let LevelFiner = goog.forwardDeclare('java.util.logging.Level.LevelFiner$impl');
let LevelFinest = goog.forwardDeclare('java.util.logging.Level.LevelFinest$impl');
let LevelInfo = goog.forwardDeclare('java.util.logging.Level.LevelInfo$impl');
let LevelOff = goog.forwardDeclare('java.util.logging.Level.LevelOff$impl');
let LevelSevere = goog.forwardDeclare('java.util.logging.Level.LevelSevere$impl');
let LevelWarning = goog.forwardDeclare('java.util.logging.Level.LevelWarning$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @implements {Serializable}
 */
class Level extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {Level} */
 static m_parse__java_lang_String__java_util_logging_Level(/** ?string */ name) {
  Level.$clinit();
  if ($Equality.$same($Util.$getDefine('jre.logging.logLevel'), 'OFF')) {
   return null;
  }
  let value = j_l_String.m_toUpperCase__java_lang_String__java_util_Locale__java_lang_String(name, Locale.f_ROOT__java_util_Locale);
  switch (InternalPreconditions.m_checkNotNull__java_lang_Object__java_lang_Object(value)) {
   case 'ALL': 
    return Level.$static_ALL__java_util_logging_Level;
   case 'CONFIG': 
    return Level.$static_CONFIG__java_util_logging_Level;
   case 'FINE': 
    return Level.$static_FINE__java_util_logging_Level;
   case 'FINER': 
    return Level.$static_FINER__java_util_logging_Level;
   case 'FINEST': 
    return Level.$static_FINEST__java_util_logging_Level;
   case 'INFO': 
    return Level.$static_INFO__java_util_logging_Level;
   case 'OFF': 
    return Level.$static_OFF__java_util_logging_Level;
   case 'SEVERE': 
    return Level.$static_SEVERE__java_util_logging_Level;
   case 'WARNING': 
    return Level.$static_WARNING__java_util_logging_Level;
   default: 
    throw $Exceptions.toJs(IllegalArgumentException.$create__java_lang_String('Invalid level \"' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name) + '\"'));
  }
 }
 /** @nodts @return {!Level} */
 static $create__() {
  Level.$clinit();
  let $instance = new Level();
  $instance.$ctor__java_util_logging_Level__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Level__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'DUMMY';
 }
 /** @nodts @return {number} */
 m_intValue__int() {
  return - 1 | 0;
 }
 /** @override @return {?string} */
 toString() {
  return this.m_getName__java_lang_String();
 }
 /** @nodts @return {Level} */
 static get f_ALL__java_util_logging_Level() {
  return (Level.$clinit(), Level.$static_ALL__java_util_logging_Level);
 }
 /** @nodts */
 static set f_ALL__java_util_logging_Level(/** Level */ value) {
  (Level.$clinit(), Level.$static_ALL__java_util_logging_Level = value);
 }
 /** @nodts @return {Level} */
 static get f_CONFIG__java_util_logging_Level() {
  return (Level.$clinit(), Level.$static_CONFIG__java_util_logging_Level);
 }
 /** @nodts */
 static set f_CONFIG__java_util_logging_Level(/** Level */ value) {
  (Level.$clinit(), Level.$static_CONFIG__java_util_logging_Level = value);
 }
 /** @nodts @return {Level} */
 static get f_FINE__java_util_logging_Level() {
  return (Level.$clinit(), Level.$static_FINE__java_util_logging_Level);
 }
 /** @nodts */
 static set f_FINE__java_util_logging_Level(/** Level */ value) {
  (Level.$clinit(), Level.$static_FINE__java_util_logging_Level = value);
 }
 /** @nodts @return {Level} */
 static get f_FINER__java_util_logging_Level() {
  return (Level.$clinit(), Level.$static_FINER__java_util_logging_Level);
 }
 /** @nodts */
 static set f_FINER__java_util_logging_Level(/** Level */ value) {
  (Level.$clinit(), Level.$static_FINER__java_util_logging_Level = value);
 }
 /** @nodts @return {Level} */
 static get f_FINEST__java_util_logging_Level() {
  return (Level.$clinit(), Level.$static_FINEST__java_util_logging_Level);
 }
 /** @nodts */
 static set f_FINEST__java_util_logging_Level(/** Level */ value) {
  (Level.$clinit(), Level.$static_FINEST__java_util_logging_Level = value);
 }
 /** @nodts @return {Level} */
 static get f_INFO__java_util_logging_Level() {
  return (Level.$clinit(), Level.$static_INFO__java_util_logging_Level);
 }
 /** @nodts */
 static set f_INFO__java_util_logging_Level(/** Level */ value) {
  (Level.$clinit(), Level.$static_INFO__java_util_logging_Level = value);
 }
 /** @nodts @return {Level} */
 static get f_OFF__java_util_logging_Level() {
  return (Level.$clinit(), Level.$static_OFF__java_util_logging_Level);
 }
 /** @nodts */
 static set f_OFF__java_util_logging_Level(/** Level */ value) {
  (Level.$clinit(), Level.$static_OFF__java_util_logging_Level = value);
 }
 /** @nodts @return {Level} */
 static get f_SEVERE__java_util_logging_Level() {
  return (Level.$clinit(), Level.$static_SEVERE__java_util_logging_Level);
 }
 /** @nodts */
 static set f_SEVERE__java_util_logging_Level(/** Level */ value) {
  (Level.$clinit(), Level.$static_SEVERE__java_util_logging_Level = value);
 }
 /** @nodts @return {Level} */
 static get f_WARNING__java_util_logging_Level() {
  return (Level.$clinit(), Level.$static_WARNING__java_util_logging_Level);
 }
 /** @nodts */
 static set f_WARNING__java_util_logging_Level(/** Level */ value) {
  (Level.$clinit(), Level.$static_WARNING__java_util_logging_Level = value);
 }
 /** @nodts */
 static $clinit() {
  Level.$clinit = () =>{};
  Level.$loadModules();
  j_l_Object.$clinit();
  Level.$static_ALL__java_util_logging_Level = LevelAll.$create__();
  Level.$static_CONFIG__java_util_logging_Level = LevelConfig.$create__();
  Level.$static_FINE__java_util_logging_Level = LevelFine.$create__();
  Level.$static_FINER__java_util_logging_Level = LevelFiner.$create__();
  Level.$static_FINEST__java_util_logging_Level = LevelFinest.$create__();
  Level.$static_INFO__java_util_logging_Level = LevelInfo.$create__();
  Level.$static_OFF__java_util_logging_Level = LevelOff.$create__();
  Level.$static_SEVERE__java_util_logging_Level = LevelSevere.$create__();
  Level.$static_WARNING__java_util_logging_Level = LevelWarning.$create__();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Level;
 }
 
 /** @nodts */
 static $loadModules() {
  IllegalArgumentException = goog.module.get('java.lang.IllegalArgumentException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  LevelAll = goog.module.get('java.util.logging.Level.LevelAll$impl');
  LevelConfig = goog.module.get('java.util.logging.Level.LevelConfig$impl');
  LevelFine = goog.module.get('java.util.logging.Level.LevelFine$impl');
  LevelFiner = goog.module.get('java.util.logging.Level.LevelFiner$impl');
  LevelFinest = goog.module.get('java.util.logging.Level.LevelFinest$impl');
  LevelInfo = goog.module.get('java.util.logging.Level.LevelInfo$impl');
  LevelOff = goog.module.get('java.util.logging.Level.LevelOff$impl');
  LevelSevere = goog.module.get('java.util.logging.Level.LevelSevere$impl');
  LevelWarning = goog.module.get('java.util.logging.Level.LevelWarning$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
}
/**@private {Level} @nodts*/
Level.$static_ALL__java_util_logging_Level;
/**@private {Level} @nodts*/
Level.$static_CONFIG__java_util_logging_Level;
/**@private {Level} @nodts*/
Level.$static_FINE__java_util_logging_Level;
/**@private {Level} @nodts*/
Level.$static_FINER__java_util_logging_Level;
/**@private {Level} @nodts*/
Level.$static_FINEST__java_util_logging_Level;
/**@private {Level} @nodts*/
Level.$static_INFO__java_util_logging_Level;
/**@private {Level} @nodts*/
Level.$static_OFF__java_util_logging_Level;
/**@private {Level} @nodts*/
Level.$static_SEVERE__java_util_logging_Level;
/**@private {Level} @nodts*/
Level.$static_WARNING__java_util_logging_Level;
Serializable.$markImplementor(Level);
$Util.$setClassMetadata(Level, 'java.util.logging.Level');

exports = Level;

//# sourceMappingURL=Level.js.map
