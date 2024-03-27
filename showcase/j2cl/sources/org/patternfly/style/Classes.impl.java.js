goog.module('org.patternfly.style.Classes$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Version = goog.forwardDeclare('org.patternfly.core.Version$impl');
let Breakpoint = goog.forwardDeclare('org.patternfly.style.Breakpoint$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');

/**
 * @interface
 */
class Classes {
 /** @nodts @return {?string} */
 static m_component__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ component, /** Array<?string> */ elements) {
  Classes.$clinit();
  return Classes.m_compose__char__java_lang_String__arrayOf_java_lang_String__java_lang_String(99 /* 'c' */, component, elements);
 }
 /** @nodts @return {?string} */
 static m_layout__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** ?string */ layout, /** Array<?string> */ elements) {
  Classes.$clinit();
  return Classes.m_compose__char__java_lang_String__arrayOf_java_lang_String__java_lang_String(108 /* 'l' */, layout, elements);
 }
 /** @nodts @return {?string} */
 static m_util__java_lang_String__java_lang_String(/** ?string */ utility) {
  Classes.$clinit();
  return 'pf-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version) + '-u-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(utility);
 }
 /** @nodts @return {?string} */
 static m_modifier__java_lang_String__java_lang_String(/** ?string */ modifier) {
  Classes.$clinit();
  return !$Equality.$same(modifier, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(modifier) ? 'pf-m-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(modifier) : '';
 }
 /** @nodts @return {?string} */
 static m_modifier__java_lang_String__org_patternfly_style_Size__java_lang_String(/** ?string */ modifier, /** Size */ size) {
  Classes.$clinit();
  if (!$Equality.$same(modifier, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(modifier) && !$Equality.$same(size, null)) {
   return 'pf-m-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(modifier) + '-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(size.m_value__java_lang_String());
  }
  return '';
 }
 /** @nodts @return {?string} */
 static m_modifier__java_lang_String__org_patternfly_style_Breakpoint__java_lang_String(/** ?string */ modifier, /** Breakpoint */ breakpoint) {
  Classes.$clinit();
  if (!$Equality.$same(modifier, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(modifier) && !$Equality.$same(breakpoint, null)) {
   return 'pf-m-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(modifier) + j_l_String.m_valueOf__java_lang_Object__java_lang_String(!$Equality.$same(breakpoint, Breakpoint.f_default___org_patternfly_style_Breakpoint) ? '-on-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(breakpoint.f_value__org_patternfly_style_Breakpoint) : '');
  }
  return '';
 }
 /** @nodts @return {?string} */
 static m_pfIcon__java_lang_String__java_lang_String(/** ?string */ name) {
  Classes.$clinit();
  return 'pf-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version) + '-pficon pf-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version) + '-pficon-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
 }
 /** @nodts @return {?string} */
 static m_fas__java_lang_String__java_lang_String(/** ?string */ name) {
  Classes.$clinit();
  return 'fas fa-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
 }
 /** @nodts @return {?string} */
 static m_far__java_lang_String__java_lang_String(/** ?string */ name) {
  Classes.$clinit();
  return 'far fa-' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(name);
 }
 /** @nodts @return {?string} */
 static m_compose__char__java_lang_String__arrayOf_java_lang_String__java_lang_String(/** number */ abbreviation, /** ?string */ type, /** Array<?string> */ elements) {
  Classes.$clinit();
  let builder = StringBuilder.$create__();
  if (!$Equality.$same(type, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(type)) {
   builder.m_append__java_lang_String__java_lang_StringBuilder('pf-').m_append__java_lang_String__java_lang_StringBuilder(Version.f_PATTERN_FLY_MAJOR_VERSION__org_patternfly_core_Version).m_append__java_lang_String__java_lang_StringBuilder('-').m_append__char__java_lang_StringBuilder(abbreviation).m_append__java_lang_String__java_lang_StringBuilder('-').m_append__java_lang_String__java_lang_StringBuilder(type);
   if (!$Equality.$same(elements, null) && elements.length != 0) {
    builder.m_append__java_lang_String__java_lang_StringBuilder('__');
    for (let i = 0; i < elements.length; i = i + 1 | 0) {
     builder.m_append__java_lang_String__java_lang_StringBuilder(elements[i]);
     if (i < (elements.length - 1 | 0)) {
      builder.m_append__java_lang_String__java_lang_StringBuilder('-');
     }
    }
   }
  }
  return builder.toString();
 }
 /** @nodts */
 static $clinit() {
  Classes.$clinit = () =>{};
  Classes.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  ctor.prototype.$implements__org_patternfly_style_Classes = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_style_Classes;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Version = goog.module.get('org.patternfly.core.Version$impl');
  Breakpoint = goog.module.get('org.patternfly.style.Breakpoint$impl');
 }
}
/**@const {string} @nodts*/
Classes.f_accordion__org_patternfly_style_Classes = 'accordion';
/**@const {string} @nodts*/
Classes.f_action__org_patternfly_style_Classes = 'action';
/**@const {string} @nodts*/
Classes.f_actionGroup__org_patternfly_style_Classes = 'action-group';
/**@const {string} @nodts*/
Classes.f_actionList__org_patternfly_style_Classes = 'action-list';
/**@const {string} @nodts*/
Classes.f_actions__org_patternfly_style_Classes = 'actions';
/**@const {string} @nodts*/
Classes.f_active__org_patternfly_style_Classes = 'active';
/**@const {string} @nodts*/
Classes.f_add__org_patternfly_style_Classes = 'add';
/**@const {string} @nodts*/
Classes.f_alert__org_patternfly_style_Classes = 'alert';
/**@const {string} @nodts*/
Classes.f_alertGroup__org_patternfly_style_Classes = 'alert-group';
/**@const {string} @nodts*/
Classes.f_alignCenter__org_patternfly_style_Classes = 'align-center';
/**@const {string} @nodts*/
Classes.f_ariaDisabled__org_patternfly_style_Classes = 'aria-disabled';
/**@const {string} @nodts*/
Classes.f_arrow__org_patternfly_style_Classes = 'arrow';
/**@const {string} @nodts*/
Classes.f_autoColumnWidths__org_patternfly_style_Classes = 'auto-column-widths';
/**@const {string} @nodts*/
Classes.f_autoFit__org_patternfly_style_Classes = 'auto-fit';
/**@const {string} @nodts*/
Classes.f_avatar__org_patternfly_style_Classes = 'avatar';
/**@const {string} @nodts*/
Classes.f_backToTop__org_patternfly_style_Classes = 'back-to-top';
/**@const {string} @nodts*/
Classes.f_badge__org_patternfly_style_Classes = 'badge';
/**@const {string} @nodts*/
Classes.f_banner__org_patternfly_style_Classes = 'banner';
/**@const {string} @nodts*/
Classes.f_bar__org_patternfly_style_Classes = 'bar';
/**@const {string} @nodts*/
Classes.f_block__org_patternfly_style_Classes = 'block';
/**@const {string} @nodts*/
Classes.f_body__org_patternfly_style_Classes = 'body';
/**@const {string} @nodts*/
Classes.f_bordered__org_patternfly_style_Classes = 'bordered';
/**@const {string} @nodts*/
Classes.f_bottom__org_patternfly_style_Classes = 'bottom';
/**@const {string} @nodts*/
Classes.f_box__org_patternfly_style_Classes = 'box';
/**@const {string} @nodts*/
Classes.f_brand__org_patternfly_style_Classes = 'brand';
/**@const {string} @nodts*/
Classes.f_breadcrumb__org_patternfly_style_Classes = 'breadcrumb';
/**@const {string} @nodts*/
Classes.f_breakWord__org_patternfly_style_Classes = 'break-word';
/**@const {string} @nodts*/
Classes.f_bullseye__org_patternfly_style_Classes = 'bullseye';
/**@const {string} @nodts*/
Classes.f_button__org_patternfly_style_Classes = 'button';
/**@const {string} @nodts*/
Classes.f_card__org_patternfly_style_Classes = 'card';
/**@const {string} @nodts*/
Classes.f_category__org_patternfly_style_Classes = 'category';
/**@const {string} @nodts*/
Classes.f_center__org_patternfly_style_Classes = 'center';
/**@const {string} @nodts*/
Classes.f_check__org_patternfly_style_Classes = 'check';
/**@const {string} @nodts*/
Classes.f_chip__org_patternfly_style_Classes = 'chip';
/**@const {string} @nodts*/
Classes.f_chipGroup__org_patternfly_style_Classes = 'chip-group';
/**@const {string} @nodts*/
Classes.f_clickable__org_patternfly_style_Classes = 'clickable';
/**@const {string} @nodts*/
Classes.f_close__org_patternfly_style_Classes = 'close';
/**@const {string} @nodts*/
Classes.f_code__org_patternfly_style_Classes = 'code';
/**@const {string} @nodts*/
Classes.f_codeBlock__org_patternfly_style_Classes = 'code-block';
/**@const {string} @nodts*/
Classes.f_codeEditor__org_patternfly_style_Classes = 'code-editor';
/**@const {string} @nodts*/
Classes.f_col__org_patternfly_style_Classes = 'col';
/**@const {string} @nodts*/
Classes.f_collapsed__org_patternfly_style_Classes = 'collapsed';
/**@const {string} @nodts*/
Classes.f_compact__org_patternfly_style_Classes = 'compact';
/**@const {string} @nodts*/
Classes.f_content__org_patternfly_style_Classes = 'content';
/**@const {string} @nodts*/
Classes.f_control__org_patternfly_style_Classes = 'control';
/**@const {string} @nodts*/
Classes.f_controls__org_patternfly_style_Classes = 'controls';
/**@const {string} @nodts*/
Classes.f_count__org_patternfly_style_Classes = 'count';
/**@const {string} @nodts*/
Classes.f_current__org_patternfly_style_Classes = 'current';
/**@const {string} @nodts*/
Classes.f_danger__org_patternfly_style_Classes = 'danger';
/**@const {string} @nodts*/
Classes.f_description__org_patternfly_style_Classes = 'description';
/**@const {string} @nodts*/
Classes.f_descriptionList__org_patternfly_style_Classes = 'description-list';
/**@const {string} @nodts*/
Classes.f_detached__org_patternfly_style_Classes = 'detached';
/**@const {string} @nodts*/
Classes.f_disabled__org_patternfly_style_Classes = 'disabled';
/**@const {string} @nodts*/
Classes.f_display__org_patternfly_style_Classes = 'display';
/**@const {string} @nodts*/
Classes.f_divider__org_patternfly_style_Classes = 'divider';
/**@const {string} @nodts*/
Classes.f_drawer__org_patternfly_style_Classes = 'drawer';
/**@const {string} @nodts*/
Classes.f_dropdown__org_patternfly_style_Classes = 'dropdown';
/**@const {string} @nodts*/
Classes.f_dynamic__org_patternfly_style_Classes = 'dynamic';
/**@const {string} @nodts*/
Classes.f_editable__org_patternfly_style_Classes = 'editable';
/**@const {string} @nodts*/
Classes.f_editableActive__org_patternfly_style_Classes = 'editable-active';
/**@const {string} @nodts*/
Classes.f_emptyState__org_patternfly_style_Classes = 'empty-state';
/**@const {string} @nodts*/
Classes.f_end__org_patternfly_style_Classes = 'end';
/**@const {string} @nodts*/
Classes.f_error__org_patternfly_style_Classes = 'error';
/**@const {string} @nodts*/
Classes.f_expandable__org_patternfly_style_Classes = 'expandable';
/**@const {string} @nodts*/
Classes.f_expandableContent__org_patternfly_style_Classes = 'expandable-content';
/**@const {string} @nodts*/
Classes.f_expandableSection__org_patternfly_style_Classes = 'expandable-section';
/**@const {string} @nodts*/
Classes.f_expanded__org_patternfly_style_Classes = 'expanded';
/**@const {string} @nodts*/
Classes.f_expandTop__org_patternfly_style_Classes = 'expand-top';
/**@const {string} @nodts*/
Classes.f_externalIcon__org_patternfly_style_Classes = 'external-icon';
/**@const {string} @nodts*/
Classes.f_favorite__org_patternfly_style_Classes = 'favorite';
/**@const {string} @nodts*/
Classes.f_favorited__org_patternfly_style_Classes = 'favorited';
/**@const {string} @nodts*/
Classes.f_fieldGroup__org_patternfly_style_Classes = 'field-group';
/**@const {string} @nodts*/
Classes.f_fill__org_patternfly_style_Classes = 'fill';
/**@const {string} @nodts*/
Classes.f_fillColumns__org_patternfly_style_Classes = 'fill-columns';
/**@const {string} @nodts*/
Classes.f_fixed__org_patternfly_style_Classes = 'fixed';
/**@const {string} @nodts*/
Classes.f_flat__org_patternfly_style_Classes = 'flat';
/**@const {string} @nodts*/
Classes.f_flex__org_patternfly_style_Classes = 'flex';
/**@const {string} @nodts*/
Classes.f_floating__org_patternfly_style_Classes = 'floating';
/**@const {string} @nodts*/
Classes.f_floatLeft__org_patternfly_style_Classes = 'float-left';
/**@const {string} @nodts*/
Classes.f_floatRight__org_patternfly_style_Classes = 'float-right';
/**@const {string} @nodts*/
Classes.f_fluid__org_patternfly_style_Classes = 'fluid';
/**@const {string} @nodts*/
Classes.f_flyout__org_patternfly_style_Classes = 'flyout';
/**@const {string} @nodts*/
Classes.f_footer__org_patternfly_style_Classes = 'footer';
/**@const {string} @nodts*/
Classes.f_form__org_patternfly_style_Classes = 'form';
/**@const {string} @nodts*/
Classes.f_formControl__org_patternfly_style_Classes = 'form-control';
/**@const {string} @nodts*/
Classes.f_fullHeight__org_patternfly_style_Classes = 'full-height';
/**@const {string} @nodts*/
Classes.f_gallery__org_patternfly_style_Classes = 'gallery';
/**@const {string} @nodts*/
Classes.f_global__org_patternfly_style_Classes = 'global';
/**@const {string} @nodts*/
Classes.f_grid__org_patternfly_style_Classes = 'grid';
/**@const {string} @nodts*/
Classes.f_group__org_patternfly_style_Classes = 'group';
/**@const {string} @nodts*/
Classes.f_gutter__org_patternfly_style_Classes = 'gutter';
/**@const {string} @nodts*/
Classes.f_handle__org_patternfly_style_Classes = 'handle';
/**@const {string} @nodts*/
Classes.f_hasPopup__org_patternfly_style_Classes = 'haspopup';
/**@const {string} @nodts*/
Classes.f_head__org_patternfly_style_Classes = 'head';
/**@const {string} @nodts*/
Classes.f_header__org_patternfly_style_Classes = 'header';
/**@const {string} @nodts*/
Classes.f_help__org_patternfly_style_Classes = 'help';
/**@const {string} @nodts*/
Classes.f_helperText__org_patternfly_style_Classes = 'helper-text';
/**@const {string} @nodts*/
Classes.f_helpText__org_patternfly_style_Classes = 'help-text';
/**@const {string} @nodts*/
Classes.f_hidden__org_patternfly_style_Classes = 'hidden';
/**@const {string} @nodts*/
Classes.f_hint__org_patternfly_style_Classes = 'hint';
/**@const {string} @nodts*/
Classes.f_horizontal__org_patternfly_style_Classes = 'horizontal';
/**@const {string} @nodts*/
Classes.f_horizontalSubnav__org_patternfly_style_Classes = 'horizontal-subnav';
/**@const {string} @nodts*/
Classes.f_icon__org_patternfly_style_Classes = 'icon';
/**@const {string} @nodts*/
Classes.f_icons__org_patternfly_style_Classes = 'icons';
/**@const {string} @nodts*/
Classes.f_indented__org_patternfly_style_Classes = 'indented';
/**@const {string} @nodts*/
Classes.f_indeterminate__org_patternfly_style_Classes = 'indeterminate';
/**@const {string} @nodts*/
Classes.f_indicator__org_patternfly_style_Classes = 'indicator';
/**@const {string} @nodts*/
Classes.f_inline__org_patternfly_style_Classes = 'inline';
/**@const {string} @nodts*/
Classes.f_inlineGrid__org_patternfly_style_Classes = 'inline-grid';
/**@const {string} @nodts*/
Classes.f_inProgress__org_patternfly_style_Classes = 'in-progress';
/**@const {string} @nodts*/
Classes.f_input__org_patternfly_style_Classes = 'input';
/**@const {string} @nodts*/
Classes.f_inputGroup__org_patternfly_style_Classes = 'input-group';
/**@const {string} @nodts*/
Classes.f_insetNone__org_patternfly_style_Classes = 'inset-none';
/**@const {string} @nodts*/
Classes.f_item__org_patternfly_style_Classes = 'item';
/**@const {string} @nodts*/
Classes.f_jumpLinks__org_patternfly_style_Classes = 'jump-links';
/**@const {string} @nodts*/
Classes.f_keyboard__org_patternfly_style_Classes = 'keyboard';
/**@const {string} @nodts*/
Classes.f_label__org_patternfly_style_Classes = 'label';
/**@const {string} @nodts*/
Classes.f_labelGroup__org_patternfly_style_Classes = 'label-group';
/**@const {string} @nodts*/
Classes.f_left__org_patternfly_style_Classes = 'left';
/**@const {string} @nodts*/
Classes.f_level__org_patternfly_style_Classes = 'level';
/**@const {string} @nodts*/
Classes.f_limitWidth__org_patternfly_style_Classes = 'limit-width';
/**@const {string} @nodts*/
Classes.f_link__org_patternfly_style_Classes = 'link';
/**@const {string} @nodts*/
Classes.f_list__org_patternfly_style_Classes = 'list';
/**@const {string} @nodts*/
Classes.f_main__org_patternfly_style_Classes = 'main';
/**@const {string} @nodts*/
Classes.f_masthead__org_patternfly_style_Classes = 'masthead';
/**@const {string} @nodts*/
Classes.f_measure__org_patternfly_style_Classes = 'measure';
/**@const {string} @nodts*/
Classes.f_menu__org_patternfly_style_Classes = 'menu';
/**@const {string} @nodts*/
Classes.f_menuToggle__org_patternfly_style_Classes = 'menu-toggle';
/**@const {string} @nodts*/
Classes.f_nav__org_patternfly_style_Classes = 'nav';
/**@const {string} @nodts*/
Classes.f_noBorder__org_patternfly_style_Classes = 'no-border';
/**@const {string} @nodts*/
Classes.f_noBorderBottom__org_patternfly_style_Classes = 'no-border-bottom';
/**@const {string} @nodts*/
Classes.f_noFill__org_patternfly_style_Classes = 'no-fill';
/**@const {string} @nodts*/
Classes.f_none__org_patternfly_style_Classes = 'none';
/**@const {string} @nodts*/
Classes.f_noOffset__org_patternfly_style_Classes = 'no-offset';
/**@const {string} @nodts*/
Classes.f_noPadding__org_patternfly_style_Classes = 'no-padding';
/**@const {string} @nodts*/
Classes.f_noPaddingTop__org_patternfly_style_Classes = 'no-padding-top';
/**@const {string} @nodts*/
Classes.f_off__org_patternfly_style_Classes = 'off';
/**@const {string} @nodts*/
Classes.f_on__org_patternfly_style_Classes = 'on';
/**@const {string} @nodts*/
Classes.f_option__org_patternfly_style_Classes = 'option';
/**@const {string} @nodts*/
Classes.f_outline__org_patternfly_style_Classes = 'outline';
/**@const {string} @nodts*/
Classes.f_overflow__org_patternfly_style_Classes = 'overflow';
/**@const {string} @nodts*/
Classes.f_overflowScroll__org_patternfly_style_Classes = 'overflow-scroll';
/**@const {string} @nodts*/
Classes.f_padding__org_patternfly_style_Classes = 'padding';
/**@const {string} @nodts*/
Classes.f_page__org_patternfly_style_Classes = 'page';
/**@const {string} @nodts*/
Classes.f_pageInsets__org_patternfly_style_Classes = 'page-insets';
/**@const {string} @nodts*/
Classes.f_panel__org_patternfly_style_Classes = 'panel';
/**@const {string} @nodts*/
Classes.f_path__org_patternfly_style_Classes = 'path';
/**@const {string} @nodts*/
Classes.f_picture__org_patternfly_style_Classes = 'picture';
/**@const {string} @nodts*/
Classes.f_placeholder__org_patternfly_style_Classes = 'placeholder';
/**@const {string} @nodts*/
Classes.f_plain__org_patternfly_style_Classes = 'plain';
/**@const {string} @nodts*/
Classes.f_popover__org_patternfly_style_Classes = 'popover';
/**@const {string} @nodts*/
Classes.f_pre__org_patternfly_style_Classes = 'pre';
/**@const {string} @nodts*/
Classes.f_primary__org_patternfly_style_Classes = 'primary';
/**@const {string} @nodts*/
Classes.f_progress__org_patternfly_style_Classes = 'progress';
/**@const {string} @nodts*/
Classes.f_radio__org_patternfly_style_Classes = 'radio';
/**@const {string} @nodts*/
Classes.f_rail__org_patternfly_style_Classes = 'rail';
/**@const {string} @nodts*/
Classes.f_raised__org_patternfly_style_Classes = 'raised';
/**@const {string} @nodts*/
Classes.f_read__org_patternfly_style_Classes = 'read';
/**@const {string} @nodts*/
Classes.f_readOnly__org_patternfly_style_Classes = 'read-only';
/**@const {string} @nodts*/
Classes.f_readonly__org_patternfly_style_Classes = 'readonly';
/**@const {string} @nodts*/
Classes.f_required__org_patternfly_style_Classes = 'required';
/**@const {string} @nodts*/
Classes.f_resizable__org_patternfly_style_Classes = 'resizable';
/**@const {string} @nodts*/
Classes.f_resizeBoth__org_patternfly_style_Classes = 'resize-both';
/**@const {string} @nodts*/
Classes.f_resizeHorizontal__org_patternfly_style_Classes = 'resize-horizontal';
/**@const {string} @nodts*/
Classes.f_resizeObserver__org_patternfly_style_Classes = 'resize-observer';
/**@const {string} @nodts*/
Classes.f_resizeVertical__org_patternfly_style_Classes = 'resize-vertical';
/**@const {string} @nodts*/
Classes.f_resizing__org_patternfly_style_Classes = 'resizing';
/**@const {string} @nodts*/
Classes.f_reverse__org_patternfly_style_Classes = 'reverse';
/**@const {string} @nodts*/
Classes.f_right__org_patternfly_style_Classes = 'right';
/**@const {string} @nodts*/
Classes.f_rounded__org_patternfly_style_Classes = 'rounded';
/**@const {string} @nodts*/
Classes.f_screenReader__org_patternfly_style_Classes = 'pf-v5-screen-reader';
/**@const {string} @nodts*/
Classes.f_scroll__org_patternfly_style_Classes = 'scroll';
/**@const {string} @nodts*/
Classes.f_scrollable__org_patternfly_style_Classes = 'scrollable';
/**@const {string} @nodts*/
Classes.f_scrollButton__org_patternfly_style_Classes = 'scroll-button';
/**@const {string} @nodts*/
Classes.f_search__org_patternfly_style_Classes = 'search';
/**@const {string} @nodts*/
Classes.f_secondary__org_patternfly_style_Classes = 'secondary';
/**@const {string} @nodts*/
Classes.f_section__org_patternfly_style_Classes = 'section';
/**@const {string} @nodts*/
Classes.f_select__org_patternfly_style_Classes = 'select';
/**@const {string} @nodts*/
Classes.f_selectable__org_patternfly_style_Classes = 'selectable';
/**@const {string} @nodts*/
Classes.f_selected__org_patternfly_style_Classes = 'selected';
/**@const {string} @nodts*/
Classes.f_separator__org_patternfly_style_Classes = 'separator';
/**@const {string} @nodts*/
Classes.f_shadowBottom__org_patternfly_style_Classes = 'shadow-bottom';
/**@const {string} @nodts*/
Classes.f_shadowTop__org_patternfly_style_Classes = 'shadow-top';
/**@const {string} @nodts*/
Classes.f_shortcuts__org_patternfly_style_Classes = 'shortcuts';
/**@const {string} @nodts*/
Classes.f_sidebar__org_patternfly_style_Classes = 'sidebar';
/**@const {string} @nodts*/
Classes.f_simpleList__org_patternfly_style_Classes = 'simple-list';
/**@const {string} @nodts*/
Classes.f_singleline__org_patternfly_style_Classes = 'singleline';
/**@const {string} @nodts*/
Classes.f_skeleton__org_patternfly_style_Classes = 'skeleton';
/**@const {string} @nodts*/
Classes.f_skipToContent__org_patternfly_style_Classes = 'skip-to-content';
/**@const {string} @nodts*/
Classes.f_slider__org_patternfly_style_Classes = 'slider';
/**@const {string} @nodts*/
Classes.f_small__org_patternfly_style_Classes = 'small';
/**@const {string} @nodts*/
Classes.f_sort__org_patternfly_style_Classes = 'sort';
/**@const {string} @nodts*/
Classes.f_spinner__org_patternfly_style_Classes = 'spinner';
/**@const {string} @nodts*/
Classes.f_split__org_patternfly_style_Classes = 'split';
/**@const {string} @nodts*/
Classes.f_splitButton__org_patternfly_style_Classes = 'split-button';
/**@const {string} @nodts*/
Classes.f_splitter__org_patternfly_style_Classes = 'splitter';
/**@const {string} @nodts*/
Classes.f_stack__org_patternfly_style_Classes = 'stack';
/**@const {string} @nodts*/
Classes.f_standalone__org_patternfly_style_Classes = 'standalone';
/**@const {string} @nodts*/
Classes.f_start__org_patternfly_style_Classes = 'start';
/**@const {string} @nodts*/
Classes.f_static___org_patternfly_style_Classes = 'static';
/**@const {string} @nodts*/
Classes.f_status__org_patternfly_style_Classes = 'status';
/**@const {string} @nodts*/
Classes.f_step__org_patternfly_style_Classes = 'step';
/**@const {string} @nodts*/
Classes.f_steps__org_patternfly_style_Classes = 'steps';
/**@const {string} @nodts*/
Classes.f_sticky__org_patternfly_style_Classes = 'sticky';
/**@const {string} @nodts*/
Classes.f_subnav__org_patternfly_style_Classes = 'subnav';
/**@const {string} @nodts*/
Classes.f_success__org_patternfly_style_Classes = 'success';
/**@const {string} @nodts*/
Classes.f_svg__org_patternfly_style_Classes = 'pf-v5-svg';
/**@const {string} @nodts*/
Classes.f_switch___org_patternfly_style_Classes = 'switch';
/**@const {string} @nodts*/
Classes.f_tab__org_patternfly_style_Classes = 'tab';
/**@const {string} @nodts*/
Classes.f_tabContent__org_patternfly_style_Classes = 'tab-content';
/**@const {string} @nodts*/
Classes.f_table__org_patternfly_style_Classes = 'table';
/**@const {string} @nodts*/
Classes.f_tabs__org_patternfly_style_Classes = 'tabs';
/**@const {string} @nodts*/
Classes.f_tbody__org_patternfly_style_Classes = 'tbody';
/**@const {string} @nodts*/
Classes.f_td__org_patternfly_style_Classes = 'td';
/**@const {string} @nodts*/
Classes.f_term__org_patternfly_style_Classes = 'term';
/**@const {string} @nodts*/
Classes.f_tertiary__org_patternfly_style_Classes = 'tertiary';
/**@const {string} @nodts*/
Classes.f_text__org_patternfly_style_Classes = 'text';
/**@const {string} @nodts*/
Classes.f_textAlignLeft__org_patternfly_style_Classes = 'text-align-left';
/**@const {string} @nodts*/
Classes.f_textInput__org_patternfly_style_Classes = 'text-input';
/**@const {string} @nodts*/
Classes.f_textInputGroup__org_patternfly_style_Classes = 'text-input-group';
/**@const {string} @nodts*/
Classes.f_textLeftAligned__org_patternfly_style_Classes = 'textLeftAligned';
/**@const {string} @nodts*/
Classes.f_th__org_patternfly_style_Classes = 'th';
/**@const {string} @nodts*/
Classes.f_thead__org_patternfly_style_Classes = 'thead';
/**@const {string} @nodts*/
Classes.f_thumb__org_patternfly_style_Classes = 'thumb';
/**@const {string} @nodts*/
Classes.f_tick__org_patternfly_style_Classes = 'tick';
/**@const {string} @nodts*/
Classes.f_title__org_patternfly_style_Classes = 'title';
/**@const {string} @nodts*/
Classes.f_toast__org_patternfly_style_Classes = 'toast';
/**@const {string} @nodts*/
Classes.f_toggle__org_patternfly_style_Classes = 'toggle';
/**@const {string} @nodts*/
Classes.f_toggleGroup__org_patternfly_style_Classes = 'toggle-group';
/**@const {string} @nodts*/
Classes.f_toggleRight__org_patternfly_style_Classes = 'toggle-right';
/**@const {string} @nodts*/
Classes.f_toolbar__org_patternfly_style_Classes = 'toolbar';
/**@const {string} @nodts*/
Classes.f_tooltip__org_patternfly_style_Classes = 'tooltip';
/**@const {string} @nodts*/
Classes.f_top__org_patternfly_style_Classes = 'top';
/**@const {string} @nodts*/
Classes.f_tr__org_patternfly_style_Classes = 'tr';
/**@const {string} @nodts*/
Classes.f_track__org_patternfly_style_Classes = 'track';
/**@const {string} @nodts*/
Classes.f_truncate__org_patternfly_style_Classes = 'truncate';
/**@const {string} @nodts*/
Classes.f_typeahead__org_patternfly_style_Classes = 'typeahead';
/**@const {string} @nodts*/
Classes.f_unread__org_patternfly_style_Classes = 'unread';
/**@const {string} @nodts*/
Classes.f_utilities__org_patternfly_style_Classes = 'utilities';
/**@const {string} @nodts*/
Classes.f_value__org_patternfly_style_Classes = 'value';
/**@const {string} @nodts*/
Classes.f_vertical__org_patternfly_style_Classes = 'vertical';
/**@const {string} @nodts*/
Classes.f_warning__org_patternfly_style_Classes = 'warning';
/**@const {string} @nodts*/
Classes.f_widthAuto__org_patternfly_style_Classes = 'width-auto';
/**@const {string} @nodts*/
Classes.f_wizard__org_patternfly_style_Classes = 'wizard';
/**@const {string} @nodts*/
Classes.f_wrap__org_patternfly_style_Classes = 'wrap';
Classes.$markImplementor(/**@type {Function}*/ (Classes));
$Util.$setClassMetadataForInterface(Classes, 'org.patternfly.style.Classes');

exports = Classes;

//# sourceMappingURL=Classes.js.map
