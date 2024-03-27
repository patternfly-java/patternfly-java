goog.module('org.patternfly.component.menu.MenuActionHandler.$LambdaAdaptor$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MenuActionHandler = goog.require('org.patternfly.component.menu.MenuActionHandler$impl');

let Menu = goog.forwardDeclare('org.patternfly.component.menu.Menu$impl');
let MenuItem = goog.forwardDeclare('org.patternfly.component.menu.MenuItem$impl');
let MenuItemAction = goog.forwardDeclare('org.patternfly.component.menu.MenuItemAction$impl');

/**
 * @implements {MenuActionHandler}
 */
class $LambdaAdaptor extends j_l_Object {
 /** @nodts */
 constructor(/** ?function(Menu, MenuItem, MenuItemAction):void */ fn) {
  $LambdaAdaptor.$clinit();
  super();
  /**@type {?function(Menu, MenuItem, MenuItemAction):void} @nodts*/
  this.f_fn__org_patternfly_component_menu_MenuActionHandler_$LambdaAdaptor;
  this.$ctor__org_patternfly_component_menu_MenuActionHandler_$LambdaAdaptor__org_patternfly_component_menu_MenuActionHandler_$JsFunction__void(fn);
 }
 /** @nodts */
 $ctor__org_patternfly_component_menu_MenuActionHandler_$LambdaAdaptor__org_patternfly_component_menu_MenuActionHandler_$JsFunction__void(/** ?function(Menu, MenuItem, MenuItemAction):void */ fn) {
  this.$ctor__java_lang_Object__void();
  this.f_fn__org_patternfly_component_menu_MenuActionHandler_$LambdaAdaptor = fn;
 }
 /** @override @nodts */
 m_onAction__org_patternfly_component_menu_Menu__org_patternfly_component_menu_MenuItem__org_patternfly_component_menu_MenuItemAction__void(/** Menu */ arg0, /** MenuItem */ arg1, /** MenuItemAction */ arg2) {
  {
   let $function = this.f_fn__org_patternfly_component_menu_MenuActionHandler_$LambdaAdaptor;
   $function(arg0, arg1, arg2);
  }
 }
 /** @nodts */
 static $clinit() {
  $LambdaAdaptor.$clinit = () =>{};
  $LambdaAdaptor.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $LambdaAdaptor;
 }
 
 /** @nodts */
 static $loadModules() {}
}
MenuActionHandler.$markImplementor($LambdaAdaptor);
$Util.$setClassMetadata($LambdaAdaptor, 'org.patternfly.component.menu.MenuActionHandler$$LambdaAdaptor');

exports = $LambdaAdaptor;

//# sourceMappingURL=MenuActionHandler$$LambdaAdaptor.js.map
