goog.module('org.patternfly.showcase.component.ProgressComponent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const SnippetPage = goog.require('org.patternfly.showcase.SnippetPage$impl');

let HTMLDivElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDivElement.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HTMLContainerBuilder = goog.forwardDeclare('org.jboss.elemento.HTMLContainerBuilder$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let Radio = goog.forwardDeclare('org.patternfly.component.form.Radio$impl');
let HelperText = goog.forwardDeclare('org.patternfly.component.help.HelperText$impl');
let DescriptionList = goog.forwardDeclare('org.patternfly.component.list.DescriptionList$impl');
let DescriptionListDescription = goog.forwardDeclare('org.patternfly.component.list.DescriptionListDescription$impl');
let DescriptionListGroup = goog.forwardDeclare('org.patternfly.component.list.DescriptionListGroup$impl');
let DescriptionListTerm = goog.forwardDeclare('org.patternfly.component.list.DescriptionListTerm$impl');
let MeasureLocation = goog.forwardDeclare('org.patternfly.component.progress.MeasureLocation$impl');
let Progress = goog.forwardDeclare('org.patternfly.component.progress.Progress$impl');
let ProgressLabel = goog.forwardDeclare('org.patternfly.component.progress.ProgressLabel$impl');
let Tuple = goog.forwardDeclare('org.patternfly.core.Tuple$impl');
let Tuples = goog.forwardDeclare('org.patternfly.core.Tuples$impl');
let ChangeHandler = goog.forwardDeclare('org.patternfly.handler.ChangeHandler$impl');
let Type = goog.forwardDeclare('org.patternfly.showcase.ApiDoc.Type$impl');
let Code = goog.forwardDeclare('org.patternfly.showcase.Code$impl');
let Data = goog.forwardDeclare('org.patternfly.showcase.Data$impl');
let LoremIpsum = goog.forwardDeclare('org.patternfly.showcase.LoremIpsum$impl');
let Snippet = goog.forwardDeclare('org.patternfly.showcase.Snippet$impl');
let Component_$Overlay = goog.forwardDeclare('org.patternfly.showcase.component.Component.$Overlay$impl');
let Size = goog.forwardDeclare('org.patternfly.style.Size$impl');
let Status = goog.forwardDeclare('org.patternfly.style.Status$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ProgressComponent extends SnippetPage {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!ProgressComponent} */
 static $create__() {
  ProgressComponent.$clinit();
  let $instance = new ProgressComponent();
  $instance.$ctor__org_patternfly_showcase_component_ProgressComponent__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_component_ProgressComponent__void() {
  this.$ctor__org_patternfly_showcase_SnippetPage__org_patternfly_showcase_component_Component__void(/**@type {Object}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Data.f_components__org_patternfly_showcase_Data, 'progress'), Component_$Overlay)));
  this.m_startExamples__void();
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-basic', 'Basic', Code.m_code__java_lang_String__java_lang_String('progress-basic'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-small', 'Small', Code.m_code__java_lang_String__java_lang_String('progress-small'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_size__org_patternfly_style_Size__org_patternfly_component_progress_Progress(Size.f_sm__org_patternfly_style_Size).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-large', 'Large', Code.m_code__java_lang_String__java_lang_String('progress-large'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_size__org_patternfly_style_Size__org_patternfly_component_progress_Progress(Size.f_lg__org_patternfly_style_Size).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-outside', 'Outside', Code.m_code__java_lang_String__java_lang_String('progress-outside'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_measureLocation__org_patternfly_component_progress_MeasureLocation__org_patternfly_component_progress_Progress(MeasureLocation.f_outside__org_patternfly_component_progress_MeasureLocation).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-inside', 'Inside', Code.m_code__java_lang_String__java_lang_String('progress-inside'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_measureLocation__org_patternfly_component_progress_MeasureLocation__org_patternfly_component_progress_Progress(MeasureLocation.f_inside__org_patternfly_component_progress_MeasureLocation).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-success', 'Success', Code.m_code__java_lang_String__java_lang_String('progress-success'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_status__org_patternfly_style_Status__org_patternfly_component_progress_Progress(Status.f_success__org_patternfly_style_Status).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(100)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-failure', 'Failure', Code.m_code__java_lang_String__java_lang_String('progress-failure'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_status__org_patternfly_style_Status__org_patternfly_component_progress_Progress(Status.f_danger__org_patternfly_style_Status).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-warning', 'Warning', Code.m_code__java_lang_String__java_lang_String('progress-warning'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_status__org_patternfly_style_Status__org_patternfly_component_progress_Progress(Status.f_warning__org_patternfly_style_Status).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(90)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-inside-success', 'Inside success', Code.m_code__java_lang_String__java_lang_String('progress-inside-success'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_status__org_patternfly_style_Status__org_patternfly_component_progress_Progress(Status.f_success__org_patternfly_style_Status).m_measureLocation__org_patternfly_component_progress_MeasureLocation__org_patternfly_component_progress_Progress(MeasureLocation.f_inside__org_patternfly_component_progress_MeasureLocation).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(100)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-outside-failure', 'Outside failure', Code.m_code__java_lang_String__java_lang_String('progress-outside-failure'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_status__org_patternfly_style_Status__org_patternfly_component_progress_Progress(Status.f_danger__org_patternfly_style_Status).m_measureLocation__org_patternfly_component_progress_MeasureLocation__org_patternfly_component_progress_Progress(MeasureLocation.f_outside__org_patternfly_component_progress_MeasureLocation).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-single-line', 'Single line', Code.m_code__java_lang_String__java_lang_String('progress-single-line'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_measureLocation__org_patternfly_component_progress_MeasureLocation__org_patternfly_component_progress_Progress(MeasureLocation.f_outside__org_patternfly_component_progress_MeasureLocation).m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-no-measure', 'Without measure', Code.m_code__java_lang_String__java_lang_String('progress-no-measure'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_measureLocation__org_patternfly_component_progress_MeasureLocation__org_patternfly_component_progress_Progress(MeasureLocation.f_none__org_patternfly_component_progress_MeasureLocation).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-no-measure-failure', 'Failure without measure', Code.m_code__java_lang_String__java_lang_String('progress-no-measure-failure'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_status__org_patternfly_style_Status__org_patternfly_component_progress_Progress(Status.f_danger__org_patternfly_style_Status).m_measureLocation__org_patternfly_component_progress_MeasureLocation__org_patternfly_component_progress_Progress(MeasureLocation.f_none__org_patternfly_component_progress_MeasureLocation).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-finite-step', 'Finite step', Code.m_code__java_lang_String__java_lang_String('progress-finite-step'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_label__org_patternfly_component_progress_ProgressLabel__org_patternfly_component_progress_Progress(ProgressLabel.$adapt((/** number */ min, /** number */ max, /** number */ step, /** number */ value) =>{
    return value + ' of ' + max;
   })).m_range__int__int__org_patternfly_component_progress_Progress(0, 5).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(2)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-step-instruction', 'Progress with step instructions', Code.m_code__java_lang_String__java_lang_String('progress-step-instruction'), Supplier.$adapt(() =>{
   let instructions = /**@type {Tuples<Integer, ?string>}*/ (Tuples.m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(Integer.m_valueOf__int__java_lang_Integer(0), 'Preparing', Integer.m_valueOf__int__java_lang_Integer(1), 'Collecting files', Integer.m_valueOf__int__java_lang_Integer(2), 'Copying files', Integer.m_valueOf__int__java_lang_Integer(3), 'Verifying files', Integer.m_valueOf__int__java_lang_Integer(4), 'Restarting server', Integer.m_valueOf__int__java_lang_Integer(5), 'Cleanup'));
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_label__org_patternfly_component_progress_ProgressLabel__org_patternfly_component_progress_Progress(ProgressLabel.$adapt((/** number */ min_1, /** number */ max_1, /** number */ step_1, /** number */ value_1) =>{
    return 'Step ' + value_1 + ': ' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {?string}*/ ($Casts.$to(instructions.m_value__java_lang_Object__java_lang_Object(Integer.m_valueOf__int__java_lang_Integer(value_1)), j_l_String)));
   })).m_range__int__int__org_patternfly_component_progress_Progress(0, 5).m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(2)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-truncate', 'Truncate', Code.m_code__java_lang_String__java_lang_String('progress-truncate'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_title__java_lang_String__org_patternfly_component_progress_Progress(LoremIpsum.m_words__int__java_lang_String(42)).m_truncate__org_patternfly_component_progress_Progress().m_value__int__org_patternfly_component_progress_Progress(33)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-outer-title', 'Title outside of progress bar', Code.m_code__java_lang_String__java_lang_String('progress-outer-title'), Supplier.$adapt(() =>{
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(DescriptionList.m_descriptionList__org_patternfly_component_list_DescriptionList().m_addGroup__org_patternfly_component_list_DescriptionListGroup__org_patternfly_component_list_DescriptionList(DescriptionListGroup.m_descriptionListGroup__org_patternfly_component_list_DescriptionListGroup().m_addTerm__org_patternfly_component_list_DescriptionListTerm__org_patternfly_component_list_DescriptionListGroup(/**@type {DescriptionListTerm}*/ ($Casts.$to(DescriptionListTerm.m_descriptionListTerm__java_lang_String__org_patternfly_component_list_DescriptionListTerm('Title outside of progress bar').m_id__java_lang_String__org_jboss_elemento_TypedBuilder('title-outside-progress-example-label'), DescriptionListTerm))).m_addDescription__org_patternfly_component_list_DescriptionListDescription__org_patternfly_component_list_DescriptionListGroup(/**@type {DescriptionListDescription}*/ ($Casts.$to(DescriptionListDescription.m_descriptionListDescription__org_patternfly_component_list_DescriptionListDescription().m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Progress.m_progress__org_patternfly_component_progress_Progress().m_ariaLabeledBy__java_lang_String__org_patternfly_component_progress_Progress('title-outside-progress-example-label').m_measureLocation__org_patternfly_component_progress_MeasureLocation__org_patternfly_component_progress_Progress(MeasureLocation.f_outside__org_patternfly_component_progress_MeasureLocation).m_value__int__org_patternfly_component_progress_Progress(33)), DescriptionListDescription))))), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_addSnippet__org_patternfly_showcase_Snippet__void(Snippet.$create__java_lang_String__java_lang_String__java_lang_String__java_util_function_Supplier('progress-helper-text', 'Helper text', Code.m_code__java_lang_String__java_lang_String('progress-helper-text'), Supplier.$adapt(() =>{
   let status = /**@type {Tuples<Status, ?string>}*/ (Tuples.m_tuples__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__java_lang_Object__org_patternfly_core_Tuples(Status.f_info__org_patternfly_style_Status, 'Default variant', Status.f_success__org_patternfly_style_Status, 'Success variant', Status.f_warning__org_patternfly_style_Status, 'Warning variant', Status.f_danger__org_patternfly_style_Status, 'Danger variant'));
   let progress = Progress.m_progress__org_patternfly_component_progress_Progress();
   let helperText = HelperText.m_helperText__java_lang_String__org_patternfly_component_help_HelperText('Default variant is being displayed');
   return /**@type {HTMLDivElement}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(/**@type {HTMLContainerBuilder<HTMLDivElement>}*/ ($Casts.$to(Elements.m_div__org_jboss_elemento_HTMLContainerBuilder().m_run__java_util_function_Consumer__org_jboss_elemento_TypedBuilder(Consumer.$adapt((div) =>{
    let div_1 = /**@type {HTMLContainerBuilder}*/ ($Casts.$to(div, HTMLContainerBuilder));
    for (let $iterator = status.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
     let tuple = /**@type {Tuple<Status, ?string>}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), Tuple));
     {
      div_1.m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Radio.m_radio__java_lang_String__java_lang_String__java_lang_String__org_patternfly_component_form_Radio(Id.m_build__java_lang_String__arrayOf_java_lang_String__java_lang_String('progress-helper-text', /**@type {!Array<?string>}*/ ($Arrays.$init([/**@type {Status}*/ ($Casts.$to(tuple.f_key__org_patternfly_core_Tuple, Status)).name()], j_l_String))), 'progress-helper-text-status', /**@type {?string}*/ ($Casts.$to(tuple.f_value__org_patternfly_core_Tuple, j_l_String))).m_value__boolean__org_patternfly_component_form_Radio($Equality.$same(tuple.f_key__org_patternfly_core_Tuple, Status.f_info__org_patternfly_style_Status)).m_onChange__org_patternfly_handler_ChangeHandler__org_patternfly_component_form_Radio(ChangeHandler.$adapt((/** Event */ event, component, value_2) =>{
       let component_1 = /**@type {Radio}*/ ($Casts.$to(component, Radio));
       let value_3 = /**@type {?boolean}*/ ($Casts.$to(value_2, Boolean));
       progress.m_status__org_patternfly_style_Status__org_patternfly_component_progress_Progress(/**@type {Status}*/ ($Casts.$to(tuple.f_key__org_patternfly_core_Tuple, Status)));
       helperText.m_firstItem__org_patternfly_component_help_HelperTextItem().m_text__java_lang_String__org_patternfly_component_help_HelperTextItem(j_l_String.m_valueOf__java_lang_Object__java_lang_String(/**@type {?string}*/ ($Casts.$to(tuple.f_value__org_patternfly_core_Tuple, j_l_String))) + ' is being displayed');
      })));
     }
    }
   })), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(Elements.m_br__org_jboss_elemento_HTMLElementBuilder()), HTMLContainerBuilder)).m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(progress.m_title__java_lang_String__org_patternfly_component_progress_Progress('Title').m_value__int__org_patternfly_component_progress_Progress(33).m_addHelperText__org_patternfly_component_help_HelperText__org_patternfly_component_progress_Progress(helperText)), HTMLContainerBuilder)).m_element__elemental2_dom_HTMLElement(), HTMLDivElement_$Overlay));
  })));
  this.m_startApiDocs__java_lang_Class__void(Class.$get(Progress));
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(MeasureLocation), Type.f_modifier__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(Progress), Type.f_component__org_patternfly_showcase_ApiDoc_Type);
  this.m_addApiDoc__java_lang_Class__org_patternfly_showcase_ApiDoc_Type__void(Class.$get(ProgressLabel), Type.f_subcomponent__org_patternfly_showcase_ApiDoc_Type);
 }
 /** @nodts */
 static $clinit() {
  ProgressComponent.$clinit = () =>{};
  ProgressComponent.$loadModules();
  SnippetPage.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ProgressComponent;
 }
 
 /** @nodts */
 static $loadModules() {
  HTMLDivElement_$Overlay = goog.module.get('elemental2.dom.HTMLDivElement.$Overlay$impl');
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Class = goog.module.get('java.lang.Class$impl');
  Integer = goog.module.get('java.lang.Integer$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Supplier = goog.module.get('java.util.function.Supplier$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HTMLContainerBuilder = goog.module.get('org.jboss.elemento.HTMLContainerBuilder$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  Radio = goog.module.get('org.patternfly.component.form.Radio$impl');
  HelperText = goog.module.get('org.patternfly.component.help.HelperText$impl');
  DescriptionList = goog.module.get('org.patternfly.component.list.DescriptionList$impl');
  DescriptionListDescription = goog.module.get('org.patternfly.component.list.DescriptionListDescription$impl');
  DescriptionListGroup = goog.module.get('org.patternfly.component.list.DescriptionListGroup$impl');
  DescriptionListTerm = goog.module.get('org.patternfly.component.list.DescriptionListTerm$impl');
  MeasureLocation = goog.module.get('org.patternfly.component.progress.MeasureLocation$impl');
  Progress = goog.module.get('org.patternfly.component.progress.Progress$impl');
  ProgressLabel = goog.module.get('org.patternfly.component.progress.ProgressLabel$impl');
  Tuple = goog.module.get('org.patternfly.core.Tuple$impl');
  Tuples = goog.module.get('org.patternfly.core.Tuples$impl');
  ChangeHandler = goog.module.get('org.patternfly.handler.ChangeHandler$impl');
  Type = goog.module.get('org.patternfly.showcase.ApiDoc.Type$impl');
  Code = goog.module.get('org.patternfly.showcase.Code$impl');
  Data = goog.module.get('org.patternfly.showcase.Data$impl');
  LoremIpsum = goog.module.get('org.patternfly.showcase.LoremIpsum$impl');
  Snippet = goog.module.get('org.patternfly.showcase.Snippet$impl');
  Component_$Overlay = goog.module.get('org.patternfly.showcase.component.Component.$Overlay$impl');
  Size = goog.module.get('org.patternfly.style.Size$impl');
  Status = goog.module.get('org.patternfly.style.Status$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
$Util.$setClassMetadata(ProgressComponent, 'org.patternfly.showcase.component.ProgressComponent');

exports = ProgressComponent;

//# sourceMappingURL=ProgressComponent.js.map
