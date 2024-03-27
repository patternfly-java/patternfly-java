goog.module('java.util.logging.Level.LevelWarning$impl');

const Level = goog.require('java.util.logging.Level$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class LevelWarning extends Level {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LevelWarning} */
 static $create__() {
  LevelWarning.$clinit();
  let $instance = new LevelWarning();
  $instance.$ctor__java_util_logging_Level_LevelWarning__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Level_LevelWarning__void() {
  this.$ctor__java_util_logging_Level__void();
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'WARNING';
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return 900;
 }
 /** @nodts */
 static $clinit() {
  LevelWarning.$clinit = () =>{};
  LevelWarning.$loadModules();
  Level.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelWarning;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(LevelWarning, 'java.util.logging.Level$LevelWarning');

exports = LevelWarning;

//# sourceMappingURL=Level$LevelWarning.js.map
