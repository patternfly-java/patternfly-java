goog.module('java.util.logging.Level.LevelFiner$impl');

const Level = goog.require('java.util.logging.Level$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class LevelFiner extends Level {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LevelFiner} */
 static $create__() {
  LevelFiner.$clinit();
  let $instance = new LevelFiner();
  $instance.$ctor__java_util_logging_Level_LevelFiner__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Level_LevelFiner__void() {
  this.$ctor__java_util_logging_Level__void();
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'FINER';
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return 400;
 }
 /** @nodts */
 static $clinit() {
  LevelFiner.$clinit = () =>{};
  LevelFiner.$loadModules();
  Level.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelFiner;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(LevelFiner, 'java.util.logging.Level$LevelFiner');

exports = LevelFiner;

//# sourceMappingURL=Level$LevelFiner.js.map
