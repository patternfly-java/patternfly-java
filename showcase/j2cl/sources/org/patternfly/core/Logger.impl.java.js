goog.module('org.patternfly.core.Logger$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');

/**
 * @final
 */
class Logger extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!Logger} */
 static $create__() {
  Logger.$clinit();
  let $instance = new Logger();
  $instance.$ctor__org_patternfly_core_Logger__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_core_Logger__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static m_debug__java_lang_String__java_lang_String__void(/** ?string */ category, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.debug(Logger.m_format__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_String(category, null, message));
 }
 /** @nodts */
 static m_wrong__java_lang_String__elemental2_dom_Element__java_lang_String__void(/** ?string */ category, /** Element */ element, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.warn(Logger.m_format__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_String(category, element, message));
 }
 /** @nodts */
 static m_missing__java_lang_String__elemental2_dom_Element__java_lang_String__void(/** ?string */ category, /** Element */ element, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.warn(Logger.m_format__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_String(category, element, message));
 }
 /** @nodts */
 static m_nyi__java_lang_String__elemental2_dom_Element__java_lang_String__void(/** ?string */ category, /** Element */ element, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.error(Logger.m_format__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_String(category, element, message));
 }
 /** @nodts */
 static m_undefined__java_lang_String__elemental2_dom_Element__java_lang_String__void(/** ?string */ category, /** Element */ element, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.error(Logger.m_format__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_String(category, element, message));
 }
 /** @nodts */
 static m_unknown__java_lang_String__elemental2_dom_Element__java_lang_String__void(/** ?string */ category, /** Element */ element, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.error(Logger.m_format__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_String(category, element, message));
 }
 /** @nodts */
 static m_unsupported__java_lang_String__elemental2_dom_Element__java_lang_String__void(/** ?string */ category, /** Element */ element, /** ?string */ message) {
  Logger.$clinit();
  goog.global.console.warn(Logger.m_format__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_String(category, element, message));
 }
 /** @nodts @return {?string} */
 static m_format__java_lang_String__elemental2_dom_Element__java_lang_String__java_lang_String(/** ?string */ prefix, /** Element */ element, /** ?string */ message) {
  let log = j_l_String.m_valueOf__java_lang_Object__java_lang_String(prefix) + ': ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(message);
  if (!$Equality.$same(element, null)) {
   log = j_l_String.m_valueOf__java_lang_Object__java_lang_String(log) + ('\nElement: ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Elements.m_toString__elemental2_dom_Element__java_lang_String(element)));
  }
  return log;
 }
 /** @nodts */
 static $clinit() {
  Logger.$clinit = () =>{};
  Logger.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Logger;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
 }
}
$Util.$setClassMetadata(Logger, 'org.patternfly.core.Logger');

exports = Logger;

//# sourceMappingURL=Logger.js.map
