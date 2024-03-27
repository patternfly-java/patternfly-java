goog.module('org.patternfly.showcase.component.TabsComponent.$1$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const CloseHandler = goog.require('org.patternfly.handler.CloseHandler$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Tab = goog.forwardDeclare('org.patternfly.component.tabs.Tab$impl');
let TabsComponent = goog.forwardDeclare('org.patternfly.showcase.component.TabsComponent$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {CloseHandler<Tab>}
 */
class $1 extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {TabsComponent} @nodts*/
  this.$outer_this__org_patternfly_showcase_component_TabsComponent_1;
 }
 /** @nodts @return {!$1} */
 static $create__org_patternfly_showcase_component_TabsComponent(/** TabsComponent */ $outer_this) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_patternfly_showcase_component_TabsComponent_1__org_patternfly_showcase_component_TabsComponent__void($outer_this);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TabsComponent_1__org_patternfly_showcase_component_TabsComponent__void(/** TabsComponent */ $outer_this) {
  this.$outer_this__org_patternfly_showcase_component_TabsComponent_1 = $outer_this;
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {boolean} */
 m_shouldClose__elemental2_dom_Event__org_patternfly_component_tabs_Tab__boolean(/** Event */ event, /** Tab */ tab) {
  return goog.global.window.confirm('Are you sure you want to close \'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(tab.m_text__java_lang_String()) + '\'?');
 }
 /** @nodts */
 m_onClose__elemental2_dom_Event__org_patternfly_component_tabs_Tab__void(/** Event */ event, /** Tab */ tab) {
  goog.global.console.log(j_l_String.m_valueOf__java_lang_Object__java_lang_String(tab.m_text__java_lang_String()) + ' left the building.');
 }
 //Bridge method.
 /** @final @override @nodts */
 m_onClose__elemental2_dom_Event__java_lang_Object__void(/** Event */ arg0, /** Tab */ arg1) {
  this.m_onClose__elemental2_dom_Event__org_patternfly_component_tabs_Tab__void(arg0, /**@type {Tab}*/ ($Casts.$to(arg1, Tab)));
 }
 //Bridge method.
 /** @final @override @nodts @return {boolean} */
 m_shouldClose__elemental2_dom_Event__java_lang_Object__boolean(/** Event */ arg0, /** Tab */ arg1) {
  return this.m_shouldClose__elemental2_dom_Event__org_patternfly_component_tabs_Tab__boolean(arg0, /**@type {Tab}*/ ($Casts.$to(arg1, Tab)));
 }
 /** @nodts */
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  j_l_Object.$clinit();
  CloseHandler.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Tab = goog.module.get('org.patternfly.component.tabs.Tab$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
CloseHandler.$markImplementor($1);
$Util.$setClassMetadata($1, 'org.patternfly.showcase.component.TabsComponent$1');

exports = $1;

//# sourceMappingURL=TabsComponent$1.js.map
