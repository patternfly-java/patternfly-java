goog.module('org.patternfly.component.list.List');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.list.ListItem');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Bordered');
goog.require('org.patternfly.style.Modifiers.Inline');
goog.require('org.patternfly.style.Modifiers.Plain');
goog.require('org.patternfly.style.Size');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const List = goog.require('org.patternfly.component.list.List$impl');
exports = List;
