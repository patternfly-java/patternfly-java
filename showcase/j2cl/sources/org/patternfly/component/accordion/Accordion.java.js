goog.module('org.patternfly.component.accordion.Accordion');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.MutationRecord.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.LinkedHashMap');
goog.require('java.util.Map');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Attachable');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.accordion.AccordionItem');
goog.require('org.patternfly.handler.ToggleHandler');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Bordered');
goog.require('org.patternfly.style.Size');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Accordion = goog.require('org.patternfly.component.accordion.Accordion$impl');
exports = Accordion;
