goog.module('org.patternfly.component.truncate.Truncate');

goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.Objects');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtmlBuilder');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponentFlat');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.WithText');
goog.require('org.patternfly.component.tooltip.Tooltip');
goog.require('org.patternfly.component.truncate.TruncatePosition');
goog.require('org.patternfly.core.ObservableValue');
goog.require('org.patternfly.core.ObservableValue.Subscriber');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Truncate = goog.require('org.patternfly.component.truncate.Truncate$impl');
exports = Truncate;
