goog.module('elemental2.dom.Console.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_table__$devirt__elemental2_dom_Console__java_lang_Object__java_lang_Object__void(/** !Console */ $thisArg, /** * */ tabularData, /** * */ properties) {
  $Overlay.$clinit();
  $thisArg.table(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(tabularData)), properties);
 }
 /** @final @nodts */
 static m_table__$devirt__elemental2_dom_Console__java_lang_Object__void(/** !Console */ $thisArg, /** * */ tabularData) {
  $Overlay.$clinit();
  $thisArg.table(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(tabularData)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Console;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Console');

exports = $Overlay;

//# sourceMappingURL=Console$$Overlay.js.map
