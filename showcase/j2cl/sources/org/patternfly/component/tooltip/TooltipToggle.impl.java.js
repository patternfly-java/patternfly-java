goog.module('org.patternfly.component.tooltip.TooltipToggle$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');

class TooltipToggle extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_textElement__org_patternfly_component_tooltip_TooltipToggle;
  /**@type {Tooltip} @nodts*/
  this.f_tooltip__org_patternfly_component_tooltip_TooltipToggle;
 }
 /** @nodts @return {!TooltipToggle} */
 static $create__elemental2_dom_HTMLElement(/** HTMLElement */ textElement) {
  TooltipToggle.$clinit();
  let $instance = new TooltipToggle();
  $instance.$ctor__org_patternfly_component_tooltip_TooltipToggle__elemental2_dom_HTMLElement__void(textElement);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_tooltip_TooltipToggle__elemental2_dom_HTMLElement__void(/** HTMLElement */ textElement) {
  this.$ctor__java_lang_Object__void();
  this.f_textElement__org_patternfly_component_tooltip_TooltipToggle = textElement;
 }
 /** @nodts */
 m_eval__void() {
  this.m_eval__java_util_function_Consumer__java_util_function_Consumer__void(null, null);
 }
 /** @nodts */
 m_eval__java_util_function_Consumer__java_util_function_Consumer__void(/** Consumer<Tooltip> */ afterEnable, /** Consumer<Tooltip> */ beforeDisable) {
  DomGlobal_$Overlay.m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object__double((.../** ...* */ __) =>{
   let enableTooltip = this.f_textElement__org_patternfly_component_tooltip_TooltipToggle.offsetWidth < this.f_textElement__org_patternfly_component_tooltip_TooltipToggle.scrollWidth;
   if (enableTooltip) {
    if ($Equality.$same(this.f_tooltip__org_patternfly_component_tooltip_TooltipToggle, null)) {
     this.f_tooltip__org_patternfly_component_tooltip_TooltipToggle = Tooltip.m_tooltip__elemental2_dom_HTMLElement__java_lang_String__org_patternfly_component_tooltip_Tooltip(this.f_textElement__org_patternfly_component_tooltip_TooltipToggle, this.f_textElement__org_patternfly_component_tooltip_TooltipToggle.textContent).m_appendToBody__org_patternfly_component_tooltip_Tooltip();
    } else {
     this.f_tooltip__org_patternfly_component_tooltip_TooltipToggle.m_text__java_lang_String__org_patternfly_component_tooltip_Tooltip(this.f_textElement__org_patternfly_component_tooltip_TooltipToggle.textContent);
    }
    if (!$Equality.$same(afterEnable, null)) {
     afterEnable.m_accept__java_lang_Object__void(this.f_tooltip__org_patternfly_component_tooltip_TooltipToggle);
    }
   } else {
    if (!$Equality.$same(this.f_tooltip__org_patternfly_component_tooltip_TooltipToggle, null)) {
     if (!$Equality.$same(beforeDisable, null)) {
      beforeDisable.m_accept__java_lang_Object__void(this.f_tooltip__org_patternfly_component_tooltip_TooltipToggle);
     }
     this.m_stop__void();
    }
   }
  }, TooltipToggle.f_CALCULATE_WIDTH_TIMEOUT__org_patternfly_component_tooltip_TooltipToggle_, []);
 }
 /** @nodts */
 m_stop__void() {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_tooltip__org_patternfly_component_tooltip_TooltipToggle);
  this.f_tooltip__org_patternfly_component_tooltip_TooltipToggle = null;
 }
 /** @nodts */
 static $clinit() {
  TooltipToggle.$clinit = () =>{};
  TooltipToggle.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TooltipToggle;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
 }
}
/**@const {number} @nodts*/
TooltipToggle.f_CALCULATE_WIDTH_TIMEOUT__org_patternfly_component_tooltip_TooltipToggle_ = 333;
$Util.$setClassMetadata(TooltipToggle, 'org.patternfly.component.tooltip.TooltipToggle');

exports = TooltipToggle;

//# sourceMappingURL=TooltipToggle.js.map
