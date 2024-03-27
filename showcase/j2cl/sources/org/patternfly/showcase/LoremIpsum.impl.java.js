goog.module('org.patternfly.showcase.LoremIpsum$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let Random = goog.forwardDeclare('java.util.Random$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');

/**
 * @final
 */
class LoremIpsum extends j_l_Object {
 /** @protected @nodts */
 constructor() {
  super();
 }
 /** @nodts @return {!LoremIpsum} */
 static $create__() {
  let $instance = new LoremIpsum();
  $instance.$ctor__org_patternfly_showcase_LoremIpsum__void();
  return $instance;
 }
 /** @nodts */
 $ctor__org_patternfly_showcase_LoremIpsum__void() {
  this.$ctor__java_lang_Object__void();
 }
 /** @nodts @return {?string} */
 static m_word__java_lang_String() {
  LoremIpsum.$clinit();
  return LoremIpsum.m_cycle__int__arrayOf_java_lang_String__java_lang_String(1, LoremIpsum.f_WORDS__org_patternfly_showcase_LoremIpsum_);
 }
 /** @nodts @return {?string} */
 static m_words__java_lang_String() {
  LoremIpsum.$clinit();
  return LoremIpsum.m_cycle__int__arrayOf_java_lang_String__java_lang_String(10, LoremIpsum.f_WORDS__org_patternfly_showcase_LoremIpsum_);
 }
 /** @nodts @return {?string} */
 static m_words__int__java_lang_String(/** number */ amount) {
  LoremIpsum.$clinit();
  return LoremIpsum.m_cycle__int__arrayOf_java_lang_String__java_lang_String(amount, LoremIpsum.f_WORDS__org_patternfly_showcase_LoremIpsum_);
 }
 /** @nodts @return {?string} */
 static m_paragraph__java_lang_String() {
  LoremIpsum.$clinit();
  return LoremIpsum.f_PARAGRAPHS__org_patternfly_showcase_LoremIpsum_[Random.$create__().m_nextInt__int__int(LoremIpsum.f_PARAGRAPHS__org_patternfly_showcase_LoremIpsum_.length)];
 }
 /** @nodts @return {?string} */
 static m_paragraphs__int__java_lang_String(/** number */ amount) {
  LoremIpsum.$clinit();
  return LoremIpsum.m_cycle__int__arrayOf_java_lang_String__java_lang_String(amount, LoremIpsum.f_PARAGRAPHS__org_patternfly_showcase_LoremIpsum_);
 }
 /** @nodts @return {?string} */
 static m_cycle__int__arrayOf_java_lang_String__java_lang_String(/** number */ amount, /** Array<?string> */ source) {
  let builder = StringBuilder.$create__();
  let index = Random.$create__().m_nextInt__int__int(source.length);
  for (let i = 0; i < amount; i = i + 1 | 0) {
   if (index == source.length) {
    index = 0;
   }
   builder.m_append__java_lang_String__java_lang_StringBuilder(source[index]);
   if (i < (amount - 1 | 0)) {
    builder.m_append__char__java_lang_StringBuilder(32 /* ' ' */);
   }
   index = index + 1 | 0;
  }
  return builder.toString();
 }
 /** @nodts */
 static $clinit() {
  LoremIpsum.$clinit = () =>{};
  LoremIpsum.$loadModules();
  j_l_Object.$clinit();
  LoremIpsum.f_PARAGRAPHS__org_patternfly_showcase_LoremIpsum_ = /**@type {!Array<?string>}*/ ($Arrays.$init(['Aliquam aliquet blandit erat nec hendrerit.', 'At vero eos et accusam et justo duo dolores et ea rebum.', 'Atque ab isto capite fluere necesse est omnem rationem bonorum et malorum.', 'Cras bibendum nisi quis turpis aliquet tempus.', 'Duis tempor maximus nulla at varius.', 'Duis volutpat rhoncus massa, quis convallis nisl.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Nam velit diam, condimentum dapibus lobortis vitae, suscipit sodales eros.', 'Nulla a tortor posuere, tempor turpis non, lacinia velit.', 'Nulla pellentesque quam ut faucibus faucibus.', 'Sed ac fringilla eros.', 'Ut ut volutpat nisi.', 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.', 'Vivamus tempus lacus ac semper luctus.', 'Vivamus varius nisl in sapien sagittis, vel condimentum lectus rutrum.'], j_l_String));
  LoremIpsum.f_WORDS__org_patternfly_showcase_LoremIpsum_ = j_l_String.m_split__java_lang_String__java_lang_String__arrayOf_java_lang_String('lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren no sea takimata sanctus est lorem ipsum dolor sit amet lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren no sea takimata sanctus est lorem ipsum dolor sit amet', '\\s');
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LoremIpsum;
 }
 
 /** @nodts */
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  Random = goog.module.get('java.util.Random$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
 }
}
/**@type {Array<?string>} @nodts*/
LoremIpsum.f_PARAGRAPHS__org_patternfly_showcase_LoremIpsum_;
/**@type {Array<?string>} @nodts*/
LoremIpsum.f_WORDS__org_patternfly_showcase_LoremIpsum_;
$Util.$setClassMetadata(LoremIpsum, 'org.patternfly.showcase.LoremIpsum');

exports = LoremIpsum;

//# sourceMappingURL=LoremIpsum.js.map
