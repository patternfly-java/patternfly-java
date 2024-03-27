goog.module('org.jboss.elemento.BodyObserver$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MutationObserverInit_$Overlay = goog.forwardDeclare('elemental2.dom.MutationObserverInit.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ElementObserver = goog.forwardDeclare('org.jboss.elemento.BodyObserver.ElementObserver$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @final
 */
class BodyObserver extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts */
 static m_startObserving__void() {
  let mutationObserver = new MutationObserver((/** Array<MutationRecord> */ mutationRecords, /** MutationObserver */ observer) =>{
   let records = /**@type {Array<MutationRecord>}*/ (Js.m_uncheckedCast__java_lang_Object__java_lang_Object(mutationRecords));
   for (let $array = records, $index = 0; $index < $array.length; $index++) {
    let record = $array[$index];
    {
     if (record.removedNodes.length != 0) {
      BodyObserver.m_onElementsRemoved__elemental2_dom_MutationRecord__void(record);
     }
     if (record.addedNodes.length != 0) {
      BodyObserver.m_onElementsAppended__elemental2_dom_MutationRecord__void(record);
     }
    }
   }
   return null;
  });
  let mutationObserverInit = MutationObserverInit_$Overlay.m_create__elemental2_dom_MutationObserverInit();
  mutationObserverInit.childList = true;
  mutationObserverInit.subtree = true;
  if ($Equality.$same(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, null)) {
   goog.global.console.error('Cannot start observing elements. Document is not ready yet!');
  } else {
   mutationObserver.observe(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, mutationObserverInit);
   BodyObserver.f_ready__org_jboss_elemento_BodyObserver_ = true;
  }
 }
 /** @nodts */
 static m_onElementsAppended__elemental2_dom_MutationRecord__void(/** MutationRecord */ record) {
  let elements = /**@type {List<HTMLElement>}*/ ($Casts.$to(/**@type {Stream<HTMLElement>}*/ (/**@type {Stream<Node>}*/ (Elements.m_stream__jsinterop_base_JsArrayLike__java_util_stream_Stream(record.addedNodes)).m_filter__java_util_function_Predicate__java_util_stream_Stream(/**@type {Predicate<Node>}*/ (Elements.m_htmlElements__java_util_function_Predicate())).m_map__java_util_function_Function__java_util_stream_Stream(/**@type {j_u_function_Function<Node, HTMLElement>}*/ (Elements.m_asHtmlElement__java_util_function_Function()))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<HTMLElement, *, List<HTMLElement>>}*/ (Collectors.m_toList__java_util_stream_Collector())), List));
  if (!elements.isEmpty()) {
   for (let iterator = BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_.m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean(); ) {
    let elementObserver = /**@type {ElementObserver}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ElementObserver));
    if ($Equality.$same(elementObserver.f_observedElement__org_jboss_elemento_BodyObserver_ElementObserver_, null)) {
     iterator.m_remove__void();
    } else {
     if (elements.contains(elementObserver.f_observedElement__org_jboss_elemento_BodyObserver_ElementObserver_) || BodyObserver.m_isChildOfObservedElement__java_util_List__java_lang_String__java_lang_String__boolean(elements, BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_, elementObserver.f_id__org_jboss_elemento_BodyObserver_ElementObserver_)) {
      elementObserver.f_callback__org_jboss_elemento_BodyObserver_ElementObserver_.m_onObserved__elemental2_dom_MutationRecord__void(record);
      elementObserver.f_observedElement__org_jboss_elemento_BodyObserver_ElementObserver_.removeAttribute(BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_);
      iterator.m_remove__void();
     }
    }
   }
  }
 }
 /** @nodts */
 static m_onElementsRemoved__elemental2_dom_MutationRecord__void(/** MutationRecord */ record) {
  let elements = /**@type {List<HTMLElement>}*/ ($Casts.$to(/**@type {Stream<HTMLElement>}*/ (/**@type {Stream<Node>}*/ (Elements.m_stream__jsinterop_base_JsArrayLike__java_util_stream_Stream(record.removedNodes)).m_filter__java_util_function_Predicate__java_util_stream_Stream(/**@type {Predicate<Node>}*/ (Elements.m_htmlElements__java_util_function_Predicate())).m_map__java_util_function_Function__java_util_stream_Stream(/**@type {j_u_function_Function<Node, HTMLElement>}*/ (Elements.m_asHtmlElement__java_util_function_Function()))).m_collect__java_util_stream_Collector__java_lang_Object(/**@type {Collector<HTMLElement, *, List<HTMLElement>>}*/ (Collectors.m_toList__java_util_stream_Collector())), List));
  if (!elements.isEmpty()) {
   for (let iterator = BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_.m_iterator__java_util_Iterator(); iterator.m_hasNext__boolean(); ) {
    let elementObserver = /**@type {ElementObserver}*/ ($Casts.$to(iterator.m_next__java_lang_Object(), ElementObserver));
    if ($Equality.$same(elementObserver.f_observedElement__org_jboss_elemento_BodyObserver_ElementObserver_, null)) {
     iterator.m_remove__void();
    } else {
     if (elements.contains(elementObserver.f_observedElement__org_jboss_elemento_BodyObserver_ElementObserver_) || BodyObserver.m_isChildOfObservedElement__java_util_List__java_lang_String__java_lang_String__boolean(elements, BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_, elementObserver.f_id__org_jboss_elemento_BodyObserver_ElementObserver_)) {
      elementObserver.f_callback__org_jboss_elemento_BodyObserver_ElementObserver_.m_onObserved__elemental2_dom_MutationRecord__void(record);
      elementObserver.f_observedElement__org_jboss_elemento_BodyObserver_ElementObserver_.removeAttribute(BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_);
      iterator.m_remove__void();
     }
    }
   }
  }
 }
 /** @nodts @return {boolean} */
 static m_isChildOfObservedElement__java_util_List__java_lang_String__java_lang_String__boolean(/** List<HTMLElement> */ elements, /** ?string */ attribute, /** ?string */ attachId) {
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__java_lang_Object(), HTMLElement_$Overlay));
   {
    if (!$Equality.$same(element.querySelector('[' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(attribute) + '=\'' + j_l_String.m_valueOf__java_lang_Object__java_lang_String(attachId) + '\']'), null)) {
     return true;
    }
   }
  }
  return false;
 }
 /** @nodts */
 static m_addAttachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/** HTMLElement */ element, /** ObserverCallback */ callback) {
  BodyObserver.$clinit();
  if (!BodyObserver.f_ready__org_jboss_elemento_BodyObserver_) {
   BodyObserver.m_startObserving__void();
  }
  BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_.add(BodyObserver.m_createObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__java_lang_String__org_jboss_elemento_BodyObserver_ElementObserver(element, callback, BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_));
 }
 /** @nodts */
 static m_removeAttachObserver__elemental2_dom_HTMLElement__void(/** HTMLElement */ element) {
  BodyObserver.$clinit();
  element.removeAttribute(BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_);
 }
 /** @nodts */
 static m_addDetachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__void(/** HTMLElement */ element, /** ObserverCallback */ callback) {
  BodyObserver.$clinit();
  if (!BodyObserver.f_ready__org_jboss_elemento_BodyObserver_) {
   BodyObserver.m_startObserving__void();
  }
  BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_.add(BodyObserver.m_createObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__java_lang_String__org_jboss_elemento_BodyObserver_ElementObserver(element, callback, BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_));
 }
 /** @nodts */
 static m_removeDetachObserver__elemental2_dom_HTMLElement__void(/** HTMLElement */ element) {
  BodyObserver.$clinit();
  element.removeAttribute(BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_);
 }
 /** @nodts @return {ElementObserver} */
 static m_createObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__java_lang_String__org_jboss_elemento_BodyObserver_ElementObserver(/** HTMLElement */ element, /** ObserverCallback */ callback, /** ?string */ attribute) {
  let id = element.getAttribute(attribute);
  if ($Equality.$same(id, null)) {
   id = Id.m_unique__java_lang_String();
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__void(element, attribute, id);
  }
  return ElementObserver.$create__java_lang_String__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(id, element, callback);
 }
 /** @nodts @return {!BodyObserver} */
 static $create__() {
  let $instance = new BodyObserver();
  $instance.$ctor__org_jboss_elemento_BodyObserver__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_BodyObserver__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts */
 static $clinit() {
  BodyObserver.$clinit = () =>{};
  BodyObserver.$loadModules();
  j_l_Object.$clinit();
  BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_ = /**@type {!ArrayList<ElementObserver>}*/ (ArrayList.$create__());
  BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_ = /**@type {!ArrayList<ElementObserver>}*/ (ArrayList.$create__());
  BodyObserver.f_ready__org_jboss_elemento_BodyObserver_ = false;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BodyObserver;
 }
 
 /** @nodts */
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  MutationObserverInit_$Overlay = goog.module.get('elemental2.dom.MutationObserverInit.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  List = goog.module.get('java.util.List$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  ElementObserver = goog.module.get('org.jboss.elemento.BodyObserver.ElementObserver$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
/**@const {string} @nodts*/
BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_ = 'on-attach-uid';
/**@const {string} @nodts*/
BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_ = 'on-detach-uid';
/**@type {List<ElementObserver>} @nodts*/
BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_;
/**@type {List<ElementObserver>} @nodts*/
BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_;
/**@type {boolean} @nodts*/
BodyObserver.f_ready__org_jboss_elemento_BodyObserver_ = false;
$Util.$setClassMetadata(BodyObserver, 'org.jboss.elemento.BodyObserver');

exports = BodyObserver;

//# sourceMappingURL=BodyObserver.js.map
