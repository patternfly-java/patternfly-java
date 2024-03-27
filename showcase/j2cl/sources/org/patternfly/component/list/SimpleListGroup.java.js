goog.module('org.patternfly.component.list.SimpleListGroup');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLHeadingElement.$Overlay');
goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('elemental2.dom.HTMLUListElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.Id');
goog.require('org.patternfly.component.WithText');
goog.require('org.patternfly.component.list.SimpleListItem');
goog.require('org.patternfly.component.list.SimpleListSubComponent');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.core.ElementDelegate');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const SimpleListGroup = goog.require('org.patternfly.component.list.SimpleListGroup$impl');
exports = SimpleListGroup;
