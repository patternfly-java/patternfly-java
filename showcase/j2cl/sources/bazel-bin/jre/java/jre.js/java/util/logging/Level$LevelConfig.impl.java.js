goog.module('java.util.logging.Level.LevelConfig$impl');

const Level = goog.require('java.util.logging.Level$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class LevelConfig extends Level {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LevelConfig} */
 static $create__() {
  LevelConfig.$clinit();
  let $instance = new LevelConfig();
  $instance.$ctor__java_util_logging_Level_LevelConfig__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Level_LevelConfig__void() {
  this.$ctor__java_util_logging_Level__void();
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'CONFIG';
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return 700;
 }
 /** @nodts */
 static $clinit() {
  LevelConfig.$clinit = () =>{};
  LevelConfig.$loadModules();
  Level.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelConfig;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(LevelConfig, 'java.util.logging.Level$LevelConfig');

exports = LevelConfig;

//# sourceMappingURL=Level$LevelConfig.js.map
