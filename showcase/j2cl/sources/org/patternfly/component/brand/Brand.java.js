goog.module('org.patternfly.component.brand.Brand');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.HTMLImageElement.$Overlay');
goog.require('elemental2.dom.HTMLPictureElement.$Overlay');
goog.require('elemental2.dom.HTMLSourceElement.$Overlay');
goog.require('java.lang.String');
goog.require('java.util.function.Consumer');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.Elements');
goog.require('org.jboss.elemento.HTMLElementBuilder');
goog.require('org.patternfly.component.BaseComponent');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.core.Logger');
goog.require('org.patternfly.style.Breakpoints');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Variable');
goog.require('org.patternfly.style.Variables');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Brand = goog.require('org.patternfly.component.brand.Brand$impl');
exports = Brand;
