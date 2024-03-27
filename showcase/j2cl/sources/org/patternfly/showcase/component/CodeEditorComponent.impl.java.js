goog.module('org.patternfly.showcase.component.CodeEditorComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let CodeEditor = goog.forwardDeclare('org.patternfly.component.code.CodeEditor$impl');
let CodeEditorAction = goog.forwardDeclare('org.patternfly.component.code.CodeEditorAction$impl');
let CodeEditorActions = goog.forwardDeclare('org.patternfly.component.code.CodeEditorActions$impl');
let CodeEditorHeader = goog.forwardDeclare('org.patternfly.component.code.CodeEditorHeader$impl');
let CodeEditorHeaderMain = goog.forwardDeclare('org.patternfly.component.code.CodeEditorHeaderMain$impl');
let CodeEditorLink = goog.forwardDeclare('org.patternfly.component.code.CodeEditorLink$impl');
let CodeEditorLinks = goog.forwardDeclare('org.patternfly.component.code.CodeEditorLinks$impl');
let CodeEditorTab = goog.forwardDeclare('org.patternfly.component.code.CodeEditorTab$impl');
let CodeEditorTabIcon = goog.forwardDeclare('org.patternfly.component.code.CodeEditorTabIcon$impl');
let CodeEditorTabText = goog.forwardDeclare('org.patternfly.component.code.CodeEditorTabText$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CodeEditorComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!CodeEditorComponent} */
 static $create__() {
  CodeEditorComponent.$clinit();
  let $instance = new CodeEditorComponent();
  $instance.$ctor__org_patternfly_showcase_component_CodeEditorComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_CodeEditorComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'code-editor'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('code-editor-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(CodeEditorActions.m_codeEditorActions__org_patternfly_component_code_CodeEditorActions().m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction()).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(fas.m_download__org_patternfly_icon_PredefinedIcon())).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(fas.m_upload__org_patternfly_icon_PredefinedIcon()))).m_addTab__org_patternfly_component_code_CodeEditorTab__org_patternfly_component_code_CodeEditorHeader(CodeEditorTab.m_codeEditorTab__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_code_CodeEditorTab(fas.m_code__org_patternfly_icon_PredefinedIcon(), 'Java'))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-readonly', 'Readonly', Code.m_code__java_lang_String__java_lang_String('code-editor-readonly'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {CodeEditor}*/ ($Casts.$to(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_readonly__org_jboss_elemento_TypedBuilder(), CodeEditor)).m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(CodeEditorActions.m_codeEditorActions__org_patternfly_component_code_CodeEditorActions().m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction()).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(fas.m_download__org_patternfly_icon_PredefinedIcon())).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_component_button_Button__org_patternfly_component_code_CodeEditorAction(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_upload__org_patternfly_icon_PredefinedIcon()), Button)).m_control__org_patternfly_component_button_Button().m_disabled__org_jboss_elemento_TypedBuilder(), Button))))).m_addTab__org_patternfly_component_code_CodeEditorTab__org_patternfly_component_code_CodeEditorHeader(CodeEditorTab.m_codeEditorTab__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_code_CodeEditorTab(fas.m_code__org_patternfly_icon_PredefinedIcon(), 'Java'))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-no-actions', 'Without actions', Code.m_code__java_lang_String__java_lang_String('code-editor-no-actions'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addTab__org_patternfly_component_code_CodeEditorTab__org_patternfly_component_code_CodeEditorHeader(CodeEditorTab.m_codeEditorTab__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_code_CodeEditorTab(fas.m_code__org_patternfly_icon_PredefinedIcon(), 'Java'))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-no-tab', 'Without tab', Code.m_code__java_lang_String__java_lang_String('code-editor-no-tab'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(CodeEditorActions.m_codeEditorActions__org_patternfly_component_code_CodeEditorActions().m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction()).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(fas.m_download__org_patternfly_icon_PredefinedIcon())).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_component_button_Button__org_patternfly_component_code_CodeEditorAction(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_icon__org_patternfly_icon_PredefinedIcon__org_jboss_elemento_TypedBuilder(fas.m_upload__org_patternfly_icon_PredefinedIcon()), Button)).m_control__org_patternfly_component_button_Button().m_disabled__org_jboss_elemento_TypedBuilder(), Button)))))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-no-actions-no-tab', 'Without actions and tab', Code.m_code__java_lang_String__java_lang_String('code-editor-no-actions-no-tab'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('code-editor-header-content', 'With optional header content and keyboard shortcuts', Code.m_code__java_lang_String__java_lang_String('code-editor-header-content'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(CodeEditorActions.m_codeEditorActions__org_patternfly_component_code_CodeEditorActions().m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorCopyToClipboardAction__org_patternfly_component_code_CodeEditorAction()).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(fas.m_download__org_patternfly_icon_PredefinedIcon())).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(fas.m_upload__org_patternfly_icon_PredefinedIcon()))).m_addMain__org_patternfly_component_code_CodeEditorHeaderMain__org_patternfly_component_code_CodeEditorHeader(/**@type {CodeEditorHeaderMain}*/ ($Casts.$to(CodeEditorHeaderMain.m_codeEditorHeaderMain__org_patternfly_component_code_CodeEditorHeaderMain().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder('Header main content'), CodeEditorHeaderMain))).m_addLinks__org_patternfly_component_code_CodeEditorLinks__org_patternfly_component_code_CodeEditorHeader(CodeEditorLinks.m_codeEditorLinks__org_patternfly_component_code_CodeEditorLinks().m_addLink__org_patternfly_component_code_CodeEditorLink__org_patternfly_component_code_CodeEditorLinks(CodeEditorLink.m_codeEditorViewShortcutsLink__org_patternfly_component_code_CodeEditorLink())).m_addTab__org_patternfly_component_code_CodeEditorTab__org_patternfly_component_code_CodeEditorHeader(CodeEditorTab.m_codeEditorTab__org_patternfly_icon_PredefinedIcon__java_lang_String__org_patternfly_component_code_CodeEditorTab(fas.m_code__org_patternfly_icon_PredefinedIcon(), 'Java'))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(CodeEditor));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeEditor), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeEditorAction), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeEditorActions), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeEditorHeader), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeEditorHeaderMain), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeEditorLink), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeEditorLinks), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeEditorTab), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeEditorTabIcon), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(CodeEditorTabText), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  CodeEditorComponent.$clinit = () =>{};
  CodeEditorComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeEditorComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  CodeEditor = goog.module.get('org.patternfly.component.code.CodeEditor$impl');
  CodeEditorAction = goog.module.get('org.patternfly.component.code.CodeEditorAction$impl');
  CodeEditorActions = goog.module.get('org.patternfly.component.code.CodeEditorActions$impl');
  CodeEditorHeader = goog.module.get('org.patternfly.component.code.CodeEditorHeader$impl');
  CodeEditorHeaderMain = goog.module.get('org.patternfly.component.code.CodeEditorHeaderMain$impl');
  CodeEditorLink = goog.module.get('org.patternfly.component.code.CodeEditorLink$impl');
  CodeEditorLinks = goog.module.get('org.patternfly.component.code.CodeEditorLinks$impl');
  CodeEditorTab = goog.module.get('org.patternfly.component.code.CodeEditorTab$impl');
  CodeEditorTabIcon = goog.module.get('org.patternfly.component.code.CodeEditorTabIcon$impl');
  CodeEditorTabText = goog.module.get('org.patternfly.component.code.CodeEditorTabText$impl');
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
CodeEditorComponent.f_CODE__org_patternfly_showcase_component_CodeEditorComponent_ = 'expandableSection()\n      .indented()\n      .addToggle(expandableSectionToggle(\"Show more\", \"Show less\"))\n      .addContent(expandableSectionContent()\n              .textContent(\"This content is visible only when the component is expanded.\"))';
$Util.$setClassMetadata(CodeEditorComponent, 'org.patternfly.showcase.component.CodeEditorComponent');

exports = CodeEditorComponent;

//# sourceMappingURL=CodeEditorComponent.js.map
