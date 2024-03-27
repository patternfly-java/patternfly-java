goog.module('org.patternfly.component.code.CodeBlock$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Attachable = goog.require('org.jboss.elemento.Attachable$impl');
const BaseComponent = goog.require('org.patternfly.component.BaseComponent$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let HTMLPreElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLPreElement.$Overlay$impl');
let CharSequence = goog.forwardDeclare('java.lang.CharSequence$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ComponentType = goog.forwardDeclare('org.patternfly.component.ComponentType$impl');
let CodeBlockAction = goog.forwardDeclare('org.patternfly.component.code.CodeBlockAction$impl');
let CodeBlockActions = goog.forwardDeclare('org.patternfly.component.code.CodeBlockActions$impl');
let CodeBlockHeader = goog.forwardDeclare('org.patternfly.component.code.CodeBlockHeader$impl');
let ExpandableSection = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSection$impl');
let ExpandableSectionContent = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSectionContent$impl');
let ExpandableSectionToggle = goog.forwardDeclare('org.patternfly.component.expandable.ExpandableSectionToggle$impl');
let Classes = goog.forwardDeclare('org.patternfly.style.Classes$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {BaseComponent<HTMLDivElement, CodeBlock>}
 * @implements {Attachable}
 */
class CodeBlock extends BaseComponent {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {HTMLElement} @nodts*/
  this.f_preElement__org_patternfly_component_code_CodeBlock_;
  /**@type {HTMLElement} @nodts*/
  this.f_codeElement__org_patternfly_component_code_CodeBlock_;
  /**@type {?string} @nodts*/
  this.f_code__org_patternfly_component_code_CodeBlock_;
  /**@type {number} @nodts*/
  this.f_truncate__org_patternfly_component_code_CodeBlock_ = 0;
  /**@type {CodeBlockHeader} @nodts*/
  this.f_header__org_patternfly_component_code_CodeBlock_;
  /**@type {ExpandableSection} @nodts*/
  this.f_esCode__org_patternfly_component_code_CodeBlock_;
  /**@type {ExpandableSection} @nodts*/
  this.f_esTrigger__org_patternfly_component_code_CodeBlock_;
 }
 /** @nodts @return {CodeBlock} */
 static m_codeBlock__org_patternfly_component_code_CodeBlock() {
  CodeBlock.$clinit();
  return CodeBlock.$create__java_lang_String(null);
 }
 /** @nodts @return {CodeBlock} */
 static m_codeBlock__java_lang_String__org_patternfly_component_code_CodeBlock(/** ?string */ code) {
  CodeBlock.$clinit();
  return CodeBlock.$create__java_lang_String(code);
 }
 /** @nodts @return {!CodeBlock} */
 static $create__java_lang_String(/** ?string */ code) {
  CodeBlock.$clinit();
  let $instance = new CodeBlock();
  $instance.$ctor__org_patternfly_component_code_CodeBlock__java_lang_String__void(code);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_code_CodeBlock__java_lang_String__void(/** ?string */ code) {
  this.$ctor__org_patternfly_component_BaseComponent__org_patternfly_component_ComponentType__elemental2_dom_HTMLElement__void(ComponentType.f_CodeBlock__org_patternfly_component_ComponentType, /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeBlock__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  this.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeBlock__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_content__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_preElement__org_patternfly_component_code_CodeBlock_ = /**@type {HTMLPreElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLPreElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLPreElement>}*/ ($Casts.$to(Elements.m_pre__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeBlock__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_pre__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(this.f_codeElement__org_patternfly_component_code_CodeBlock_ = /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_code__org_jboss_elemento_HTMLContainerBuilder().m_css__arrayOf_java_lang_String__org_jboss_elemento_TypedBuilder(/**@type {!Array<?string>}*/ ($Arrays.$init([Classes.m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(Classes.f_codeBlock__org_patternfly_style_Classes, /**@type {!Array<?string>}*/ ($Arrays.$init([Classes.f_code__org_patternfly_style_Classes], j_l_String)))], j_l_String))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement()), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLPreElement_$Overlay))), HTMLContainerBuilder)));
  if (!$Equality.$same(code, null)) {
   this.f_codeElement__org_patternfly_component_code_CodeBlock_.textContent = code;
  }
  this.m_storeComponent__void();
  Attachable.m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable__void(this, this);
 }
 /** @override @nodts */
 m_attach__elemental2_dom_MutationRecord__void(/** MutationRecord */ mutationRecord) {
  if (this.m_mustSplitCode__boolean_$p_org_patternfly_component_code_CodeBlock()) {
   this.m_splitCode__void_$p_org_patternfly_component_code_CodeBlock();
  }
 }
 /** @nodts @return {CodeBlock} */
 m_addHeader__org_patternfly_component_code_CodeBlockHeader__org_patternfly_component_code_CodeBlock(/** CodeBlockHeader */ header) {
  return this.m_add__org_patternfly_component_code_CodeBlockHeader__org_patternfly_component_code_CodeBlock(header);
 }
 /** @nodts @return {CodeBlock} */
 m_add__org_patternfly_component_code_CodeBlockHeader__org_patternfly_component_code_CodeBlock(/** CodeBlockHeader */ header) {
  this.f_header__org_patternfly_component_code_CodeBlock_ = header;
  Elements.m_insertFirst__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), /**@type {HTMLDivElement}*/ ($Casts.$to(header.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)));
  return this;
 }
 /** @nodts @return {CodeBlock} */
 m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlock(/** CodeBlockAction */ action) {
  if ($Equality.$same(this.f_header__org_patternfly_component_code_CodeBlock_, null)) {
   this.m_addHeader__org_patternfly_component_code_CodeBlockHeader__org_patternfly_component_code_CodeBlock(CodeBlockHeader.m_codeBlockHeader__org_patternfly_component_code_CodeBlockHeader());
  }
  if ($Equality.$same(this.f_header__org_patternfly_component_code_CodeBlock_.f_actions__org_patternfly_component_code_CodeBlockHeader, null)) {
   this.f_header__org_patternfly_component_code_CodeBlock_.m_addActions__org_patternfly_component_code_CodeBlockActions__org_patternfly_component_code_CodeBlockHeader(CodeBlockActions.m_codeBlockActions__org_patternfly_component_code_CodeBlockActions());
  }
  this.f_header__org_patternfly_component_code_CodeBlock_.f_actions__org_patternfly_component_code_CodeBlockHeader.m_addAction__org_patternfly_component_code_CodeBlockAction__org_patternfly_component_code_CodeBlockActions(action);
  return this;
 }
 /** @nodts @return {CodeBlock} */
 m_truncate__org_patternfly_component_code_CodeBlock() {
  return this.m_truncate__int__org_patternfly_component_code_CodeBlock(CodeBlock.f_DEFAULT_TRUNCATE__org_patternfly_component_code_CodeBlock);
 }
 /** @nodts @return {CodeBlock} */
 m_truncate__int__org_patternfly_component_code_CodeBlock(/** number */ truncate) {
  this.f_truncate__org_patternfly_component_code_CodeBlock_ = truncate;
  return this;
 }
 /** @nodts @return {CodeBlock} */
 m_code__java_lang_String__org_patternfly_component_code_CodeBlock(/** ?string */ code) {
  this.f_code__org_patternfly_component_code_CodeBlock_ = code;
  if (/**@type {HTMLDivElement}*/ ($Casts.$to(this.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)).isConnected) {
   if (this.m_mustSplitCode__boolean_$p_org_patternfly_component_code_CodeBlock()) {
    this.m_splitCode__void_$p_org_patternfly_component_code_CodeBlock();
   } else {
    this.m_unsplitCode__void_$p_org_patternfly_component_code_CodeBlock();
    this.f_codeElement__org_patternfly_component_code_CodeBlock_.textContent = code;
   }
  } else {
   this.f_codeElement__org_patternfly_component_code_CodeBlock_.textContent = code;
  }
  return this;
 }
 /** @nodts @return {CodeBlock} */
 m_that__org_patternfly_component_code_CodeBlock() {
  return this;
 }
 /** @nodts @return {?string} */
 m_code__java_lang_String() {
  return this.f_code__org_patternfly_component_code_CodeBlock_;
 }
 /** @nodts @return {Array<?string>} */
 m_lines__arrayOf_java_lang_String_$p_org_patternfly_component_code_CodeBlock() {
  return !$Equality.$same(this.f_code__org_patternfly_component_code_CodeBlock_, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(j_l_String.m_trim__java_lang_String__java_lang_String(this.f_code__org_patternfly_component_code_CodeBlock_)) ? j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(this.f_code__org_patternfly_component_code_CodeBlock_, '\n') : /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String));
 }
 /** @nodts @return {boolean} */
 m_mustSplitCode__boolean_$p_org_patternfly_component_code_CodeBlock() {
  return this.f_truncate__org_patternfly_component_code_CodeBlock_ > 0 && this.f_truncate__org_patternfly_component_code_CodeBlock_ < this.m_lines__arrayOf_java_lang_String_$p_org_patternfly_component_code_CodeBlock().length;
 }
 /** @nodts */
 m_splitCode__void_$p_org_patternfly_component_code_CodeBlock() {
  let visibleCode = j_l_String.m_join__java_lang_CharSequence__arrayOf_java_lang_CharSequence__java_lang_String('\n', /**@type {Array<(CharSequence|string)>}*/ ($Arrays.$castTo(Arrays.m_copyOfRange__arrayOf_java_lang_Object__int__int__arrayOf_java_lang_Object(this.m_lines__arrayOf_java_lang_String_$p_org_patternfly_component_code_CodeBlock(), 0, this.f_truncate__org_patternfly_component_code_CodeBlock_), CharSequence, 1)));
  let moreCode = j_l_String.m_join__java_lang_CharSequence__arrayOf_java_lang_CharSequence__java_lang_String('\n', /**@type {Array<(CharSequence|string)>}*/ ($Arrays.$castTo(Arrays.m_copyOfRange__arrayOf_java_lang_Object__int__int__arrayOf_java_lang_Object(this.m_lines__arrayOf_java_lang_String_$p_org_patternfly_component_code_CodeBlock(), this.f_truncate__org_patternfly_component_code_CodeBlock_, this.m_lines__arrayOf_java_lang_String_$p_org_patternfly_component_code_CodeBlock().length), CharSequence, 1)));
  if ($Equality.$same(this.f_esCode__org_patternfly_component_code_CodeBlock_, null) && $Equality.$same(this.f_esTrigger__org_patternfly_component_code_CodeBlock_, null)) {
   let codeId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['es-code'], j_l_String)));
   let triggerId = Id.m_unique__java_lang_String__arrayOf_java_lang_String__java_lang_String(this.m_componentType__org_patternfly_component_ComponentType().f_id__org_patternfly_component_ComponentType, /**@type {!Array<?string>}*/ ($Arrays.$init(['es-trigger'], j_l_String)));
   this.f_esCode__org_patternfly_component_code_CodeBlock_ = ExpandableSection.m_expandableSection__java_lang_String__org_patternfly_component_expandable_ExpandableSection(codeId).m_detachedFrom__java_lang_String__org_patternfly_component_expandable_ExpandableSection(triggerId).m_addContent__org_patternfly_component_expandable_ExpandableSectionContent__org_patternfly_component_expandable_ExpandableSection(/**@type {ExpandableSectionContent}*/ ($Casts.$to(ExpandableSectionContent.m_expandableSectionContent__org_patternfly_component_expandable_ExpandableSectionContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(moreCode), ExpandableSectionContent)));
   this.f_esTrigger__org_patternfly_component_code_CodeBlock_ = ExpandableSection.m_expandableSection__java_lang_String__org_patternfly_component_expandable_ExpandableSection(triggerId).m_detachedFrom__java_lang_String__org_patternfly_component_expandable_ExpandableSection(codeId).m_addToggle__org_patternfly_component_expandable_ExpandableSectionToggle__org_patternfly_component_expandable_ExpandableSection(ExpandableSectionToggle.m_expandableSectionToggle__java_lang_String__java_lang_String__org_patternfly_component_expandable_ExpandableSectionToggle('Show more', 'Show less'));
   Elements.m_removeChildrenFrom__elemental2_dom_Element__void(this.f_codeElement__org_patternfly_component_code_CodeBlock_);
   /**@type {HTMLContainerBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLElement>}*/ (Elements.m_wrapHtmlContainer__elemental2_dom_HTMLElement__org_jboss_elemento_HTMLContainerBuilder(this.f_codeElement__org_patternfly_component_code_CodeBlock_)).m_add__java_lang_String__org_jboss_elemento_TypedBuilder(visibleCode), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(this.f_esCode__org_patternfly_component_code_CodeBlock_);
   Elements.m_insertAfter__elemental2_dom_Element__elemental2_dom_Element__void(/**@type {HTMLDivElement}*/ ($Casts.$to(this.f_esTrigger__org_patternfly_component_code_CodeBlock_.m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay)), this.f_preElement__org_patternfly_component_code_CodeBlock_);
  } else if (!$Equality.$same(this.f_esCode__org_patternfly_component_code_CodeBlock_, null)) {
   this.f_codeElement__org_patternfly_component_code_CodeBlock_.textContent = visibleCode;
   this.f_esCode__org_patternfly_component_code_CodeBlock_.m_content__org_patternfly_component_expandable_ExpandableSectionContent().m_textContent__java_lang_String__org_jboss_elemento_TypedBuilder(moreCode);
  }
 }
 /** @nodts */
 m_unsplitCode__void_$p_org_patternfly_component_code_CodeBlock() {
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_esCode__org_patternfly_component_code_CodeBlock_);
  Elements.m_failSafeRemoveFromParent__org_jboss_elemento_IsElement__boolean(this.f_esTrigger__org_patternfly_component_code_CodeBlock_);
  this.f_esCode__org_patternfly_component_code_CodeBlock_ = null;
  this.f_esTrigger__org_patternfly_component_code_CodeBlock_ = null;
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_detach__elemental2_dom_MutationRecord__void(/** MutationRecord */ arg0) {
  Attachable.m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord__void(this, arg0);
 }
 //Bridge method.
 /** @final @override @nodts @return {CodeBlock} */
 m_that__org_jboss_elemento_TypedBuilder() {
  return this.m_that__org_patternfly_component_code_CodeBlock();
 }
 /** @nodts */
 static $clinit() {
  CodeBlock.$clinit = () =>{};
  CodeBlock.$loadModules();
  BaseComponent.$clinit();
  Attachable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CodeBlock;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  HTMLPreElement_$Overlay = goog.module.get('elemental2.dom.HTMLPreElement.$Overlay$impl');
  CharSequence = goog.module.get('java.lang.CharSequence$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  ComponentType = goog.module.get('org.patternfly.component.ComponentType$impl');
  CodeBlockActions = goog.module.get('org.patternfly.component.code.CodeBlockActions$impl');
  CodeBlockHeader = goog.module.get('org.patternfly.component.code.CodeBlockHeader$impl');
  ExpandableSection = goog.module.get('org.patternfly.component.expandable.ExpandableSection$impl');
  ExpandableSectionContent = goog.module.get('org.patternfly.component.expandable.ExpandableSectionContent$impl');
  ExpandableSectionToggle = goog.module.get('org.patternfly.component.expandable.ExpandableSectionToggle$impl');
  Classes = goog.module.get('org.patternfly.style.Classes$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {number} @nodts*/
CodeBlock.f_DEFAULT_TRUNCATE__org_patternfly_component_code_CodeBlock = 3;
Attachable.$markImplementor(CodeBlock);
$Util.$setClassMetadata(CodeBlock, 'org.patternfly.component.code.CodeBlock');

exports = CodeBlock;

//# sourceMappingURL=CodeBlock.js.map
