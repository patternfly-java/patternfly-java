goog.module('org.patternfly.component.spinner.Spinner');

goog.require('java.lang.String');
goog.require('nativebootstrap.Equality');
goog.require('nativebootstrap.Util');
goog.require('org.jboss.elemento.svg.SVG');
goog.require('org.jboss.elemento.svg.SVGCircleElement.$Overlay');
goog.require('org.jboss.elemento.svg.SVGContainerBuilder');
goog.require('org.jboss.elemento.svg.SVGElement.$Overlay');
goog.require('org.patternfly.component.BaseComponentSVG');
goog.require('org.patternfly.component.ComponentType');
goog.require('org.patternfly.core.Aria');
goog.require('org.patternfly.core.Attributes');
goog.require('org.patternfly.style.Classes');
goog.require('org.patternfly.style.Modifiers.Inline');
goog.require('org.patternfly.style.Size');
goog.require('org.patternfly.style.Variable');
goog.require('vmbootstrap.Arrays');
goog.require('vmbootstrap.Casts');

const Spinner = goog.require('org.patternfly.component.spinner.Spinner$impl');
exports = Spinner;
