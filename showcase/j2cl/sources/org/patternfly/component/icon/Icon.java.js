goog.module('org.patternfly.component.icon.Icon');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.component.WithProgress');
goog.require('org.patternfly.component.spinner.Spinner');
goog.require('org.patternfly.icon.PredefinedIcon');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Inline');
goog.require('org.patternfly.style.Size');
goog.require('org.patternfly.style.Status');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Icon = goog.require('org.patternfly.component.icon.Icon$impl');
exports = Icon;
