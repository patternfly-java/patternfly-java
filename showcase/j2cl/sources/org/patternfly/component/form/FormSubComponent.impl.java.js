goog.module('org.patternfly.component.form.FormSubComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SubComponent = goog.require('org.patternfly.component.SubComponent$impl');

let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');

/**
 * @abstract
 * @template E, B
 * @extends {SubComponent<E, B>}
 */
class FormSubComponent extends SubComponent {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 $ctor__org_patternfly_component_form_FormSubComponent__java_lang_String__elemental2_dom_HTMLElement__void(/** ?string */ name, /** E */ element) {
  this.$ctor__org_patternfly_component_SubComponent__org_patternfly_component_ComponentType__java_lang_String__elemental2_dom_HTMLElement__void(ComponentType.f_Form__org_patternfly_component_ComponentType, name, element);
 }
 /** @nodts */
 static $clinit() {
  FormSubComponent.$clinit = () =>{};
  FormSubComponent.$loadModules();
  SubComponent.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FormSubComponent;
 }
 /** @abstract @override @nodts @return {B} */
 m_that__org_jboss_elemento_TypedBuilder() {}
 
 /** @nodts */
 static $loadModules() {
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
 }
}
$Util.$setClassMetadata(FormSubComponent, 'org.patternfly.component.form.FormSubComponent');

exports = FormSubComponent;

//# sourceMappingURL=FormSubComponent.js.map
