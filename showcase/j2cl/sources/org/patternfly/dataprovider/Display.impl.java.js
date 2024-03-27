goog.module('org.patternfly.dataprovider.Display$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let PageInfo = goog.forwardDeclare('org.patternfly.dataprovider.PageInfo$impl');
let SelectionInfo = goog.forwardDeclare('org.patternfly.dataprovider.SelectionInfo$impl');
let SortInfo = goog.forwardDeclare('org.patternfly.dataprovider.SortInfo$impl');

/**
 * @interface
 * @template T
 */
class Display {
 /** @abstract @nodts */
 m_showItems__java_lang_Iterable__org_patternfly_dataprovider_PageInfo__void(/** Iterable<T> */ items, /** PageInfo */ pageInfo) {}
 /** @abstract @nodts */
 m_updateSelection__org_patternfly_dataprovider_SelectionInfo__void(/** SelectionInfo<T> */ selectionInfo) {}
 /** @abstract @nodts */
 m_updateSortInfo__org_patternfly_dataprovider_SortInfo__void(/** SortInfo<T> */ sortInfo) {}
 /** @nodts */
 static $clinit() {
  Display.$clinit = () =>{};
  Display.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_dataprovider_Display = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_dataprovider_Display;
 }
 
 /** @nodts */
 static $loadModules() {}
}
Display.$markImplementor(/**@type {Function}*/ (Display));
$Util.$setClassMetadataForInterface(Display, 'org.patternfly.dataprovider.Display');

exports = Display;

//# sourceMappingURL=Display.js.map
