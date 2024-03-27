goog.module('org.patternfly.component.alert.AlertGroup');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLLIElement.$Overlay');
goog.require('elemental2.dom.HTMLUListElement.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.String');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.alert.Alert');
goog.require('org.patternfly.component.alert.AlertGroupType');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const AlertGroup = goog.require('org.patternfly.component.alert.AlertGroup$impl');
exports = AlertGroup;
