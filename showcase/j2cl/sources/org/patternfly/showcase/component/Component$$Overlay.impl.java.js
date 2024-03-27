goog.module('org.patternfly.showcase.component.Component.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let ApiDoc = goog.forwardDeclare('org.patternfly.showcase.ApiDoc$impl');

/** @nodts */
class $Overlay {
 /** @final @nodts @return {boolean} */
 static m_implemented__$devirt__org_patternfly_showcase_component_Component__boolean(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return !$Equality.$same($thisArg.clazz, null) && !$Equality.$same($thisArg.route, null);
 }
 /** @final @nodts @return {SafeHtml} */
 static m_summary__$devirt__org_patternfly_showcase_component_Component__org_gwtproject_safehtml_shared_SafeHtml(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String__org_gwtproject_safehtml_shared_SafeHtml($thisArg.summary);
 }
 /** @final @nodts @return {?string} */
 static m_apiDoc__$devirt__org_patternfly_showcase_component_Component__java_lang_String(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.m_valueOf__java_lang_Object__java_lang_String(ApiDoc.f_API_DOC_BASE__org_patternfly_showcase_ApiDoc) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(j_l_String.m_replace__java_lang_String__char__char__java_lang_String($thisArg.clazz, 46 /* '.' */, 47 /* '/' */)) + '.html';
 }
 /** @final @nodts @return {?string} */
 static m_designGuidelines__$devirt__org_patternfly_showcase_component_Component__java_lang_String(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return 'https://www.patternfly.org/components/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.name) + '/design-guidelines';
 }
 /** @final @nodts @return {?string} */
 static m_illustration__$devirt__org_patternfly_showcase_component_Component__java_lang_String(/** !Object */ $thisArg) {
  $Overlay.$clinit();
  return 'https://raw.githubusercontent.com/patternfly/patternfly-org/main/packages/documentation-site/patternfly-docs/images/component-illustrations/' + j_l_String.m_valueOf__java_lang_Object__java_lang_String($thisArg.illustration);
 }
 /** @nodts */
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  ApiDoc = goog.module.get('org.patternfly.showcase.ApiDoc$impl');
 }
}
$Util.$setClassMetadata($Overlay, 'Object');

exports = $Overlay;

//# sourceMappingURL=Component$$Overlay.js.map
