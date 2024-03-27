goog.module('org.jboss.elemento.ClassList$impl');

const Iterable = goog.require('java.lang.Iterable$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Arrays = goog.forwardDeclare('java.util.Arrays$impl');
let Iterator = goog.forwardDeclare('java.util.Iterator$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Objects = goog.forwardDeclare('java.util.Objects$impl');
let Spliterator = goog.forwardDeclare('java.util.Spliterator$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @implements {Iterable<?string>}
 */
class ClassList extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {E} @nodts*/
  this.f_element__org_jboss_elemento_ClassList_;
 }
 /** @nodts @template E_1 @return {ClassList<E_1>} */
 static m_classList__elemental2_dom_Element__org_jboss_elemento_ClassList(/** E_1 */ element) {
  ClassList.$clinit();
  return /**@type {!ClassList<E_1>}*/ (ClassList.$create__elemental2_dom_Element(element));
 }
 /** @nodts @template E @return {!ClassList<E>} */
 static $create__elemental2_dom_Element(/** E */ element) {
  ClassList.$clinit();
  let $instance = new ClassList();
  $instance.$ctor__org_jboss_elemento_ClassList__elemental2_dom_Element__void(element);
  return $instance;
 }
 /** @nodts */
 $ctor__org_jboss_elemento_ClassList__elemental2_dom_Element__void(/** E */ element) {
  this.$ctor__java_lang_Object__void();
  this.f_element__org_jboss_elemento_ClassList_ = /**@type {E}*/ ($Casts.$to(Objects.m_requireNonNull__java_lang_Object__java_lang_String__java_lang_Object(element, 'element required'), $Overlay));
 }
 /** @nodts */
 m_add__arrayOf_java_lang_String__void(/** Array<?string> */ classes) {
  for (let $array = this.m_failSafeClasses__arrayOf_java_lang_String__arrayOf_java_lang_String_$p_org_jboss_elemento_ClassList(classes), $index = 0; $index < $array.length; $index++) {
   let cls = $array[$index];
   {
    /**@type {!Element}*/ (this.f_element__org_jboss_elemento_ClassList_).classList.add(cls);
   }
  }
 }
 /** @nodts */
 m_remove__arrayOf_java_lang_String__void(/** Array<?string> */ classes) {
  for (let $array = this.m_failSafeClasses__arrayOf_java_lang_String__arrayOf_java_lang_String_$p_org_jboss_elemento_ClassList(classes), $index = 0; $index < $array.length; $index++) {
   let cls = $array[$index];
   {
    /**@type {!Element}*/ (this.f_element__org_jboss_elemento_ClassList_).classList.remove(cls);
   }
  }
 }
 /** @nodts */
 m_toggle__java_lang_String__void(/** ?string */ classname) {
  if (!$Equality.$same(classname, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(classname)) {
   /**@type {!Element}*/ (this.f_element__org_jboss_elemento_ClassList_).classList.toggle(classname);
  }
 }
 /** @nodts */
 m_toggle__java_lang_String__boolean__void(/** ?string */ classname, /** boolean */ force) {
  if (!$Equality.$same(classname, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(classname)) {
   /**@type {!Element}*/ (this.f_element__org_jboss_elemento_ClassList_).classList.toggle(classname, force);
  }
 }
 /** @nodts */
 m_replace__java_lang_String__java_lang_String__void(/** ?string */ oldClassname, /** ?string */ newClassname) {
  if (!$Equality.$same(oldClassname, null) && !$Equality.$same(newClassname, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(oldClassname) && !j_l_String.m_isEmpty__java_lang_String__boolean(newClassname)) {
   /**@type {!Element}*/ (this.f_element__org_jboss_elemento_ClassList_).classList.replace(oldClassname, newClassname);
  }
 }
 /** @override @nodts @return {Iterator<?string>} */
 m_iterator__java_util_Iterator() {
  return /**@type {List<?string>}*/ (JsArrayLike_$Overlay.m_asList__$devirt__jsinterop_base_JsArrayLike__java_util_List(/**@type {!Element}*/ (this.f_element__org_jboss_elemento_ClassList_).classList)).m_iterator__java_util_Iterator();
 }
 /** @nodts @return {number} */
 m_length__int() {
  return /**@type {!Element}*/ (this.f_element__org_jboss_elemento_ClassList_).classList.length;
 }
 /** @nodts @return {Array<?string>} */
 m_failSafeClasses__arrayOf_java_lang_String__arrayOf_java_lang_String_$p_org_jboss_elemento_ClassList(/** Array<?string> */ classes) {
  if (!$Equality.$same(classes, null)) {
   let failSafeClasses = /**@type {!ArrayList<?string>}*/ (ArrayList.$create__());
   for (let $array = classes, $index = 0; $index < $array.length; $index++) {
    let c = $array[$index];
    {
     if (!$Equality.$same(c, null) && !j_l_String.m_isEmpty__java_lang_String__boolean(c)) {
      if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence__boolean(c, ' ')) {
       failSafeClasses.addAll(/**@type {List<?string>}*/ (Arrays.m_asList__arrayOf_java_lang_Object__java_util_List(j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String(c, ' '))));
      } else {
       failSafeClasses.add(c);
      }
     }
    }
   }
   return /**@type {Array<?string>}*/ ($Arrays.$castTo(failSafeClasses.m_toArray__arrayOf_java_lang_Object__arrayOf_java_lang_Object(/**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String))), j_l_String, 1));
  }
  return /**@type {!Array<?string>}*/ ($Arrays.$create([0], j_l_String));
 }
 //Default method forwarding stub.
 /** @override @nodts */
 m_forEach__java_util_function_Consumer__void(/** Consumer<?> */ arg0) {
  Iterable.m_forEach__$default__java_lang_Iterable__java_util_function_Consumer__void(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @nodts @return {Spliterator<?string>} */
 m_spliterator__java_util_Spliterator() {
  return /**@type {Spliterator<?string>}*/ (Iterable.m_spliterator__$default__java_lang_Iterable__java_util_Spliterator(this));
 }
 /** @nodts */
 static $clinit() {
  ClassList.$clinit = () =>{};
  ClassList.$loadModules();
  j_l_Object.$clinit();
  Iterable.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ClassList;
 }
 
 /** @nodts */
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Arrays = goog.module.get('java.util.Arrays$impl');
  Objects = goog.module.get('java.util.Objects$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
}
Iterable.$markImplementor(ClassList);
$Util.$setClassMetadata(ClassList, 'org.jboss.elemento.ClassList');

exports = ClassList;

//# sourceMappingURL=ClassList.js.map
