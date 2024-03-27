goog.module('org.patternfly.component.SubComponentFlat');

goog.require('elemental2.dom.Event.$Overlay');
goog.require('elemental2.dom.EventTarget.$Overlay');
goog.require('elemental2.dom.HTMLElement.$Overlay');
goog.require('java.lang.Iterable');
goog.require('java.lang.Object');
goog.require('java.lang.String');
goog.require('java.util.Objects');
goog.require('java.util.function.Consumer');
goog.require('java.util.function.Supplier');
goog.require('nativebootstrap.Util');
goog.require('org.gwtproject.safehtml.shared.SafeHtml');
goog.require('org.jboss.elemento.By');
goog.require('org.jboss.elemento.ClassList');
goog.require('org.jboss.elemento.EventType');
goog.require('org.jboss.elemento.Finder');
goog.require('org.jboss.elemento.HasElement');
goog.require('org.jboss.elemento.HasHTMLElement');
goog.require('org.jboss.elemento.TypedBuilder');
goog.require('org.patternfly.component.ComponentType');
goog.require('vmbootstrap.Casts');

const SubComponentFlat = goog.require('org.patternfly.component.SubComponentFlat$impl');
exports = SubComponentFlat;
