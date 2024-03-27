goog.module('org.patternfly.showcase.Snippet$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let HTMLElementBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLElementBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Button = goog.forwardDeclare('org.patternfly.component.button.Button$impl');
let CodeEditor = goog.forwardDeclare('org.patternfly.component.code.CodeEditor$impl');
let CodeEditorAction = goog.forwardDeclare('org.patternfly.component.code.CodeEditorAction$impl');
let CodeEditorActions = goog.forwardDeclare('org.patternfly.component.code.CodeEditorActions$impl');
let CodeEditorHeader = goog.forwardDeclare('org.patternfly.component.code.CodeEditorHeader$impl');
let Title = goog.forwardDeclare('org.patternfly.component.title.Title$impl');
let Tooltip = goog.forwardDeclare('org.patternfly.component.tooltip.Tooltip$impl');
let Aria = goog.forwardDeclare('org.patternfly.core.Aria$impl');
let Attributes = goog.forwardDeclare('org.patternfly.core.Attributes$impl');
let ComponentHandler = goog.forwardDeclare('org.patternfly.handler.ComponentHandler$impl');
let fas = goog.forwardDeclare('org.patternfly.icon.IconSets.fas$impl');
let AlignItems = goog.forwardDeclare('org.patternfly.layout.flex.AlignItems$impl');
let Flex = goog.forwardDeclare('org.patternfly.layout.flex.Flex$impl');
let SpaceItems = goog.forwardDeclare('org.patternfly.layout.flex.SpaceItems$impl');
let LinkIcon = goog.forwardDeclare('org.patternfly.showcase.LinkIcon$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Breakpoints = goog.forwardDeclare('org.patternfly.style.Breakpoints$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<HTMLElement>}
 */
class Snippet extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_showcase_Snippet;
  /**@type {?string} @nodts*/
  this.f_title__org_patternfly_showcase_Snippet;
  /**@type {Supplier<HTMLElement>} @nodts*/
  this.f_demoSupplier__org_patternfly_showcase_Snippet_;
  /**@type {HTMLElement} @nodts*/
  this.f_root__org_patternfly_showcase_Snippet_;
  /**@type {HTMLElement} @nodts*/
  this.f_preview__org_patternfly_showcase_Snippet_;
 }
 //Factory method corresponding to constructor 'Snippet(String, String, String, Supplier)'.
 /** @nodts @return {!Snippet} */
 static $create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier(/** ?string */ id, /** ?string */ title, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  Snippet.$clinit();
  let $instance = new Snippet();
  $instance.$ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier__void(id, title, code, demo);
  return $instance;
 }
 //Initialization from constructor 'Snippet(String, String, String, Supplier)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier__void(/** ?string */ id, /** ?string */ title, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  this.$ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_util_function_Supplier__void(id, title, /**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ (null), code, demo);
 }
 //Factory method corresponding to constructor 'Snippet(String, String, String, String, Supplier)'.
 /** @nodts @return {!Snippet} */
 static $create__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier(/** ?string */ id, /** ?string */ title, /** ?string */ description, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  Snippet.$clinit();
  let $instance = new Snippet();
  $instance.$ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier__void(id, title, description, code, demo);
  return $instance;
 }
 //Initialization from constructor 'Snippet(String, String, String, String, Supplier)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier__void(/** ?string */ id, /** ?string */ title, /** ?string */ description, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  this.$ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_util_function_Supplier__void(id, title, $Equality.$same(description, null) ? null : /**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__org_jboss_elemento_HTMLContainerBuilder().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(description), HTMLContainerBuilder)), code, demo);
 }
 //Factory method corresponding to constructor 'Snippet(String, String, HTMLContainerBuilder, String, Supplier)'.
 /** @nodts @return {!Snippet} */
 static $create__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_util_function_Supplier(/** ?string */ id, /** ?string */ title, /** HTMLContainerBuilder<HTMLParagraphElement> */ description, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  Snippet.$clinit();
  let $instance = new Snippet();
  $instance.$ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_util_function_Supplier__void(id, title, description, code, demo);
  return $instance;
 }
 //Initialization from constructor 'Snippet(String, String, HTMLContainerBuilder, String, Supplier)'.
 /** @nodts */
 $ctor__org_patternfly_showcase_Snippet__java_lang_String__java_lang_String__org_jboss_elemento_HTMLContainerBuilder__java_lang_String__java_util_function_Supplier__void(/** ?string */ id, /** ?string */ title, /** HTMLContainerBuilder<HTMLParagraphElement> */ description, /** ?string */ code, /** Supplier<HTMLElement> */ demo) {
  this.$ctor__java_lang_Object__void();
  this.f_id__org_patternfly_showcase_Snippet = id;
  this.f_title__org_patternfly_showcase_Snippet = title;
  this.f_demoSupplier__org_patternfly_showcase_Snippet_ = demo;
  let /** CodeEditor */ codeEditor;
  let codeId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init(['code'], j_l_String)));
  let undoId = Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String(id, /**@type {!Array<?string>}*/ ($Arrays.$init(['undo'], j_l_String)));
  this.f_root__org_patternfly_showcase_Snippet_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-example'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-example-header'], j_l_String))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Flex}*/ ($Casts.$to(Flex.m_flex__org_patternfly_layout_flex_Flex().m_spaceItems__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_Flex(/**@type {Breakpoints<SpaceItems>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, SpaceItems.f_none__org_patternfly_layout_flex_SpaceItems))).m_alignItems__org_patternfly_style_Breakpoints__org_patternfly_layout_flex_Flex(/**@type {Breakpoints<AlignItems>}*/ (Breakpoints.m_breakpoints__org_patternfly_style_Breakpoint__java_lang_Object__org_patternfly_style_Breakpoints(Breakpoint.f_default___org_patternfly_style_Breakpoint, AlignItems.f_center__org_patternfly_layout_flex_AlignItems))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {Title}*/ ($Casts.$to(/**@type {Title}*/ ($Casts.$to(/**@type {Title}*/ ($Casts.$to(/**@type {Title}*/ ($Casts.$to(Title.m_title__int__org_patternfly_style_Size__java_lang_String__org_patternfly_component_title_Title(3, Size.f_lg__org_patternfly_style_Size, title).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-heading', 'ws-example-heading'], j_l_String))), Title)).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(id), Title)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), Title)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String__org_jboss_elemento_HTMLContainerBuilder('#' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(id)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-heading-anchor'], j_l_String))), HTMLContainerBuilder)).m_aria__java_lang_String__boolean__org_jboss_elemento_TypedBuilder(Aria.f_hidden__org_patternfly_core_Aria, true), HTMLContainerBuilder)).m_attr__java_lang_String__int__org_jboss_elemento_TypedBuilder(Attributes.f_tabindex__org_patternfly_core_Attributes, - 1 | 0), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(LinkIcon.m_linkIcon__org_patternfly_showcase_LinkIcon()), HTMLContainerBuilder))), Title))), Flex))), HTMLContainerBuilder)).m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((element) =>{
   let element_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(element, HTMLContainerBuilder));
   if (!$Equality.$same(description, null)) {
    element_1.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLParagraphElement>}*/ ($Casts.$to(description.m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-p'], j_l_String))), HTMLContainerBuilder)));
   }
  })), HTMLContainerBuilder))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_preview__org_patternfly_showcase_Snippet_ = /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-preview'], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {HTMLElement}*/ ($Casts.$to(demo.m_get__java_lang_Object(), $Overlay))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay))), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(codeEditor = /**@type {CodeEditor}*/ ($Casts.$to(CodeEditor.m_codeEditor__org_patternfly_component_code_CodeEditor().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-code-editor'], j_l_String))), CodeEditor)).m_addHeader__org_patternfly_component_code_CodeEditorHeader__org_patternfly_component_code_CodeEditor(CodeEditorHeader.m_codeEditorHeader__org_patternfly_component_code_CodeEditorHeader().m_addActions__org_patternfly_component_code_CodeEditorActions__org_patternfly_component_code_CodeEditorHeader(/**@type {CodeEditorActions}*/ ($Casts.$to(/**@type {CodeEditorActions}*/ ($Casts.$to(CodeEditorActions.m_codeEditorActions__org_patternfly_component_code_CodeEditorActions().m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(CodeEditorAction.m_codeEditorAction__org_patternfly_component_button_Button__org_patternfly_component_code_CodeEditorAction(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(/**@type {Button}*/ ($Casts.$to(Button.m_button__org_patternfly_component_button_Button().m_id__java_lang_String__org_jboss_elemento_TypedBuilder(codeId), Button)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-code-editor-control'], j_l_String))), Button)).m_control__org_patternfly_component_button_Button().m_iconAndText__org_patternfly_icon_PredefinedIcon__java_lang_String__org_jboss_elemento_TypedBuilder(fas.m_code__org_patternfly_icon_PredefinedIcon(), 'Java'), Button))).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeEditorAction(ComponentHandler.$adapt((/** Event */ event, ce) =>{
   let ce_1 = /**@type {CodeEditor}*/ ($Casts.$to(ce, CodeEditor));
   let mainElement = ce_1.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))));
   Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(mainElement, !Elements.m_isVisible__elemental2_dom_HTMLElement__boolean(mainElement));
  }))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By(codeId), 'Toggle Java code')), CodeEditorActions)).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(/**@type {CodeEditorAction}*/ ($Casts.$to(CodeEditorAction.m_codeEditorCopyToClipboardAction__java_lang_String__java_lang_String__org_patternfly_component_code_CodeEditorAction('Copy code to clipboard', 'Code copied').m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-code-editor-control'], j_l_String))), CodeEditorAction))).m_addAction__org_patternfly_component_code_CodeEditorAction__org_patternfly_component_code_CodeEditorActions(/**@type {CodeEditorAction}*/ ($Casts.$to(/**@type {CodeEditorAction}*/ ($Casts.$to(CodeEditorAction.m_codeEditorAction__org_patternfly_icon_PredefinedIcon__org_patternfly_component_code_CodeEditorAction(fas.m_undo__org_patternfly_icon_PredefinedIcon()).m_id__java_lang_String__org_jboss_elemento_TypedBuilder(undoId), CodeEditorAction)).m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init(['ws-code-editor-control'], j_l_String))), CodeEditorAction)).m_onClick__org_patternfly_handler_ComponentHandler__org_patternfly_component_code_CodeEditorAction(ComponentHandler.$adapt((/** Event */ event_1, codeEditorAction) =>{
   let codeEditorAction_1 = /**@type {CodeEditor}*/ ($Casts.$to(codeEditorAction, CodeEditor));
   this.m_undo__void_$p_org_patternfly_showcase_Snippet();
  }))).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Tooltip.m_tooltip__org_jboss_elemento_By__java_lang_String__org_patternfly_component_tooltip_Tooltip(By.m_id__java_lang_String__org_jboss_elemento_By(undoId), 'Undo')), CodeEditorActions)))).m_code__java_lang_String__org_patternfly_component_code_CodeEditor(code)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  let mainElement_1 = codeEditor.m_find__org_jboss_elemento_By__elemental2_dom_HTMLElement(By.m_classname__java_lang_String__org_jboss_elemento_By(Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeEditor__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_main__org_patternfly_style_Classes], j_l_String)))));
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean__void(mainElement_1, false);
 }
 /** @nodts */
 m_undo__void_$p_org_patternfly_showcase_Snippet() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_preview__org_patternfly_showcase_Snippet_);
  this.f_preview__org_patternfly_showcase_Snippet_.appendChild(/**@type {HTMLElement}*/ ($Casts.$to(this.f_demoSupplier__org_patternfly_showcase_Snippet_.m_get__java_lang_Object(), $Overlay)));
 }
 /** @nodts @return {HTMLElement} */
 m_element__elemental2_dom_HTMLElement() {
  return this.f_root__org_patternfly_showcase_Snippet_;
 }
 /** @nodts @return {Snippet} */
 m_style__java_lang_String__org_patternfly_showcase_Snippet(/** ?string */ style) {
  /**@type {HTMLElementBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlElement__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLElementBuilder(this.f_preview__org_patternfly_showcase_Snippet_)).m_style__java_lang_String__org_jboss_elemento_TypedBuilder(style);
  return this;
 }
 //Bridge method.
 /** @final @override @nodts @return {HTMLElement} */
 m_element__elemental2_dom_Element() {
  return this.m_element__elemental2_dom_HTMLElement();
 }
 /** @nodts */
 static $clinit() {
  Snippet.$clinit = () =>{};
  Snippet.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Snippet;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Button = goog.module.get('org.patternfly.component.button.Button$impl');
  CodeEditor = goog.module.get('org.patternfly.component.code.CodeEditor$impl');
  CodeEditorAction = goog.module.get('org.patternfly.component.code.CodeEditorAction$impl');
  CodeEditorActions = goog.module.get('org.patternfly.component.code.CodeEditorActions$impl');
  CodeEditorHeader = goog.module.get('org.patternfly.component.code.CodeEditorHeader$impl');
  Title = goog.module.get('org.patternfly.component.title.Title$impl');
  Tooltip = goog.module.get('org.patternfly.component.tooltip.Tooltip$impl');
  Aria = goog.module.get('org.patternfly.core.Aria$impl');
  Attributes = goog.module.get('org.patternfly.core.Attributes$impl');
  ComponentHandler = goog.module.get('org.patternfly.handler.ComponentHandler$impl');
  fas = goog.module.get('org.patternfly.icon.IconSets.fas$impl');
  AlignItems = goog.module.get('org.patternfly.layout.flex.AlignItems$impl');
  Flex = goog.module.get('org.patternfly.layout.flex.Flex$impl');
  SpaceItems = goog.module.get('org.patternfly.layout.flex.SpaceItems$impl');
  LinkIcon = goog.module.get('org.patternfly.showcase.LinkIcon$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
  Breakpoints = goog.module.get('org.patternfly.style.Breakpoints$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
IsElement.$markImplementor(Snippet);
$Util.$setClassMetadata(Snippet, 'org.patternfly.showcase.Snippet');

exports = Snippet;

//# sourceMappingURL=Snippet.js.map
