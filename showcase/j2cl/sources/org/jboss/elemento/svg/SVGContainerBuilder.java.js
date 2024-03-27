goog.module('org.jboss.elemento.svg.SVGContainerBuilder');

goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventTarget.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.util.Objects');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.ClassList');
goog.require('org.jboss.elemento.Container');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.Finder');
goog.require('org.jboss.elemento.HasElement');
goog.require('org.jboss.elemento.IsElement');
goog.require('org.jboss.elemento.svg.HasSVGElement');
goog.require('org.jboss.elemento.svg.SVGElement.$Overlay');
goog.require('vmbootstrap.Casts');

const SVGContainerBuilder = goog.require('org.jboss.elemento.svg.SVGContainerBuilder$impl');
exports = SVGContainerBuilder;
