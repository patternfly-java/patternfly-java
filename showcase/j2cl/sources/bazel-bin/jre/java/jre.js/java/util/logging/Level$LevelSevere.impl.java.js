goog.module('java.util.logging.Level.LevelSevere$impl');

const Level = goog.require('java.util.logging.Level$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class LevelSevere extends Level {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LevelSevere} */
 static $create__() {
  LevelSevere.$clinit();
  let $instance = new LevelSevere();
  $instance.$ctor__java_util_logging_Level_LevelSevere__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Level_LevelSevere__void() {
  this.$ctor__java_util_logging_Level__void();
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'SEVERE';
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return 1000;
 }
 /** @nodts */
 static $clinit() {
  LevelSevere.$clinit = () =>{};
  LevelSevere.$loadModules();
  Level.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelSevere;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(LevelSevere, 'java.util.logging.Level$LevelSevere');

exports = LevelSevere;

//# sourceMappingURL=Level$LevelSevere.js.map
