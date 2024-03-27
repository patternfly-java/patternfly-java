goog.module('java.util.logging.Level.LevelFine$impl');

const Level = goog.require('java.util.logging.Level$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

class LevelFine extends Level {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LevelFine} */
 static $create__() {
  LevelFine.$clinit();
  let $instance = new LevelFine();
  $instance.$ctor__java_util_logging_Level_LevelFine__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Level_LevelFine__void() {
  this.$ctor__java_util_logging_Level__void();
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'FINE';
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return 500;
 }
 /** @nodts */
 static $clinit() {
  LevelFine.$clinit = () =>{};
  LevelFine.$loadModules();
  Level.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelFine;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(LevelFine, 'java.util.logging.Level$LevelFine');

exports = LevelFine;

//# sourceMappingURL=Level$LevelFine.js.map
