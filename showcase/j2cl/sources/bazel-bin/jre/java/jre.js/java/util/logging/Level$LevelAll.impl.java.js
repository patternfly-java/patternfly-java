goog.module('java.util.logging.Level.LevelAll$impl');

const Level = goog.require('java.util.logging.Level$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Integer = goog.forwardDeclare('java.lang.Integer$impl');

class LevelAll extends Level {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LevelAll} */
 static $create__() {
  LevelAll.$clinit();
  let $instance = new LevelAll();
  $instance.$ctor__java_util_logging_Level_LevelAll__void();
  return $instance;
 }
 /** @nodts */
 $ctor__java_util_logging_Level_LevelAll__void() {
  this.$ctor__java_util_logging_Level__void();
 }
 /** @override @nodts @return {?string} */
 m_getName__java_lang_String() {
  return 'ALL';
 }
 /** @override @nodts @return {number} */
 m_intValue__int() {
  return Integer.f_MIN_VALUE__java_lang_Integer;
 }
 /** @nodts */
 static $clinit() {
  LevelAll.$clinit = () =>{};
  LevelAll.$loadModules();
  Level.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LevelAll;
 }
 
 /** @nodts */
 static $loadModules() {
  Integer = goog.module.get('java.lang.Integer$impl');
 }
}
$Util.$setClassMetadata(LevelAll, 'java.util.logging.Level$LevelAll');

exports = LevelAll;

//# sourceMappingURL=Level$LevelAll.js.map
