goog.module('org.patternfly.component.help.HelperTextItem');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLDivElement.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLContainerBuilder');
goog.require('org.jboss.elemento.HTMLElementBuilder');
goog.require('org.jboss.elemento.svg.SVGContainerBuilder');
goog.require('org.jboss.elemento.svg.SVGElement.$Overlay');
goog.require('org.patternfly.component.HasValue');
goog.require('org.patternfly.component.IconPosition');
goog.require('org.patternfly.component.ValidationStatus');
goog.require('org.patternfly.component.WithIcon');
goog.require('org.patternfly.component.WithIconAndText');
goog.require('org.patternfly.component.WithText');
goog.require('org.patternfly.component.help.HelperTextSubComponent');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.icon.PredefinedIcon');
goog.require('org.patternfly.style.Classes');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const HelperTextItem = goog.require('org.patternfly.component.help.HelperTextItem$impl');
exports = HelperTextItem;
