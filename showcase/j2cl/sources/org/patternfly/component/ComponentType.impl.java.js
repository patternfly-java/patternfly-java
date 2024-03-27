goog.module('org.patternfly.component.ComponentType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @final
 * @extends {Enum<ComponentType>}
 */
class ComponentType extends Enum {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_component_ComponentType;
  /**@type {?string} @nodts*/
  this.f_componentName__org_patternfly_component_ComponentType;
 }
 /** @nodts @return {!ComponentType} */
 static $create__java_lang_String__int__java_lang_String__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ id, /** ?string */ componentName) {
  let $instance = new ComponentType();
  $instance.$ctor__org_patternfly_component_ComponentType__java_lang_String__int__java_lang_String__java_lang_String__void($name, $ordinal, id, componentName);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_component_ComponentType__java_lang_String__int__java_lang_String__java_lang_String__void(/** ?string */ $name, /** number */ $ordinal, /** ?string */ id, /** ?string */ componentName) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int__void($name, $ordinal);
  this.f_id__org_patternfly_component_ComponentType = id;
  this.f_componentName__org_patternfly_component_ComponentType = componentName;
 }
 /** @nodts @return {!ComponentType} */
 static m_valueOf__java_lang_String__org_patternfly_component_ComponentType(/** string */ name) {
  ComponentType.$clinit();
  if ($Equality.$same(ComponentType.f_namesToValuesMap__org_patternfly_component_ComponentType_, null)) {
   ComponentType.f_namesToValuesMap__org_patternfly_component_ComponentType_ = /**@type {Map<?string, !ComponentType>}*/ ($Enums.createMapFromValues(ComponentType.m_values__arrayOf_org_patternfly_component_ComponentType()));
  }
  return /**@type {ComponentType}*/ ($Enums.getValueFromNameAndMap(name, ComponentType.f_namesToValuesMap__org_patternfly_component_ComponentType_));
 }
 /** @nodts @return {!Array<!ComponentType>} */
 static m_values__arrayOf_org_patternfly_component_ComponentType() {
  ComponentType.$clinit();
  return /**@type {!Array<ComponentType>}*/ ($Arrays.$init([ComponentType.f_Accordion__org_patternfly_component_ComponentType, ComponentType.f_ActionList__org_patternfly_component_ComponentType, ComponentType.f_Alert__org_patternfly_component_ComponentType, ComponentType.f_AlertGroup__org_patternfly_component_ComponentType, ComponentType.f_Avatar__org_patternfly_component_ComponentType, ComponentType.f_BackToTop__org_patternfly_component_ComponentType, ComponentType.f_Badge__org_patternfly_component_ComponentType, ComponentType.f_Banner__org_patternfly_component_ComponentType, ComponentType.f_Brand__org_patternfly_component_ComponentType, ComponentType.f_Breadcrumb__org_patternfly_component_ComponentType, ComponentType.f_Button__org_patternfly_component_ComponentType, ComponentType.f_Card__org_patternfly_component_ComponentType, ComponentType.f_CardView__org_patternfly_component_ComponentType, ComponentType.f_Checkbox__org_patternfly_component_ComponentType, ComponentType.f_Chip__org_patternfly_component_ComponentType, ComponentType.f_ChipGroup__org_patternfly_component_ComponentType, ComponentType.f_CodeBlock__org_patternfly_component_ComponentType, ComponentType.f_CodeEditor__org_patternfly_component_ComponentType, ComponentType.f_ContextSelector__org_patternfly_component_ComponentType, ComponentType.f_DataList__org_patternfly_component_ComponentType, ComponentType.f_DataTable__org_patternfly_component_ComponentType, ComponentType.f_DescriptionList__org_patternfly_component_ComponentType, ComponentType.f_Divider__org_patternfly_component_ComponentType, ComponentType.f_Drawer__org_patternfly_component_ComponentType, ComponentType.f_Dropdown__org_patternfly_component_ComponentType, ComponentType.f_EmptyState__org_patternfly_component_ComponentType, ComponentType.f_ExpandableSection__org_patternfly_component_ComponentType, ComponentType.f_Form__org_patternfly_component_ComponentType, ComponentType.f_FormSelect__org_patternfly_component_ComponentType, ComponentType.f_HelperText__org_patternfly_component_ComponentType, ComponentType.f_Hint__org_patternfly_component_ComponentType, ComponentType.f_Icon__org_patternfly_component_ComponentType, ComponentType.f_InputGroup__org_patternfly_component_ComponentType, ComponentType.f_JumpLinks__org_patternfly_component_ComponentType, ComponentType.f_Label__org_patternfly_component_ComponentType, ComponentType.f_LabelGroup__org_patternfly_component_ComponentType, ComponentType.f_List__org_patternfly_component_ComponentType, ComponentType.f_Masthead__org_patternfly_component_ComponentType, ComponentType.f_Menu__org_patternfly_component_ComponentType, ComponentType.f_MenuToggle__org_patternfly_component_ComponentType, ComponentType.f_Navigation__org_patternfly_component_ComponentType, ComponentType.f_NotificationBadge__org_patternfly_component_ComponentType, ComponentType.f_OptionsMenu__org_patternfly_component_ComponentType, ComponentType.f_Page__org_patternfly_component_ComponentType, ComponentType.f_Pagination__org_patternfly_component_ComponentType, ComponentType.f_Panel__org_patternfly_component_ComponentType, ComponentType.f_Popover__org_patternfly_component_ComponentType, ComponentType.f_Progress__org_patternfly_component_ComponentType, ComponentType.f_Radio__org_patternfly_component_ComponentType, ComponentType.f_Select__org_patternfly_component_ComponentType, ComponentType.f_Sidebar__org_patternfly_component_ComponentType, ComponentType.f_SimpleList__org_patternfly_component_ComponentType, ComponentType.f_Skeleton__org_patternfly_component_ComponentType, ComponentType.f_SkipToContent__org_patternfly_component_ComponentType, ComponentType.f_Slider__org_patternfly_component_ComponentType, ComponentType.f_Spinner__org_patternfly_component_ComponentType, ComponentType.f_Switch__org_patternfly_component_ComponentType, ComponentType.f_Tabs__org_patternfly_component_ComponentType, ComponentType.f_TextContent__org_patternfly_component_ComponentType, ComponentType.f_TextInput__org_patternfly_component_ComponentType, ComponentType.f_TextInputGroup__org_patternfly_component_ComponentType, ComponentType.f_Title__org_patternfly_component_ComponentType, ComponentType.f_ToggleGroup__org_patternfly_component_ComponentType, ComponentType.f_Toolbar__org_patternfly_component_ComponentType, ComponentType.f_Tooltip__org_patternfly_component_ComponentType, ComponentType.f_TreeView__org_patternfly_component_ComponentType, ComponentType.f_Truncate__org_patternfly_component_ComponentType, ComponentType.f_Wizard__org_patternfly_component_ComponentType], ComponentType));
 }
 /** @nodts */
 static $clinit() {
  ComponentType.$clinit = () =>{};
  ComponentType.$loadModules();
  Enum.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ComponentType;
 }
 
 /** @nodts */
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
}
/**@const {number} @nodts*/
ComponentType.$ordinal_Accordion__org_patternfly_component_ComponentType = 0;
/**@const {number} @nodts*/
ComponentType.$ordinal_ActionList__org_patternfly_component_ComponentType = 1;
/**@const {number} @nodts*/
ComponentType.$ordinal_Alert__org_patternfly_component_ComponentType = 2;
/**@const {number} @nodts*/
ComponentType.$ordinal_AlertGroup__org_patternfly_component_ComponentType = 3;
/**@const {number} @nodts*/
ComponentType.$ordinal_Avatar__org_patternfly_component_ComponentType = 4;
/**@const {number} @nodts*/
ComponentType.$ordinal_BackToTop__org_patternfly_component_ComponentType = 5;
/**@const {number} @nodts*/
ComponentType.$ordinal_Badge__org_patternfly_component_ComponentType = 6;
/**@const {number} @nodts*/
ComponentType.$ordinal_Banner__org_patternfly_component_ComponentType = 7;
/**@const {number} @nodts*/
ComponentType.$ordinal_Brand__org_patternfly_component_ComponentType = 8;
/**@const {number} @nodts*/
ComponentType.$ordinal_Breadcrumb__org_patternfly_component_ComponentType = 9;
/**@const {number} @nodts*/
ComponentType.$ordinal_Button__org_patternfly_component_ComponentType = 10;
/**@const {number} @nodts*/
ComponentType.$ordinal_Card__org_patternfly_component_ComponentType = 11;
/**@const {number} @nodts*/
ComponentType.$ordinal_CardView__org_patternfly_component_ComponentType = 12;
/**@const {number} @nodts*/
ComponentType.$ordinal_Checkbox__org_patternfly_component_ComponentType = 13;
/**@const {number} @nodts*/
ComponentType.$ordinal_Chip__org_patternfly_component_ComponentType = 14;
/**@const {number} @nodts*/
ComponentType.$ordinal_ChipGroup__org_patternfly_component_ComponentType = 15;
/**@const {number} @nodts*/
ComponentType.$ordinal_CodeBlock__org_patternfly_component_ComponentType = 16;
/**@const {number} @nodts*/
ComponentType.$ordinal_CodeEditor__org_patternfly_component_ComponentType = 17;
/**@const {number} @nodts*/
ComponentType.$ordinal_ContextSelector__org_patternfly_component_ComponentType = 18;
/**@const {number} @nodts*/
ComponentType.$ordinal_DataList__org_patternfly_component_ComponentType = 19;
/**@const {number} @nodts*/
ComponentType.$ordinal_DataTable__org_patternfly_component_ComponentType = 20;
/**@const {number} @nodts*/
ComponentType.$ordinal_DescriptionList__org_patternfly_component_ComponentType = 21;
/**@const {number} @nodts*/
ComponentType.$ordinal_Divider__org_patternfly_component_ComponentType = 22;
/**@const {number} @nodts*/
ComponentType.$ordinal_Drawer__org_patternfly_component_ComponentType = 23;
/**@const {number} @nodts*/
ComponentType.$ordinal_Dropdown__org_patternfly_component_ComponentType = 24;
/**@const {number} @nodts*/
ComponentType.$ordinal_EmptyState__org_patternfly_component_ComponentType = 25;
/**@const {number} @nodts*/
ComponentType.$ordinal_ExpandableSection__org_patternfly_component_ComponentType = 26;
/**@const {number} @nodts*/
ComponentType.$ordinal_Form__org_patternfly_component_ComponentType = 27;
/**@const {number} @nodts*/
ComponentType.$ordinal_FormSelect__org_patternfly_component_ComponentType = 28;
/**@const {number} @nodts*/
ComponentType.$ordinal_HelperText__org_patternfly_component_ComponentType = 29;
/**@const {number} @nodts*/
ComponentType.$ordinal_Hint__org_patternfly_component_ComponentType = 30;
/**@const {number} @nodts*/
ComponentType.$ordinal_Icon__org_patternfly_component_ComponentType = 31;
/**@const {number} @nodts*/
ComponentType.$ordinal_InputGroup__org_patternfly_component_ComponentType = 32;
/**@const {number} @nodts*/
ComponentType.$ordinal_JumpLinks__org_patternfly_component_ComponentType = 33;
/**@const {number} @nodts*/
ComponentType.$ordinal_Label__org_patternfly_component_ComponentType = 34;
/**@const {number} @nodts*/
ComponentType.$ordinal_LabelGroup__org_patternfly_component_ComponentType = 35;
/**@const {number} @nodts*/
ComponentType.$ordinal_List__org_patternfly_component_ComponentType = 36;
/**@const {number} @nodts*/
ComponentType.$ordinal_Masthead__org_patternfly_component_ComponentType = 37;
/**@const {number} @nodts*/
ComponentType.$ordinal_Menu__org_patternfly_component_ComponentType = 38;
/**@const {number} @nodts*/
ComponentType.$ordinal_MenuToggle__org_patternfly_component_ComponentType = 39;
/**@const {number} @nodts*/
ComponentType.$ordinal_Navigation__org_patternfly_component_ComponentType = 40;
/**@const {number} @nodts*/
ComponentType.$ordinal_NotificationBadge__org_patternfly_component_ComponentType = 41;
/**@const {number} @nodts*/
ComponentType.$ordinal_OptionsMenu__org_patternfly_component_ComponentType = 42;
/**@const {number} @nodts*/
ComponentType.$ordinal_Page__org_patternfly_component_ComponentType = 43;
/**@const {number} @nodts*/
ComponentType.$ordinal_Pagination__org_patternfly_component_ComponentType = 44;
/**@const {number} @nodts*/
ComponentType.$ordinal_Panel__org_patternfly_component_ComponentType = 45;
/**@const {number} @nodts*/
ComponentType.$ordinal_Popover__org_patternfly_component_ComponentType = 46;
/**@const {number} @nodts*/
ComponentType.$ordinal_Progress__org_patternfly_component_ComponentType = 47;
/**@const {number} @nodts*/
ComponentType.$ordinal_Radio__org_patternfly_component_ComponentType = 48;
/**@const {number} @nodts*/
ComponentType.$ordinal_Select__org_patternfly_component_ComponentType = 49;
/**@const {number} @nodts*/
ComponentType.$ordinal_Sidebar__org_patternfly_component_ComponentType = 50;
/**@const {number} @nodts*/
ComponentType.$ordinal_SimpleList__org_patternfly_component_ComponentType = 51;
/**@const {number} @nodts*/
ComponentType.$ordinal_Skeleton__org_patternfly_component_ComponentType = 52;
/**@const {number} @nodts*/
ComponentType.$ordinal_SkipToContent__org_patternfly_component_ComponentType = 53;
/**@const {number} @nodts*/
ComponentType.$ordinal_Slider__org_patternfly_component_ComponentType = 54;
/**@const {number} @nodts*/
ComponentType.$ordinal_Spinner__org_patternfly_component_ComponentType = 55;
/**@const {number} @nodts*/
ComponentType.$ordinal_Switch__org_patternfly_component_ComponentType = 56;
/**@const {number} @nodts*/
ComponentType.$ordinal_Tabs__org_patternfly_component_ComponentType = 57;
/**@const {number} @nodts*/
ComponentType.$ordinal_TextContent__org_patternfly_component_ComponentType = 58;
/**@const {number} @nodts*/
ComponentType.$ordinal_TextInput__org_patternfly_component_ComponentType = 59;
/**@const {number} @nodts*/
ComponentType.$ordinal_TextInputGroup__org_patternfly_component_ComponentType = 60;
/**@const {number} @nodts*/
ComponentType.$ordinal_Title__org_patternfly_component_ComponentType = 61;
/**@const {number} @nodts*/
ComponentType.$ordinal_ToggleGroup__org_patternfly_component_ComponentType = 62;
/**@const {number} @nodts*/
ComponentType.$ordinal_Toolbar__org_patternfly_component_ComponentType = 63;
/**@const {number} @nodts*/
ComponentType.$ordinal_Tooltip__org_patternfly_component_ComponentType = 64;
/**@const {number} @nodts*/
ComponentType.$ordinal_TreeView__org_patternfly_component_ComponentType = 65;
/**@const {number} @nodts*/
ComponentType.$ordinal_Truncate__org_patternfly_component_ComponentType = 66;
/**@const {number} @nodts*/
ComponentType.$ordinal_Wizard__org_patternfly_component_ComponentType = 67;
/**@const {!ComponentType} @nodts*/
ComponentType.f_Accordion__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Accordion'), ComponentType.$ordinal_Accordion__org_patternfly_component_ComponentType, 'ac', 'PF5/Accordion');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ActionList__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ActionList'), ComponentType.$ordinal_ActionList__org_patternfly_component_ComponentType, 'al', 'PF5/ActionList');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Alert__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Alert'), ComponentType.$ordinal_Alert__org_patternfly_component_ComponentType, 'at', 'PF5/Alert');
/**@const {!ComponentType} @nodts*/
ComponentType.f_AlertGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('AlertGroup'), ComponentType.$ordinal_AlertGroup__org_patternfly_component_ComponentType, 'ag', 'PF5/AlertGroup');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Avatar__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Avatar'), ComponentType.$ordinal_Avatar__org_patternfly_component_ComponentType, 'av', 'PF5/Avatar');
/**@const {!ComponentType} @nodts*/
ComponentType.f_BackToTop__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('BackToTop'), ComponentType.$ordinal_BackToTop__org_patternfly_component_ComponentType, 'btt', 'PF5/BackToTop');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Badge__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Badge'), ComponentType.$ordinal_Badge__org_patternfly_component_ComponentType, 'bdg', 'PF5/Badge');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Banner__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Banner'), ComponentType.$ordinal_Banner__org_patternfly_component_ComponentType, 'bnr', 'PF5/Banner');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Brand__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Brand'), ComponentType.$ordinal_Brand__org_patternfly_component_ComponentType, 'bnd', 'PF5/Brand');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Breadcrumb__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Breadcrumb'), ComponentType.$ordinal_Breadcrumb__org_patternfly_component_ComponentType, 'bc', 'PF5/Breadcrumb');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Button__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Button'), ComponentType.$ordinal_Button__org_patternfly_component_ComponentType, 'btn', 'PF5/Button');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Card__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Card'), ComponentType.$ordinal_Card__org_patternfly_component_ComponentType, 'crd', 'PF5/Card');
/**@const {!ComponentType} @nodts*/
ComponentType.f_CardView__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('CardView'), ComponentType.$ordinal_CardView__org_patternfly_component_ComponentType, 'cv', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_Checkbox__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Checkbox'), ComponentType.$ordinal_Checkbox__org_patternfly_component_ComponentType, 'chb', 'PF5/Checkbox');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Chip__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Chip'), ComponentType.$ordinal_Chip__org_patternfly_component_ComponentType, 'chp', 'PF5/Chip');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ChipGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ChipGroup'), ComponentType.$ordinal_ChipGroup__org_patternfly_component_ComponentType, 'cpg', 'PF5/ChipGroup');
/**@const {!ComponentType} @nodts*/
ComponentType.f_CodeBlock__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('CodeBlock'), ComponentType.$ordinal_CodeBlock__org_patternfly_component_ComponentType, 'cb', 'PF5/CodeBlock');
/**@const {!ComponentType} @nodts*/
ComponentType.f_CodeEditor__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('CodeEditor'), ComponentType.$ordinal_CodeEditor__org_patternfly_component_ComponentType, 'ce', 'PF5/CodeEditor');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ContextSelector__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ContextSelector'), ComponentType.$ordinal_ContextSelector__org_patternfly_component_ComponentType, 'cs', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_DataList__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('DataList'), ComponentType.$ordinal_DataList__org_patternfly_component_ComponentType, 'dl', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_DataTable__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('DataTable'), ComponentType.$ordinal_DataTable__org_patternfly_component_ComponentType, 'dt', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_DescriptionList__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('DescriptionList'), ComponentType.$ordinal_DescriptionList__org_patternfly_component_ComponentType, 'dsl', 'PF5/DescriptionList');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Divider__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Divider'), ComponentType.$ordinal_Divider__org_patternfly_component_ComponentType, 'dvr', 'PF5/Divider');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Drawer__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Drawer'), ComponentType.$ordinal_Drawer__org_patternfly_component_ComponentType, 'dw', 'PF5/Drawer');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Dropdown__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Dropdown'), ComponentType.$ordinal_Dropdown__org_patternfly_component_ComponentType, 'dd', 'PF5/Dropdown');
/**@const {!ComponentType} @nodts*/
ComponentType.f_EmptyState__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('EmptyState'), ComponentType.$ordinal_EmptyState__org_patternfly_component_ComponentType, 'es', 'PF5/EmptyState');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ExpandableSection__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ExpandableSection'), ComponentType.$ordinal_ExpandableSection__org_patternfly_component_ComponentType, 'exs', 'PF5/ExpandableSection');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Form__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Form'), ComponentType.$ordinal_Form__org_patternfly_component_ComponentType, 'frm', 'PF5/Form');
/**@const {!ComponentType} @nodts*/
ComponentType.f_FormSelect__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('FormSelect'), ComponentType.$ordinal_FormSelect__org_patternfly_component_ComponentType, 'frs', 'PF5/FormSelect');
/**@const {!ComponentType} @nodts*/
ComponentType.f_HelperText__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('HelperText'), ComponentType.$ordinal_HelperText__org_patternfly_component_ComponentType, 'ht', 'PF5/HelperText');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Hint__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Hint'), ComponentType.$ordinal_Hint__org_patternfly_component_ComponentType, 'hnt', 'PF5/Hint');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Icon__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Icon'), ComponentType.$ordinal_Icon__org_patternfly_component_ComponentType, 'icn', 'PF5/Icon');
/**@const {!ComponentType} @nodts*/
ComponentType.f_InputGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('InputGroup'), ComponentType.$ordinal_InputGroup__org_patternfly_component_ComponentType, 'ig', 'PF5/InputGroup');
/**@const {!ComponentType} @nodts*/
ComponentType.f_JumpLinks__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('JumpLinks'), ComponentType.$ordinal_JumpLinks__org_patternfly_component_ComponentType, 'jl', 'PF5/JumpLinks');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Label__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Label'), ComponentType.$ordinal_Label__org_patternfly_component_ComponentType, 'lbl', 'PF5/Label');
/**@const {!ComponentType} @nodts*/
ComponentType.f_LabelGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('LabelGroup'), ComponentType.$ordinal_LabelGroup__org_patternfly_component_ComponentType, 'lbg', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_List__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('List'), ComponentType.$ordinal_List__org_patternfly_component_ComponentType, 'lst', 'PF5/List');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Masthead__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Masthead'), ComponentType.$ordinal_Masthead__org_patternfly_component_ComponentType, 'mh', 'PF5/Masthead');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Menu__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Menu'), ComponentType.$ordinal_Menu__org_patternfly_component_ComponentType, 'mu', 'PF5/Menu');
/**@const {!ComponentType} @nodts*/
ComponentType.f_MenuToggle__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('MenuToggle'), ComponentType.$ordinal_MenuToggle__org_patternfly_component_ComponentType, 'mt', 'PF5/MenuToggle');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Navigation__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Navigation'), ComponentType.$ordinal_Navigation__org_patternfly_component_ComponentType, 'nav', 'PF5/Nav');
/**@const {!ComponentType} @nodts*/
ComponentType.f_NotificationBadge__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('NotificationBadge'), ComponentType.$ordinal_NotificationBadge__org_patternfly_component_ComponentType, 'nb', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_OptionsMenu__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('OptionsMenu'), ComponentType.$ordinal_OptionsMenu__org_patternfly_component_ComponentType, 'opt', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_Page__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Page'), ComponentType.$ordinal_Page__org_patternfly_component_ComponentType, 'pg', 'PF5/Page');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Pagination__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Pagination'), ComponentType.$ordinal_Pagination__org_patternfly_component_ComponentType, 'pgn', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_Panel__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Panel'), ComponentType.$ordinal_Panel__org_patternfly_component_ComponentType, 'pnl', 'PF5/Panel');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Popover__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Popover'), ComponentType.$ordinal_Popover__org_patternfly_component_ComponentType, 'pvr', 'PF5/Popover');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Progress__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Progress'), ComponentType.$ordinal_Progress__org_patternfly_component_ComponentType, 'prg', 'PF5/Progress');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Radio__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Radio'), ComponentType.$ordinal_Radio__org_patternfly_component_ComponentType, 'rd', 'PF5/Radio');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Select__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Select'), ComponentType.$ordinal_Select__org_patternfly_component_ComponentType, 'sel', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_Sidebar__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Sidebar'), ComponentType.$ordinal_Sidebar__org_patternfly_component_ComponentType, 'sb', 'PF5/Sidebar');
/**@const {!ComponentType} @nodts*/
ComponentType.f_SimpleList__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('SimpleList'), ComponentType.$ordinal_SimpleList__org_patternfly_component_ComponentType, 'sl', 'PF5/SimpleList');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Skeleton__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Skeleton'), ComponentType.$ordinal_Skeleton__org_patternfly_component_ComponentType, 'sk', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_SkipToContent__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('SkipToContent'), ComponentType.$ordinal_SkipToContent__org_patternfly_component_ComponentType, 'stc', 'PF5/SkipToContent');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Slider__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Slider'), ComponentType.$ordinal_Slider__org_patternfly_component_ComponentType, 'sld', 'PF5/Slider');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Spinner__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Spinner'), ComponentType.$ordinal_Spinner__org_patternfly_component_ComponentType, 'sp', 'PF5/Spinner');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Switch__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Switch'), ComponentType.$ordinal_Switch__org_patternfly_component_ComponentType, 'sw', 'PF5/Switch');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Tabs__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Tabs'), ComponentType.$ordinal_Tabs__org_patternfly_component_ComponentType, 'tbs', 'PF5/Tabs');
/**@const {!ComponentType} @nodts*/
ComponentType.f_TextContent__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('TextContent'), ComponentType.$ordinal_TextContent__org_patternfly_component_ComponentType, 'tc', 'PF5/TextContent');
/**@const {!ComponentType} @nodts*/
ComponentType.f_TextInput__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('TextInput'), ComponentType.$ordinal_TextInput__org_patternfly_component_ComponentType, 'ti', 'PF5/TextInput');
/**@const {!ComponentType} @nodts*/
ComponentType.f_TextInputGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('TextInputGroup'), ComponentType.$ordinal_TextInputGroup__org_patternfly_component_ComponentType, 'tig', 'PF5/TextInputGroup');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Title__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Title'), ComponentType.$ordinal_Title__org_patternfly_component_ComponentType, 'tlt', 'PF5/Title');
/**@const {!ComponentType} @nodts*/
ComponentType.f_ToggleGroup__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('ToggleGroup'), ComponentType.$ordinal_ToggleGroup__org_patternfly_component_ComponentType, 'tg', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_Toolbar__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Toolbar'), ComponentType.$ordinal_Toolbar__org_patternfly_component_ComponentType, 'tb', 'PF5/Toolbar');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Tooltip__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Tooltip'), ComponentType.$ordinal_Tooltip__org_patternfly_component_ComponentType, 'tt', 'PF5/Tooltip');
/**@const {!ComponentType} @nodts*/
ComponentType.f_TreeView__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('TreeView'), ComponentType.$ordinal_TreeView__org_patternfly_component_ComponentType, 'tv', null);
/**@const {!ComponentType} @nodts*/
ComponentType.f_Truncate__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Truncate'), ComponentType.$ordinal_Truncate__org_patternfly_component_ComponentType, 'tr', 'PF5/Truncate');
/**@const {!ComponentType} @nodts*/
ComponentType.f_Wizard__org_patternfly_component_ComponentType = /**@pureOrBreakMyCode*/ ComponentType.$create__java_lang_String__int__java_lang_String__java_lang_String($Util.$makeEnumName('Wizard'), ComponentType.$ordinal_Wizard__org_patternfly_component_ComponentType, 'wzd', 'PF5/Wizard');
/**@type {Map<?string, !ComponentType>} @nodts*/
ComponentType.f_namesToValuesMap__org_patternfly_component_ComponentType_;
$Util.$setClassMetadataForEnum(ComponentType, 'org.patternfly.component.ComponentType');

exports = ComponentType;

//# sourceMappingURL=ComponentType.js.map
