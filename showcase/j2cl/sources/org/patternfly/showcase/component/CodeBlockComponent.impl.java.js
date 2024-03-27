goog.module('org.patternfly.showcase.component.CodeBlockComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let CodeBlock = goog.forwardDeclare('org.patternfly.component.code.CodeBlock$impl');
let CodeBlockAction = goog.forwardDeclare('org.patternfly.component.code.CodeBlockAction$impl');
let CodeBlockActions = goog.forwardDeclare('org.patternfly.component.code.CodeBlockActions$impl');
let CodeBlockHeader = goog.forwardDeclare('org.patternfly.component.code.CodeBlockHeader$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CodeBlockComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!CodeBlockComponent} */
 static $create__() {
  CodeBlockComponent.$clinit();
  let $instance = new CodeBlockComponent();
  $instance.$ctor__org_patternfly_showcase_component_CodeBlockComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_CodeBlockComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'code-block'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-block-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('code-block-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeBlock.m_codeBlock__org_patternfly_component_code_CodeBlock().m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlock(CodeBlockAction.m_codeBlockCopyToClipboardAction__org_patternfly_component_code_CodeBlockAction()).m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlock(CodeBlockAction.m_codeBlockAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeBlockAction(fas.m_play__org_patternfly_icon_PredefinedIcon()).m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeBlockAction('Play').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeBlockAction(ComponentHandler.$adapt((/** Event */ action, codeBlock) =>{
    let codeBlock_1 = /**@type {CodeBlock}*/ ($Casts.$to(codeBlock, CodeBlock));
    goog.global.console.log('Play not yet implemented');
   }))).m_code__java_lang_String__org_patternfly_component_code_CodeBlock(CodeBlockComponent.f_CODE__org_patternfly_showcase_component_CodeBlockComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-block-expandable', 'Expandable', Code.m_code__java_lang_String__java_lang_String('code-block-expandable'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeBlock.m_codeBlock__org_patternfly_component_code_CodeBlock().m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlock(CodeBlockAction.m_codeBlockCopyToClipboardAction__org_patternfly_component_code_CodeBlockAction()).m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlock(CodeBlockAction.m_codeBlockAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeBlockAction(fas.m_play__org_patternfly_icon_PredefinedIcon()).m_ariaLabel__java_lang_String__org_patternfly_component_code_CodeBlockAction('Play').m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeBlockAction(ComponentHandler.$adapt((/** Event */ action_1, codeBlock_2) =>{
    let codeBlock_3 = /**@type {CodeBlock}*/ ($Casts.$to(codeBlock_2, CodeBlock));
    goog.global.console.log('Play not yet implemented');
   }))).m_truncate__org_patternfly_component_code_CodeBlock().m_code__java_lang_String__org_patternfly_component_code_CodeBlock(CodeBlockComponent.f_CODE__org_patternfly_showcase_component_CodeBlockComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(CodeBlock));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeBlock), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeBlockAction), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeBlockActions), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeBlockHeader), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  CodeBlockComponent.$clinit = () =>{};
  CodeBlockComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeBlockComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  CodeBlock = goog.module.get('org.patternfly.component.code.CodeBlock$impl');
  CodeBlockAction = goog.module.get('org.patternfly.component.code.CodeBlockAction$impl');
  CodeBlockActions = goog.module.get('org.patternfly.component.code.CodeBlockActions$impl');
  CodeBlockHeader = goog.module.get('org.patternfly.component.code.CodeBlockHeader$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
CodeBlockComponent.f_CODE__org_patternfly_showcase_component_CodeBlockComponent_ = 'apiVersion: helm.openshift.io/v1beta1/\nkind: HelmChartRepository\nmetadata:\nname: azure-sample-repo0oooo00ooo\nspec:\nconnectionConfig:\nurl: https://raw.githubusercontent.com/Azure-Samples/helm-charts/master/docs';
$Util.$setClassMetadata(CodeBlockComponent, 'org.patternfly.showcase.component.CodeBlockComponent');

exports = CodeBlockComponent;

//# sourceMappingURL=CodeBlockComponent.js.map
