goog.module('org.patternfly.core.ElementDelegate');

goog.require('elemental2.dom.Document.$Overlay');
goog.require('elemental2.dom.Element.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('elemental2.dom.Node.$Overlay');
goog.require('jsinterop.base.JsArrayLike.$Overlay');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.jboss.elemento.Container');
goog.require('org.jboss.elemento.HasElement');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('vmbootstrap.Casts');

const ElementDelegate = goog.require('org.patternfly.core.ElementDelegate$impl');
exports = ElementDelegate;
