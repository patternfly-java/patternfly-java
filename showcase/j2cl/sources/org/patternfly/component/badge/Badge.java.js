goog.module('org.patternfly.component.badge.Badge');

goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Integer');
goog.require('java.lang.String');
goog.require('java.util.Objects');
goog.require('java.util.function.Function');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.HasValue');
goog.require('org.patternfly.component.WithObservableValue');
goog.require('org.patternfly.core.ObservableValue');
goog.require('org.patternfly.core.ObservableValue.Subscriber');
goog.require('org.patternfly.handler.ChangeHandler');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Badge = goog.require('org.patternfly.component.badge.Badge$impl');
exports = Badge;
