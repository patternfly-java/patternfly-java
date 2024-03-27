goog.module('java.util.logging.Level.LevelOff$impl');

const Level = goog.require('java.util.logging.Level$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');

class LevelOff extends Level {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LevelOff} */
 static $create__() {
  LevelOff.$clinit();
  let $instance = new LevelOff();
  $instance.$ctor__java_util_logging_Level_LevelOff__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Level_LevelOff__void() {
  this.$ctor__java_util_logging_Level__void();
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'OFF';
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return Integer.f_MAX_VALUE__java_lang_Integer;
 }
 /** @nodts */
 static $clinit() {
  LevelOff.$clinit = () =>{};
  LevelOff.$loadModules();
  Level.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelOff;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
 }
}
$Util.$setClassMetadata(LevelOff, 'java.util.logging.Level$LevelOff');

exports = LevelOff;

//# sourceMappingURL=Level$LevelOff.js.map
