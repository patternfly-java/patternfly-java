goog.module('elemental2.dom.SQLTransaction.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts */
 static m_executeSql__$devirt__elemental2_dom_SQLTransaction__java_lang_String__arrayOf_java_lang_Object__elemental2_dom_SQLStatementCallback__elemental2_dom_SQLTransaction_ExecuteSqlErrorCallbackFn__void(/** !SQLTransaction */ $thisArg, /** ?string */ sqlStatement, /** Array<*> */ queryArgs, /** ?function(SQLTransaction, SQLResultSet):void */ callback, /** ?function(SQLTransaction, SQLError):boolean */ errorCallback) {
  $Overlay.$clinit();
  $thisArg.executeSql(sqlStatement, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(queryArgs)), callback, errorCallback);
 }
 /** @final @nodts */
 static m_executeSql__$devirt__elemental2_dom_SQLTransaction__java_lang_String__arrayOf_java_lang_Object__elemental2_dom_SQLStatementCallback__void(/** !SQLTransaction */ $thisArg, /** ?string */ sqlStatement, /** Array<*> */ queryArgs, /** ?function(SQLTransaction, SQLResultSet):void */ callback) {
  $Overlay.$clinit();
  $thisArg.executeSql(sqlStatement, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(queryArgs)), callback);
 }
 /** @final @nodts */
 static m_executeSql__$devirt__elemental2_dom_SQLTransaction__java_lang_String__arrayOf_java_lang_Object__void(/** !SQLTransaction */ $thisArg, /** ?string */ sqlStatement, /** Array<*> */ queryArgs) {
  $Overlay.$clinit();
  $thisArg.executeSql(sqlStatement, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(queryArgs)));
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SQLTransaction;
 }
 
 /** @nodts */
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'SQLTransaction');

exports = $Overlay;

//# sourceMappingURL=SQLTransaction$$Overlay.js.map
