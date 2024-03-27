goog.module('org.patternfly.showcase.component.TextInputGroupComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let Chip = goog.forwardDeclare('org.patternfly.component.chip.Chip$impl');
let ChipGroup = goog.forwardDeclare('org.patternfly.component.chip.ChipGroup$impl');
let TextInputGroup = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroup$impl');
let TextInputGroupMain = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupMain$impl');
let TextInputGroupUtilities = goog.forwardDeclare('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
let ObservableValue = goog.forwardDeclare('org.patternfly.core.ObservableValue$impl');
let Subscriber = goog.forwardDeclare('org.patternfly.core.ObservableValue.Subscriber$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let CloseHandler = goog.forwardDeclare('org.patternfly.handler.CloseHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class TextInputGroupComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!TextInputGroupComponent} */
 static $create__() {
  TextInputGroupComponent.$clinit();
  let $instance = new TextInputGroupComponent();
  $instance.$ctor__org_patternfly_showcase_component_TextInputGroupComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_TextInputGroupComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'text-input-group'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('tig-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(TextInputGroup.m_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroup().m_addMain__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(TextInputGroupMain.m_textInputGroupMain__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('basic-text-input-group-0'))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-disabled', 'Disabled', Code.m_code__java_lang_String__java_lang_String('tig-disabled'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {TextInputGroup}*/ ($Casts.$to(TextInputGroup.m_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroup().m_addMain__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(TextInputGroupMain.m_textInputGroupMain__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('disabled-text-input-group-0').m_value__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('Disabled')).m_disabled__org_jboss_elemento_TypedBuilder(), TextInputGroup))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-utilities-and-icon', 'Utilities and icon', Code.m_code__java_lang_String__java_lang_String('tig-utilities-and-icon'), Supplier.$adapt(() =>{
   let textInputGroup = TextInputGroup.m_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroup();
   textInputGroup.m_addMain__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(/**@type {TextInputGroupMain}*/ ($Casts.$to(TextInputGroupMain.m_textInputGroupMain__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('tig-utilities-and-icon-0').m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_search__org_patternfly_icon_PredefinedIcon()), TextInputGroupMain)).m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('Placeholder').m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_TextInputGroupMain(ChangeHandler.$adapt((/** Event */ e, tig, value) =>{
    let tig_1 = /**@type {TextInputGroup}*/ ($Casts.$to(tig, TextInputGroup));
    let value_1 = /**@type {?string}*/ ($Casts.$to(value, j_l_String));
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(tig_1.m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities(), !j_l_String.m_isEmpty__java_lang_String__boolean(value_1));
   }))).m_addUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroup(/**@type {TextInputGroupUtilities}*/ ($Casts.$to(TextInputGroupUtilities.m_textInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_times__org_patternfly_icon_PredefinedIcon()), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e_1) =>{
    let e_2 = /**@type {MouseEvent}*/ ($Casts.$to(e_1, MouseEvent_$Overlay));
    textInputGroup.m_main__org_patternfly_component_textinputgroup_TextInputGroupMain().m_value__java_lang_String__boolean__org_patternfly_component_textinputgroup_TextInputGroupMain('', true);
   }), Button))), TextInputGroupUtilities)));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(textInputGroup), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('tig-filters', 'Filters', Code.m_code__java_lang_String__java_lang_String('tig-filters'), Supplier.$adapt(() =>{
   let chipsPresent = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(true));
   let textEntered = /**@type {ObservableValue<?boolean>}*/ (ObservableValue.m_ov__java_lang_Object__org_patternfly_core_ObservableValue(false));
   let textInputGroup_1 = TextInputGroup.m_textInputGroup__org_patternfly_component_textinputgroup_TextInputGroup();
   let chipGroup = ChipGroup.m_chipGroup__org_patternfly_component_chip_ChipGroup();
   let closeHandler = CloseHandler.$adapt((/** Event */ event, chip) =>{
    let chip_1 = /**@type {Chip}*/ ($Casts.$to(chip, Chip));
    chipsPresent.m_set__java_lang_Object__void(!chipGroup.m_values__java_util_Set().isEmpty());
   });
   chipGroup.m_addChips__java_lang_Iterable__java_util_function_Function__org_patternfly_component_chip_ChipGroup(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(/**@type {!Array<?string>}*/ ($Arrays.$init(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'], j_l_String)))), j_u_function_Function.$adapt((text) =>{
    let text_1 = /**@type {?string}*/ ($Casts.$to(text, j_l_String));
    return Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip(text_1).m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_Chip(closeHandler);
   }));
   textInputGroup_1.m_addMain__org_patternfly_component_textinputgroup_TextInputGroupMain__org_patternfly_component_textinputgroup_TextInputGroup(TextInputGroupMain.m_textInputGroupMain__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('tig-filters-0').m_addChipGroup__org_patternfly_component_chip_ChipGroup__org_patternfly_component_textinputgroup_TextInputGroupMain(chipGroup).m_placeholder__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('Placeholder').m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_textinputgroup_TextInputGroupMain(ChangeHandler.$adapt((/** Event */ e_3, tig_2, value_2) =>{
    let tig_3 = /**@type {TextInputGroup}*/ ($Casts.$to(tig_2, TextInputGroup));
    let value_3 = /**@type {?string}*/ ($Casts.$to(value_2, j_l_String));
    textEntered.m_set__java_lang_Object__void(!j_l_String.m_isEmpty__java_lang_String__boolean(value_3));
    if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_Event__boolean(e_3) && !j_l_String.m_isEmpty__java_lang_String__boolean(value_3)) {
     chipGroup.m_addChip__org_patternfly_component_chip_Chip__org_patternfly_component_chip_ChipGroup(Chip.m_chip__java_lang_String__org_patternfly_component_chip_Chip(value_3).m_onClose__org_patternfly_handler_CloseHandler__org_patternfly_component_chip_Chip(closeHandler));
     tig_3.m_main__org_patternfly_component_textinputgroup_TextInputGroupMain().m_value__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('');
     chipsPresent.m_set__java_lang_Object__void(true);
     textEntered.m_set__java_lang_Object__void(false);
    }
   }))).m_addUtilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities__org_patternfly_component_textinputgroup_TextInputGroup(/**@type {TextInputGroupUtilities}*/ ($Casts.$to(TextInputGroupUtilities.m_textInputGroupUtilities__boolean__org_patternfly_component_textinputgroup_TextInputGroupUtilities(false).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_times__org_patternfly_icon_PredefinedIcon()), Button)).m_plain__org_jboss_elemento_TypedBuilder(), Button)).m_on__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn__org_jboss_elemento_TypedBuilder(EventType.f_click__org_jboss_elemento_EventType, (e_4) =>{
    let e_5 = /**@type {MouseEvent}*/ ($Casts.$to(e_4, MouseEvent_$Overlay));
    chipGroup.m_clear__void();
    textInputGroup_1.m_main__org_patternfly_component_textinputgroup_TextInputGroupMain().m_value__java_lang_String__org_patternfly_component_textinputgroup_TextInputGroupMain('');
    chipsPresent.m_set__java_lang_Object__void(false);
    textEntered.m_change__java_lang_Object__void(false);
   }), Button))), TextInputGroupUtilities)));
   chipsPresent.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current, previous) =>{
    let current_1 = /**@type {?boolean}*/ ($Casts.$to(current, Boolean));
    let previous_1 = /**@type {?boolean}*/ ($Casts.$to(previous, Boolean));
    Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(chipGroup, Boolean.m_booleanValue__java_lang_Boolean__boolean(current_1));
    if (Boolean.m_booleanValue__java_lang_Boolean__boolean(current_1)) {
     textInputGroup_1.m_main__org_patternfly_component_textinputgroup_TextInputGroupMain().m_removeIcon__org_patternfly_component_textinputgroup_TextInputGroupMain();
    } else {
     textInputGroup_1.m_main__org_patternfly_component_textinputgroup_TextInputGroupMain().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_search__org_patternfly_icon_PredefinedIcon());
     Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(textInputGroup_1.m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities(), Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(textEntered.m_get__java_lang_Object(), Boolean))));
    }
   }));
   textEntered.m_subscribe__org_patternfly_core_ObservableValue_Subscriber__org_patternfly_core_ObservableValue(Subscriber.$adapt((current_2, previous_2) =>{
    let current_3 = /**@type {?boolean}*/ ($Casts.$to(current_2, Boolean));
    let previous_3 = /**@type {?boolean}*/ ($Casts.$to(previous_2, Boolean));
    if (Boolean.m_booleanValue__java_lang_Boolean__boolean(current_3)) {
     Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(textInputGroup_1.m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities(), true);
    } else {
     Elements.m_setVisible__org_jboss_elemento_IsElement__boolean__void(textInputGroup_1.m_utilities__org_patternfly_component_textinputgroup_TextInputGroupUtilities(), Boolean.m_booleanValue__java_lang_Boolean__boolean(/**@type {?boolean}*/ ($Casts.$to(chipsPresent.m_get__java_lang_Object(), Boolean))));
    }
   }));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(textInputGroup_1), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(TextInputGroup));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TextInputGroup), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TextInputGroupMain), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(TextInputGroupUtilities), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  TextInputGroupComponent.$clinit = () =>{};
  TextInputGroupComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextInputGroupComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  Chip = goog.module.get('org.patternfly.component.chip.Chip$impl');
  ChipGroup = goog.module.get('org.patternfly.component.chip.ChipGroup$impl');
  TextInputGroup = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroup$impl');
  TextInputGroupMain = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroupMain$impl');
  TextInputGroupUtilities = goog.module.get('org.patternfly.component.textinputgroup.TextInputGroupUtilities$impl');
  ObservableValue = goog.module.get('org.patternfly.core.ObservableValue$impl');
  Subscriber = goog.module.get('org.patternfly.core.ObservableValue.Subscriber$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  CloseHandler = goog.module.get('org.patternfly.handler.CloseHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(TextInputGroupComponent, 'org.patternfly.showcase.component.TextInputGroupComponent');

exports = TextInputGroupComponent;

//# sourceMappingURL=TextInputGroupComponent.js.map
