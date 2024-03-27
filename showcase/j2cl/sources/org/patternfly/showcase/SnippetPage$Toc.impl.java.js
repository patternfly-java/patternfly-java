goog.module('org.patternfly.showcase.SnippetPage.Toc$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');

/**
 * @final
 */
class Toc extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
  /**@type {?string} @nodts*/
  this.f_id__org_patternfly_showcase_SnippetPage_Toc;
  /**@type {?string} @nodts*/
  this.f_text__org_patternfly_showcase_SnippetPage_Toc;
  /**@type {List<Toc>} @nodts*/
  this.f_children__org_patternfly_showcase_SnippetPage_Toc;
 }
 /** @nodts @return {!Toc} */
 static $create__java_lang_String__java_lang_String(/** ?string */ id, /** ?string */ text) {
  Toc.$clinit();
  let $instance = new Toc();
  $instance.$ctor__org_patternfly_showcase_SnippetPage_Toc__java_lang_String__java_lang_String__void(id, text);
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_SnippetPage_Toc__java_lang_String__java_lang_String__void(/** ?string */ id, /** ?string */ text) {
  this.$ctor__java_lang_Object__void();
  this.f_id__org_patternfly_showcase_SnippetPage_Toc = id;
  this.f_text__org_patternfly_showcase_SnippetPage_Toc = text;
  this.f_children__org_patternfly_showcase_SnippetPage_Toc = /**@type {!ArrayList<Toc>}*/ (ArrayList.$create__());
 }
 /** @nodts */
 m_add__java_lang_String__java_lang_String__void_$pp_org_patternfly_showcase(/** ?string */ id, /** ?string */ text) {
  this.f_children__org_patternfly_showcase_SnippetPage_Toc.add(Toc.$create__java_lang_String__java_lang_String(id, text));
 }
 /** @nodts */
 static $clinit() {
  Toc.$clinit = () =>{};
  Toc.$loadModules();
  j_l_Object.$clinit();
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Toc;
 }
 
 /** @nodts */
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
 }
}
/**@const {string} @nodts*/
Toc.f_EXAMPLES__org_patternfly_showcase_SnippetPage_Toc = 'examples';
/**@const {string} @nodts*/
Toc.f_API_DOCS__org_patternfly_showcase_SnippetPage_Toc = 'api-docs';
$Util.$setClassMetadata(Toc, 'org.patternfly.showcase.SnippetPage$Toc');

exports = Toc;

//# sourceMappingURL=SnippetPage$Toc.js.map
