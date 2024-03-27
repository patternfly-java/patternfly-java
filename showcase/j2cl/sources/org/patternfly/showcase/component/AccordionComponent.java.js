goog.module('org.patternfly.showcase.component.AccordionComponent');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLParagraphElement.$Overlay');
goog.require('java.lang.Class');
goog.require('java.util.function.Supplier');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.IconPosition');
goog.require('org.patternfly.component.accordion.Accordion');
goog.require('org.patternfly.component.accordion.AccordionItem');
goog.require('org.patternfly.component.accordion.AccordionItemBody');
goog.require('org.patternfly.component.button.Button');
goog.require('org.patternfly.icon.IconSets.fas');
goog.require('org.patternfly.showcase.ApiDoc.Type');
goog.require('org.patternfly.showcase.Code');
goog.require('org.patternfly.showcase.Data');
goog.require('org.patternfly.showcase.LoremIpsum');
goog.require('org.patternfly.showcase.Snippet');
goog.require('org.patternfly.showcase.SnippetPage');
goog.require('org.patternfly.showcase.component.Component.$Overlay');
goog.require('vmbootstrap.Casts');

const AccordionComponent = goog.require('org.patternfly.showcase.component.AccordionComponent$impl');
exports = AccordionComponent;
