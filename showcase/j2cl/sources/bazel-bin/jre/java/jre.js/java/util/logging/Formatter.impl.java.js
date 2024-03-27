goog.module('java.util.logging.Formatter$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let LogRecord = goog.forwardDeclare('java.util.logging.LogRecord$impl');

/**
 * @abstract
 */
class Formatter extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__java_util_logging_Formatter__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @abstract @nodts @return {?string} */
 m_format__java_util_logging_LogRecord__java_lang_String(/** LogRecord */ record) {}
 /** @nodts @return {?string} */
 m_formatMessage__java_util_logging_LogRecord__java_lang_String(/** LogRecord */ record) {
  return this.m_format__java_util_logging_LogRecord__java_lang_String(record);
 }
 /** @nodts */
 static $clinit() {
  Formatter.$clinit = () =>{};
  Formatter.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Formatter;
 }
 
 /** @nodts */
 static $loadModules() {}
}
$Util.$setClassMetadata(Formatter, 'java.util.logging.Formatter');

exports = Formatter;

//# sourceMappingURL=Formatter.js.map
