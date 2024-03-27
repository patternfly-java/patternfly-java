goog.module('java.util.logging.Level.LevelFinest$impl');

const Level = goog.require('java.util.logging.Level$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class LevelFinest extends Level {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LevelFinest} */
 static $create__() {
  LevelFinest.$clinit();
  let $instance = new LevelFinest();
  $instance.$ctor__java_util_logging_Level_LevelFinest__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Level_LevelFinest__void() {
  this.$ctor__java_util_logging_Level__void();
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'FINEST';
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return 300;
 }
 /** @nodts */
 static $clinit() {
  LevelFinest.$clinit = () =>{};
  LevelFinest.$loadModules();
  Level.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelFinest;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(LevelFinest, 'java.util.logging.Level$LevelFinest');

exports = LevelFinest;

//# sourceMappingURL=Level$LevelFinest.js.map
