goog.module('org.patternfly.component.page.PageSection$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Container = goog.require('org.jboss.elemento.Container$impl');
const Finder = goog.require('org.jboss.elemento.Finder$impl');
const HasElement = goog.require('org.jboss.elemento.HasElement$impl');
const HasHTMLElement = goog.require('org.jboss.elemento.HasHTMLElement$impl');

/**
 * @interface
 * @template E, P
 * @extends {HasElement<E, P>}
 * @extends {HasHTMLElement<E, P>}
 * @extends {Finder<E>}
 * @extends {Container<E, P>}
 */
class PageSection {
 /** @nodts */
 static $clinit() {
  PageSection.$clinit = () =>{};
  PageSection.$loadModules();
  HasElement.$clinit();
  HasHTMLElement.$clinit();
  Finder.$clinit();
  Container.$clinit();
 }
 
 static $markImplementor(/** Function */ ctor) {
  HasElement.$markImplementor(ctor);
  HasHTMLElement.$markImplementor(ctor);
  Finder.$markImplementor(ctor);
  Container.$markImplementor(ctor);
  ctor.prototype.$implements__org_patternfly_component_page_PageSection = true;
 }
 /** @nodts @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_patternfly_component_page_PageSection;
 }
 
 /** @nodts */
 static $loadModules() {}
}
PageSection.$markImplementor(/**@type {Function}*/ (PageSection));
$Util.$setClassMetadataForInterface(PageSection, 'org.patternfly.component.page.PageSection');

exports = PageSection;

//# sourceMappingURL=PageSection.js.map
