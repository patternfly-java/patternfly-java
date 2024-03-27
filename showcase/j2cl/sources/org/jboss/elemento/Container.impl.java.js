goog.module('org.jboss.elemento.Container$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let Supplier = goog.forwardDeclare('java.util.function.Supplier$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TypedBuilder<E, B>}
 * @extends {IsElement<E>}
 */
class Container {
 /** @abstract @nodts @return {B} */
 m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Node */ node) {}
 /** @abstract @nodts @return {B} */
 m_add__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** IsElement<?> */ element) {}
 /** @abstract @nodts @return {B} */
 m_add__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Node> */ supplier) {}
 /** @abstract @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** Array<Node> */ nodes) {}
 /** @abstract @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** Array<Element> */ elements) {}
 /** @abstract @nodts @return {B} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** Array<HTMLElement> */ elements) {}
 /** @abstract @nodts @return {B} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** Array<IsElement<?>> */ elements) {}
 /** @abstract @nodts @return {B} */
 m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** Iterable<?> */ elements) {}
 /** @abstract @nodts @return {B} */
 m_addAll__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** Supplier<Iterable<?>> */ supplier) {}
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_Container__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** !Container<E, B> */ $thisArg, /** Node */ node) {
  Container.$clinit();
  /**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element()).appendChild(node);
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_Container__org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** !Container<E, B> */ $thisArg, /** IsElement<?> */ element) {
  Container.$clinit();
  if (!$Equality.$same(element, null)) {
   return $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_Container__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** !Container<E, B> */ $thisArg, /** Supplier<Node> */ supplier) {
  Container.$clinit();
  /**@type {!Node}*/ ($thisArg.m_element__elemental2_dom_Element()).appendChild(/**@type {Node}*/ ($Casts.$to(supplier.m_get__java_lang_Object(), Node_$Overlay)));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/** !Container<E, B> */ $thisArg, /** Array<Node> */ nodes) {
  Container.$clinit();
  for (let $array = nodes, $index = 0; $index < $array.length; $index++) {
   let node = $array[$index];
   {
    $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(node);
   }
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_Element__org_jboss_elemento_TypedBuilder(/** !Container<E, B> */ $thisArg, /** Array<Element> */ elements) {
  Container.$clinit();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
   }
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_Container__arrayOf_elemental2_dom_HTMLElement__org_jboss_elemento_TypedBuilder(/** !Container<E, B> */ $thisArg, /** Array<HTMLElement> */ elements) {
  Container.$clinit();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(element);
   }
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_Container__arrayOf_org_jboss_elemento_IsElement__org_jboss_elemento_TypedBuilder(/** !Container<E, B> */ $thisArg, /** Array<IsElement<?>> */ elements) {
  Container.$clinit();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   {
    if (!$Equality.$same(element, null)) {
     $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ (element.m_element__elemental2_dom_Element()));
    }
   }
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_Container__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/** !Container<E, B> */ $thisArg, /** Iterable<?> */ elements) {
  Container.$clinit();
  for (let $iterator = elements.m_iterator__java_util_Iterator(); $iterator.m_hasNext__boolean(); ) {
   let element = $iterator.m_next__java_lang_Object();
   {
    if (Node_$Overlay.$isInstance(element)) {
     $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {Node}*/ ($Casts.$to(element, Node_$Overlay)));
    } else if (IsElement.$isInstance(element)) {
     $thisArg.m_add__elemental2_dom_Node__org_jboss_elemento_TypedBuilder(/**@type {IsElement}*/ ($Casts.$to(element, IsElement)).m_element__elemental2_dom_Element());
    }
   }
  }
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_Container__java_util_function_Supplier__org_jboss_elemento_TypedBuilder(/** !Container<E, B> */ $thisArg, /** Supplier<Iterable<?>> */ supplier) {
  Container.$clinit();
  $thisArg.m_addAll__java_lang_Iterable__org_jboss_elemento_TypedBuilder(/**@type {Iterable<*>}*/ ($Casts.$to(supplier.m_get__java_lang_Object(), Iterable)));
  return $thisArg.m_that__org_jboss_elemento_TypedBuilder();
 }
 /** @nodts */
 static $clinit() {
  Container.$clinit = () =>{};
  Container.$loadModules();
 }
 
 static $markImplementor(/** Function */ ctor) {
  TypedBuilder.$markImplementor(ctor);
  IsElement.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_Container = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_Container;
 }
 
 /** @nodts */
 static $loadModules() {
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  Iterable = goog.module.get('java.lang.Iterable$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Container.$markImplementor(/**@type {Function}*/ (Container));
$Util.$setClassMetadataForInterface(Container, 'org.jboss.elemento.Container');

exports = Container;

//# sourceMappingURL=Container.js.map
