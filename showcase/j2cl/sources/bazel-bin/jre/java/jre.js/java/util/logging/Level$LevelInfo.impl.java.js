goog.module('java.util.logging.Level.LevelInfo$impl');

const Level = goog.require('java.util.logging.Level$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class LevelInfo extends Level {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LevelInfo} */
 static $create__() {
  LevelInfo.$clinit();
  let $instance = new LevelInfo();
  $instance.$ctor__java_util_logging_Level_LevelInfo__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Level_LevelInfo__void() {
  this.$ctor__java_util_logging_Level__void();
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'INFO';
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return 800;
 }
 /** @nodts */
 static $clinit() {
  LevelInfo.$clinit = () =>{};
  LevelInfo.$loadModules();
  Level.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelInfo;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(LevelInfo, 'java.util.logging.Level$LevelInfo');

exports = LevelInfo;

//# sourceMappingURL=Level$LevelInfo.js.map
